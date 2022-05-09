import CatLoader from "../common/loader/Cat/CatLoader";
import ResultList from "./ResultList";
import GenerateCopyForm from "../forms/GenerateCopyForm";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-hot-toast";
import { decrementToken } from "../../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../../lib/context";
import Link from "next/link";

export default function MainArea() {
  const { tokens, user } = useContext(UserContext);
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  async function fetchData({ description, name }) {
    if (tokens <= 0) {
      toast.error("You need to recharge tokens");
      return;
    }
    setLoader(true);
    var raw = JSON.stringify({
      description,
      brandName: name,
      toPredict: router.query.slug.replace(/([A-Z])/g, " $1").trim(),
    });
    try {
      const res = await fetch("http://127.0.0.1:5001/generator", {
        method: "POST",
        body: raw,
      });
      const data = await res.json();
      setItems(data);
      setLoader(false);
      await decrementToken(200, user.email);
    } catch (error) {
      setLoader(false);
      toast.error(error.message);
      console.log(error);
    }
  }
  return (
    <>
      <Link href="/home" passHref>
        <div className="cursor-pointer text-sm px-2 py-1 font-bold border inline-block m-2">
          Home
        </div>
      </Link>
      <div className="pb-4">{GenerateCopyForm(fetchData)}</div>
      {loader ? <CatLoader /> : ResultList(items)}
    </>
  );
}