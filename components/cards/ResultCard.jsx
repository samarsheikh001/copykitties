import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-hot-toast";
export default function ResultCard({ text }) {
  return (
    <div className="mx-2 bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
      <div>{text}</div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
          toast.success("Copied");
        }}
        className="flex items-center bg-black text-white p-1 rounded space-x-1 text-sm"
      >
        <FaRegCopy />
        <span>Copy</span>
      </button>
    </div>
  );
}
