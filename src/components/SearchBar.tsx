import SearchIcon from '../assets/icons/search-icon.svg?react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onSearchSubmit: () => void;
}

function SearchBar({ searchTerm, onSearchChange, onSearchSubmit }: SearchBarProps) {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearchSubmit();
        }
    };

    return (
        <div className='mb-6 flex items-center gap-2'>

            <div className='relative flex-1'>

             <SearchIcon className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />

              <input 
               type="text"
               value={searchTerm}
               onChange={(e) => onSearchChange(e.target.value)}
               onKeyDown={handleKeyDown}
               placeholder='Search products...'
               className='w-full pl-10 pr-4 py-3 boarder border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
           </div>
          <button 
            onClick={onSearchSubmit}
            className='px-4 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition'
             >
               Search   
          </button>
        </div>
    );
}

export default SearchBar;