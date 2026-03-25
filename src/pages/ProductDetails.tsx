import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import type { Product } from '../types/product';
import ArrowLeft from '../assets/icons/arrow-left.svg?react';



function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [product, setproduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchProductsDetails = async () => {
        if(!id) {
            setError('Product id not found');
            return;
        }

        try {
            setLoading(true);
            setError('');

            const data = await getProductById(id);
            setproduct(data);
        } catch (err) {
            setError('Failed to fetch product details');
            console.error(err);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductsDetails();
    }, [id]);

    if (loading) { 
        return <div className="p-6">Loading product details...</div>; 
    }
    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    if (!product) {
        return <div className="p-6">No product found.</div>;
    }

    const [whole, decimal] = product.price.toFixed(2).split('.');

    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <button
                 onClick={() => navigate('/')}
                 className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition"  
                > 
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Products</span>       
                </button>
        <section className="bg-white border rounded-xl shadow-md hover:shadow-lg transition p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-gray-50 shadow-inner rounded-lg p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">{product.category}</p>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="text-gray-900 font-semibold mb-4 flex items-start">
              <span className="text-base mr-1">€</span>
              <span className="text-4xl leading-none">{whole}</span>
              <span className="text-base align-top">{decimal}</span>
            </div>

            <p className="text-sm text-gray-600 mb-5">
              Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>

            <div className="border-t border-gray-200 pt-6 mt-4">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700 leading-7">{product.description}</p>
            </div>
          </div>
        </section>
            </div>
        </main>
    )
  }

  export default ProductDetails;