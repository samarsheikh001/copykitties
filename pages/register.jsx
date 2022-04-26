import SiteLogo from "../components/common/SiteLogo";
import { useRouter } from "next/dist/client/router";

let user = "";
let username = "";
export default function Register(params) {
  return (
    <>
      {" "}
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
                  get started with 10 free credits.
                </a>
              </p>
            </div>

            <div className="mt-8">{SignInButton(user, username)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function SignInButton(user) {
  const router = useRouter();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
    const usernameRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(usernameRef);
    console.log(userSnap.data()?.username);

    if (userSnap.data()?.username) {
      router.push("/home");
    }
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
        <div
          onClick={() => signOut(auth)}
          className="flex items-center justify-center border rounded cursor-pointer"
        >
          <div>
            <img src={user.photoURL} className="m-2 h-12 w-12" />
          </div>
          <p className="font-medium text-gray-700 flex-1 text-center pr-2">
            {user.displayName}
          </p>
        </div>
      )}
    </div>
  );
}
