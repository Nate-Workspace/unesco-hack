import 'server-only'

import { db } from "@/db/index";
import { debate } from "@/db/schema";

export const createDebate = async (formData: any) => {
    console.log("Form data from db: ", formData)
  const [data] = await db.insert(debate)
  .values({
    title: formData?.title,
    description: formData?.description,
    category: formData?.category,
    debateDate: formData?.debateDate,
    startTime: formData?.startTime,
    duration: formData?.duration,
    applicationDeadline: formData?.applicationDeadline,
    sides: formData?.sides,
    guidelines: formData?.guidelines,
    createdBy: "D7HTkMMECZQBgO24f7FGg7H0T52yVQT6",
  }).returning();

  return data;
};
