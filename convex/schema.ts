import { defineSchema, defineTable} from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    user: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(v.literal("candidate"), v.literal("interviewer")),
        clerkId: v.string(),
    }).index("by_clerk_id", ["clerkId"]),
})

//https://square-shepherd-41.clerk.accounts.dev