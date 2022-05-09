import SiteLogo from "../components/common/SiteLogo";
import { useRouter } from "next/router";
import { fetchPostJSON } from "../utils/api-helpers";
import getStripe from "../utils/get-stripe";

export default function Register(params) {
  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <SiteLogo />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign up for your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                And{" "}
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-gray-500"
                >
                  get started with 1200 free tokens.
                </a>
              </p>
            </div>

            <div className="mt-8">{SignInButton()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

const plans = [
  {
    priceMonthly: 12,
    tokens: 80000,
  },
  {
    priceMonthly: 49,
    tokens: 500000,
  },
  {
    priceMonthly: 99,
    tokens: 1200000,
  },
  {
    priceMonthly: 179,
    tokens: 2000000,
  },
];

import { signIn, signOut } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useEffect } from "react";
function SignInButton() {
  const { user, customerId } = useContext(UserContext);
  const router = useRouter();

  const gotoPlan = async (planCode) => {
    const response = await fetchPostJSON("/api/checkout_sessions", {
      amount: plans[planCode].priceMonthly,
      customerId,
      tokens: plans[planCode].tokens,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    });
    console.warn(error.message);
  };

  useEffect(() => {
    if (user) {
      if (router.query.planCode) {
        gotoPlan(parseInt(router.query.planCode));
      } else {
        router.push("/home");
      }
    }
  }, [user]);

  const signInWithGoogle = async () => {
    await signIn();
  };
  return (
    <div>
      {!user ? (
        <div>
          <div
            onClick={signInWithGoogle}
            className="flex items-center justify-center border rounded cursor-pointer"
          >
            <div>
              <span className="sr-only">Sign in with Google</span>
              <img src={"/icons/google.svg"} className="m-2 h-12 w-12" />
            </div>
            <p className="font-medium text-gray-700 flex-1 text-center pr-2">
              Sign in with Google
            </p>
          </div>
        </div>
      ) : (
        <>
          <div
            onClick={() => signOut()}
            className="flex items-center justify-center border rounded cursor-pointer"
          >
            <div>
              <img src={user.photoURL} className="m-2 h-12 w-12" />
            </div>
            <p className="font-medium text-gray-700 flex-1 text-center pr-2">
              {user.displayName}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
