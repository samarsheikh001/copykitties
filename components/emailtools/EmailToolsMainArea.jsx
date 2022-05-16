import CatLoader from "../common/loader/cat/CatLoader";

import ResultList from "./EmailToolsResultList";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-hot-toast";
import { decrementToken } from "../../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../../lib/context";
import Link from "next/link";
import { fetchPostJSON } from "../../utils/api-helpers";
import EmailToolsForm from "./EmailToolsForm";

export default function EmailToolsMainArea() {
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
    try {
      const res = await fetchPostJSON("/api/generate", {
        description,
        brandName: name,
        toPredict: router.query.slug.replace(/([A-Z])/g, " $1").trim(),
      });
      setItems(res);
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
      <div className="pb-4">{EmailToolsForm(fetchData)}</div>
      {loader ? <CatLoader /> : ResultList(items)}
    </>
  );
}
