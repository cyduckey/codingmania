# HELPERS -----------|
## Rust commands
We can create a project using `cargo new`.
We can build a project using `cargo build`.
We can build and run a project in one step using `cargo run`.
We can build a project without producing a binary to check for errors using `cargo check`.
Instead of saving the result of the build in the same directory as our code, Cargo stores it in the target/debug directory.
# -------------------|

# COMMANDS FOR TeZ CLI FORMATION & RUNNING FROM TERMINAL

**1. Create a sample program `hello.tez` in your project root, and save as `.tez`**
**2. Test using Cargo**
```bash
cargo run -- hello.tez
```
**3. Build the binary and make tez executable system-wide:**
```bash
cargo build --release
sudo cp target/release/tez /usr/local/bin/
```
**4. Now run directly from any directory:**
```bash
tez hello.tez`
```