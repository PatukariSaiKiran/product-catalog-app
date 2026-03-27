import SearchIcon from '../assets/icons/search-icon.svg?react';

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
};

function SearchBar({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearchSubmit();
          }
        }}
        placeholder="Search products by title..."
        className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-12 focus:outline-none focus:border-gray-300 focus:ring-0"
      />

      <button
        type="button"
        onClick={onSearchSubmit}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-2 rounded-md bg-[#ffce12] text-black hover:bg-[#f5b800] cursor-pointer transition"
      >
        <SearchIcon className="w-4 h-4 pointer-events-none" />
      </button>
    </div>
  );
}

export default SearchBar;