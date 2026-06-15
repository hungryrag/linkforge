import { v4 as uuidv4 } from "uuid";
import db from "../config/db.js";

function generateShortCode(length = 6) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

export async function createUrl(originalUrl) {
  const id = uuidv4();

  const shortCode = generateShortCode();

  await db("urls").insert({
    id,
    original_url: originalUrl,
    short_code: shortCode,
  });

  return {
    id,
    shortCode,
  };
}