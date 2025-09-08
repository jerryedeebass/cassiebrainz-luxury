import Link from "next/link"
import { notFound } from "next/navigation"

// Sample product data - in a real app, this would come from a database
const products = {
  "cassiebrainz-white-polo": {
    id: "cassiebrainz-white-polo",
    name: "CassieBrainz White Polo",
    price: 299,
    totalProduced: 50,
    remaining: 12,
  },
  "cassiebrainz-black-hoodie": {
    id: "cassiebrainz-black-hoodie",
    name: "CassieBrainz Black Hoodie",
    price: 449,
    totalProduced: 30,
    remaining: 5,
  },
  "cassiebrainz-gold-cap": {
    id: "cassiebrainz-gold-cap",
    name: "CassieBrainz Gold Cap",
    price: 199,
    totalProduced: 100,
    remaining: 23,
  },
}

export default function VerifyPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in duration-700">
        {/* Logo and Slogan */}
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-bold text-black">
            Cassie<span className="luxury-gold">Brainz</span>
          </h1>
          <p className="text-sm text-gray-600 font-medium tracking-wider uppercase">...not for Everyone</p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-text to-transparent w-16"></div>
          <div className="w-2 h-2 bg-gold-text rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-gold-text via-gold-text to-transparent w-16"></div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Product Name */}
          <h2 className="font-serif text-3xl font-bold text-black leading-tight">{product.name}</h2>

          {/* Product Cost */}
          <div className="relative">
            <p className="text-2xl font-bold text-black">${product.price} USD</p>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-gold-text to-amber-400"></div>
          </div>

          {/* Production Numbers */}
          <p className="text-lg text-gray-700 font-medium">
            Limited Edition: {product.totalProduced}/{product.totalProduced} Produced
          </p>

          {/* Verification Badge */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-gold-text rounded-lg p-6 space-y-3 shadow-lg">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-black">Verified Authentic</span>
            </div>
            <p className="text-sm font-medium text-gray-700">CassieBrainz Product</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Link
            href={`/hall-of-fame/${product.id}`}
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <span>Back to Website → Hall of Fame</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center pt-8">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gold-text rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-gold-text rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-1 h-1 bg-gold-text rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }))
}
