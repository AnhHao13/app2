"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Img1 from "@/pic/1.jpg";
import Img2 from "@/pic/2.jpg";
import Img3 from "@/pic/3.jpg";
import { Trash2, Clock, CreditCard } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: any;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Mật ong rừng nguyên chất",
    variant: "500g",
    price: 250000,
    quantity: 1,
    image: Img1,
  },
  {
    id: 2,
    name: "Cà phê đặc sản Tây Nguyên",
    variant: "Hộp quà",
    price: 320000,
    quantity: 2,
    image: Img2,
  },
  {
    id: 3,
    name: "Trà thảo mộc địa phương",
    variant: "500g",
    price: 150000,
    quantity: 1,
    image: Img3,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% thuế
  const shipping = 0; // Miễn phí vận chuyển
  const total = subtotal + tax + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans dark:bg-black sm:px-6 lg:px-10">
      <main className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Cột trái: Danh sách sản phẩm */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Giỏ hàng của bạn
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {cartItems.length} sản phẩm trong giỏ hàng
              </p>
            </div>

            {/* Danh sách sản phẩm */}
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 dark:bg-zinc-950 dark:ring-zinc-800"
                >
                  <div className="flex gap-6">
                    {/* Ảnh sản phẩm */}
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        width={128}
                        height={128}
                      />
                      <div className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                            {item.name}
                          </h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Phân loại: {item.variant}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Đổi trả trong 7 ngày</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                          aria-label="Xóa sản phẩm"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Số lượng */}
                        <div className="flex items-center gap-3">
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                          >
                            Số lượng:
                          </label>
                          <select
                            id={`quantity-${item.id}`}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="h-9 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-900 shadow-sm transition-colors focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Giá */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                              {formatPrice(item.price)} / sản phẩm
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: Sidebar */}
          <div className="space-y-6">
            {/* Mã giảm giá */}
            <Card className="rounded-3xl border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  Áp dụng mã giảm giá
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Bạn có mã khuyến mãi?
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Mã giảm giá"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 rounded-xl border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                  />
                  <Button
                    className="rounded-xl bg-zinc-900 px-6 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Áp dụng
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chi tiết thanh toán */}
            <Card className="rounded-3xl border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  Chi tiết thanh toán
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">
                      Tạm tính
                    </span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-50">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">
                      Thuế 10%
                    </span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-50">
                      +{formatPrice(tax)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">
                      Phí vận chuyển
                    </span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Miễn phí giao hàng
                    </span>
                  </div>
                  <div className="border-t border-zinc-200 pt-3 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                        Tổng tiền
                      </span>
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full rounded-xl bg-zinc-900 py-6 text-base font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Xác nhận đặt hàng
                </Button>

                <div className="space-y-2 pt-4">
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Chúng tôi chấp nhận:
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-blue-500 text-white">
                      <span className="text-xs font-bold">PayPal</span>
                    </div>
                    <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-orange-500 text-white">
                      <CreditCard className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
