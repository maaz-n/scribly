"use server"
import { auth } from '@/lib/auth'

export const loginUser = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            },
        });

        return { success: true, message: "Sign in successfull" }
    } catch (error) {
        const e = error as Error
        return { success: false, message: e.message }
    }
}

export const signupUser = async (name: string, email: string, password: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password
            },
        });

        return {succes: true, message: "Account created successfully"}
    } catch (error) {
        const e = error as Error
        return { success: false, message: e.message }
    }
}