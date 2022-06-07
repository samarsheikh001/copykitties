import toast from 'react-hot-toast';
import SiteLogo from '../components/common/SiteLogo';

export default function Example() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-red-500">
      <div className="flex-1 cursor-grab overflow-auto bg-white ">
        {"Danica's"} bo<span className="cursor-grabbing">o</span>bs
      </div>
      <button>HEY</button>
    </div>
  );
}
