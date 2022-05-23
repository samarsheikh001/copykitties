import TipTapEditor from "../../components/editor/TipTapEditor";
import TipTapToolBar from "../../components/editor/TipTapToolBar";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import SiteLogo from "../../components/common/SiteLogo";

import EditorForm from "../../components/editor/EditorForm";
import { useState } from "react";

import { fetchPostJSON } from "../../utils/api-helpers";
export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, CharacterCount.configure({})],
  });
  return (
    <>
      <TopNav />
      <div className="h-screen lg:grid lg:grid-cols-12">
        {/* <button
          onClick={async () => {
            const data = await fetchPostJSON("/api/generate/compose", {
              name: "Samar",
            });
            console.log(data);
          }}
          className="p-4 bg-black text-white rounded m-2"
        >
          HEY
        </button> */}
        {/* <button
        onClick={async () => {
          const text = "samar is a good boy";
          console.log(editor.state.selection.from);
          console.log(editor.state.selection.to);
          console.log(
            editor.state.doc.textBetween(
              editor.state.selection.from,
              editor.state.selection.to
            )
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
        <div className="hidden lg:block lg:col-span-4 xl:col-span-2 shadow border-t sticky top-0 h-full">
          <div aria-label="Sidebar" className="divide-y h-full">
            <EditorForm
              handleData={async ({ data, tagData, selectedToGenerate }) => {
                console.log(selectedToGenerate);
                const reponse = await fetchPostJSON("/api/generate/helper", {
                  ...data,
                  keywords: JSON.stringify(tagData),
                  toGenerate: selectedToGenerate.name,
                });
                console.log(reponse[0].text);
                const delay = (ms) => new Promise((res) => setTimeout(res, ms));
                for (const word of reponse[0].text.split("\n")) {
                  // editor.commands.insertContentAt(
                  //   editor.state.selection.to,
                  //   word
                  // );
                  editor.commands.insertContent(`<p>${word}</p>`);
                  await delay(100);
                }
              }}
              compose={async () => {
                const { from, to } = editor.state.selection;
                const selectedText = editor.state.doc.textBetween(from, to);
                if (selectedText) {
                  const reponse = await fetchPostJSON("/api/generate/compose", {
                    prompt: selectedText,
                  });
                  console.log(reponse[0].text);
                  const delay = (ms) =>
                    new Promise((res) => setTimeout(res, ms));
                  for (const word of reponse[0].text.split("\n")) {
                    editor.commands.insertContent(`<p>${word}</p>`);
                    await delay(100);
                  }
                }
              }}
            />
          </div>
        </div>
        <main className="lg:col-span-8 xl:col-span-7 h-full overflow-hidden">
          {/* <SlateEditor /> */}
          <TipTapToolBar editor={editor} />
          <TipTapEditor editor={editor} />
        </main>
        <aside className="hidden xl:block xl:col-span-3">
          <div className="sticky top-6 space-y-4">
            <RightBar editor={editor} />
          </div>
        </aside>
      </div>
    </>
  );
}
function TopNav() {
  return (
    <div className="m-2 flex items-center">
      <div className="flex-1">
        <button className="border border-black rounded flex items-center">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="px-1">Go Back</span>
        </button>
      </div>
      <SiteLogo />
      <div className="flex-1"></div>
    </div>
  );
}

function RightBar({ editor }) {
  return (
    <>
      <div className="grid items-center p-4 space-y-4">
        <button className="block bg-black text-white rounded p-2 font-bold">
          Save Article
        </button>
        <button className="p-2 rounded border flex items-center justify-center">
          <span className="material-symbols-outlined px-2">content_copy</span>
          Copy Content
        </button>

        <div className="grid grid-cols-2 space-x-2">
          <div className="text-center border py-1">
            <div className="text-gray-400">Words</div>
            <div className="font-bold">
              {" "}
              {/* {editor?.storage.characterCount.words()} */}
              {editor?.storage.characterCount.words()}
            </div>
          </div>
          <div className="text-center border py-1">
            <div className="text-gray-400">Characters</div>
            <div className="font-bold">
              {editor?.storage.characterCount.characters()}
            </div>
          </div>
        </div>
        <ShowInstruction />
      </div>
    </>
  );
}

function ShowInstruction() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="py-2 font-bold flex justify-between w-full border-b-2 mb-2"
      >
        How It Works{" "}
        <span className="material-symbols-outlined">
          keyboard_arrow_{show ? "up" : "down"}
        </span>
      </button>
      {show && (
        <div className="space-y-4 transition-all">
          <div>
            <span className="font-bold">Write more</span>: Expand the text for
            you where you place the cursor.
          </div>
          <div>
            <span className="font-bold">Generate</span>: Generate new paragraphs
            based on the previous subheading. Place the cursor where you want to
            use it.
          </div>
          <div>
            <span className="font-bold">Paraphrase</span>: Paraphrase (or
            rewrite) the highlighted text.
          </div>
        </div>
      )}
    </div>
  );
}
