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


const formSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(3),
    password: z.string().min(8, "Password should be atleast 8 characters")
})

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
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
              >
                Sign up
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-xl py-5 font-medium hover:bg-muted/60 transition-all"
              >
                Sign up with Google
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
