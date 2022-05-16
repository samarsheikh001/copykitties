import classNames from "classnames";

export default function ToolBar({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex items-center border px-2 space-x-2 sticky top-0 bg-white z-10 flex-wrap">
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        icon={<span className="material-symbols-outlined">format_bold</span>}
        isActive={editor.isActive("bold")}
        activeClassnames="bg-black text-white"
      />
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        icon={<span className="material-symbols-outlined">format_italic</span>}
        isActive={editor.isActive("italic")}
        activeClassnames="bg-black text-white"
      />
      <div className="flex items-center border m-1 rounded border-black pl-1">
        <div>Headline</div>
        <TipTapToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          icon={"1"}
          isActive={editor.isActive("heading", { level: 1 })}
          inActiveclassnames="px-2"
          activeClassnames="bg-black text-white inline px-2"
        />{" "}
        <TipTapToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          icon={"2"}
          isActive={editor.isActive("heading", { level: 2 })}
          inActiveclassnames="px-2"
          activeClassnames="bg-black text-white inline px-2"
        />{" "}
        <TipTapToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          icon={"3"}
          isActive={editor.isActive("heading", { level: 3 })}
          inActiveclassnames="px-2"
          activeClassnames="bg-black text-white inline px-2"
        />
      </div>
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        icon={
          <span className="material-symbols-outlined">
            format_list_bulleted
          </span>
        }
        isActive={editor.isActive("bulletList")}
        activeClassnames="bg-black text-white"
      />
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        icon={
          <span className="material-symbols-outlined">
            format_list_numbered
          </span>
        }
        isActive={editor.isActive("orderedList")}
        activeClassnames="bg-black text-white"
      />
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        icon={<span className="material-symbols-outlined">code</span>}
        isActive={editor.isActive("codeBlock")}
        activeClassnames="bg-black text-white"
      />
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        icon={<span className="material-symbols-outlined">format_quote</span>}
        isActive={editor.isActive("blockquote")}
        activeClassnames="bg-black text-white"
      />
      <TipTapToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        icon={
          <span className="material-symbols-outlined">horizontal_rule</span>
        }
        isActive={false}
        activeClassnames="bg-black text-white"
      />
    </div>
  );
}

function TipTapToolbarButton({
  icon,
  inActiveclassnames,
  activeClassnames,
  onClick,
  isActive,
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        isActive ? activeClassnames : inActiveclassnames,
        "m-1 inline-flex rounded font-bold"
      )}
    >
      {icon}
    </button>
  );
}
