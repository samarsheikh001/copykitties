import TagInput from "../common/TagInput";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useState } from "react";
import { fetchPostJSON } from "../../utils/api-helpers";

import GenerateCombobox from "./GenerateCombobox";

const toGenerate = [
  { id: 1, name: "Titles" },
  { id: 2, name: "Outline" },
  { id: 3, name: "Introduction" },
  { id: 4, name: "blog" },
  { id: 5, name: "Conclusion" },
];

export default function EditorForm({ handleData, editor }) {
  const [tagData, setTagData] = useState([]);
  const [selectedToGenerate, setselectedToGenerate] = useState(toGenerate[0]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleData({ data, tagData, selectedToGenerate });

  const [composeLoading, setComposeLoading] = useState(false);

  async function compose() {
    setComposeLoading(true);
    editor.setEditable(false);
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);
    if (selectedText) {
      const reponse = await fetchPostJSON("/api/generate/compose", {
        prompt: selectedText,
      });
      console.log(reponse[0].text);
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      for (const word of reponse[0].text.split("\n")) {
        editor.commands.insertContent(`<p>${word}</p>`);
        await delay(100);
      }
    }
    editor.setEditable(true);
    setComposeLoading(false);
  }

  async function generate() {}

  return (
    <div className="px-4 py-6 h-screen overflow-y-auto space-y-2">
        <div className="border-2 rounded p-2">
          {/* <div className="font-bold border-b inline-block mb-2">Details</div> */}
          <div>
            <label
              htmlFor="need"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="need"
                id="need"
                maxLength={150}
                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="I want to write an article/blog about copykitties."
                {...register("need")}
              />
            </div>
            <div className="float-right text-gray-400 text-xs">
              {watch("need")?.length}/150
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description / Brief
            </label>
            <div className="mt-1">
              <textarea
                rows={3}
                name="description"
                id="description"
                className={classNames(
                  "shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md",
                  errors.description &&
                    "border-red-500 focus:ring-red-500 focus:border-red-500"
                )}
                maxLength={350}
                placeholder="It is an ai copywriter tool"
                {...register("description", { required: true })}
              />
            </div>
            <div className="float-right text-gray-400 text-xs">
              {watch("description")?.length}/350
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="tone"
              className="block text-sm font-medium text-gray-700"
            >
              Tone of voice
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="tone"
                id="tone"
                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Friendly"
                {...register("tone")}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700"
            >
              Keywords
            </label>
            <div className="mt-1">
              <TagInput tagData={tagData} setTagData={setTagData} />
            </div>
          </div>
        </div>

      <div className="border-2 p-2 rounded">
          <GenerateCombobox
            selectedToGenerate={selectedToGenerate}
            setselectedToGenerate={setselectedToGenerate}
            toGenerate={toGenerate}
          />
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-black block w-full text-white px-4 py-2 mt-2 rounded"
        >
          Generate <span className="bg-gray-600 p-1 rounded ml-1">Ctrl+K</span>
        </button>
      </div>

      <div className="border-2 p-2 rounded">
        <div className="p-1 mb-1 text-gray-500 bg-gray-200 text-sm rounded">
          Select content in editor then click compose
        </div>
        <button
          onClick={compose}
          className="bg-black block w-full text-white px-4 py-2 rounded"
        >
          Compose{" "}
          {composeLoading ? (
            LoadingIndicator({ color: "text-white" })
          ) : (
            <span className="bg-gray-600 p-1 rounded ml-1">Ctrl+K</span>
          )}
        </button>
      </div>
    </div>
  );
}

function LoadingIndicator({ color }) {
  return (
    <svg
      className={classNames("animate-spin h-5 w-5 inline", color)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
