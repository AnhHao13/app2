"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Kiểm tra localStorage khi component mount (chỉ chạy ở client-side)
    if (typeof window !== "undefined") {
      const shouldShow = localStorage.getItem("newsletter-popup-hidden");
      if (!shouldShow) {
        // Delay một chút để modal hiển thị sau khi trang load
        const timer = setTimeout(() => {
          setOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = (shouldSave: boolean = false) => {
    setOpen(false);
    if (shouldSave && dontShowAgain && typeof window !== "undefined") {
      localStorage.setItem("newsletter-popup-hidden", "true");
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      // Khi đóng bằng backdrop, không lưu checkbox
      setOpen(false);
    } else {
      setOpen(isOpen);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng ký email ở đây
    console.log("Email đăng ký:", email);
    // Sau khi đăng ký thành công, đóng modal
    handleClose(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <DialogClose onClick={() => handleClose(true)} />

        <div className="flex flex-col md:flex-row">
          {/* Phần ảnh bên trái */}
          <div className="relative w-full md:w-2/5 h-64 md:h-[500px]">
            <Image
              src="/pic/1.jpg"
              alt="Sản phẩm OCOP Việt Nam"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Phần form bên phải */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Tham gia cộng đồng OCOP – Nhận ưu đãi 20%
            </h2>

            <p className="text-gray-600 mb-8 text-base md:text-lg">
              Nhận thông tin đặc sản mới và ưu đãi độc quyền.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pr-10 h-12 text-base"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <Button
                  type="submit"
                  className="h-12 px-8 bg-black text-white hover:bg-gray-800 font-semibold whitespace-nowrap"
                >
                  Đăng ký ngay
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Bằng cách đăng ký, bạn đồng ý với chính sách quyền riêng tư của
                chúng tôi.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <Checkbox
                  id="dont-show-again"
                  checked={dontShowAgain}
                  onCheckedChange={(checked) =>
                    setDontShowAgain(checked === true)
                  }
                />
                <label
                  htmlFor="dont-show-again"
                  className="text-sm text-gray-700 cursor-pointer select-none"
                >
                  Không hiển thị lại
                </label>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
