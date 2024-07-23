import { Helmet } from 'react-helmet-async'

export function Products() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
      </div>
    </>
  )
}
