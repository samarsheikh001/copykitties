import SimpleNavBar from '../../../components/common/SimpleNavBar';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { useState } from 'react';
import BaseInput from '../../../components/common/BaseInput';
import BaseTextArea from '../../../components/common/BaseTextArea';
import validator from 'validator';

import { fetchPostJSON } from '../../../utils/api-helpers';

export default function ArticleRewriter(params) {
  const [textArray, setTextArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ source, title, tone }) => {
    const { text } = await extractText({ source, title });
    rewriteSentence({ text, tone });
  };

  async function rewriteSentence({ text, tone }) {
    setTextArray([]);
    setLoading(true);
    for (let token = 0; token < text.split('.').length; token = token + 5) {
      const splittedText = text
        .split('.')
        .slice(token, token + 5)
        .join('.');
      console.log(splittedText);
      const data = await fetchPostJSON('/api/generate/rewrite', {
        text: splittedText + '.',
        tone,
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

      <div className="m-4 mx-auto max-w-lg rounded border p-4 shadow-xl">
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

          <div className="mt-2">
            <label
              htmlFor="tone"
              className="block text-sm font-medium text-gray-700"
            >
              Select Tone
            </label>
            <div className="mt-1">
              <select
                className={classNames(
                  'block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm',
                  errors['tone'] &&
                    'border-red-500 focus:border-red-500 focus:ring-red-500',
                )}
                {...register('tone')}
              >
                <option value="Simple">Simple</option>
                <option value="Pessimistic">Pessimistic</option>
                <option value="Informal">Informal</option>
                <option value="Formal">Formal</option>
                <option value="Joyful">Joyful</option>
                <option value="Sincere">Sincere</option>
                <option value="Hypocritical">Hypocritical</option>
                <option value="Fearful">Fearful</option>
                <option value="Hopeful">Hopeful</option>
                <option value="Humorous">Humorous</option>
              </select>
            </div>
          </div>

          <input
            className="mt-6 cursor-pointer rounded bg-gray-700 py-2 text-white"
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
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      url: source,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const response = await fetch(
      'https://text-extractor-article.herokuapp.com/extractor',
      requestOptions,
    );

    const data = await response.json();
    console.log(data);
    return { ...data, inputTitle: title };
  }

  return { text: source, inputTitle: title };
}

function RewrittenArticleComponent({ texts, loading }) {
  return (
    <div className="container mx-auto p-4">
      {texts.map((text, index) => (
        <li className="grid grid-cols-2" key={index}>
          <div className="m-2 rounded bg-gray-100 p-2">{text.originalText}</div>
          <div className="m-2 rounded bg-gray-100 p-2">{text.text}</div>
        </li>
      ))}
      {loading && (
        <li className="grid h-20 animate-pulse grid-cols-2">
          <div className="m-2 rounded bg-slate-200 p-2"></div>
          <div className="m-2 rounded bg-slate-200 p-2"></div>
        </li>
      )}
    </div>
  );
}
