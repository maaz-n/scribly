"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { signupUser } from "@/server/auth"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"


const formSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(3),
    password: z.string().min(8, "Password should be atleast 8 characters")
})

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {

        try {
            const response = await signupUser(values.name, values.email, values.password)
            if (response.success) {
                toast.success(response.message)
                router.push("/")

            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div
  className={cn(
    "flex flex-col gap-6 items-center justify-center min-h-screen",
    className
  )}
  {...props}
>
  <Card className="w-full max-w-md border-none shadow-xl bg-card/80 backdrop-blur-md rounded-2xl">
    <CardHeader className="space-y-2 text-center">
      <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
        Create your account
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        Enter your details below to create your account
      </CardDescription>
    </CardHeader>

    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col gap-5">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="rounded-xl border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="user@example.com"
                      {...field}
                      className="rounded-xl border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      {...field}
                      className="rounded-xl border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full rounded-xl py-5 font-medium bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex gap-2 items-center">
                    <Loader2 className="animate-spin"/>
                    <span>Signing up...</span>
                  </div>
                ) : (
                  <span>Sign up</span>
                ) }
              </Button>
             <Button
                variant="outline"
                className="w-full rounded-xl py-5 font-medium hover:bg-muted/60 transition-all"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  fill="currentColor"
                >
                  <path d="M488 261.8C488 403.3 391.1 512 248 512 110.8 512 0 401.2 0 264S110.8 16 248 16c67.1 0 123.5 24.6 167.5 64.9l-67.9 65.1c-18.7-17.9-52.2-38.9-99.6-38.9-85.3 0-154.5 70-154.5 157s69.2 157 154.5 157c98.6 0 135.4-70.7 141.2-107.5H248V261.8h240z"/>
                </svg>
                Continue with Google
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-primary hover:underline">
              Login
            </a>
          </div>
        </form>
      </Form>
    </CardContent>
  </Card>
</div>


    )
}
