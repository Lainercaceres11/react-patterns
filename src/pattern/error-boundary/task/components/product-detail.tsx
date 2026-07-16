import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/1");
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="border p-2 m-2">
      <h1 className="text-2xl font-bold"> Producto: {product?.title}</h1>
      <p>Descripcion: {product?.description}</p>
    </div>
  );
}
