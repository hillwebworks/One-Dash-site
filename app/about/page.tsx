import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#DC143C] to-[#B8122F] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-[#FFD700]">One Dash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Authentic Jamaican Flavor, Made with Passion
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="relative">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-[#FFD700]">
                  <Image
                    src="/images/pfp_horizontal_bingy.png"
                    alt="Chef Bingy - Founder of One Dash"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#DC143C] text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3">
                  <p className="font-bold text-lg">Chef Bingy</p>
                  <p className="text-sm">Founder & Creator</p>
                </div>
              </div>

              {/* Founder Text */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-gray-800">
                    Meet <span className="text-[#DC143C]">Chef Bingy</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#DC143C] to-[#FFD700] mb-6"></div>
                </div>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <strong className="text-[#DC143C]">Chef Bingy</strong> is the heart and soul behind One Dash. 
                    With a passion for authentic Jamaican cuisine and a commitment to bringing traditional 
                    flavors to kitchens worldwide, Chef Bingy has created something truly special.
                  </p>
                  <p>
                    Born and raised in Jamaica, Chef Bingy learned the art of seasoning and marinating from 
                    generations of family recipes. His vision was simple: make authentic Jamaican flavor 
                    accessible to everyone, without compromising on quality or tradition.
                  </p>
                  <p>
                    Every product in the One Dash line is crafted with care, using <strong className="text-[#00AA00]">100% natural ingredients</strong>{' '}
                    sourced directly from Jamaica. No artificial flavors, no preservatives—just pure, 
                    authentic taste that brings the vibrant spirit of Jamaica to your table.
                  </p>
                  <p className="text-xl font-semibold text-[#DC143C] italic">
                    "One Dash is all you need—authentic flavor in every dash!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Our <span className="text-[#DC143C]">Story</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#DC143C] to-[#FFD700] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                The Journey of One Dash
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FFD700]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      The <span className="text-[#DC143C]">Beginning</span>
                    </h3>
                    <p className="text-lg text-gray-700">
                      One Dash was born from a simple idea: making authentic Jamaican seasoning accessible 
                      to everyone. Chef Bingy started experimenting with traditional family recipes, 
                      blending the perfect combination of spices and herbs that would become the signature 
                      One Dash flavor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#00AA00]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#00AA00] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      The <span className="text-[#00AA00]">Mission</span>
                    </h3>
                    <p className="text-lg text-gray-700">
                      Our commitment has always been to use only natural, locally sourced Jamaican ingredients. 
                      We believe that authentic flavor comes from authentic ingredients—no shortcuts, no 
                      compromises. Every batch is made with the same care and attention to detail that 
                      Chef Bingy brings to his own kitchen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DC143C]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      Growing <span className="text-[#DC143C]">Together</span>
                    </h3>
                    <p className="text-lg text-gray-700">
                      Today, One Dash continues to grow, bringing authentic Jamaican flavor to households 
                      around the world. We're proud to share our culture, our traditions, and our passion 
                      for great food with every jar we produce. Join us on this journey and experience 
                      the authentic taste of Jamaica in every dash.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Our <span className="text-[#FFD700]">Values</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#DC143C] mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#DC143C] to-[#B8122F] text-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">🇯🇲</div>
                <h3 className="text-2xl font-bold mb-3">Authentic</h3>
                <p className="text-gray-100">
                  Made with traditional Jamaican recipes and locally sourced ingredients
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFC700] text-[#DC143C] p-8 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold mb-3">Natural</h3>
                <p className="text-gray-800">
                  100% natural ingredients with no artificial flavors or preservatives
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00AA00] to-[#008800] text-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-3">Made with Love</h3>
                <p className="text-gray-100">
                  Every product is crafted with care and passion for authentic flavor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#DC143C] to-[#B8122F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Authentic Jamaican Flavor?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Discover our range of all-natural marinades and seasonings
          </p>
          <Link
            href="/products-page"
            className="inline-block bg-[#FFD700] hover:bg-[#FFC700] text-[#DC143C] font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
          >
            Shop Our Products
          </Link>
        </div>
      </section>
    </div>
  );
}
