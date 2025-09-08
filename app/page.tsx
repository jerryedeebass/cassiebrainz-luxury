import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Main Tagline */}
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-black leading-tight">
              <span className="block">Luxury You Can</span>
              <span className="luxury-gold">Trust</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Exclusivity. Style. Recognition.
            </p>

            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto mt-16">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover-gold-glow luxury-transition">
                <img
                  src="/luxury-cassiebrainz-polo-shirt-on-elegant-model-bl.jpg"
                  alt="CassieBrainz Luxury Polo Shirt"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-luxury-gold text-black px-6 py-3 rounded-full font-serif font-bold text-sm luxury-transition hover:scale-105">
                Limited Edition
              </div>

              <div className="absolute -bottom-4 -left-4 bg-black text-white px-6 py-3 rounded-full font-medium text-sm luxury-transition hover:scale-105">
                Numbered & Verified
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link href="/store">
                <Button
                  size="lg"
                  className="bg-luxury-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-full luxury-transition hover-gold-glow"
                >
                  Explore Collections
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full luxury-transition bg-transparent"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">Authenticity Verified</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece comes with QR-coded verification ensuring genuine CassieBrainz quality.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">Limited Production</h3>
                <p className="text-gray-600 leading-relaxed">
                  Numbered editions with transparent production counts. True exclusivity guaranteed.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">Hall of Fame</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join an exclusive community. Every owner becomes part of our prestigious Hall of Fame.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
