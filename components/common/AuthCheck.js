import { UserContext } from "../../lib/context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function AuthCheck(props) {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/register");
    }
  }, [loading]);
  if (loading || !user)
    return (
      <div className="h-screen mt-28">
        <div className="h-12 bg-slate-200 animate-pulse m-2 p-2"></div>
        <div className="h-12 bg-slate-200 animate-pulse m-2 p-2"></div>
        <div className="h-12 bg-slate-200 animate-pulse m-2 p-2"></div>
        <div className="h-12 bg-slate-200 animate-pulse m-2 p-2"></div>
        <div className="h-12 bg-slate-200 animate-pulse m-2 p-2"></div>
      </div>
    );
  return user ? props.children : props.fallback;
}
