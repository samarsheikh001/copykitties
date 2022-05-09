import { UserContext } from "../../lib/context";

import { classNames } from "../../lib/classnames";
import { useRouter } from "next/dist/client/router";

import SiteLogo from "../common/SiteLogo";

import Link from "next/link";
import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const navigation = [
  {
    name: "Google",
    children: [
      { title: "Google Ads Headline" },
      { title: "Google Ad Description" },
    ],
  },
  {
    name: "Facebook",
    children: [{ title: "Facebook Headline" }, { title: "Facebook Captions" }],
  },
  {
    name: "Ecommerce",
    children: [{ title: "Product Name" }, { title: "Product Description" }],
  },
  {
    name: "Website",
    children: [
      { title: "Website Headline" },
      { title: "Website Subheadline" },
      { title: "Website Tagline" },
    ],
  },
  {
    name: "Blogs & Articles",
    children: [
      { title: "Article" },
      { title: "Blog Title" },
      { title: "Blog Subtitle" },
      { title: "Blog Description" },
    ],
  },
  {
    name: "Social Media",
    children: [
      { title: "Social Media Profile" },
      { title: "Social Media Caption" },
      { title: "Short Social Post" },
    ],
  },
  {
    name: "Sales & Advertising",
    children: [
      { title: "Sales Deck" },
      { title: "Sales Letter" },
      { title: "Sales Ad" },
    ],
  },
  {
    name: "Video & Audio",
    children: [
      { title: "Video Title" },
      { title: "Video Description" },
      { title: "Podcast Title" },
      { title: "Podcast Description" },
    ],
  },
  {
    name: "App",
    children: [
      { title: "App Title" },
      { title: "App Subtitle" },
      { title: "App Description" },
      { title: "App In-App Purchase" },
    ],
  },
  {
    name: "Books",
    children: [
      { title: "Book Title" },
      { title: "Book Subtitle" },
      { title: "Book Description" },
    ],
  },
  {
    name: "SEO",
    children: [
      { title: "SEO Keywords Extractor" },
      { title: "SEO Title" },
      { title: "SEO Meta Description" },
    ],
  },
  {
    name: "Quora",
    children: [{ title: "Quora Answer" }],
  },
];

export default function MarketToolsNavigation(sidebarOpen, setSidebarOpen) {
  const route = useRouter();
  const { user } = useContext(UserContext);
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
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
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <SiteLogo />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <div className="font-medium border-b mx-2 inline-block">
                          {item.name}
                        </div>
                        <div className="ml-4">
                          {item?.children.map((childItem, index) => (
                            <Link
                              href={
                                "/marketingtools/" +
                                childItem.title.split(" ").join("")
                              }
                              key={index}
                              passHref
                            >
                              <div className="block text-gray-600 w-full m-1 p-2 hover:bg-gray-200 rounded cursor-pointer text-sm ">
                                {childItem.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
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
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <SiteLogo />
              </div>
              <nav className="mt-5 flex-1 overflow-y-auto" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <div className="font-medium border-b mx-2 inline-block">
                        {item.name}
                      </div>
                      <div className="ml-4">
                        {item?.children.map((childItem, index) => (
                          <Link
                            href={
                              "/marketingtools/" +
                              childItem.title.split(" ").join("")
                            }
                            key={index}
                            passHref
                          >
                            <div
                              className={classNames(
                                "block text-gray-600 w-full m-1 p-2 hover:bg-gray-200 rounded cursor-pointer text-sm",
                                route.asPath.split("/").at(-1) ==
                                  childItem.title.split(" ").join("")
                                  ? "bg-gray-300"
                                  : ""
                              )}
                            >
                              {childItem.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
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
