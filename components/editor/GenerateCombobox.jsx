/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Combobox } from "@headlessui/react";

const toGenerate = [
  { id: 1, name: "Title" },
  { id: 2, name: "Outline" },
  { id: 3, name: "Introduction" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Conclusion" },
];

export default function GenerateCombobox() {
  const [selectedPerson, setSelectedPerson] = useState(toGenerate[0]);
  const [query, setQuery] = useState("");

  const filteredtoGenerate =
    query === ""
      ? toGenerate
      : toGenerate.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Label className="block text-sm font-medium text-gray-700 py-1">
        To Generate
      </Combobox.Label>
      <Combobox.Input
        className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => person.name}
      />
      <Combobox.Options>
        {query.length > 0 && (
          <Combobox.Option
            className="shadow p-2 rounded border-2 border-black my-1"
            value={{ id: null, name: query }}
          >
            Create "{query}"
          </Combobox.Option>
        )}
        {filteredtoGenerate.map((person) => (
          <Combobox.Option
            className="rounded p-2 border-2 border-black my-1 bg-gray-200 cursor-pointer"
            key={person.id}
            value={person}
          >
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
