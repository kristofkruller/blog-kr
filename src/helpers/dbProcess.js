const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export async function openDB() {
  return sqlite.open({
    filename:"./src/blog.db",
    driver: sqlite3.Database,
  })
}
