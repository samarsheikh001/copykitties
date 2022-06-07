import { UserContext } from '../../lib/context';

import { classNames } from '../../lib/classnames';
import { useRouter } from 'next/dist/client/router';

import SiteLogo from '../common/SiteLogo';

import Link from 'next/link';
import { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

// const navigation = [
//   {
//     name: "Google",
//     children: [
//       { title: "Google Ads Headline" },
//       { title: "Google Ad Description" },
//     ],
//   },
//   {
//     name: "Facebook",
//     children: [{ title: "Facebook Headline" }, { title: "Facebook Captions" }],
//   },
//   {
//     name: "Ecommerce",
//     children: [{ title: "Product Name" }, { title: "Product Description" }],
//   },
//   {
//     name: "Website",
//     children: [
//       { title: "Website Headline" },
//       { title: "Website Subheadline" },
//       { title: "Website Tagline" },
//     ],
//   },
//   {
//     name: "Email",
//     children: [
//       { title: "Ad Email" },
//       { title: "Sales Email" },
//       { title: "Custom Email" },
//     ],
//   },
//   {
//     name: "Blogs & Articles",
//     children: [
//       { title: "Article" },
//       { title: "Blog Title" },
//       { title: "Blog Subtitle" },
//       { title: "Blog Description" },
//     ],
//   },
//   {
//     name: "Social Media",
//     children: [
//       { title: "Social Media Profile" },
//       { title: "Social Media Caption" },
//       { title: "Short Social Post" },
//     ],
//   },
//   {
//     name: "Sales & Advertising",
//     children: [
//       { title: "Sales Deck" },
//       { title: "Sales Letter" },
//       { title: "Sales Ad" },
//     ],
//   },
//   {
//     name: "Video & Audio",
//     children: [
//       { title: "Video Title" },
//       { title: "Video Description" },
//       { title: "Podcast Title" },
//       { title: "Podcast Description" },
//     ],
//   },
//   {
//     name: "App",
//     children: [
//       { title: "App Title" },
//       { title: "App Subtitle" },
//       { title: "App Description" },
//       { title: "App In-App Purchase" },
//     ],
//   },
//   {
//     name: "Books",
//     children: [
//       { title: "Book Title" },
//       { title: "Book Subtitle" },
//       { title: "Book Description" },
//     ],
//   },
//   {
//     name: "SEO",
//     children: [
//       { title: "SEO Keywords Extractor" },
//       { title: "SEO Title" },
//       { title: "SEO Meta Description" },
//     ],
//   },
//   {
//     name: "Quora",
//     children: [{ title: "Quora Answer" }],
//   },
// ];

import GoogleIcon from '/public/icons/google.svg';
import ProductIcon from '/public/icons/product.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import TiktokIcon from '/public/icons/tiktok.svg';

const navigation = [
  {
    href: 'google-ads-headline',
    title: 'Google Ads Headline',
    icon: GoogleIcon,
  },
  {
    href: 'google-ads-description',
    title: 'Google Ads Description',
    icon: GoogleIcon,
  },
  {
    href: 'product-description',
    title: 'Product Description',
    icon: ProductIcon,
  },
  {
    href: 'facebook-listicle',
    title: 'Facebook Listicle',
    icon: FacebookIcon,
  },
  {
    href: 'facebook-primary-text',
    title: 'Facebook Primary Text',
    icon: FacebookIcon,
  },
  {
    href: 'tiktok-brainstorm-topics',
    title: 'Tiktok Brainstorm Topics',
    icon: TiktokIcon,
  },
];

export default function MarketToolsNavigation(sidebarOpen, setSidebarOpen) {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [filteredNavigation, setFilteredNavigation] = useState(navigation);
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <SiteLogo />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="space-y-1 px-2">
                    {filteredNavigation.map((item, index) => (
                      <div key={index}>
                        <div>
                          <item.icon className="h-12 w-12" />
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" className="group block flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {user?.displayName}
                      </p>
                      {/* <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <SiteLogo />
              </div>
              <nav className="mt-8 flex-1 overflow-y-auto" aria-label="Sidebar">
                <div className="space-y-1 px-2">
                  <input
                    placeholder="Search Template"
                    type="text"
                    onChange={(event) =>
                      setFilteredNavigation(
                        navigation.filter((item) =>
                          item.title
                            .toLowerCase()
                            .includes(event.target.value.toLowerCase()),
                        ),
                      )
                    }
                    className="mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                  {filteredNavigation.map((item, index) => (
                    <div key={index}>
                      <Link href={'/socialtools/' + item.href} passHref replace>
                        <div
                          className={classNames(
                            'flex cursor-pointer items-center space-x-2 rounded p-2',
                            router.query.slug == item.href &&
                              'bg-gray-700 text-white',
                          )}
                        >
                          <item.icon className="h-6 w-6" />
                          <div className="">{item.title}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {user?.displayName}
                    </p>
                    {/* <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p> */}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
