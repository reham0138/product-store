import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductGrid from './components/ProductGrid'
import Pagination from './components/Pagination'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import EmptyState from './components/EmptyState'
import useProducts, { LIMIT } from './hooks/useProducts'

function App() {
  const [page, setPage] = useState(1)
  const { products, total, loading, error } = useProducts(page)

  const totalPages = Math.ceil(total / LIMIT)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderContent = () => {
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    if (products.length === 0) return <EmptyState />

    return (
      <>
        <ProductGrid products={products} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    )
  }

  return (
    <div
      id="home"
      className="flex min-h-screen flex-col bg-brand-cream text-brand-navy"
    >
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <section id="products" className="scroll-mt-20">
          <h2 className="mb-6 text-2xl font-bold">Products</h2>
          {renderContent()}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App