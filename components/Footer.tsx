import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#DC143C]">ONE</span>
              <span className="text-[#FFD700]"> DASH</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Authentic Jamaican flavor in every dash. All-natural marinades and seasonings 
              made with locally sourced ingredients from Jamaica.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Mission:</strong> To bring authentic Jamaican flavor to households worldwide 
              using natural, locally sourced ingredients that deliver convenience, health, and cultural pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products-page" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="text-gray-400 text-sm mt-4">
                <strong>Contact:</strong><br />
                Main Street, Bog Walk<br />
                St. Catherine, Jamaica<br />
                Tel: (876) 254-4622
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} One Dash Enterprises. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ in Jamaica</p>
        </div>
      </div>
    </footer>
  );
}

