import { LoaderCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Logged in successfully', { duration: 1000 })
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      toast.error('Invalid credentials')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter in your account
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email"> Your e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@acme.com"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password"> Your password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                {...register('password')}
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                to="/sign-up"
                className="text-foreground underline transition hover:text-primary"
              >
                Register here
              </Link>
            </p>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              {!isSubmitting && 'Login'}
              {isSubmitting && <LoaderCircle className="animate-spin" />}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
