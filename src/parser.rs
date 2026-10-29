//! Parser for TeZ ---------------------

// -------------------------------------

use crate::token::{WordDef, Word, Keywords, Coordinate};
use crate::ast::{Stmt};
use crate::error::{Diagnostic, DiagnosticDef};

// Rust Libs
use std::iter::Peekable;
use std::slice::Iter;

const DEFAULT: usize = 1;  // Default printing times for `say "…"`. Otherwise, any num provided in `say(num) "…"`

#[derive(Debug, Clone)]
pub(crate) struct Parser<'a> {
    word: Peekable<Iter<'a, Word>>,
    cursor: Coordinate,
}

impl<'a> Parser<'a> {
    fn new(word: &'a [Word]) -> Self {
        Self{ 
            word.iter().peekable(),
            cursor: Coordinate,
        }
    }
    
    pub fn stmt_ok(&self) -> Result<Vec<Stmt>, Err<Any>> {
        let mut stmt = Vec::new();
        while !self.is_end() {
            if self.check(&Word::EOF) {
                break;
            }
            stmt.push(self);
        }
    Ok(stmt);
    }

    // Incomplete -----
    fn parse_stmt(&mut self) -> Result<Stmt, DiagnosticDef> {
        let tok = self.peek_word().ok_or_else(|| {
            DiagnosticDef::error(
                ErrType::Syntax,
                "Unexpected end of input",
                self.current_loc(),
                None,
            )
        })?;

    }
    //----



    // Primitives for Parser ---------------
    pub(crate) fn peek_word(&self) -> Option<&Word> {
        self.word.get(self.cursor)
    }

    fn current_word(&self) -> Option<&Word> {
        self.word[self.cursor]
    }
    // Incomplete || -----
    fn current_loc(&self) -> Option<&Coordinate> {
        self.peek_word().map(|word| word.loc);
    }
    // -----

    pub(crate) fn eat_while_advance(&mut self) -> Option<&Word> {
        let tok = self.peek_word();
        if tok.is_some() {
            self.cursor += 1;
        }
        tok
    }

    pub(crate) fn iter_eat_while_advance(&mut self) -> Option<&Word> {
        self.word.next()
    }

    pub fn expect(&mut self, expected: &Word) -> Result<(), DiagnosticDef> {
        match self.word[self.cursor] {
           Some(act) if act == expected => {
            self.cursor +=1;
            Ok(())
           } else {
            Err(DiagnosticDef::Syntax);
           }

           Some(_) => Err(DiagnosticDef::Runtime);
        }
    }

    
}
