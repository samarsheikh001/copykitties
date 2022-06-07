import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BaseInput from '../common/BaseInput';
import BaseTextArea from '../common/BaseTextArea';

export default function FormBuilder({ onSubmit, textFields }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset();
  }, [reset, router.query.slug]);

  return (
    <>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {textFields.map((textField, index) => {
            return textField.isTextarea ? (
              <BaseTextArea
                key={index}
                rows={textField.rowNumbers}
                inputName={textField.name}
                title={textField.title}
                placeholder={textField.placeholder}
                errors={errors}
                register={register}
                required={true}
              />
            ) : (
              <BaseInput
                key={index}
                inputName={textField.name}
                title={textField.title}
                placeholder={textField.placeholder}
                errors={errors}
                register={register}
                required={true}
              />
            );
          })}
        </div>

        <input
          className="my-4 w-full cursor-pointer rounded bg-black px-4 py-2 text-white"
          type="submit"
        />
      </form>
    </>
  );
}
