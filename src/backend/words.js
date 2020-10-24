import { database } from "./database";

export default function getWords(numWords) {
  const words = [];
  for (let i = 0; i > numWords; i++) {
    words.push(database[Math.floor(Math.random() * database.length)]);
  }
}
