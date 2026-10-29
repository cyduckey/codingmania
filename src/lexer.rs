//! WIL BE CHANGED. CHECK WITH `mainExample.tez.txt` FOR THE FINAL VERSION
//! `use phf::phf_map;` CAN BE USED, SAME RUNTIME AS `match`, BUT IT NEEDS TO BE ADDED AS DEPENDENCY IN `Cargo.toml`
// ------------------------------
//! This loop reads the .tez source code and transforms it into a Vec<WordDef> containing your Say, Word, Number, LParen, RParen, and Stop Words.
// ------------------------------
use crate::token::{Words, WordDef, Coordinate, Keywords, LoopWords};
use std::collections::HashMap;
use std::sync::OnceLock;

/* USE `HashMap` like this:
    let keywords = HashMap::from([
    ("postpone", Keywords::Postpone),
    ("say",      Keywords::Say),
    ("wait",     Keywords::Wait),
    ("until",    Keywords::Until),
    ("unless",   Keywords::Unless),
    ("stop",     Keywords::Stop),
]);
*/

const EOF_CHAR: char = '\0';    // Character defining EOF. Easily comparable in peeking operation

pub struct Lexer<'a> {
    src: &'a str,
    cursor: usize,
    loc: Coordinate,
}

impl<'a> Lexer<'a> {
    pub fn new(src: &str) -> Self {
        Self {
            src,
            cursor: 0,
            loc: Coordinate{ln: 1, col: 1},
        }
    }

    pub fn tokenize(&mut self) -> Vec<WordDef> {
        let mut tokens = Vec::new();

        loop {
            self.skip_whitespace();
            if self.is_at_end() {
                tokens.push(WordDef, {
                    kind: Words::EOF,
                    loc: self.loc,
                });
                break;
            }

            let start_loc = self.loc;
            let ch = start.peek().unwrap_or();


        }
    }


    /// Replace these three checking fns into the built-ins `is_ascii_whitespace()`, `is_horizontal_whitespace()` and `is_ascii_alphabetic() || c == '_'`
    // Helper Functions -----------------

    #[inline(always)]
    fn is_escapable(c: char) -> bool {
        matches!(c, '\\' | '\'')
    }

    #[inline(always)]
    pub(crate) fn is_at_end(&self) -> bool {
        self.cursor >= self.src.len()
    }

    #[inline(always)]
    pub(crate) fn peek(&self) -> Option<char> {
        if is_at_end() {
            None
        } else {
            self.src[self.cursor].chars().next()
        }
    }
}

