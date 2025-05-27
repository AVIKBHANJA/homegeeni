import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | HomeGeeni Blog",
  description:
    "Terms and conditions for using the HomeGeeni Blog and related services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            HomeGeeni Terms of Use
          </h1>
          <div className="text-sm text-gray-600 mb-8">
            <p>
              <strong>Effective Date:</strong> May 9, 2025
            </p>
            <p>
              <strong>Last Updated:</strong> May 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Welcome and thank you for your interest in HomeGeeni, a real
              estate services platform provided by HomeGeeni Inc. (USA) and
              HomeGeeni Pvt. Ltd. (India) (collectively referred to as
              &ldquo;HomeGeeni,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;). By clicking a registration or account creation
              button, accessing or using our websites, mobile applications, AI
              tools, or other services (collectively, the
              &ldquo;Services&rdquo;), or accessing any content provided through
              the Services, you agree to be bound by the following Terms of Use,
              as updated from time to time (&ldquo;Terms&rdquo;).
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. HomeGeeni&rsquo;s Role
            </h2>
            <p>
              HomeGeeni offers services that facilitate tasks related to real
              estate transactions, including property listings, AI-assisted
              offer generation, form filling, and brokerage services in select
              U.S. states. Unless explicitly provided in a separate written
              agreement or stated in a particular Service&rsquo;s terms
              (&ldquo;Product Terms&rdquo;), the Services are not intended to
              provide financial, legal, or real estate advice. You understand
              and agree that HomeGeeni disclaims all liability for any outcome
              or consequence resulting from actions taken based on the Services.
              You acknowledge that the Services may include advertisements, and
              to make them relevant and useful, we may serve ads based on
              collected data. Please refer to our Privacy Policy for more
              information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. Eligibility and Account Registration
            </h2>
            <p>
              You must be at least 18 years of age to use the Services. By
              creating an account, you represent and warrant that you meet this
              requirement and that the information you provide is accurate,
              complete, and up to date. You are responsible for maintaining the
              confidentiality of your account credentials and for all activity
              occurring under your account. You may not use your account for
              transactions on behalf of others unless you are authorized to do
              so under a separate agreement with HomeGeeni.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Use of Services
            </h2>
            <p>
              Subject to compliance with these Terms, we grant you a limited,
              personal, revocable, non-exclusive, non-transferable license to
              access and use the Services. If you are a licensed real estate
              professional using the Services for business purposes, you
              represent that you have obtained all required consents and
              authorizations from your clients. You may not use any content or
              data from the Services on third-party platforms without our prior
              written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Mobile Applications
            </h2>
            <p>
              To access our Services via mobile apps, you must have a compatible
              device. You agree to receive automatic updates and understand that
              additional mobile data charges may apply. The Terms apply to all
              versions of our apps.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              5. Listings and Market Information
            </h2>
            <p>
              Listings and market data available through the Services may be
              provided by users, affiliates, or public sources. HomeGeeni does
              not verify ownership, title, or legality of properties unless
              explicitly stated. You are responsible for verifying the accuracy
              and completeness of property data before making any decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              6. AI Services and Disclaimers
            </h2>
            <p>
              HomeGeeni uses artificial intelligence to assist with document
              generation, valuation, and offer preparation. These AI tools are
              not perfect and may produce errors or omissions. Users are solely
              responsible for reviewing and verifying any AI-generated output.
              HomeGeeni makes no guarantees regarding the accuracy or
              suitability of such content and disclaims liability for decisions
              based on it.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              7. Fees and Subscriptions
            </h2>
            <p>
              Access to certain Services may require payment or subscription.
              All fees are non-refundable unless stated otherwise. Subscriptions
              may auto-renew unless canceled in advance. If fees change, you
              will be notified and have the option to discontinue service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              8. User-Generated Content
            </h2>
            <p>
              Users may upload listings, comments, and other content
              (&ldquo;User Content&rdquo;). You retain ownership of your content
              but grant HomeGeeni a worldwide, royalty-free, perpetual license
              to use, display, and distribute it. You represent that you have
              the necessary rights to share any content you submit. We reserve
              the right to remove any content that violates these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              9. Prohibited Conduct
            </h2>
            <p>
              You agree not to misuse the Services. Prohibited uses include but
              are not limited to: unauthorized copying or distribution, using
              bots or scrapers, violating any law, posting harmful or misleading
              content, interfering with the Services&rsquo; security or
              functionality, or attempting to reverse-engineer our platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              10. Third-Party Services
            </h2>
            <p>
              The Services may link to or integrate third-party tools or
              websites. We do not control third-party providers and are not
              responsible for their content, accuracy, or legal compliance. Your
              use of third-party services is at your own risk and subject to
              those parties&rsquo; terms and policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              11. Privacy
            </h2>
            <p>
              By using HomeGeeni, you consent to our collection and use of
              personal data as described in our Privacy Policy. We collect user
              data such as names, email addresses, usage behavior, and device
              information to improve service quality. Data may be stored in the
              U.S., India, or other jurisdictions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              12. Intellectual Property
            </h2>
            <p>
              All content, software, trademarks, designs, and AI tools provided
              by HomeGeeni are protected by intellectual property laws and
              remain our property. Except as expressly permitted, you may not
              use, reproduce, or distribute any portion of the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              13. Feedback
            </h2>
            <p>
              You may submit suggestions or feedback, and by doing so, you grant
              us a royalty-free, irrevocable license to use such input for any
              purpose, including improving our Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              14. Termination and Suspension
            </h2>
            <p>
              We may suspend or terminate your account at our discretion without
              notice if you violate these Terms. You may request account
              deletion by contacting privacy@homegeeni.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              15. Indemnity
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless HomeGeeni and
              its affiliates from any claims, damages, or liabilities arising
              from your use of the Services, your content, or your violation of
              these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              16. Disclaimers
            </h2>
            <p className="uppercase">
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES
              OF ANY KIND. HOMGEENI DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT GUARANTEE THE AVAILABILITY, ACCURACY,
              OR SECURITY OF THE SERVICES.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              17. Limitation of Liability
            </h2>
            <p className="uppercase">
              TO THE FULLEST EXTENT PERMITTED BY LAW, HOMGEENI SHALL NOT BE
              LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES. OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE
              GREATER OF $100 OR THE AMOUNT PAID BY YOU TO US IN THE PAST 12
              MONTHS.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              18. Governing Law and Dispute Resolution
            </h2>
            <p>
              For U.S. users, these Terms are governed by the laws of the State
              of California, and any disputes must be resolved by arbitration in
              San Francisco. For Indian users, disputes are governed by Indian
              law and subject to arbitration under the Arbitration and
              Conciliation Act, 1996 in Mumbai.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              19. Modifications to Terms
            </h2>
            <p>
              We may update these Terms periodically. Your continued use after
              such changes constitutes acceptance of the new Terms. We may
              notify you of updates via email or on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              20. Contact Information
            </h2>
            <p>For legal questions or support:</p>
            <ul className="mt-2 mb-6 space-y-2 list-none">
              <li>
                <strong>Email:</strong> legal@homegeeni.com (USA),
                legal@homegeeni.in (India)
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
