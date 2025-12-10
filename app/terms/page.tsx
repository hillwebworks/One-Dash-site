import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Terms of <span className="text-[#DC143C]">Service</span>
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
            <p>
              Welcome to One Dash Jamaican Marinade & Seasoning Co. ("One Dash", "we", "us", or "our"). 
              These Terms of Service ("Terms") govern your access to and use of our website and services. 
              By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. About One Dash</h2>
            <p>
              One Dash is an authentic Jamaican food brand dedicated to delivering authentic Jamaican 
              flavor through all-natural, ready-to-use marinades and seasonings. Our products are made 
              with 100% Jamaican-grown ingredients and contain no artificial flavoring, colorings, or preservatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Products and Pricing</h2>
            <p>
              All products are subject to availability. We reserve the right to discontinue any product 
              at any time. Prices are displayed in USD and are subject to change without notice. 
              Shipping costs are calculated at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Orders and Payment</h2>
            <p>
              When you place an order, you are making an offer to purchase products at the prices listed. 
              We reserve the right to accept or reject any order. Payment will be processed through our 
              secure payment processor (Stripe integration coming soon).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Shipping and Delivery</h2>
            <p>
              We currently ship within Jamaica and are expanding to international markets. Shipping times 
              and costs will be calculated at checkout. We are not responsible for delays caused by shipping 
              carriers or customs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Returns and Refunds</h2>
            <p>
              If you are not satisfied with your purchase, please contact us within 30 days of receipt. 
              We will work with you to resolve any issues. Refunds will be processed according to our 
              refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Product Information</h2>
            <p>
              We strive to provide accurate product information, including descriptions, ingredients, and 
              nutritional information. However, we do not warrant that product descriptions or other 
              content on this site is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and videos, is the 
              property of One Dash Enterprises and is protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Limitation of Liability</h2>
            <p>
              One Dash shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use of or inability to use our website or products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <p className="mt-2">
              <strong>One Dash Enterprises</strong><br />
              Main Street, Bog Walk<br />
              St. Catherine, Jamaica<br />
              Tel: (876) 254-4622
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting. Your continued use of our website constitutes acceptance of any changes.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block text-[#DC143C] hover:text-[#B8122F] font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

