import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fair Housing Policy | HomeGeeni Blog",
  description: "HomeGeeni's Fair Housing and Equal Opportunity Policy.",
};

export default function FairHousingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            HomeGeeni Fair Housing and Equal Opportunity Policy
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
              HomeGeeni is committed to providing fair, inclusive, and equitable
              access to housing opportunities for all individuals, without
              exception. We are dedicated to ensuring that our platform,
              services, partnerships, and interactions are free from
              discrimination of any kind and are in full compliance with all
              applicable federal, state, and local fair housing laws in the
              United States, as well as housing-related anti-discrimination laws
              in India where applicable.
            </p>

            <p className="mb-6">
              All employees, contractors, representatives, and licensed real
              estate professionals affiliated with or partnered with HomeGeeni
              are required to abide by this policy at all times. This includes
              strict adherence to the U.S. Fair Housing Act, the Equal
              Opportunity Act, and all corresponding anti-discrimination
              statutes at every level of jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Zero Tolerance for Discrimination
            </h2>
            <p className="mb-6">
              HomeGeeni has a zero-tolerance policy for violations of fair
              housing laws. Discrimination in any form, whether direct,
              indirect, intentional, or unintentional, is strictly prohibited in
              the delivery of HomeGeeni's services. This includes, but is not
              limited to, discrimination based on:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Race or color</li>
              <li>Religion or creed</li>
              <li>Sex, gender, sexual orientation, or gender identity</li>
              <li>
                Marital or familial status (including pregnancy or having
                children)
              </li>
              <li>Age</li>
              <li>National origin, immigration, or citizenship status</li>
              <li>
                Physical, sensory, or mental disability (including recovery from
                substance use)
              </li>
              <li>
                Source of income (including housing vouchers, social security,
                unemployment, alimony, disability, etc.)
              </li>
              <li>Military or veteran status</li>
              <li>Caste (where applicable under Indian jurisdiction)</li>
              <li>
                Any other protected class as defined by federal, state, or local
                law
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Prohibited Practices
            </h2>
            <p className="mb-6">
              The following behaviors are strictly prohibited by HomeGeeni and
              may result in disciplinary action, including suspension, account
              termination, or referral to appropriate legal authorities:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Denying access to services based on a person's membership in a
                protected class.
              </li>
              <li>
                Participating in or facilitating discriminatory agreements or
                practices.
              </li>
              <li>
                Refusing to show, list, or promote properties due to the
                presence of protected classes in a geographic area.
              </li>
              <li>
                Providing inaccurate, incomplete, or misleading information to
                users based on protected characteristics.
              </li>
              <li>
                Steering users toward or away from properties or neighborhoods
                based on assumptions or stereotypes.
              </li>
              <li>
                Publishing discriminatory statements in listings,
                advertisements, or communications.
              </li>
              <li>
                Marketing services selectively based on inclusion in or
                exclusion from protected groups.
              </li>
              <li>
                Applying unequal qualification standards to individuals based on
                protected characteristics.
              </li>
              <li>Harassment or intimidation based on identity or status.</li>
              <li>
                Retaliation against individuals who report discrimination or
                participate in investigations.
              </li>
              <li>
                Blockbusting practices (i.e., inducing sellers to sell property
                by suggesting that members of a particular protected group are
                moving into the area).
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Accountability and Enforcement
            </h2>
            <p>
              All HomeGeeni staff, agents, and partners are expected to be
              proactive in identifying and addressing discriminatory conduct.
              Violations of this policy may result in disciplinary measures,
              including deactivation of accounts, severance of partnerships, or
              legal referral. Individuals who feel they have experienced or
              witnessed discriminatory behavior through HomeGeeni are encouraged
              to report it immediately by emailing fairhousing@homegeeni.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Our Commitment
            </h2>
            <p>
              HomeGeeni believes that everyone deserves equal access to housing,
              and we are proud to stand for transparency, fairness, and
              inclusivity in every transaction, feature, and policy we design.
              We continually assess and evolve our technology and services to
              uphold these values and create a real estate experience that
              reflects and respects the diversity of our users and communities.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-100">
              <p className="text-sm text-gray-600">
                <strong>Legal Notice:</strong> HomeGeeni proudly supports and
                abides by the Fair Housing Act and NEW YORK STATE FAIR HOUSING
                NOTICE. We are committed to ensuring that all individuals have
                equal access to housing opportunities regardless of race, color,
                religion, sex, disability, familial status, national origin, or
                any other protected class.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                California DRE #01521930
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
