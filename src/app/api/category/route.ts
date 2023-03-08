import { NextResponse } from "next/server";
import { openDB } from "../../../helpers/dbProcess";
const sqlite3 = require("sqlite3");

export async function GET(request: Request) {
  const db = await openDB();
  const allCats = await db.all("SELECT * FROM category");
  
  return NextResponse.json(allCats);
}
export async function POST(request: Request) {
  const db = await openDB();

  const requestBody = await request.json();
  const { category_name } = requestBody;

  const createCat = await db.prepare(
    "INSERT INTO category ('category_name') VALUES(?)"
  );
  try {
    await createCat.run(category_name);
    await createCat.finalize();
  } catch (error) {
    console.error("POST ERROR:", error);
  }
}
export async function PUT(request: Request) {
  const db = await openDB();

  const requestBody = await request.json();
  const { category_name, cat_id } = requestBody;

  const updateCat = await db.prepare(
    "UPDATE category set category_name = ? where cat_id = ?"
  );
  try {
    await updateCat.run(category_name, cat_id);
    await updateCat.finalize();
  } catch (error) {
    console.error("PUT ERROR:", error);
  }
}
export async function DELETE(request: Request) {
  const db = await openDB();

  const requestBody = await request.json();
  const { cat_id } = requestBody;

  const delCat = await db.prepare(
    "DELETE FROM category where cat_id = ?"
  );
  try {
    await delCat.run(cat_id);
    await delCat.finalize();
  } catch (error) {
    console.error("DELETE ERROR:", error);
  }
}