mod token;
mod lexer;
mod compiler;

use std::{env, process, fs};
use crate::lexer::Lexer;
use crate::compiler::Compiler;

fn main() {
    let args: Vec<String> = env::args().collect();

    if args.len() < 2 {
        eprintln!("Usage Error: `tez <filename.tez>` is accepted only");
        process::exit(1);
    }

    let file_path = &args[1];
    let src = fs::read_to_string(file_path).unwrap_or_else(|err| {
        eprintln!("Error reading file '{file_path}': {err}");
        process::exit(1);
    })

    // 1. Lexing
    let mut lx = Lexer::new(&src);
    let tokens = lx.tokenize();
    
    // 2. Compiling
    let mut eval = Compiler::new(tokens);
    eval.run();
}