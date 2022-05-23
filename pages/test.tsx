import toast from "react-hot-toast";
import SiteLogo from "../components/common/SiteLogo";

export default function Example() {
  return (
    <div className="h-screen bg-red-500 flex flex-col overflow-hidden">
     <div className="bg-white flex-1 overflow-auto cursor-grab ">
      Danica's bo<span className="cursor-grabbing">o</span>bs
     </div>
     <button>HEY</button>
    </div>
  );
}
