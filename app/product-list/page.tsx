"use client";

import { useState } from "react";
import Image from "next/image";
import Img1 from "@/pic/1.jpg";
import Img2 from "@/pic/2.jpg";
import Img3 from "@/pic/3.jpg";
import Img4 from "@/pic/4.jpg";
import { ProductQuickView } from "@/components/ProductQuickView";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy Watch 6 Classic",
    price: "$129.00",
    image: Img1,
    badges: ["Watch", "Samsung"],
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 7",
    price: "$139.00",
    oldPrice: "$229.00",
    image: Img2,
    badges: ["Watch", "Samsung"],
    sale: true,
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch Ultra",
    price: "$119.00",
    image: Img3,
    badges: ["Watch", "Samsung"],
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 7",
    price: "$129.00",
    image: Img4,
    badges: ["Watch", "Samsung"],
  },
  {
    id: 5,
    name: "Spigen Rugged Armor Pro",
    price: "$239.00",
    image: Img1,
    badges: ["Watch", "Spigen"],
  },
  {
    id: 6,
    name: "Mosmoc Rugged No Gap",
    price: "$149.00",
    image: Img2,
    badges: ["Watch", "Samsung"],
  },
];

const ProductListPage = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans dark:bg-black sm:px-6 lg:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <header className="mb-10 space-y-3">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Samsung watch
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            All New Collection
          </h1>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-md hover:ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800 cursor-pointer"
            >
              <div className="relative bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                  priority={product.id === 1}
                />

                {product.sale && (
                  <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Sale
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <div className="space-y-2">
                  <h2 className="line-clamp-2 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {product.name}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="flex items-center gap-1.5 rounded-full border border-emerald-200 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
                      >
                        <Image
                          src="/pic/logo.svg"
                          alt="Logo"
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5"
                        />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-end justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-zinc-400 line-through dark:text-zinc-500">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-sm hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-400 dark:hover:text-zinc-100"
                      aria-label="Yêu thích"
                    >
                      ♡
                    </button>
                    <button
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                      aria-label="Thêm vào giỏ hàng"
                    >
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <ProductQuickView
        productId={selectedProductId}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default ProductListPage;
