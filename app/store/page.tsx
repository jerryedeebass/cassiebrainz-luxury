"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

// Sample data for collections
const collections = {
  2025: [
    {
      id: "polo-classic-2025",
      name: "Cassie Tees-Introduction(MALE)",
      price: 280,
      productionMonth: "September 2025",
      releaseMonth: "October 2025",
      totalProduced: 50,
      remaining: 45,
      image: "/polo-classic-2025(male).jpg?height=400&width=400&text=Luxury+Comfort+Hoodie",
    },
     {
      id: "tshirt-minimal-2025",
      name: "Cassie Crop Tees -Introduction(FEMALE)",
      price: 300,
      productionMonth: "September 2025",
      releaseMonth: "October 2025",
      totalProduced: 50,
      remaining: 43,
      image: "/polo-classic-2025(female).jpg?height=400&width=400&text=Luxury+Comfort+Hoodie",
    },
  ],
}

export default function StorePage() {
  const [selectedYear, setSelectedYear] = useState(2025)
  const years = Object.keys(collections).map(Number).sort()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-6">
              Our <span className="luxury-gold">Collections</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover limited edition pieces crafted for those who appreciate true luxury and exclusivity.
            </p>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6"></div>
          </div>

          {/* Year Selection */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-50 p-2 rounded-full">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-8 py-3 rounded-full font-semibold luxury-transition ${
                    selectedYear === year
                      ? "bg-luxury-gold text-black shadow-lg"
                      : "text-gray-600 hover:text-black hover:bg-white"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Collection Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections[selectedYear as keyof typeof collections]?.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl luxury-transition hover-gold-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 luxury-transition"
                  />

                  {/* Stock indicator */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.remaining < 10
                          ? "bg-red-500 text-white"
                          : product.remaining < 20
                            ? "bg-yellow-500 text-black"
                            : "bg-green-500 text-white"
                      }`}
                    >
                      {product.remaining} left
                    </div>
                  </div>

                  {/* Limited Edition Badge */}
                  <div className="absolute top-4 left-4 bg-luxury-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                    Limited Edition
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-black mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm">Released: {product.releaseMonth}</p>
                    <p className="text-gray-600 text-sm">Production: {product.productionMonth}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="luxury-gold text-2xl font-bold">${product.price}</p>
                      <p className="text-gray-500 text-sm">
                        {product.remaining}/{product.totalProduced} available
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href={`/product/${product.id}`}>
                      <Button
                        className="w-full bg-black hover:bg-luxury-gold hover:text-black text-white luxury-transition font-semibold"
                        size="lg"
                      >
                        View Details and Proceed to Order
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty state for years with no products */}
          {!collections[selectedYear as keyof typeof collections] && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-black mb-2">Coming Soon</h3>
              <p className="text-gray-600">New collections for {selectedYear} are currently in development.</p>
            </div>
          )}

          {/* Collection Stats */}
          <div className="mt-20 bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="luxury-gold text-3xl font-bold font-serif mb-2">
                  {collections[selectedYear as keyof typeof collections]?.length || 0}
                </div>
                <p className="text-gray-600 font-medium">Pieces in Collection</p>
              </div>

              <div>
                <div className="luxury-gold text-3xl font-bold font-serif mb-2">
                  {collections[selectedYear as keyof typeof collections]?.reduce(
                    (sum, product) => sum + product.totalProduced,
                    0,
                  ) || 0}
                </div>
                <p className="text-gray-600 font-medium">Total Produced</p>
              </div>

              <div>
                <div className="luxury-gold text-3xl font-bold font-serif mb-2">
                  {collections[selectedYear as keyof typeof collections]?.reduce(
                    (sum, product) => sum + product.remaining,
                    0,
                  ) || 0}
                </div>
                <p className="text-gray-600 font-medium">Still Available</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
