import MarketToolsNavigation from "../../markettools/Navigation";
import SiteLogo from "../../common/SiteLogo";

import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

export default function MarketingToolsNav({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="h-full flex">
          {MarketToolsNavigation(sidebarOpen, setSidebarOpen)}
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="md:hidden">
              <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                <div>
                  <SiteLogo />
                </div>
                <div>
                  <button
                    type="button"
                    className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative z-0 overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none h-full">
                {/* Start main area*/}
                {children}
                {/* End main area */}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
