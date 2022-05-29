import classNames from "classnames";

export default function BaseTextArea({
  title,
  register,
  placeholder,
  inputName,
  rows,
  required = false,
  errors,
}) {
  return (
    <div className="mt-2">
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1">
        <textarea
          rows={rows}
          type="text"
          name={inputName}
          id={inputName}
          className={classNames(
            "shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md",
            errors[inputName] && "border-red-500 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder={placeholder}
          {...register(inputName, { required })}
        />
      </div>
    </div>
  );
}
