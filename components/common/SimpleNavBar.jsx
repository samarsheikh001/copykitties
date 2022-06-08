import SiteLogo from '../common/SiteLogo';
import Link from 'next/link';

export default function SimpleNavBar() {
  return (
    <div className="m-2 flex items-center border-b pb-2">
      <div className="flex-1">
        <button className="flex items-center rounded border border-black">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="px-1">
            <Link href="/home">Go Back</Link>
          </span>
        </button>
      </div>
      <SiteLogo />
      <div className="flex-1"></div>
    </div>
  );
}
