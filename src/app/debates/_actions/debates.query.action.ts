"use server";

import { getAllDebates } from "@/db/orm/debate/get-all-debates";

export async function getAllDebatesAction() {
  return await getAllDebates();
}