import LeftArrow from '../assets/icons/arrow-left.svg?react';
import RightArrow from '../assets/icons/arrow-right.svg?react';

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="mt-8 flex items-center justify-center gap-4 text-lg">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border rounded-md disabled:opacity-40 hover:bg-gray-100 transition"
      >
        <LeftArrow className="w-5 h-5" />
      </button>
     
      <span className="text-gray-700 font-medium">
        {endItem} / {totalItems}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border rounded-md disabled:opacity-40 hover:bg-gray-100 transition"
      >
        <RightArrow className="w-5 h-5" />
      </button>

    </div>
  );
}

export default Pagination;