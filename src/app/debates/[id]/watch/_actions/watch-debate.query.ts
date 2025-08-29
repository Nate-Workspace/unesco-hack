import { getDebateDetails } from "@/db/orm/debate/get-debate-details";

export async function getDebateDetailsAction(id: string){
    return await getDebateDetails(id);
}