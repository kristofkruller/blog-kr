const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export const openDB = async() => {
  return sqlite.open({
    filename:"./blog.db",
    driver: sqlite3.Database,
  })
}
export const slugify = (title: string) => {
  const replacements: any = {
    "ö": "o",
    "ő": "o",
    "ü": "u",
    "ű": "u",
    "ú": "u",
    "ó": "o",
    "é": "e",
    "á": "a",
    "í": "i"
  }
  let slugCore = title.toLowerCase()
    .replace( /[öőüűúóéáí]/g , (match: string) => replacements[match])
    .split(/\s+|\W+/)
    .filter(letter => letter.trim())
    .join("-");
  return slugCore
}