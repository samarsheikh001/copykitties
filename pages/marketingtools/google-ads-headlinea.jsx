import NameDescriptionForm from '../../components/forms/NameDescriptionForm';
import MarketingToolsNav from '../../components/layouts/marketingtools/MarketingToolsNav';
import GoogleIcon from '/public/icons/google.svg';

import { useRouter } from 'next/router';

const marketingTools = {
  'google-ads-headline': {},
};

export default function GoogleAdsHeadline(params) {
  const router = useRouter();
  return (
    <div className="h-full ">
      {JSON.stringify(router)}
      <div className="flex items-start space-x-4 border-b p-4 sm:items-center">
        <div className="flex flex-1 items-start space-x-4 sm:items-center">
          <div className="rounded-full bg-red-50 p-1 sm:p-3">
            <GoogleIcon className="h-8 w-8 sm:h-12 sm:w-12" />
          </div>
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">
              Google Ads Headline
            </h1>
            <p className="text-xs text-gray-500 sm:text-sm">
              {
                "Create high converting copy for the 'Headline' section of your Google Ads."
              }
            </p>
          </div>
        </div>

        <button className="flex rounded border bg-slate-100 p-1 text-xs sm:p-2 sm:text-sm">
          <span className="material-symbols-outlined text-xs sm:text-sm">
            arrow_back_ios
          </span>
          Templates
        </button>
      </div>
      <div className="flex h-full flex-col overflow-scroll md:flex-row">
        <div className="max-w-xl flex-auto border-r">
          <NameDescriptionForm />
        </div>

        <div className="h-full flex-1 p-2 md:p-0">
          <div className="flex space-x-2 border-b text-sm text-gray-800">
            <div className="flex items-center bg-gray-200 p-2">
              <span className="material-symbols-outlined pr-1 text-sm">
                bolt
              </span>
              New Outputs
            </div>
            <div className="flex items-center p-2 ">
              <span className="material-symbols-outlined pr-1 text-sm">
                history
              </span>
              History
            </div>
          </div>

          <div className="m-2">
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
            <div>dasdsda asd asdadsasd</div>
          </div>
        </div>
      </div>
    </div>
  );
}

GoogleAdsHeadline.getLayout = (page) => {
  return <MarketingToolsNav>{page} </MarketingToolsNav>;
};
