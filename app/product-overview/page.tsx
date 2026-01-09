import Image from "next/image";
import Img1 from "@/pic/1.jpg";
import Img2 from "@/pic/2.jpg";
import Img3 from "@/pic/3.jpg";

const ProductOverviewPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-6xl space-y-10 rounded-3xl bg-white p-6 shadow-sm dark:bg-zinc-950 sm:p-10">
        {/* Khu vực gallery 3 block */}
        <section className="grid gap-6 md:grid-cols-[2fr_1.3fr]">
          {/* Block lớn bên trái */}
          <div className="relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={Img1}
              alt="Smartwatch health monitoring"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Hai block nhỏ bên phải */}
          <div className="flex flex-col gap-6">
            <div className="relative flex-1 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={Img2}
                alt="Smartwatch navigation routes"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative flex-1 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={Img3}
                alt="Smartwatch GPS tracking"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Khu vực thông tin sản phẩm */}
        <section className="grid gap-10 border-t border-zinc-100 pt-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] dark:border-zinc-800">
          {/* Cột trái: mô tả + giá + offers */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl font-semibold leading-snug text-zinc-900 dark:text-zinc-50 md:text-3xl">
                  Apple Watch Series 9 GPS + Cellular 45mm With Sport Band
                </h1>
                <span className="inline-flex shrink-0 items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-900">
                  Best seller
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-900">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-white">
                    4.5
                  </span>
                  <span className="font-medium">Rating</span>
                </div>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">1547</span> Reviews
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  1204 sold
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  <span className="font-semibold">254</span> In Stock
                </span>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              The Apple Watch Series 9 (GPS + Cellular) – 45mm is a powerful
              smartwatch designed to keep you connected, active, and healthy.
              With an advanced S9 SiP chip, stunning Retina display, and a
              sleek, durable design, it offers seamless integration with your
              iPhone and the Apple ecosystem.
            </p>

            <div className="space-y-4">
              <div className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                $684.00
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-600">
                    %
                  </span>
                  Offers
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 p-4 text-sm dark:border-zinc-800">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      No Cost EMI
                    </div>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                      Upto $10 EMI interest savings on Amazon pay ICICI.
                    </p>
                    <button className="mt-3 text-xs font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
                      1 Offer &gt;
                    </button>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 p-4 text-sm dark:border-zinc-800">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Bank Offer
                    </div>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                      Upto $30 discount on select credit cards, select banks.
                    </p>
                    <button className="mt-3 text-xs font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
                      28 Offer &gt;
                    </button>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 p-4 text-sm dark:border-zinc-800">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Partner Offers
                    </div>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                      Get GST invoice and save up to 28% on business purchases.
                    </p>
                    <button className="mt-3 text-xs font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
                      1 Offer &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: tuỳ chọn màu, size, quantity, CTA */}
          <aside className="space-y-6 rounded-3xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                  More Color :
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="h-7 w-7 rounded-full border-2 border-zinc-900 bg-black" />
                  <button className="h-7 w-7 rounded-full border-2 border-transparent bg-red-600" />
                  <button className="h-7 w-7 rounded-full border-2 border-transparent bg-green-500" />
                  <button className="h-7 w-7 rounded-full border-2 border-transparent bg-pink-500" />
                  <button className="h-7 w-7 rounded-full border-2 border-transparent bg-purple-500" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Size :
                </div>
                <div className="flex gap-3">
                  <button className="rounded-full border border-zinc-300 px-4 py-1 text-xs font-medium text-zinc-700 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300">
                    42 mm
                  </button>
                  <button className="rounded-full border border-zinc-900 bg-zinc-900 px-4 py-1 text-xs font-medium text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
                    46 mm
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Price
                </div>
                <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  $684.00
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                  Quantity
                </div>
                <div className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-900">
                  <button className="h-7 w-7 rounded-full border border-transparent text-lg leading-none text-zinc-500 hover:border-zinc-300 hover:bg-white dark:hover:bg-zinc-800">
                    −
                  </button>
                  <span className="mx-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    1
                  </span>
                  <button className="h-7 w-7 rounded-full border border-transparent text-lg leading-none text-zinc-900 hover:border-zinc-300 hover:bg-white dark:text-zinc-50 dark:hover:bg-zinc-800">
                    +
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900 dark:bg-amber-900/20 dark:text-amber-200">
                Order this product immediately, will soon run out and this stock
                will no longer be available.
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                Buy Now
              </button>
              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-800 hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400 dark:hover:bg-zinc-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-base leading-none dark:border-zinc-600">
                  ♡
                </span>
                Add to Wishlist
              </button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ProductOverviewPage;
