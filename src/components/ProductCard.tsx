import type { Product } from "../types/product";
interface ProductCardProps {
    product:  Product;
}
const ProductCard = ({product}:ProductCardProps) => {
  return (
    <article className='flex flex-col overflow-hidden rounded-lg border border-brand-teal bg-white shadow-md transition hover:shadow-lg'>
      <img src={product.images} alt={product.title} className="h-48 w-full object-contain bg-brand-teal/20" loading="lazy" />
    <div className='flex flex-1 flex-col gap-2 p-4'>
    <h3 className='font-semibold line-clamp-2'>{product.title}</h3>
    <p className='text-lg font-bold text-brand-blue'>{product.price.toFixed(2)}$</p>
    <p className='text-sm font-bold text-brand-yellow'>★ {product.rating}</p>


    </div>
    
    </article>
  )
}

export default ProductCard
