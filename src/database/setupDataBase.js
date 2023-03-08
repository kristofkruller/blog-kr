const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDB() {
  return sqlite.open({
    filename:"./blog.db",
    driver: sqlite3.Database,
  })
}

async function setup() {
  const db = await openDB();
  await db.migrate({
    migrationsPath: "./database",
    force: process.env.NODE_ENV === 'development' ? 'last' : false,
  });
}

setup();