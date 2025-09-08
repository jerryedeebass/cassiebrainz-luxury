"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"

// Sample product data
const products = {
  "polo-classic-2025": {
    id: "polo-classic-2025",
    name: "Cassie Tees-Introduction",
    price: 280,
    productionMonth: "September 2025",
    totalProduced: 50,
    remaining: 45,
    description:
      "A timeless piece that embodies the essence of luxury casual wear. Crafted from premium cotton with threaded details.",
    image: "/polo-classic-2025(male).jpg?height=400&width=400&text=Luxury+Comfort+Hoodie",
  
    features: [
      "Premium 100% Cotton",
      "Black CassieBrainz logo",
      "Limited to 50 pieces worldwide",
      "QR-coded authenticity verification",
      "Numbered edition certificate",
    ],
    year: 2025,
    edition: "Introduction Collection",
  },
  "tshirt-minimal-2025": {
    id: "tshirt-minimal-2025",
    name: "Cassie Crop Tees -Introduction(FEMALE)",
    price: 300,
    productionMonth: "September 2025",
    totalProduced: 50,
    remaining: 43,
    description: "Understated elegance meets modern comfort. The perfect foundation piece for the discerning woman.",
    image: "/polo-classic-2025(female).jpg?height=400&width=400&text=Luxury+Comfort+Hoodie",
    features: [
      "Premium 100% Cotton",
      "Black CassieBrainz logo",
      "Limited to 50 pieces worldwide",
      "QR-coded authenticity verification",
      "Numbered edition certificate",
    ],
    year: 2025,
    edition: "Introduction Collection",
  },
  "hoodie-luxury-2025": {
    id: "hoodie-luxury-2025",
    name: "Luxury Comfort Hoodie",
    price: 449,
    productionMonth: "March 2025",
    totalProduced: 30,
    remaining: 8,
    description:
      "Where comfort meets luxury. This hoodie redefines casual sophistication with premium materials and impeccable craftsmanship.",
    image: "/placeholder.svg?height=600&width=600&text=Luxury+Comfort+Hoodie",
    features: [
      "Cashmere-Cotton Blend",
      "Gold-plated hardware details",
      "Limited to 30 pieces worldwide",
      "QR-coded authenticity verification",
      "Hand-finished seams",
    ],
    year: 2025,
    edition: "Comfort Collection",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [showQR, setShowQR] = useState(false)
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl font-bold text-black mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/store">
              <Button className="bg-luxury-gold hover:bg-gold-dark text-black">Back to Store</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering the ${product.name} (${product.edition}) - $${product.price}. Please provide more details about availability and ordering process.`
    const instagramUrl = `https://www.instagram.com/cassiebrainz/`
    window.open(instagramUrl, "_blank")
  }

  const productUrl = `https://cassiebrainz.com/product/${product.id}`

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg shadow-2xl group-hover:shadow-3xl luxury-transition"
                />

                {/* Limited Edition Badge */}
                <div className="absolute top-6 left-6 bg-luxury-gold text-black px-4 py-2 rounded-full font-bold text-sm">
                  Limited Edition
                </div>

                {/* Stock Status */}
                <div className="absolute top-6 right-6">
                  <Badge
                    variant={product.remaining < 10 ? "destructive" : "secondary"}
                    className="text-sm font-semibold"
                  >
                    {product.remaining} remaining
                  </Badge>
                </div>
              </div>

              {/* QR Code Section */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg font-bold text-black">Authenticity Verification</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowQR(!showQR)}
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black"
                  >
                    {showQR ? "Hide QR" : "Show QR"}
                  </Button>
                </div>

                {showQR && (
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg border-2 border-luxury-gold">
                      <QRCodeSVG value={productUrl} size={150} bgColor="#ffffff" fgColor="#000000" level="M" />
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-600 mt-4">
                  Scan this QR code to verify authenticity and view product details on any device.
                </p>
              </Card>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                    {product.edition}
                  </Badge>
                  <Badge variant="outline">{product.year}</Badge>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">{product.name}</h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">{product.description}</p>

                <div className="luxury-gold text-4xl font-bold mb-6">${product.price}</div>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-black mb-2">Production</h3>
                  <p className="text-gray-600">{product.productionMonth}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Edition Size</h3>
                  <p className="text-gray-600">{product.totalProduced} pieces</p>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Available</h3>
                  <p className="text-gray-600">{product.remaining} remaining</p>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Status</h3>
                  <p className={`font-semibold ${product.remaining > 0 ? "text-green-600" : "text-red-600"}`}>
                    {product.remaining > 0 ? "In Stock" : "Sold Out"}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-serif text-xl font-bold text-black mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href={`/hall-of-fame/${product.id}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-black text-black hover:bg-black hover:text-white luxury-transition bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    View Hall of Fame
                  </Button>
                </Link>

                <Button
                  size="lg"
                  onClick={handleWhatsAppOrder}
                  disabled={product.remaining === 0}
                  className="w-full bg-luxury-gold hover:bg-gold-dark text-black font-semibold luxury-transition hover-gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                  </svg>
                  {product.remaining > 0 ? "Message us on Instagram to Order" : "Sold Out"}
                </Button>
              </div>

              {/* Exclusivity Notice */}
              <Card className="bg-gray-50 p-6">
                <h3 className="font-serif text-lg font-bold text-black mb-2">Exclusivity Notice</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  This is a limited edition piece from CassieBrainz. Once sold out, it will never be reproduced. Each
                  purchase includes a numbered certificate of authenticity and lifetime verification through our QR
                  system.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
