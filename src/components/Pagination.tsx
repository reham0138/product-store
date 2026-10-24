interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

type PageItem = number | '...'

const getPageItems = (current: number, total: number): PageItem[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total]
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
  }
  return [1, '...', current - 1, current, current + 1, '...', total]
}

const pageBtn =
  'flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition sm:h-10 sm:w-10'

const navBtn =
  'rounded-full bg-brand-navy px-4 py-2 text-sm font-medium text-brand-cream transition hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-brand-teal/40 disabled:text-brand-navy/40'

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const items = getPageItems(currentPage, totalPages)

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-3"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={navBtn}
      >
        ‹ Previous
      </button>

      <div className="order-first flex w-full items-center justify-center gap-1 sm:order-none sm:w-auto">
        {items.map((item, index) =>
          typeof item === 'number' ? (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-current={item === currentPage ? 'page' : undefined}
              className={`${pageBtn} ${
                item === currentPage
                  ? 'bg-brand-yellow font-bold text-brand-navy'
                  : 'text-brand-navy hover:bg-brand-teal'
              }`}
            >
              {item}
            </button>
          ) : (
            <span key={`dots-${index}`} className="px-1 text-brand-blue">
              …
            </span>
          )
        )}
      </div>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={navBtn}
      >
        Next ›
      </button>
    </nav>
  )
}

export default Pagination