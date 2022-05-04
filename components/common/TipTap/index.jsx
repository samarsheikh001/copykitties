import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { classNames } from "../../../lib/classnames";
import Image from "next/image";

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
        <FaRedoAlt/>
      </button>
    </div>
  );
};

export default function Example() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent className="border p-2" editor={editor} />
    </div>
  );
}
