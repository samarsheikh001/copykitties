export default function TagInput({ tagData, setTagData }) {
  const removeTagData = (indexToRemove) => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
  };
  const addTagData = (event) => {
    if (event.target.value !== "") {
      setTagData([...tagData, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tag-input flex flex-wrap flex-1 focus:outline-transparent border-2 rounded">
      <ul className="tags flex flex-wrap">
        {tagData.map((tag, index) => (
          <li
            key={index}
            className="tag w-auto flex justify-center items-center list-none border-2 m-1 rounded"
          >
            <span className="pl-1">{tag}</span>
            <span
              className="tag-close-icon cursor-pointer bg-gray-200 h-full flex items-center pl-1 ml-1"
              onClick={() => removeTagData(index)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="14px"
                width="14px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"></path>
              </svg>
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="block w-full sm:text-sm  rounded-md shadow-sm focus:border-gray-300 border-gray-300 focus:ring-0 border-0"
        onKeyUp={(event) => (event.key === "Enter" ? addTagData(event) : null)}
        placeholder="Press enter to add a keyword"
      />
    </div>
  );
}
