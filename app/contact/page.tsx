"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const handleWhatsAppContact = () => {
    const message = "Hello CassieBrainz! I'm interested in learning more about your luxury collections."
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:contact@cassiebrainz.com"
  }

  const handleInstagramContact = () => {
    window.open("https://instagram.com/cassiebrainz", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-6">
              Contact <span className="luxury-gold">CassieBrainz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're here to assist you with your luxury fashion needs. Reach out to us through any of the channels
              below.
            </p>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <Card
              className="group hover:shadow-2xl luxury-transition hover-gold-glow cursor-pointer"
              onClick={handleEmailContact}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 luxury-transition">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">Email Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">For inquiries, support, and exclusive updates</p>
                <p className="luxury-gold font-semibold">contact@cassiebrainz.com</p>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card
              className="group hover:shadow-2xl luxury-transition hover-gold-glow cursor-pointer"
              onClick={handleInstagramContact}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 luxury-transition">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">Follow Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Behind-the-scenes and exclusive content</p>
                <p className="luxury-gold font-semibold">@cassiebrainz</p>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            {/*<Card
              className="group hover:shadow-2xl luxury-transition hover-gold-glow cursor-pointer"
              onClick={handleWhatsAppContact}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 luxury-transition">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">Chat With Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Instant support and personalized assistance</p>
                <p className="luxury-gold font-semibold">WhatsApp Direct</p>
              </CardContent>
            </Card>*/}
          </div>

          {/* Main Contact Section */}
          <div className="bg-gray-50 rounded-lg p-12 text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-black mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you're interested in our latest collections, need assistance with an order, or want to learn more
              about our exclusive membership program, we're here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-luxury-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 luxury-transition hover-gold-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                </svg>
                Start WhatsApp Chat
              </Button> */}

              <Button
                onClick={handleEmailContact}
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 luxury-transition bg-transparent"
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Business Hours & Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-serif text-xl font-bold text-black mb-4 flex items-center">
                <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Response Times
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                 {/* <span>WhatsApp:</span>
                  <span className="font-semibold">Instant</span>*/}
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-semibold">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Instagram DM:</span>
                  <span className="font-semibold">Same day</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-serif text-xl font-bold text-black mb-4 flex items-center">
                <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Support Areas
              </h3>
              <div className="space-y-2 text-gray-700">
                <div>• Product inquiries</div>
                <div>• Order assistance</div>
                <div>• Authentication verification</div>
                <div>• Exclusive membership</div>
                <div>• Custom requests</div>
              </div>
            </Card>
          </div>

          {/* Exclusive Notice */}
          <div className="mt-16 text-center">
            <Card className="bg-black text-white p-8">
              <h3 className="font-serif text-2xl font-bold luxury-gold mb-4">Exclusive Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Join our exclusive community to receive early access to new collections, private sales, and personalized
                styling consultations.
                <span className="luxury-gold font-semibold"> CassieBrainz is not for everyone.</span>
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
