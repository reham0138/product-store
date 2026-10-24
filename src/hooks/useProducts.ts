import { useEffect, useState } from 'react'
import type { Product, ProductsResponse } from '../types/product'
export const LIMIT = 8

const useProducts = (page: number) => {
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const skip = (page - 1) * LIMIT
    const controller = new AbortController()

    const loadProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data: ProductsResponse = await response.json()
        setProducts(data.products)
        setTotal(data.total)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err.message : 'Something went wrong')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [page])

  return { products, total, loading, error }
}

export default useProducts