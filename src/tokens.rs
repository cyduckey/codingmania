
#[derive(Debug, Clone, PartialEq, Eq, Encodable)]
pub enum WordDef {
    First,  // Loop1
    Then,   // Loop2
    Later,  // Loop3
    Lastly, // Loop4
    Postpone,
    Say,
    Wait,
    Until,
    Unless,
    Stop,
    StringLit(String),
    Word(usize),
    Number(u64),
    Bang,
    LParen,
    RParen,
    LBrace,
    RBrace,
    LBracket,
    RBracket,
    Comma,
    Semicolon,
    Plus,
    Minus,
    Star,
    Slash,
    Percent,
    Eq,
    NotEq, // Define after `classify_token` to check for two side by side chars as `!=`
    LessThan,
    LessThanOrEqual, // Define after `classify_token` to check for two side by side chars as `<=` and `≤` both
    GreaterThan,
    GreaterThanOrEqual,  // Define after `classify_token` to check for two side by side chars as `>=` and `≥` both
    And,
    Or,
    Illegal,
    EOF,
}

#[derive(Debug, Clone, Copy)]
pub(crate) type LoopWords {
    First,  // Loop1
    Then,   // Loop2
    Later,  // Loop3
    Lastly, // Loop4
}

#[derive(Debug, Clone, Copy)]
pub(crate) type Keywords {
    Say,
    Wait,
    Postpone,
    Until,
    Unless,
    Stop,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub(crate) struct Word {
    pub kind: WordDef,
    pub loc: Coordinate,
}

#[derive(Debug, Clone, Copy, Default)]
pub(crate) struct Coordinate {
    pub(crate) ln: usize,
    pub(crate) col: usize,
}

impl Coordinate {
    pub fn new() -> Self {
        Self {
            ln: 1,
            col: 1,
        }
    }
    fn advance(&mut self, txt: &str) {
        for ch in txt.chars() {
            if ch == '\n' {
                self.ln += 1;
                self.col = 1;
            } else {
                self.col += 1;
            }
        }
    }
}

