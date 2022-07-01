import { CheckIcon } from '@heroicons/react/solid';
import { UserContext } from '../lib/context';
import { useContext } from 'react';
import { useRouter } from 'next/dist/client/router';

const tiers = [
  {
    name: 'Starter',
    planCode: '0',
    priceMonthly: 35,
    description: 'All the basics for starting a new business',
    includedFeatures: ['50+ copywriting tools'],
    tokens: 80000,
  },
  {
    name: 'Full Fledged',
    planCode: '0',
    priceMonthly: 120,
    description:
      'All the Starter functionality with additional editor and SEO checking tool.',
    includedFeatures: [
      'Full Fledged Editor',
      'Document Feature',
      'Access to rolling feature in advance',
      '24/7 Support',
    ],
    tokens: 80000,
  },
  // {
  //   name: "Freelancer",
  //   planCode: "1",
  //   priceMonthly: 49,
  //   description: "All the basics for starting a new business",
  //   includedFeatures: ["500,000 tokens", "Customer support"],
  //   tokens: 500000,
  // },
  // {
  //   name: "Startup",
  //   planCode: "2",
  //   priceMonthly: 99,
  //   description: "All the basics for starting a new business",
  //   includedFeatures: [
  //     "1,200,000 tokens",
  //     "Customer support",
  //     "Personal assistant",
  //   ],
  //   tokens: 1200000,
  // },
  // {
  //   name: "Enterprise (Unimited)",
  //   planCode: "3",
  //   priceMonthly: 179,
  //   description: "All the basics for starting a new business",
  //   includedFeatures: [
  //     "Unlimited tokens for 6 months (fair usage policy)",
  //     "Customer support",
  //     "Personal assistant",
  //     "Fine tuned on demand.",
  //     "100% guranteed writer.",
  //   ],
  //   tokens: 2000000,
  // },
];

import { fetchPostJSON } from '../utils/api-helpers';
import getStripe from '../utils/get-stripe';

export default function Pricing() {
  // const [isMonthly, setIsMonthly] = useState(true);
  // const [loading, setLoading] = useState(false);
  const route = useRouter();
  const { tokens, user, customerId } = useContext(UserContext);

  const handleSubmit = async (planCode) => {
    // setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: tiers[planCode].priceMonthly,
      customerId,
      tokens: tiers[planCode].tokens,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    // setLoading(false);
  };

  function selectedPlan(planCode) {
    if (user) {
      handleSubmit(planCode);
    } else {
      route.push('/register?planCode=' + planCode);
    }
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
          {/* <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              onClick={() => {
                setIsMonthly(true);
              }}
              className={classNames(
                "relative w-1/2 border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8",
                isMonthly && "bg-white"
              )}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMonthly(false);
              }}
              className={classNames(
                "ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8",
                !isMonthly && "bg-white"
              )}
            >
              Yearly billing
            </button>
          </div> */}
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.priceMonthly}
                  </span>{' '}
                  {/* <span className="text-base font-medium text-gray-500">
                    {isMonthly ? "for a month" : "for an year"}
                  </span> */}
                </p>
                <button
                  onClick={() => selectedPlan(tier.planCode)}
                  className="mt-8 block w-full cursor-pointer rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                >
                  Buy {tier.name}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-900">
                  {"What's included"}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
