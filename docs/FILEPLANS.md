# Structure 
hello.tez
     │
     ▼
Characters
     │
     ▼
Lexer
     │
     ▼
Tokens
     │
     ▼
Parser
     │
     ▼
AST
     │
     ▼
Semantic Analysis   ← YOU'RE ASKING ABOUT THIS
     │
     ▼
Interpreter / Code Generator
     │
     ▼
Machine Code (or execution)

In short:
[Source Text] ➔ 1. lexer.rs ➔ 2. parser.rs ➔ 3. ast.rs ➔ 4. interpreter.rs ➔ [Output]

| File         | Job                    |
|--------------|---                     |
| `main.rs`    | TeZ CLI: `tez hello.tez` |
| `location.rs`| Tracks line/column in source |
| `token.rs`   | Defines `Token` and `TokenKind` |
| `lexer.rs`   | Source text → `Vec<Token>` |
| `ast.rs`     | Defines TeZ's syntax structures |
| `parser.rs`  | `Vec<Token>` → AST, detects syntax errors |
| `compiler.rs` | AST → actual execution |
| `hello.tez`  | Your first TeZ program |


### Suppose the file looks like this:
let name = "Raj";
print(name);

### Now Lexer does:
LET
IDENTIFIER(name)
=
STRING("Raj")
;
PRINT
(
IDENTIFIER(name)
)
;

### Then Parser recognises the structure as:
Program
├── LetStatement
│   ├── name
│   └── "Raj"
└── PrintStatement
    └── name
// The parser structs the correct grammar

### Then AST does this:


### Then Semantic Analysis


## Initially I think this might be the file structure.

codingmania/

├── docs/
├── compiler/
├── examples/
├── standard-library/
├── tests/
├── playground/
├── LICENSE
├── README.md
└── ROADMAP.md

Inside `/src`

src/

├──main.rs
├──lexer.rs
├──parser.rs
├──ast.rs
├──token.rs
├──compiler.rs
├──locaton.rs
├──error.rs

## To Eliminate the Confusion:

RAW TEXT
    │
    ▼
say ( 3 ) "Hello"
    │
    │ lexer
    ▼
TOKENS
    │
    ▼
Say  LeftParen  Number(3)  RightParen  StringLiteral
    │
    │ parser
    ▼
AST
    │
    ▼
SayStatement {
    count: 3,
    text: "Hello"
}
