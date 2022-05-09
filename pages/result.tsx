import { NextPage } from "next";
import { useRouter } from "next/router";

import { fetchGetJSON } from "../utils/api-helpers";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../lib/context";

import { rechargeToken } from "../lib/firebase";

const ResultPage: NextPage = () => {
  const router = useRouter();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (router.isReady) {
      fetchGetJSON(`/api/checkout_sessions/${router.query.session_id}`).then(
        async (data) => {
          if (data.payment_status == "paid") {
            await rechargeToken(
              parseInt(data.metadata.tokens),
              user?.email,
              data.id
            );
            router.push("/home");
          }
        }
      );
    }
  }, [user]);

  // if (error) return <div>failed to load</div>;

  return (
    <div className="page-container">
      {/* {JSON.stringify(user)} */}
      {/* <h1>Checkout Payment Result</h1>
      <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
      <h3>CheckoutSession response:</h3>
      <div>{data?.amount_subtotal}</div>
      <div>{data ? JSON.stringify(data) : "loading..."}</div> */}
    </div>
  );
};

export default ResultPage;
