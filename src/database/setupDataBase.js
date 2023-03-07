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

  const category = await db.all("SELECT * FROM category");
  const post = await db.all("SELECT * FROM post");
  console.log("categories",JSON.stringify(category, null, 2));
  console.log("posts",JSON.stringify(post, null, 2));
}

setup();