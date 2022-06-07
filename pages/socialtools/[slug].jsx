import MarketingToolsNav from '../../components/layouts/socialtools/SocialToolsNav';
import GoogleIcon from '/public/icons/google.svg';
import ProductIcon from '/public/icons/product.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import TiktokIcon from '/public/icons/tiktok.svg';
import YoutubeIcon from '/public/icons/youtube.svg';
import QuoraIcon from '/public/icons/quora.svg';

import EmptyIcon from '/public/icons/empty.svg';

import FormBuilder from '../../components/common/FormBuilder';
import CatLoader from '../../components/common/loader/cat/CatLoader';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ResultCard from '../../components/cards/ResultCard';

import { fetchPostJSON } from '../../utils/api-helpers';
import { subBusinessDays } from 'date-fns';

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
  'tiktok-brainstorm-topics': {
    heading: 'Tiktok Brainstorm Topics',
    subHeading: 'Brainstorm tiktok ideas.',
    icon: TiktokIcon,
    textFields: [
      {
        title: 'What is your topic description?',
        name: 'description',
        isTextarea: true,
        placeholder: '5 easy ways to come up with content ideas',
      },
    ],
  },
  'video-titles': {
    heading: 'Video Titles',
    subHeading:
      "Write compelling YouTube video title to catch people's attention.",
    icon: YoutubeIcon,
    textFields: [
      {
        title: 'What is your video about?',
        name: 'description',
        isTextarea: true,
        placeholder: 'A video tutorial about eye makeup.',
      },
    ],
  },
  'video-descriptions': {
    heading: 'Video Descriptions',
    subHeading:
      'Write compelling YouTube descriptions to get people interested in your video.',
    icon: YoutubeIcon,
    textFields: [
      {
        title: 'What is the title of your video?',
        name: 'description',
        isTextarea: true,
        placeholder: 'How to do a natural eye makeup look.',
      },
    ],
  },
  'video-tags-generator': {
    heading: 'Youtube Tags Generator',
    subHeading:
      'Generate SEO-optimized YouTube tags / keywords for your video.',
    icon: YoutubeIcon,
    textFields: [
      {
        title: 'Enter your video title or a keyword',
        name: 'description',
        isTextarea: true,
        placeholder: 'e.g. eye makeup',
      },
    ],
  },
  'quora-answers': {
    heading: 'Quora Answers',
    subHeading: 'Generate creative answers based on a question from Quora.',
    icon: QuoraIcon,
    textFields: [
      {
        title: 'Quora Question',
        name: 'description',
        isTextarea: true,
        placeholder:
          'What are some of the easy things that anyone can do to keep improving their Creativity?',
        rowNumbers: 3,
      },
    ],
  },
};

export default function MarketingTools(params) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [resultsArray, setResultsArray] = useState([]);

  if (!router.query.slug) return <></>;

  async function onSubmitData({ name, description }) {
    console.log(description);
    setResultsArray([]);
    setLoading(true);
    const res = await fetchPostJSON('/api/generate/marketingtools', {
      brandName: name,
      description,
      toPredict: marketingTools[router.query.slug].heading,
    });
    setLoading(false);
    setResultsArray(res);
  }

  return (
    <div className="h-full sm:overflow-hidden">
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

      <div className="grid h-full grid-cols-1 sm:grid-cols-5">
        <div className="col-span-2 border-r">
          <FormBuilder
            textFields={marketingTools[router.query.slug].textFields}
            onSubmit={onSubmitData}
          />
        </div>

        <div className="col-span-3 h-full p-2 sm:overflow-hidden md:p-0 ">
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

          <div className="h-full overflow-y-auto">
            {resultsArray.length == 0 &&
              (loading ? (
                <CatLoader />
              ) : (
                <div className="flex flex-col items-center pt-20">
                  <EmptyIcon className="w-44" />
                  <div className="py-2 text-gray-700">
                    {"You haven't generated copy yet"}
                  </div>
                </div>
              ))}
            <ul className="space-y-4 p-2 sm:pb-56">
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
