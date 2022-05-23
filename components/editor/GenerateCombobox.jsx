/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Combobox } from "@headlessui/react";

export default function GenerateCombobox({selectedToGenerate, setselectedToGenerate, toGenerate}) {

  const [query, setQuery] = useState("");

  const filteredToGenerate =
    query === ""
      ? toGenerate
      : toGenerate.filter((toGenerate) => {
          return toGenerate.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedToGenerate} onChange={setselectedToGenerate}>
      <Combobox.Label className="block text-sm font-medium text-gray-700 py-1">
        To Generate
      </Combobox.Label>
      <Combobox.Input
        className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(toGenerate) => toGenerate.name}
      />
      <Combobox.Options className="border rounded shadow-xl text-base">
        {query.length > 0 && (
          <Combobox.Option
            className="rounded p-2 cursor-pointer hover:bg-gray-200"
            value={{ id: null, name: query }}
          >
            Create "{query}"
          </Combobox.Option>
        )}
        {filteredToGenerate.map((toGenerate) => (
          <Combobox.Option
            className="rounded p-2 cursor-pointer hover:bg-gray-200"
            key={toGenerate.id}
            value={toGenerate}
          >
            {toGenerate.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
