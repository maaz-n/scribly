import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://project-scribly.vercel.app/"
})