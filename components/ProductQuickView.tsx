"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  description: string;
  sale: boolean;
}

interface ProductQuickViewProps {
  productId: number | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductQuickView({
  productId,
  open,
  onOpenChange,
}: ProductQuickViewProps) {
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (open && productId) {
      setLoading(true);
      fetch(`/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setCurrentImageIndex(0);
          setQuantity(1);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [open, productId]);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (!product && !loading) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-h-[90vh] overflow-y-auto">
        <DialogClose onClick={() => onOpenChange(false)} />
        
        {loading ? (
          <div className="flex items-center justify-center p-20">
            <div className="text-zinc-500">Đang tải...</div>
          </div>
        ) : product ? (
          <div className="flex flex-col lg:flex-row">
            {/* Phần bên trái - Hình ảnh sản phẩm */}
            <div className="relative w-full lg:w-1/2 bg-amber-50 dark:bg-amber-950/20 flex flex-col min-h-[500px]">
              {product.sale && (
                <div className="absolute left-4 top-4 z-10 rounded-md bg-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  Sale!
                </div>
              )}
              
              <div className="relative flex-1 flex items-center justify-center p-8">
                <Image
                  src={product.images[currentImageIndex] || product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain max-h-[400px] max-w-full"
                  priority
                />
              </div>
              
              {/* Chỉ báo hình ảnh (carousel dots) */}
              {product.images.length > 1 && (
                <div className="flex justify-center gap-2 pb-6">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`
                        w-2 h-2 rounded-full transition-colors
                        ${
                          index === currentImageIndex
                            ? "bg-black dark:bg-white"
                            : "bg-white dark:bg-zinc-700"
                        }
                      `}
                      aria-label={`Xem hình ảnh ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Phần bên phải - Thông tin sản phẩm */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col bg-white dark:bg-zinc-900">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                {product.name}
              </h2>

              {/* Đánh giá sao */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    const rating = product.rating;
                    const isFullStar = rating >= starValue;
                    const isHalfStar = rating >= starValue - 0.5 && rating < starValue;
                    
                    return (
                      <span key={i} className="text-orange-500">
                        {isFullStar ? (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ) : isHalfStar ? (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <defs>
                              <linearGradient id={`half-${product.id}-${i}`}>
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                              </linearGradient>
                            </defs>
                            <path fill={`url(#half-${product.id}-${i})`} d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 fill-current opacity-30" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        )}
                      </span>
                    );
                  })}
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {product.reviews} customer reviews
                </span>
              </div>

              {/* Giá sản phẩm */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  {product.oldPrice && (
                    <span className="text-lg text-zinc-400 line-through dark:text-zinc-500">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Mô tả sản phẩm */}
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Bộ chọn số lượng */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-2 w-fit border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Giảm số lượng"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setQuantity(Math.max(1, val));
                    }}
                    className="w-16 text-center border-0 focus:outline-none focus:ring-0 bg-transparent text-zinc-900 dark:text-zinc-50"
                  />
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Tăng số lượng"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Các nút hành động */}
              <div className="flex gap-3 mt-auto">
                <Button
                  className="flex-1 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 rounded-lg py-3"
                  onClick={() => {
                    console.log("Add to cart:", product.id, quantity);
                    // Logic thêm vào giỏ hàng sẽ được xử lý sau
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-zinc-200 dark:border-zinc-700 rounded-lg py-3"
                  onClick={() => {
                    console.log("More details:", product.id);
                    // Logic xem chi tiết sẽ được xử lý sau
                  }}
                >
                  More Details
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
