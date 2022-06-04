import MarketingToolsNav from '../../components/layouts/marketingtools/MarketingToolsNav';
import GoogleIcon from '/public/icons/google.svg';
import ProductIcon from '/public/icons/product.svg';
import FacebookIcon from '/public/icons/facebook.svg';

import FormBuilder from '../../components/common/FormBuilder';

import { useRouter } from 'next/router';
import { useState } from 'react';

import ResultCard from '../../components/cards/ResultCard';

import { fetchPostJSON } from '../../utils/api-helpers';

const marketingTools = {
  'google-ads-headline': {
    heading: 'Google Ads Headline',
    subHeading:
      "Create high converting copy for the 'Headline' section of your Google Ads.",
    icon: GoogleIcon,
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'google-ads-description': {
    heading: 'Google Ads Description',
    subHeading:
      "Create high converting copy for the 'Description' section of your Google Ads.",
    icon: GoogleIcon,
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'product-description': {
    heading: 'Product Description',
    subHeading: 'Create description for your Product.',
    icon: ProductIcon,
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'facebook-listicle': {
    heading: 'Facebook Listicle',
    subHeading: 'Create facebook listicle.',
    icon: FacebookIcon,
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'facebook-primary-text': {
    heading: 'Facebook Primary Text',
    subHeading: 'Create facebook primary texts.',
    icon: FacebookIcon,
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
};

export default function MarketingTools(params) {
  const router = useRouter();
  const [resultsArray, setResultsArray] = useState([]);
  if (!router.query.slug) return <></>;

  async function onSubmitData({ name, description }) {
    console.log(description);
    const res = await fetchPostJSON('/api/generate/marketingtools', {
      brandName: name,
      description,
      toPredict: marketingTools[router.query.slug].heading,
    });
    setResultsArray(res);
  }
  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-start space-x-4 border-b p-4 sm:items-center">
        <div className="flex flex-1 items-start space-x-4 sm:items-center">
          <div className="rounded-full p-1 sm:p-3">
            {GetIcon(marketingTools[router.query.slug].icon)}
          </div>
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">
              {marketingTools[router.query.slug].heading}
            </h1>
            <p className="text-xs text-gray-500 sm:text-sm">
              {marketingTools[router.query.slug].subHeading}
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

      <div className="flex h-full flex-col md:flex-row ">
        <div className="max-w-md flex-auto border-r">
          <FormBuilder
            textFields={marketingTools[router.query.slug].textFields}
            onSubmit={onSubmitData}
          />
        </div>

        <div className="h-full flex-1 overflow-hidden p-2 md:p-0">
          <div className="flex space-x-2 border-b text-sm text-gray-800">
            <div className="flex items-center bg-gray-200 p-2">
              <span className="material-symbols-outlined pr-1 text-sm">
                bolt
              </span>
              New Outputs
            </div>
            <div className="flex items-center p-2 ">
              <span className="material-symbols-outlined pr-1 text-sm">
                favorite
              </span>
              Favorite
            </div>
          </div>

          <div className="h-full overflow-y-auto pb-52">
            <ul className="space-y-4 p-2">
              {resultsArray.map((result, index) => {
                return <ResultCard key={index} text={result.text} />;
              })}
              {resultsArray.map((result, index) => {
                return <ResultCard key={index} text={result.text} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetIcon(CustomIcon) {
  return <CustomIcon className="h-8 w-8 text-gray-500 sm:h-12 sm:w-12" />;
}

MarketingTools.getLayout = (page) => {
  return <MarketingToolsNav>{page} </MarketingToolsNav>;
};
