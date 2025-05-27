import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HomeGeeni Blog",
  description:
    "HomeGeeni's Privacy Policy explaining how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            HomeGeeni Privacy Policy
          </h1>
          <div className="text-sm text-gray-600 mb-8">
            <p>
              <strong>Effective Date:</strong> May 9, 2025
            </p>
            <p>
              <strong>Last Updated:</strong> May 9, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              HomeGeeni Inc. (USA) and HomeGeeni Technologies Pvt. Ltd. (India)
              ("HomeGeeni," "we," "our," or "us") are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              websites, mobile apps, and real estate services (collectively, the
              "Services").
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information in several ways, including:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              a. Information You Provide
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and address</li>
              <li>Property preferences and saved listings</li>
              <li>Content you upload (e.g., listings, messages, feedback)</li>
              <li>Payment and billing details (for premium services)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              b. Information We Collect Automatically
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and device/browser information</li>
              <li>Location data (if enabled)</li>
              <li>
                Usage activity (pages visited, filters applied, listings viewed)
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              c. Information from Third Parties
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Public property databases, listing services, or partner
                platforms
              </li>
              <li>Payment processors or identity verification services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide and personalize our Services</li>
              <li>Deliver property recommendations using AI algorithms</li>
              <li>Facilitate communication with buyers, sellers, and agents</li>
              <li>Process payments and subscriptions</li>
              <li>Respond to inquiries and support requests</li>
              <li>Prevent fraud and enhance platform security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. How We Share Your Information
            </h2>
            <p className="mb-3">We may share your information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                With real estate professionals, agents, or service providers
                involved in your transaction
              </li>
              <li>
                With third-party vendors supporting our platform (e.g., cloud
                hosting, analytics, payment processing)
              </li>
              <li>With affiliates and subsidiaries</li>
              <li>
                With law enforcement, government agencies, or legal counsel when
                required
              </li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
            <p className="mb-6">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Your Privacy Choices
            </h2>
            <p className="mb-3">You have control over your data:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                You may update or correct your account information at any time.
              </li>
              <li>You can opt out of non-essential emails and marketing.</li>
              <li>
                You can disable cookies or location tracking via your device or
                browser settings.
              </li>
              <li>
                You may request to delete your account and associated data by
                contacting us at privacy@homegeeni.com.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="mb-6">
              We implement administrative, technical, and physical safeguards to
              protect your data. However, no system is 100% secure. You are
              responsible for maintaining the confidentiality of your account
              credentials.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              6. International Data Transfers
            </h2>
            <p className="mb-6">
              Data collected by HomeGeeni may be stored or processed in the
              United States, India, or other countries. We comply with local
              data protection laws, including the California Consumer Privacy
              Act (CCPA), EU GDPR, and India's Digital Personal Data Protection
              Act (DPDP).
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              7. Children's Privacy
            </h2>
            <p className="mb-6">
              HomeGeeni is not intended for use by children under the age of 13.
              We do not knowingly collect information from children without
              parental consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="mb-6">
              We may revise this Privacy Policy from time to time. The updated
              version will be posted on our website with a new effective date.
              Your continued use of the Services after such updates constitutes
              acceptance.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              9. Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions or concerns about this Privacy Policy or
              how we handle your data, contact us at:
            </p>
            <ul className="mt-2 mb-6 list-none">
              <li>
                <strong>Email (USA):</strong> privacy@homegeeni.com
              </li>
              <li>
                <strong>Email (India):</strong> privacy@homegeeni.in
              </li>
              <li>
                <strong>Mailing Address (USA):</strong> 123 Tech Drive, Suite
                500, San Francisco, CA 94103
              </li>
              <li>
                <strong>Mailing Address (India):</strong> 45 Innovation Park,
                Whitefield, Bangalore 560066
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-100">
              <p className="text-sm text-gray-600">
                <strong>About HomeGeeni's AI Recommendations:</strong> HomeGeeni
                uses AI-powered algorithms to personalize property
                recommendations based on your activity—such as listings you
                view, save, share, or filter. Our system analyzes patterns in
                your preferences and location to surface homes that match your
                interests. These recommendations are designed to help you
                discover the right property faster, without missing out.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                To provide this experience, we collect and use behavioral and
                location data in accordance with our Privacy Policy. You're
                always in control—adjust your settings or clear your activity at
                any time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-100">
              <p className="text-sm text-gray-600">
                <strong>Accessibility Statement:</strong> HomeGeeni is committed
                to providing a digital experience that is accessible and
                inclusive for all users, including individuals with
                disabilities. We are actively working to enhance the usability
                and accessibility of our platform and welcome your feedback as
                we continue to improve.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                If you encounter any accessibility barriers or require an
                accommodation, please contact us at accessibility@homegeeni.com
                so we can assist you.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
