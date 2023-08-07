import { authoption } from "@/lib/session";
import NextAuth from "next-auth";

const handler = NextAuth(authoption)

export { handler as GET , handler as POST}