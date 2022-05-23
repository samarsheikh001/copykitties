import TagInput from "../common/TagInput";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useState } from "react";

import GenerateCombobox from "./GenerateCombobox";

const toGenerate = [
  { id: 1, name: "Titles" },
  { id: 2, name: "Outline" },
  { id: 3, name: "Introduction" },
  { id: 4, name: "blog" },
  { id: 5, name: "Conclusion" },
];

export default function EditorForm({ handleData, compose }) {
  const [tagData, setTagData] = useState([]);
  const [selectedToGenerate, setselectedToGenerate] = useState(toGenerate[0]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleData({ data, tagData, selectedToGenerate });
  return (
    <div className="px-4 py-6 h-screen flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto mb-2">
        <div className="border-2 rounded p-2">
          <div className="font-bold border-b inline-block mb-2">Helper Box</div>
          <div>
            <label
              htmlFor="need"
              className="block text-sm font-medium text-gray-700"
            >
              What do you want?
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
                {...register("description")}
              />
            </div>
            <div className="float-right text-gray-400 text-xs">
              {watch("description")?.length}/350
            </div>
          </div>
          <div className="my-2">
            <GenerateCombobox
              selectedToGenerate={selectedToGenerate}
              setselectedToGenerate={setselectedToGenerate}
              toGenerate={toGenerate}
            />
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
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-black block w-full text-white px-4 py-2 my-2 rounded"
          >
            Generate{" "}
            <span className="bg-gray-600 p-1 rounded ml-1">Ctrl+K</span>
          </button>
        </div>
      </div>
      <div>
        <div className="p-1 my-1 text-gray-500 bg-gray-200 text-sm rounded">
          Select content in editor then click compose
        </div>
        <button
          onClick={compose}
          className="bg-black block w-full text-white px-4 py-2 rounded mb-8"
        >
          Compose <span className="bg-gray-600 p-1 rounded ml-1">Ctrl+K</span>
        </button>
      </div>
    </div>
  );
}
