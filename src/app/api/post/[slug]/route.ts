import { NextResponse } from "next/server";
import { openDB, slugify } from "../../../../helpers/dbProcess";

export async function GET({ params } : { params: {slug: string} }) {
  const db = await openDB();
  const exactPost = await db.get("SELECT * FROM post WHERE slug = ?", [
    params.slug,
  ]);
  
  return NextResponse.json(exactPost);
}

export async function PUT(request: Request, { params } : { params: {slug: string} }) {
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
      params.slug
    );
    await updatePost.finalize();
  } catch (error) {
    console.error("UPDATE POST ERROR:", error);
  }
}
export async function DELETE({ params } : { params: {slug: string} }) {
  const db = await openDB();

  const deletePost = await db.prepare(
    "DELETE FROM post WHERE post_id = ?", [
      params.slug
    ]
  );

  try {
    await deletePost.run(params.slug);
    await deletePost.finalize();
  } catch (error) {
    console.error("DELETE POST ERROR:", error);
  }
}