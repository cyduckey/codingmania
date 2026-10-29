## TeZ Engine:
                    TeZ Source Code
                           │
                           ▼
                         Lexer
                           │
                           ▼
                    Vec<Word> Tokens
                           │
                           ▼
                  ┌─────────────────┐
                  │  Grammar Engine │
                  │                 │
                  │ Reads grammar   │
                  │ rules as data   │
                  └────────┬────────┘
                           │
                  Matches token stream
                           │
                           ▼
                    Successful Parse
                           │
                           ▼
                  AST Construction Layer
                           │
                           ▼
                    Vec<Stmt> / AST
                           │
                           ▼
                      Interpreter


⚬ token.rs (The Vocabulary)
  Defines every valid building block in TeZ (say, STOP, numbers, strings, (, )). It gives your language its dictionary and tracks exact line and column numbers for error reporting.
⚬ lexer.rs (The Reader / Scanner)
  Reads your .tez file character by character. It strips out meaningless whitespace and groups raw text into a clean list of recognized tokens from token.rs.
⚬ ast.rs (The Blueprint)
  Defines the structure of your code's meaning (Expr for values, Stmt for actions like Say). It strips away syntax noise like quotes and parentheses, leaving only pure data structures.
⚬ parser.rs (The Grammar Police & Builder)
  Takes the flat list of tokens from lexer.rs and verifies that they follow TeZ's rules (e.g., checking that say is followed by a valid payload). If correct, it builds the AST nodes defined in ast.rs.
⚬ compiler.rs (The Engine / Executor)
  Walks through the AST nodes built by parser.rs and actually executes them—in this case, translating Stmt::Say into native Rust terminal outputs (println!).
⚬ error.rs (The Diagnostic Reporter)
  Handles error logs. If the lexer or parser hits something invalid, error.rs prints a clean error message pointing directly to the exact line and column in the source code.
⚬ main.rs (The Conductor)
  The CLI entry point. It reads tez hello.tez from your terminal, loads the file from disk, and passes the code sequentially through the pipeline: Lexer \rightarrow Parser \rightarrow Compiler.

TeZ Language
│
├── Syntax
├── Semantics
├── Types
├── Values
├── Operations
├── Control flow
├── Data structures
├── Modules
├── Macros / metaprogramming
├── Memory model
├── Effects
├── Concurrency
├── Runtime
└── Tooling

## Syntactic Parsing: I think this will make dev-works easier to develop, and also a little faster parsing speed.

                    TeZ Source
                        │
                      Lexer
                        │
                   Vec<Word>
                        │
                ┌───────▼───────┐
                │  Main Parser  │
                └───────┬───────┘
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
      Keyword Parser       Function Parser
              │                   │
              └─────────┬─────────┘
                        ▼
                       AST
                        │
                 Interpreter

