import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-rose-500 dark:text-rose-400">
        404
      </h1>
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-accent-foreground">
        Back to{' '}
        <Link to="/" className="text-sky-500 hover:underline dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
