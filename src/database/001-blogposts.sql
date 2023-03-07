CREATE TABLE IF NOT EXISTS category (
  cat_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  category_name TEXT NOT NULL UNIQUE,
  created_at DATE DEFAULT (datetime('now', 'localtime'))
);

CREATE TABLE IF NOT EXISTS post (
  post_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  imageUrl TEXT NOT NULL DEFAULT '',
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