import SimpleNavBar from "../../../components/common/SimpleNavBar";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import { useState } from "react";
import BaseInput from "../../../components/common/BaseInput";
import BaseTextArea from "../../../components/common/BaseTextArea";
import validator from "validator";

import { fetchPostJSON } from "../../../utils/api-helpers";

export default function ArticleRewriter(params) {
  const [textArray, setTextArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ source, title }) => {
    const { text } = await extractText({ source, title });
    rewriteSentence({ text });
  };

  async function rewriteSentence({ text }) {
    setTextArray([]);
    setLoading(true);
    for (let token = 0; token < text.split(".").length - 1; token = token + 5) {
      const splittedText = text
        .split(".")
        .slice(token, token + 5)
        .join(".");
      console.log(splittedText);
      const data = await fetchPostJSON("/api/generate/rewrite", {
        text: splittedText + ".",
      });
      setTextArray((prevArray) => [
        ...prevArray,
        {
          text: data.text,
          originalText: splittedText,
        },
      ]);
    }
    setLoading(false);
  }

  return (
    <>
      <SimpleNavBar />
      <div className="p-4 text-center">
        <h2 className="text-4xl font-bold">Rewrite articles with AI</h2>
        <p>The smartest tool to rewrite articles from scratch.</p>
      </div>

      <div className="shadow-xl border rounded m-4 p-4 max-w-lg mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <BaseInput
            errors={errors}
            title="Article Title"
            register={register}
            inputName="title"
            required={true}
            placeholder="The title of the article that you want to rewrite"
          />
          <BaseTextArea
            errors={errors}
            rows={3}
            title="What would you like to rewrite?"
            register={register}
            inputName="source"
            required={true}
            placeholder="Paste the content or the URL of the article that you want to rewrite"
          />
          <input
            className="bg-gray-700 rounded text-white mt-6 py-2 cursor-pointer"
            type="submit"
          />
        </form>
      </div>

      <RewrittenArticleComponent texts={textArray} loading={loading} />
    </>
  );
}

async function extractText({ source, title }) {
  if (validator.isURL(source)) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      url: source,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://text-extractor-article.herokuapp.com/extractor",
      requestOptions
    );

    const data = await response.json();
    console.log(data);
    return { ...data, inputTitle: title };
  }

  return { text: source, inputTitle: title };
}

function RewrittenArticleComponent({ texts, loading }) {
  return (
    <div className="p-4 container mx-auto">
      {texts.map((text, index) => (
        <li className="grid grid-cols-2" key={index}>
          <div className="bg-gray-100 rounded m-2 p-2">{text.originalText}</div>
          <div className="bg-gray-100 rounded m-2 p-2">{text.text}</div>
        </li>
      ))}
      {loading && (
        <li className="grid grid-cols-2 h-20 animate-pulse">
          <div className="bg-slate-200 rounded m-2 p-2"></div>
          <div className="bg-slate-200 rounded m-2 p-2"></div>
        </li>
      )}
    </div>
  );
}
