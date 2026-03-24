import type { Product } from '../types/product';

const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${BASE_URL}/products`);

        if(!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
}

export async function getProductById(id: string): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if(!response.ok) {
        throw new Error('Failed to fetch product details');
    }
    return response.json();
}