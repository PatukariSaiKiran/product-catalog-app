import { useEffect, useState } from "react";
import { getProducts } from '../services/api';
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/pagination";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }
  
    const term = searchTerm.toLowerCase();
  
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
  
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading) return <div className="p-6">Loading products...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1
            onClick={() => {
              setSearchTerm('');
              setFilteredProducts(products);
              setCurrentPage(1);
            }}
            className="text-3xl font-bold mb-2 cursor-pointer"
          >
            Product Catalogue
          </h1>
            
           {searchTerm.trim() && (
           <p className="text-gray-600">
              Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
           </p>
            )}
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-600 mb-6">
          No products found for "{searchTerm}"
        </p>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}

export default Home;