// import { connectDB } from "@/app/lib/config/database"; 
import { connectDB } from "@/lib/config/database";
export async function GET() {
  await connectDB();
  return new Response("DB connected!", { status: 200 });
}