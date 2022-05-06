import { useForm } from "react-hook-form";
import { useState } from "react";
import { classNames } from "../../lib/classnames";
const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function EditorForm(onSubmitForm) {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState();

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   console.log(watch("description"));
  return (
    <form
      className="max-w-lg mx-auto mt-24 space-y-4 px-4"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Brand/Name
          </label>
          <span className="text-sm text-gray-500" id="name-optional">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="name"
            name="name"
            id="name"
            {...register("name")}
            className="border p-2 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="e.g. Copykitties"
            aria-describedby="name-optional"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="product-description"
          className="block text-sm font-medium text-gray-700"
        >
          Describe your product{" "}
        </label>

        <div className="mt-1">
          <textarea
            rows={4}
            name="product-description"
            {...register("description", { required: true, maxLength: 1000 })}
            placeholder="An ai powered copywriter that can help you write better better content."
            id="product-description"
            className={classNames(
              "shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md",
              errors.description && "border-red-500 border-2"
            )}
          />
        </div>
        <div className="float-right text-sm">
          {watch("description")?.length}/1000
        </div>
      </div>

      {/* <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Label className="block text-sm font-medium text-gray-700">
          Assigned to
        </Combobox.Label>
        <div className="relative mt-1">
          <Combobox.Input
            {...register("mood", { required: true })}
            className={classNames(
              "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm",
              errors.mood && "border-red-500 border-2"
            )}
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(person) => person.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {filteredPeople.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                      active ? "bg-gray-600 text-white" : "text-gray-900"
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <div className="flex items-center">
                        <img
                          src={person.imageUrl}
                          alt=""
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                        <span
                          className={classNames(
                            "ml-3 truncate",
                            selected && "font-semibold"
                          )}
                        >
                          {person.name}
                        </span>
                      </div>

                      {selected && (
                        <span
                          className={classNames(
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                            active ? "text-white" : "text-gray-600"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox> */}

      <button
        type="submit"
        className="bg-black rounded text-white py-2 w-full hover:bg-gray-700"
      >
        Generate Copy
      </button>
    </form>
  );
}
