import SiteLogo from "../common/SiteLogo";

export default function SimpleNavBar() {
  return (
    <div className="m-2 flex items-center border-b pb-2">
      <div className="flex-1">
        <button className="border border-black rounded flex items-center">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="px-1">Go Back</span>
        </button>
      </div>
      <SiteLogo />
      <div className="flex-1"></div>
    </div>
  );
}