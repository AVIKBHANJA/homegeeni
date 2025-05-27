import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Recommendations | HomeGeeni Blog",
  description: "How HomeGeeni uses AI to personalize property recommendations.",
};

export default function AiRecommendationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About HomeGeeni's AI Recommendations
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="mb-8">
              <p className="mb-6">
                HomeGeeni uses AI-powered algorithms to personalize property
                recommendations based on your activity—such as listings you
                view, save, share, or filter. Our system analyzes patterns in
                your preferences and location to surface homes that match your
                interests. These recommendations are designed to help you
                discover the right property faster, without missing out.
              </p>
              <p className="mb-6">
                To provide this experience, we collect and use behavioral and
                location data in accordance with our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . You're always in control—adjust your settings or clear your
                activity at any time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                How Our AI Works
              </h2>
              <p className="mb-4">
                Our AI system uses several factors to create personalized
                recommendations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Viewing history and saved properties</li>
                <li>Search filters you frequently apply</li>
                <li>Similar properties to those you've shown interest in</li>
                <li>Location preferences based on your search patterns</li>
                <li>Property features that align with your interactions</li>
              </ul>
              <p>
                The more you interact with HomeGeeni, the more our AI learns
                about your preferences and the better your recommendations
                become.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Fair Housing Commitment
              </h2>
              <p className="mb-4">
                HomeGeeni proudly supports and abides by the Fair Housing Act
                and NEW YORK STATE FAIR HOUSING NOTICE. We are committed to
                ensuring that all individuals have equal access to housing
                opportunities regardless of race, color, religion, sex,
                disability, familial status, national origin, or any other
                protected class.
              </p>
              <p>
                Our AI algorithms are designed with fairness in mind and
                regularly audited to prevent any form of discrimination. Learn
                more about our{" "}
                <Link
                  href="/fair-housing-policy"
                  className="text-primary hover:underline"
                >
                  Fair Housing Policy
                </Link>
                .
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Accessibility Commitment
              </h2>
              <p className="mb-4">
                HomeGeeni is committed to providing a digital experience that is
                accessible and inclusive for all users, including individuals
                with disabilities. We are actively working to enhance the
                usability and accessibility of our platform and welcome your
                feedback as we continue to improve.
              </p>
              <p>
                If you encounter any accessibility barriers or require an
                accommodation, please contact us at{" "}
                <a
                  href="mailto:accessibility@homegeeni.com"
                  className="text-primary hover:underline"
                >
                  accessibility@homegeeni.com
                </a>{" "}
                so we can assist you.
              </p>
            </div>

            <div className="text-sm text-gray-600 mt-8">
              <p className="italic">California DRE #01521930</p>
              <p className="mt-2">
                &copy; 2025 HomeGeeni, LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
