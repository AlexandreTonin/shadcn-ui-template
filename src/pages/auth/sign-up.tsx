import { LoaderCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  establishmentName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Successfully created establishment', { duration: 1000 })

      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      toast.error('Error in establishment registration.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Become a partner and start your sales
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="establishmentName"> Establishment name</Label>
              <Input
                id="establishmentName"
                type="text"
                {...register('establishmentName')}
                placeholder="Acme"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName"> Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email"> Your e-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="example@acme.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone"> Your phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+1 999 999-9999"
              />
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full text-white dark:text-black"
            >
              {!isSubmitting && 'Create account'}
              {isSubmitting && <LoaderCircle className="animate-spin" />}
            </Button>
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                to="/sign-in"
                className="text-foreground underline transition hover:text-muted-foreground"
              >
                Login here
              </Link>
            </p>

            {/* <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By continuing, you agree to our and.{' '}
              <a href="" className="underline-offset-3 underline">
                terms of service
              </a>{' '}
              e{' '}
              <a href="" className="underline-offset-3 underline">
                privacy policy.
              </a>
              .
            </p> */}
          </form>
        </div>
      </div>
    </>
  )
}
