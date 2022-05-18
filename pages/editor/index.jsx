import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import TipTapEditor from "../../components/editor/TipTapEditor";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import SiteLogo from "../../components/common/SiteLogo";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

import EditorForm from "../../components/editor/EditorForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h1>
        Secret Nutella Recipe
      </h1>
      <h2>
        Get back your husband with the help of secret nutella recipe
      </h2>
    `,
  });
  return (
    <div className="h-screen">
      <TopNav />
      {/* <button
        onClick={async () => {
          const text = "samar is a good boy";
          // console.log(editor.state.selection.from);
          // console.log(editor.state.selection.to);
          // console.log(
          //   editor.state.doc.textBetween(
          //     editor.state.selection.from,
          //     editor.state.selection.to
          //   )
          // );
          const delay = (ms) => new Promise((res) => setTimeout(res, ms));
          for (const word of text.split("")) {
            editor.commands.insertContentAt(editor.state.selection.to, word);
            await delay(10);
          }
          // editor.commands.insertContentAt(editor.state.selection.to, text);
        }}
        className="p-4 bg-black text-white"
      >
        Text
      </button> */}
      <div className="h-full">
        <div className="lg:grid lg:grid-cols-12 h-full">
          <div className="hidden lg:block lg:col-span-4 xl:col-span-2 shadow">
            <div aria-label="Sidebar" className="sticky divide-y h-full">
              <EditorForm
                handleData={(data, tagData) => {
                  console.log(data);
                }}
              />
            </div>
          </div>
          <main className="lg:col-span-8 xl:col-span-6 h-full">
            {/* <SlateEditor /> */}
            <TipTapEditor editor={editor} />
          </main>
          <aside className="hidden xl:block xl:col-span-4 bg-blue-500">
            <div className="sticky top-6 space-y-4">
              {/* Your content */}
              <div>Blue</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
function TopNav() {
  return (
    <div className="m-2 flex">
      <div className="flex-1">
        <button className="border-2 border-black py-1 px-2 rounded flex items-center">
          <span className="material-symbols-outlined pr-2">arrow_back</span>
          Go Back
        </button>
      </div>
      <SiteLogo />
      <div className="flex-1"></div>
    </div>
  );
}
