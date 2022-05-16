import React from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapToolBar from "./TipTapToolBar";

export default function TipTapEditor({ editor }) {
  return (
    <div className="flex flex-col h-full">
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button className="border px-2 py-1 bg-gray-800 text-white rounded">Generate</button>
          <button className="border px-2 py-1 bg-green-500 text-white rounded">Write More</button>
          <button className="border px-2 py-1 bg-red-500 text-white rounded">Paraphrase</button>
        </BubbleMenu>
      )}
      <TipTapToolBar editor={editor} />
      <EditorContent editor={editor} className="flex-1" height={50} />
    </div>
  );
}
