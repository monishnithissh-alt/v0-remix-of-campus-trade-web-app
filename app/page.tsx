"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <header className="hidden">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl">
            CampTrade
          </Link>
          <nav className="flex items-center gap-3">
            <Link href="/browse" className="underline underline-offset-4">
              Browse
            </Link>
            <Link href="/seller/home" className="underline underline-offset-4">
              Seller
            </Link>
            <Link href="/login">
              <Button variant="default">Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-balance">Buy, sell, and swap items on campus</h1>
            <p className="text-muted-foreground text-pretty">
              Find textbooks, electronics, clothes and more from trusted students. Smooth, app-like experience with a
              secure checkout.
            </p>
            <div className="flex gap-3">
              <Link href="/browse">
                <Button>Start Browsing</Button>
              </Link>
              <Link href="/seller/products/new">
                <Button variant="secondary">List an Item</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-xl border bg-card p-4"
          >
            {/* hero mock with cards */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg border p-3">
                  <div className="aspect-video w-full rounded-md bg-muted mb-3 overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=300&query=product%20preview%20card`}
                      alt="Product preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-medium">Sample item {i + 1}</div>
                  <div className="text-sm text-muted-foreground">₹29</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm">
          <span>© {new Date().getFullYear()} CampTrade</span>
          <div className="flex gap-4">
            <Link href="/tos" className="underline underline-offset-4">
              TOS
            </Link>
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/help" className="underline underline-offset-4">
              Help
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
