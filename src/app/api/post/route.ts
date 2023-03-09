import { NextResponse } from "next/server";
import { openDB, slugify } from "../../../helpers/dbProcess";

export async function GET(request: Request) {
  const db = await openDB();
  const allPosts = await db.all("SELECT * FROM post");
  
  return NextResponse.json(allPosts);
}
export async function POST(request: Request) {
  const db = await openDB();

  const requestBody = await request.json();
  const {title, slug, imageUrl, description, content, author, featured, category_name} = requestBody;

  const createPost = await db.prepare(
    "INSERT INTO post (title, slug, imageUrl, description, content, author, featured, category_name) VALUES(?,?,?,?,?,?,?,?)"
  );

  try {
    await createPost.run(
      title, 
      (slugify(title)), 
      imageUrl, 
      description, 
      content, 
      author, 
      featured, 
      category_name
    );
    await createPost.finalize();
  } catch (error) {
    console.error("CREATE POST ERROR:", error);
  }
}
export async function PUT(request: Request) {
  const db = await openDB();

  const requestBody = await request.json();
  const { post_id, title, slug, imageUrl, description, content, author, featured, category_name } = requestBody;

  const updatePost = await db.prepare(
    "UPDATE post set title = ?, slug = ?, imageUrl = ?, description = ?, content = ?, author = ?, featured = ?, category_name = ? WHERE post_id = ?"
  )

  try {
    await updatePost.run(
      title, 
      (slugify(title)), 
      imageUrl, 
      description, 
      content,
      author,
      featured, 
      category_name,
      post_id
    );
    await updatePost.finalize();
  } catch (error) {
    console.error("UPDATE POST ERROR:", error);
  }
}
export async function DELETE(request: Request) {
  const db = await openDB();

  const requestBody = await request.json();
  const { post_id } = requestBody;

  const deletePost = await db.prepare(
    "DELETE FROM post WHERE post_id = ?"
  );

  try {
    await deletePost.run(post_id);
    await deletePost.finalize();
  } catch (error) {
    console.error("DELETE POST ERROR:", error);
  }
}