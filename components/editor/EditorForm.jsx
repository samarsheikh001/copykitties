import TagInput from "../common/TagInput";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useState } from "react";

export default function EditorForm({ handleData }) {
  const [tagData, setTagData] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleData(data, tagData);
  return (
    <div className="px-4 py-6 h-full flex flex-col">
      <div className="flex-1">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="title"
              id="title"
              maxLength={150}
              className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Copykitties"
              {...register("title")}
            />
          </div>
          <div className="float-right text-gray-400 text-xs">
            {watch("title")?.length}/150
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Content description/ brief
          </label>
          <div className="mt-1">
            <textarea
              rows={8}
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
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-black block w-full text-white px-4 py-2 rounded mb-16"
      >
        Compose <span className="bg-gray-600 p-1 rounded ml-1">Ctrl+K</span>
      </button>
    </div>
  );
}