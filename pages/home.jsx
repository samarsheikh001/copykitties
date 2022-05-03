import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import Image from "next/image";
import { classNames } from "/lib/classnames";
import { NewspaperIcon, PencilAltIcon } from "@heroicons/react/outline";

const user = {
  name: "Samar Sheikh",
  email: "samarsheikh001@gmail.com",
  role: "Copykitty ;)",
  imageUrl:
    "https://pbs.twimg.com/profile_images/1519082684990992384/iGP3_f5c_400x400.jpg",
};
const stats = [
  { label: "words generated", value: 120 },
  { label: "Credits", value: 40 },
  { label: "Projects", value: 20 },
];

const actions = [
  {
    icon: NewspaperIcon,
    name: "Blog Post",
    href: "#",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
    hoverBackground: "hover:bg-blue-50",
    description: "Let AI Help You Write Better, More Engaging Blog Posts",
  },
  {
    icon: PencilAltIcon,
    name: "Article",
    href: "#",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    hoverBackground: "hover:bg-purple-50",
    description:
      "The easiest way to write better articles for School or Work without plagiarism",
  },
];

const marketingActions = [
  {
    svg: "/icons/playstore.svg",
    name: "App publish content",
    href: "#",
    iconBackground: "bg-fuchsia-50",
    hoverBackground: "hover:bg-fuchsia-50",
    description:
      "Easily create descriptions, titles, and meta keywords for your app in seconds.",
  },
  {
    svg: "/icons/google.svg",
    name: "Google ads Headline",
    href: "#",
    iconBackground: "bg-teal-50",
    hoverBackground: "hover:bg-teal-50",
    description:
      "Create high converting copy for the 'Headlines' section of your Google Ads.",
  },
  {
    svg: "/icons/youtube.svg",
    name: "Video Titles",
    href: "#",
    iconBackground: "bg-red-50",
    hoverBackground: "hover:bg-red-50",
    description:
      "Create engaging, click-worthy titles for your videos that will rank on Youtube.",
  },
  {
    svg: "/icons/instagram.svg",
    name: "Photo Post Captions",
    href: "#",
    iconBackground: "bg-purple-50",
    hoverBackground: "hover:bg-purple-50",
    description: "Write catchy captions for your Instagram posts",
  },
  {
    svg: "/icons/google.svg",
    name: "Payroll",
    href: "#",
    iconBackground: "bg-yellow-50",
    hoverBackground: "hover:bg-yellow-50",
  },
  {
    svg: "/icons/google.svg",
    name: "Submit an expense",
    href: "#",
    iconBackground: "bg-rose-50",
    hoverBackground: "hover:bg-rose-50",
  },
  {
    svg: "/icons/google.svg",
    name: "Training",
    href: "#",
    iconBackground: "bg-indigo-50",
    hoverBackground: "hover:bg-indigo-50",
  },
];

const recentProjects = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Emily Selman",
    handle: "emilyselman",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Kristin Watson",
    handle: "kristinwatson",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
];
const announcements = [
  // {
  //   id: 1,
  //   title: "Office closed on July 2nd",
  //   href: "#",
  //   preview:
  //     "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  // },
];

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Profile</h1>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          {/* Welcome panel */}
          <section aria-labelledby="profile-overview-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <h2 className="sr-only" id="profile-overview-title">
                Profile Overview
              </h2>
              <div className="bg-white p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:space-x-5">
                    <div className="flex-shrink-0">
                      <img
                        className="mx-auto h-20 w-20 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-sm font-medium text-gray-600">
                        Welcome back, what are you making today?
                      </p>
                      <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {user.name}
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        {user.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center sm:mt-0">
                    <a
                      href="#"
                      className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-6 py-5 text-sm font-medium text-center"
                  >
                    <span className="text-gray-900">{stat.value}</span>{" "}
                    <span className="text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/*Actions panel */}
          <ActionsPanel
            actions={actions}
            ariaLabelledby="action-title"
            sr="Actions"
            headTitle="Most used copykit (more templates coming soon)"
          />

          {/* marketing Actions panel */}
          <ActionsPanel
            actions={marketingActions}
            ariaLabelledby="marketing-action-title"
            sr="marketing Actions"
            headTitle="Generate best marketing content."
          />
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          {/* Announcements */}
          <section aria-labelledby="announcements-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <div className="p-6">
                <h2
                  className="text-base font-medium text-gray-900"
                  id="announcements-title"
                >
                  Announcements
                </h2>
                {announcements.length == 0 ? (
                  <div>No new announcement</div>
                ) : (
                  <>
                    <div className="flow-root mt-6">
                      <ul
                        role="list"
                        className="-my-5 divide-y divide-gray-200"
                      >
                        {announcements.map((announcement) => (
                          <li key={announcement.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-gray-500">
                              <h3 className="text-sm font-semibold text-gray-800">
                                <a
                                  href={announcement.href}
                                  className="hover:underline focus:outline-none"
                                >
                                  {/* Extend touch target to entire panel */}
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {announcement.title}
                                </a>
                              </h3>
                              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                {announcement.preview}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Recent Hires */}
          <section aria-labelledby="recent-hires-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <div className="p-6">
                <h2
                  className="text-base font-medium text-gray-900"
                  id="recent-hires-title"
                >
                  Recent Projects
                </h2>
                <div className="flow-root mt-6">
                  <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {recentProjects.map((person) => (
                      <li key={person.handle} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={person.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {person.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {"@" + person.handle}
                            </p>
                          </div>
                          <div>
                            <a
                              href={person.href}
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View all
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

Home.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

function ActionsPanel({ ariaLabelledby, sr, headTitle, actions }) {
  return (
    <section aria-labelledby={ariaLabelledby}>
      <div className="rounded-b-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 className="sr-only" id={ariaLabelledby}>
          {sr}
        </h2>
        <div className="col-span-2 p-2 bg-white rounded-t pl-4">
          {headTitle}
        </div>
        {actions.map((action, actionIdx) => (
          <div
            key={action.name}
            className={classNames(
              action.hoverBackground,
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "relative group bg-white  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-3 ring-4 ring-white"
                )}
              >
                {action.icon ? (
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Image
                    src={action.svg}
                    height={32}
                    width={32}
                    alt="marketing Icon"
                  />
                )}
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.name}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{action.description}</p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
