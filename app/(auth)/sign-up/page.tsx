import { SignupForm } from "@/components/sign-up-form";

export default async function Page() {

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-background via-muted to-background">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  )
}
