"use client";

import { listPrints } from "@/lib/media";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

const STORAGE_KEY = "myphoto-cart";

type CartItem = {
  id: string;
  title: string;
  size: string;
  paper: string;
  quantity: number;
  price: number;
};

export default function PrintsPage() {
  const prints = listPrints();
  const [hovered, setHovered] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id && entry.size === item.size && entry.paper === item.paper);
      if (existing) {
        return current.map((entry) =>
          entry === existing ? { ...entry, quantity: entry.quantity + item.quantity } : entry
        );
      }
      return [...current, item];
    });
    setCartOpen(true);
  };

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6 pb-32 pt-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Shop</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Limited prints</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Hover to view framed vs unframed, pick your paper texture, and add to a spring-animated cart stored locally.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        {prints.map((print) => (
          <TiltCard key={print.id} print={print} hovered={hovered} setHovered={setHovered} onAdd={addToCart} />
        ))}
      </div>

      <AnimatePresence>
        {cartOpen ? (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-md border-l border-white/10 bg-black/70 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-white/60">Cart</h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="flex h-full flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                {cart.length === 0 ? (
                  <p className="text-sm text-white/60">Your cart is empty.</p>
                ) : (
                  cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="rounded-2xl border border-white/10 p-4 text-white/70">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-xs uppercase tracking-[0.3em]">{item.size} · {item.paper}</p>
                      <p className="mt-2 text-sm">Qty {item.quantity}</p>
                      <p className="mt-1 text-sm text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-white/10 px-6 py-4 text-white">
                <div className="flex items-center justify-between text-sm">
                  <span className="uppercase tracking-[0.3em] text-white/60">Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="mt-4 w-full rounded-full border border-magenta/60 py-3 text-sm uppercase tracking-[0.4em] text-magenta/80 transition hover:border-magenta hover:text-magenta">
                  Checkout
                </button>
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

type TiltCardProps = {
  print: ReturnType<typeof listPrints>[number];
  hovered: string | null;
  setHovered: (id: string | null) => void;
  onAdd: (item: CartItem) => void;
};

function TiltCard({ print, hovered, setHovered, onAdd }: TiltCardProps) {
  const [size, setSize] = useState(print.sizes[0]);
  const [paper, setPaper] = useState(print.paper[0]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relY * -12, y: relX * 12 });
  };

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ rotateX: tilt.x, rotateY: tilt.y }}
      className="glass-panel flex flex-col gap-6 rounded-3xl border border-white/10 p-6"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-2xl"
        onMouseEnter={() => setHovered(print.id)}
        onMouseLeave={() => setHovered(null)}
      >
        <Image
          src={`${print.image}&auto=format&fit=crop&w=1200&q=80`}
          alt={print.title}
          fill
          className={classNames("object-cover transition duration-700", hovered === print.id ? "scale-105" : "scale-100")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{print.title}</h3>
        <p className="mt-2 text-sm text-white/70">{print.description}</p>
        <p className="mt-4 text-lg font-semibold text-white">${print.price.toFixed(2)}</p>
      </div>
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        {print.sizes.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSize(option)}
            className={classNames(
              "rounded-full border px-4 py-2 transition",
              size === option ? "border-magenta/70 text-magenta" : "border-white/15"
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        {print.paper.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setPaper(option)}
            className={classNames(
              "rounded-full border px-4 py-2 transition",
              paper === option ? "border-cyan/70 text-cyan" : "border-white/15"
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() =>
          onAdd({ id: print.id, title: print.title, paper, size, quantity: 1, price: print.price })
        }
        className="magnetic-button rounded-full border border-magenta/60 px-6 py-3 text-sm uppercase tracking-[0.4em] text-magenta/80 transition hover:border-magenta hover:text-magenta"
      >
        Add to cart
      </button>
    </motion.div>
  );
}
