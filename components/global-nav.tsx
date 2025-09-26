"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Settings, Bell, Shield, HelpCircle, User, Store } from "lucide-react"

export default function GlobalNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu" className="shrink-0 bg-transparent">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80 sm:w-96 p-0">
        <div className="px-4 py-3 border-b">
          <p className="text-sm font-medium text-foreground">Menu</p>
          <p className="text-xs text-muted-foreground">Quick access</p>
        </div>

        <nav className="divide-y">
          <Link href="/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-muted">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Settings</span>
          </Link>

          <Link href="/notifications" className="flex items-center gap-3 px-4 py-3 hover:bg-muted">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Notifications</span>
          </Link>

          <Link href="/privacy" className="flex items-center gap-3 px-4 py-3 hover:bg-muted">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Privacy</span>
          </Link>

          <Link href="/help" className="flex items-center gap-3 px-4 py-3 hover:bg-muted">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Help</span>
          </Link>

          <Link href="/browse" className="flex items-center gap-3 px-4 py-3 hover:bg-muted">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Buyer</span>
          </Link>

          <Link href="/seller" className="flex items-center gap-3 px-4 py-3 hover:bg-muted">
            <Store className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Seller</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
