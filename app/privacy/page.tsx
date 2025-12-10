import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Privacy <span className="text-[#DC143C]">Policy</span>
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
            <p>
              One Dash Jamaican Marinade & Seasoning Co. ("One Dash", "we", "us", or "our") is committed 
              to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Information We Collect</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <p>
                  We may collect personal information that you provide to us, including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Shipping address</li>
                  <li>Billing information</li>
                  <li>Phone number</li>
                  <li>Payment information (processed securely through our payment processor)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your 
                  device, including information about your web browser, IP address, time zone, and some of 
                  the cookies that are installed on your device.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our products</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Payment processors to handle transactions</li>
              <li>Shipping carriers to deliver your orders</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal 
              information. However, no method of transmission over the Internet or electronic storage is 
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Cookies</h2>
            <p>
              We use cookies to enhance your experience on our website. Cookies are small files stored on your 
              device that help us remember your preferences and improve site functionality. You can choose to 
              disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected information 
              from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of 
              residence. These countries may have data protection laws that differ from those in your country.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <p className="mt-2">
              <strong>One Dash Enterprises</strong><br />
              Main Street, Bog Walk<br />
              St. Catherine, Jamaica<br />
              Tel: (876) 254-4622
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

