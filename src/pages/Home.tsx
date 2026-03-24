import { useEffect, useState } from "react";
import { getProducts } from '../services/api';
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
        setLoading(true);
        setError('');

        const data = await getProducts();
        setProducts(data);
    } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div className="p-6">Loading products...</div> ;
  if (error) return <div className="p-6 text-red-600">{error}</div>
  
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-2">Product Catalogue</h1>

        <p className="text-gray-600 mb-6">
           Total products: {products.length}
        </p>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </section>
    </main>
  );
  }
  
  export default Home;