use crate::token::{Words, Coordinate};

#[derive(Debug, Clone, Encodable)]
pub enum Diagnostic {
    Warning(WarnType),
    Error(ErrType),
}

#[derive(Debug, Clone, Encodable)]
pub(crate) enum WarnType {
    Memory,
    Runtime,
}

#[derive(Debug, Clone, Encodable)]
pub(crate) enum ErrType {
    Syntax,
    Memory,
    Runtime,
}

#[derive(Debug, Clone, Encodable)]
pub struct DiagnosticDef {
    ty: Diagnostic,
    loc: Coordinate,
    msg: String,
    note: Option<String>,
}

impl DiagnosticDef {

    // Define SyntaxErr, and other types of errors
    //
    
    pub fn error(ty: ErrType, loc: Coordinate, msg: impl Into<String>, note: impl Into<Option<String>>) -> Self {
        Self {
            ty: Diagnostic::Error(ty),
            msg: msg.into(),
            loc,
            note: note.into(),
        }
    }
    pub fn warning(loc: Coordinate, msg: impl Into<String>, note: impl Into<Option<String>>) -> Self {
        Self {
            ty: Diagnostic::Warning(ty),
            msg: msg.into(),
            loc,
            note: note.into(),
        }
    }
}
