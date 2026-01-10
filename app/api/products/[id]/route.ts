import { NextResponse } from "next/server";

// Dữ liệu mock cho các sản phẩm
const mockProducts = [
  {
    id: 1,
    name: "Samsung Galaxy Watch 6 Classic",
    price: 129.00,
    oldPrice: 199.00,
    image: "/pic/1.jpg",
    images: ["/pic/1.jpg", "/pic/2.jpg", "/pic/3.jpg"],
    rating: 4.5,
    reviews: 15,
    description: "At just 12.7x12.7 centimetres and 0.73 kilograms, Samsung Galaxy Watch 6 Classic fits perfectly on your wrist or is mini enough to move or mount just about anywhere. With advanced health tracking and premium design.",
    sale: false,
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 7",
    price: 139.00,
    oldPrice: 229.00,
    image: "/pic/2.jpg",
    images: ["/pic/2.jpg", "/pic/1.jpg", "/pic/4.jpg"],
    rating: 4.8,
    reviews: 23,
    description: "The latest Samsung Galaxy Watch 7 with enhanced features and improved battery life. Perfect for fitness enthusiasts and tech lovers.",
    sale: true,
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch Ultra",
    price: 119.00,
    oldPrice: null,
    image: "/pic/3.jpg",
    images: ["/pic/3.jpg", "/pic/1.jpg", "/pic/2.jpg"],
    rating: 4.2,
    reviews: 8,
    description: "Ultra premium smartwatch with titanium build and advanced health monitoring capabilities.",
    sale: false,
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 7",
    price: 129.00,
    oldPrice: null,
    image: "/pic/4.jpg",
    images: ["/pic/4.jpg", "/pic/3.jpg", "/pic/1.jpg"],
    rating: 4.6,
    reviews: 12,
    description: "Stylish and functional smartwatch with long-lasting battery and comprehensive fitness tracking.",
    sale: false,
  },
  {
    id: 5,
    name: "Spigen Rugged Armor Pro",
    price: 239.00,
    oldPrice: 299.00,
    image: "/pic/1.jpg",
    images: ["/pic/1.jpg", "/pic/2.jpg", "/pic/4.jpg"],
    rating: 4.7,
    reviews: 31,
    description: "Rugged protection case for your smartwatch. Military-grade protection with sleek design.",
    sale: true,
  },
  {
    id: 6,
    name: "Mosmoc Rugged No Gap",
    price: 149.00,
    oldPrice: null,
    image: "/pic/2.jpg",
    images: ["/pic/2.jpg", "/pic/3.jpg", "/pic/1.jpg"],
    rating: 4.3,
    reviews: 19,
    description: "Premium protective case with no gap design. Perfect fit and maximum protection for your device.",
    sale: false,
  },
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const productId = parseInt(id);

  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
