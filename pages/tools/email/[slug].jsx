import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import EmailToolsNavigation from "../../../components/emailtools/EmailToolsNavigation";
import SiteIcon from "../../../components/common/SiteLogo";
import EmailToolsMainArea from "../../../components/emailtools/EmailToolsMainArea";
import EmailTemplateEditor from "../../../components/emailtools/EmailTemplateEditor";

export default function MarketTools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="h-full flex">
          {EmailToolsNavigation(sidebarOpen, setSidebarOpen)}
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="md:hidden">
              <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                <div>
                  <SiteIcon />
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
            <div className="flex-1 relative z-0 flex overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                {/* Start main area*/}
                <EmailToolsMainArea />
                {/* End main area */}
              </main>
              <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-2/3 border-l border-gray-200 overflow-y-auto">
                {/* Start secondary column (hidden on smaller screens) */}
                <EmailTemplateEditor name="samar" action="Goto profile"/>
                {/* End secondary column */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
