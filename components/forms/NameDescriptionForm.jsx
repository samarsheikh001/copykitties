import { useForm } from "react-hook-form";
import BaseInput from "../common/BaseInput";
import BaseTextArea from "../common/BaseTextArea";

export default function NameDescriptionForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <BaseInput
            inputName="name"
            title="Company/Product Name *"
            placeholder="Product name"
            errors={errors}
            register={register}
            required={true}
          />

          <BaseTextArea
            inputName="description"
            title="Product Description Name *"
            placeholder="Product Description"
            errors={errors}
            register={register}
            required={true}
          />
        </div>

        <input
          className="bg-black text-white px-4 py-2 rounded w-full my-4"
          type="submit"
        />
      </form>
    </>
  );
}
