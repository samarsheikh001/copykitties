import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { classNames } from "../../../lib/classnames";

import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaUndo,
  FaRedoAlt,
} from "react-icons/fa";
import { GrBlockQuote } from "react-icons/gr";

import {
  MdClear,
  MdFormatListBulleted,
  MdHorizontalRule,
} from "react-icons/md";
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  editor.setOptions({
    editorProps: {
      attributes: {
        class: "h-96",
      },
    },
  });

  function addContent() {
    editor.chain().insertContent("Samar").run();
  }

  function buttonClassNames(string, level) {
    return classNames(
      editor.isActive(string, { level }) ? "bg-black text-white" : "",
      "border border-black rounded m-1 p-1"
    );
  }

  return (
    <div className="m-2 flex items-center">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClassNames("bold")}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClassNames("italic")}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={buttonClassNames("strike")}
      >
        <FaStrikethrough />
      </button>
      <button
        className="border border-black rounded m-1 px-1"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        <MdClear className="h-6" />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={buttonClassNames("paragraph")}
      >
        <div className="px-2">P</div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={buttonClassNames("heading", 1)}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClassNames("heading", 2)}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClassNames("bulletList")}
      >
        <MdFormatListBulleted />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={buttonClassNames("codeBlock")}
      >
        <FaCode />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={buttonClassNames("blockquote")}
      >
        <GrBlockQuote />
      </button>
      <button
        className="border border-black rounded m-1 px-1"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <MdHorizontalRule className="h-6" />
      </button>
      <button
        className="border border-black rounded m-1 p-1"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <FaUndo />
      </button>
      <button
        className="border border-black rounded m-1 p-1"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <FaRedoAlt />
      </button>
    </div>
  );
};

export default function TipTapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
          <h1> <strong>
            New Nutella Crepe Recipe </strong>
          </h1>
          <h2>
            Win back your husband love.
          </h2>
        `,
  });
  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent className="p-2" editor={editor} />
    </div>
  );
}
