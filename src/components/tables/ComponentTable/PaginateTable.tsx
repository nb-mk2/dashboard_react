interface PaginateTableProps {
  currentPage?: number;  // Ahora es opcional
  totalPages?: number;
  onPageChange: (page: number) => void;
}

export default function PaginateTable({
  currentPage = 1,  // Valor por defecto 1
  totalPages = 5,
  onPageChange,
}: PaginateTableProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-end mt-4">
      <nav className="join">
        <button
          className="btn btn-soft btn-square join-item"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          aria-label="previous page"
        >
          {"<"}
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}

        <button
          className="btn btn-soft btn-square join-item"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-label="next page"
        >
          {">"}
        </button>
      </nav>
    </div>
  );
}
