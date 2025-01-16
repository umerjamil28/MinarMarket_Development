import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex flex-col py-4 gap-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            MINAR MARKET
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="/products"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span className="text-xl">🛍️</span>
              Products
            </Link>
            <Link
              href="/services" 
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span className="text-xl">🔧</span>
              Services
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sell">Buy/Sell</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for products..."
              className="pl-8"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

