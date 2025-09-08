import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-6">
              About <span className="luxury-gold">CassieBrainz</span>
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Brand Statement */}
            <section className="text-center">
              <div className="bg-gray-50 p-12 rounded-lg luxury-transition hover:shadow-xl">
                <p className="text-xl md:text-2xl text-black leading-relaxed font-light">
                  <span className="font-serif font-bold luxury-gold text-2xl md:text-3xl">
                    CassieBrainz is not for everyone.
                  </span>
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  We are a luxury fashion house dedicated to{" "}
                  <span className="font-semibold text-black">exclusivity</span>,
                  <span className="font-semibold text-black"> recognition</span>, and
                  <span className="font-semibold text-black"> timeless style</span>. Every piece is limited edition,
                  numbered, and verified through our QR-coded authenticity system.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                  We design for those who value <span className="luxury-gold font-semibold">rarity</span>,
                  <span className="luxury-gold font-semibold"> prestige</span>, and
                  <span className="luxury-gold font-semibold"> individuality</span>.
                </p>
              </div>
            </section>

            {/* Values Grid */}
            <section className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-black">Exclusivity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">
                  Each collection is strictly limited. When it's gone, it's gone forever. No mass production, no
                  compromises on rarity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-black">Recognition</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">
                  Join an elite community. Every owner becomes part of our Hall of Fame, celebrating those who
                  appreciate true luxury.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-black">Authenticity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">
                  Every piece features our proprietary QR verification system. Scan to confirm authenticity and view
                  ownership history.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-black">Craftsmanship</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">
                  Timeless design meets modern innovation. Each piece is meticulously crafted to stand the test of time
                  and trends.
                </p>
              </div>
            </section>

            {/* Quote Section */}
            <section className="text-center py-16 border-t border-b border-gray-200">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-black leading-relaxed">
                "Luxury is not about being flashy. It's about being
                <span className="luxury-gold font-bold"> unforgettable</span>."
              </blockquote>
              <cite className="block mt-6 text-gray-600 font-medium">— CassieBrainz Design Philosophy</cite>
            </section>

            {/* Process Section */}
            <section className="space-y-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-black">
                Our <span className="luxury-gold">Process</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto font-serif text-xl font-bold">
                    01
                  </div>
                  <h3 className="font-serif text-xl font-bold text-black">Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each piece begins with a vision of timeless elegance, carefully refined through multiple iterations.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto font-serif text-xl font-bold">
                    02
                  </div>
                  <h3 className="font-serif text-xl font-bold text-black">Craft</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Limited production runs ensure quality control and maintain the exclusivity our clients expect.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto font-serif text-xl font-bold">
                    03
                  </div>
                  <h3 className="font-serif text-xl font-bold text-black">Verify</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each piece receives a unique QR code for authentication and becomes part of our permanent record.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
