"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// Sample owner data for Hall of Fame
const hallOfFameData = {
  "polo-classic-2025": {
    productName: "Cassie Tees-Introduction(MALE)",
    totalProduced: 50,
    owners: [
      { edition: 1, name: "Marcus Williams" },
      { edition: 2, name: "Isabella" },
      { edition: 3, name: "Kenny Blinks" },
      { edition: 4, name: "Pleasant" },
      { edition: 5, name: "Jay Cross" },
      
    ],
  },
  "tshirt-minimal-2025": {
    productName: "Cassie Crop Tees -Introduction(FEMALE)",
    totalProduced: 50,
    owners: [
      { edition: 1, name: "Sophia Martinez" },
      { edition: 2, name: "Amara Johnson" },
      { edition: 3, name: "Isabella Chen" },
      { edition: 4, name: "Fatima Ahmed" },
      { edition: 5, name: "Chloe Williams" },
      { edition: 6, name: "Naomi Okafor" },
      { edition: 7, name: "Elena Rossi" },
      
    ],
  },
  "hoodie-luxury-2025": {
    productName: "Luxury Comfort Hoodie",
    totalProduced: 30,
    owners: [
      { edition: 1, name: "Maximilian Ashworth" },
      { edition: 2, name: "Evangeline Beaumont" },
      { edition: 3, name: "Sebastian Rothschild" },
      { edition: 4, name: "Anastasia Pemberton" },
      { edition: 5, name: "Theodore Blackwell" },
      { edition: 6, name: "Cordelia Sterling" },
      { edition: 7, name: "Augustus Fairfax" },
      { edition: 8, name: "Seraphina Kensington" },
      { edition: 9, name: "Reginald Thornfield" },
      { edition: 10, name: "Beatrice Vanderbilt" },
      { edition: 11, name: "Alexander Ashford" },
      { edition: 12, name: "Victoria Montague" },
      { edition: 13, name: "Percival Sinclair" },
      { edition: 14, name: "Genevieve Harrington" },
      { edition: 15, name: "Bartholomew Worthington" },
      { edition: 16, name: "Arabella Pembroke" },
      { edition: 17, name: "Cornelius Fitzpatrick" },
      { edition: 18, name: "Octavia Blackthorne" },
      { edition: 19, name: "Nathaniel Aldridge" },
      { edition: 20, name: "Vivienne Westfield" },
      { edition: 21, name: "Leonardo Beauregard" },
      { edition: 22, name: "Isadora Montclair" },
    ],
  },
}

export default function HallOfFamePage({ params }: { params: { id: string } }) {
  const productData = hallOfFameData[params.id as keyof typeof hallOfFameData]

  if (!productData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl font-bold text-black mb-4">Hall of Fame Not Found</h1>
            <p className="text-gray-600 mb-8">The Hall of Fame for this product doesn't exist.</p>
            <Link href="/store">
              <Button className="bg-luxury-gold hover:bg-gold-dark text-black">Back to Store</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const soldCount = productData.owners.length
  const remainingCount = productData.totalProduced - soldCount

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Link href={`/product/${params.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black bg-transparent"
                >
                  ← Back to Product
                </Button>
              </Link>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-4">
              Hall of <span className="luxury-gold">Fame</span>
            </h1>

            <h2 className="font-serif text-2xl md:text-3xl text-gray-700 mb-6">{productData.productName}</h2>

            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>

            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="luxury-gold text-3xl font-bold font-serif">{soldCount}</div>
                <p className="text-gray-600 font-medium">Owners</p>
              </div>
              <div>
                <div className="luxury-gold text-3xl font-bold font-serif">{remainingCount}</div>
                <p className="text-gray-600 font-medium">Available</p>
              </div>
              <div>
                <div className="luxury-gold text-3xl font-bold font-serif">{productData.totalProduced}</div>
                <p className="text-gray-600 font-medium">Total Edition</p>
              </div>
            </div>
          </div>

          {/* Hall of Fame Table */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="font-serif text-2xl text-center text-black">Distinguished Owners</CardTitle>
              <p className="text-center text-gray-600">
                An exclusive community of individuals who appreciate true luxury
              </p>
            </CardHeader>

            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-serif text-lg">Edition No.</th>
                      <th className="px-6 py-4 text-left font-serif text-lg">Owner</th>
                      <th className="px-6 py-4 text-center font-serif text-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: productData.totalProduced }, (_, index) => {
                      const editionNumber = index + 1
                      const owner = productData.owners.find((o) => o.edition === editionNumber)

                      return (
                        <tr
                          key={editionNumber}
                          className={`border-b border-gray-100 hover:bg-gray-50 luxury-transition ${
                            owner ? "bg-white" : "bg-gray-50"
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                                {editionNumber}
                              </div>
                              <span className="font-semibold text-black">
                                {editionNumber}/{productData.totalProduced}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {owner ? (
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-gray-600 font-semibold text-sm">
                                    {owner.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </div>
                                <span className="font-medium text-black">{owner.name}</span>
                              </div>
                            ) : (
                              <span className="text-gray-400 italic">Available</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {owner ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                Owned
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                                Available
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Exclusivity Message */}
          <div className="mt-16 text-center">
            <Card className="bg-gray-50 p-8 max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-black mb-4">Join the Elite</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every CassieBrainz owner becomes part of an exclusive community. Your name will be permanently recorded
                in our Hall of Fame, celebrating your appreciation for true luxury and exclusivity.
              </p>
              <Link href={`/product/${params.id}`}>
                <Button className="bg-luxury-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 luxury-transition hover-gold-glow">
                  Secure Your Edition
                </Button>
              </Link>
            </Card>
          </div>

          {/* Legend */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 rounded"></div>
                <span className="text-gray-600">Owned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-100 rounded"></div>
                <span className="text-gray-600">Available</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
