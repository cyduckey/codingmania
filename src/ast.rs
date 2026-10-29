//! Abstract Syntax Tree for TeZ ---------------

// ---------------------------------------------



#[derive(Debug, PartialEq, Clone)]
pub enum Internals {
    Function {
        name: String,
        params: Vec<Param>,
        return_ty: Option<Type>,
        body: Vec<Internals>,
    }
}

#[derive(Debug, PartialEq, Clone)]
pub enum Expression {
    StringLit(String),
}

#[derive(Debug, PartialEq, Clone)]
pub(crate) enum Stmt {
    Say {
        count: u32,
        msg: Expression,
    },
    // Introduce Other Keywords
}

