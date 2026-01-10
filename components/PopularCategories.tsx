"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Img1 from "@/pic/1.jpg";
import Img2 from "@/pic/2.jpg";
import Img3 from "@/pic/3.jpg";
import Img4 from "@/pic/4.jpg";

const categories = {
  featured: {
    title: "Be Fashion Forward",
    productCount: 4555,
    image: Img1,
    bgColor: "bg-yellow-400",
    badge: "New Arrival",
  },
  small: [
    {
      title: "Watch",
      productCount: 478,
      image: Img2,
      bgColor: "bg-blue-200",
    },
    {
      title: "Shoes",
      productCount: 654,
      image: Img3,
      bgColor: "bg-gray-200",
    },
    {
      title: "Accessories",
      productCount: 452,
      image: Img4,
      bgColor: "bg-pink-200",
    },
  ],
};

export function PopularCategories() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Popular Categories
          </h2>
          <Button
            asChild
            variant="default"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <Link href="/categories">Explore All Category</Link>
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Large Featured Card */}
          <div
            className={cn(
              "group relative overflow-hidden rounded-2xl p-8 shadow-lg transition-shadow hover:shadow-xl lg:p-10",
              categories.featured.bgColor
            )}
          >
            {/* Badge */}
            {categories.featured.badge && (
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-green-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                <Image
                  src="/pic/logo.svg"
                  alt="Logo"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5"
                />
                {categories.featured.badge}
              </span>
            )}

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                  {categories.featured.title}
                </h3>
                <p className="text-base text-zinc-700 sm:text-lg">
                  {categories.featured.productCount.toLocaleString("en-US")}{" "}
                  Products
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  <Link href="/shop">Shop Now</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src={categories.featured.image}
                alt={categories.featured.title}
                className="h-full w-full object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* First two cards in top row */}
            {categories.small.slice(0, 2).map((category) => (
              <div
                key={category.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-8",
                  category.bgColor
                )}
              >
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="text-sm text-zinc-700 sm:text-base">
                      {category.productCount.toLocaleString("en-US")} Products
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:px-6 sm:py-3 sm:text-base"
                    >
                      <Link href={`/shop/${category.title.toLowerCase()}`}>
                        Shop Now
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="absolute bottom-0 right-0 h-32 w-32 sm:h-40 sm:w-40">
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
              </div>
            ))}

            {/* Third card spans full width in second row */}
            {categories.small.slice(2, 3).map((category) => (
              <div
                key={category.title}
                className={cn(
                  "group relative col-span-1 overflow-hidden rounded-2xl p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-2 sm:p-8",
                  category.bgColor
                )}
              >
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="text-sm text-zinc-700 sm:text-base">
                      {category.productCount.toLocaleString("en-US")} Products
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:px-6 sm:py-3 sm:text-base"
                    >
                      <Link href={`/shop/${category.title.toLowerCase()}`}>
                        Shop Now
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="absolute bottom-0 right-0 h-32 w-32 sm:h-40 sm:w-40">
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
