import { openDB } from "@root/helpers/dbProcess";

async function setup() {
  const db = await openDB();
  await db.migrate({
    migrationsPath: "./database",
    force: process.env.NODE_ENV === 'development' ? 'last' : false,
  });
}

setup();