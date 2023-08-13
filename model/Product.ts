interface Product {
    id: number,
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    sizes: string[];
    images: string[];
    message: string;
}


export default Product;
