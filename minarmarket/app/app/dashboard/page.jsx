
import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { ProductCard } from "@/components/product-card"
import { ScrollArea } from "@/components/ui/scroll-area"

const categories = Array.from({ length: 9 }).map((_, i) => ({
  id: `category-${i + 1}`,
  name: `Category ${i + 1}`,
  image: "https://placehold.co/600x600/png",
}))

const topSellingProducts = [
  {
    id: "1",
    title: "T-shirt with Tape Details",
    image: "https://placehold.co/600x400/png",
    price: 120,
    rating: 4.5,
    type: "Product",
  },
  {
    id: "2",
    title: "Fit Shirt",
    image: "https://placehold.co/600x400/png",
    price: 230,
    originalPrice: 260,
    rating: 3.5,
    type: "Service",
  },
  {
    id: "3",
    title: "Fit Jeans",
    image: "https://placehold.co/600x400/png",
    price: 20,
    originalPrice: 260,
    rating: 3.5,
    type: "Service",
  },
  {
    id: "3",
    title: "Fit Jeans",
    image: "https://placehold.co/600x400/png",
    price: 20,
    originalPrice: 260,
    rating: 3.5,
    type: "Product",
  },
  {
    id: "3",
    title: "Fit Jeans",
    image: "https://placehold.co/600x400/png",
    price: 20,
    originalPrice: 260,
    rating: 3.5,
    type: "Product",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col px-4">
      <Header />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-4 md:py-6">
        <SidebarNav />
        <main className="flex w-full flex-col gap-8 ">
          <section>
            <h2 className="mb-6 text-2xl font-bold">Product Categories</h2>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-9">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground"
                >
                  <div className="relative aspect-square w-12">
                    <img
                      src={category.image || ""}
                      alt={category.name}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <span className="text-xs">{category.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Service Categories</h2>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-9">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground"
                >
                  <div className="relative aspect-square w-12">
                    <img
                      src={category.image || ""}
                      alt={category.name}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <span className="text-xs">{category.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="container py-8">
            <h2 className="mb-8 text-2xl font-bold">TOP SELLING</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {topSellingProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

