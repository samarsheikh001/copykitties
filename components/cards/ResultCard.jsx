import { toast } from 'react-hot-toast';
export default function ResultCard({ text }) {
  return (
    <li className="h-full">
      <div className="flex items-center space-x-2">
        <div className="text-xs text-gray-400">just now</div>
        <span
          onClick={() => {
            navigator.clipboard.writeText(text);
            toast.success('Copied');
          }}
          className="material-symbols-outlined cursor-pointer text-sm text-gray-400"
        >
          content_copy
        </span>
        <span className="material-symbols-rounded cursor-pointer text-sm text-gray-400">
          favorite
        </span>
      </div>

      <div className='py-1 text-gray-700'>{text}</div>
    </li>
  );
}
