//! Grammar of TeZ ---------------

// ------------------------

#[derive(Debug, PartialEq, Clone)]
pub enum Type {
    Bool,
    Text,
    Word,
    Num,
} // Better to use Rust's own types

#[derive(Debug, PartialEq, Clone)]
pub struct Param {
    name: String,
    ty: Option<Type>,
}
