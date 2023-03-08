CREATE TABLE IF NOT EXISTS category (
  cat_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  category_name TEXT NOT NULL UNIQUE,
  created_at DATE DEFAULT (datetime('now', 'localtime'))
);

CREATE TABLE IF NOT EXISTS post (
  post_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  imageUrl TEXT NOT NULL DEFAULT 'https://images.unsplash.com/photo-1458640904116-093b74971de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  featured INTEGER NOT NULL DEFAULT 0,
  created_at DATE DEFAULT (datetime('now', 'localtime')),
  category_name TEXT,
  FOREIGN KEY (category_name)
    REFERENCES category (category_name)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
);