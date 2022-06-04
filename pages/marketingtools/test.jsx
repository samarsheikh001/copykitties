import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import MarketToolsNavigation from '../../components/markettools/Navigation';

import SiteIcon from '../../components/common/SiteLogo';
import MainArea from '../../components/markettools/MainArea';

export default function MarketTools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex h-full">
          {MarketToolsNavigation(sidebarOpen, setSidebarOpen)}
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <div className="md:hidden">
              <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                <div>
                  <SiteIcon />
                </div>
                <div>
                  <button
                    type="button"
                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-0 flex flex-1 overflow-hidden">
              <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
                {/* Start main area*/}
                <MainArea />
                {/* End main area */}
              </main>
              <aside className="relative hidden w-2/3 flex-shrink-0 overflow-y-auto border-l border-gray-200 xl:flex xl:flex-col">
                {/* Start secondary column (hidden on smaller screens) */}
                {/* {Tiptap()} */}
                {/* End secondary column */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
