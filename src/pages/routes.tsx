import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { NotFound } from './404'
import { Dashboard } from './app/dashboard/dashboard'
import { Products } from './app/orders/orders'
import { SignIn } from './auth/sign-in'
import { SignUp } from './auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/products', element: <Products /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
