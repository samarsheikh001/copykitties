import React from "react";
import { EditorContent } from "@tiptap/react";
import TipTapToolBar from "./TipTapToolBar";

export default function TipTapEditor({ editor }) {
  return (
    <div className="flex flex-col h-full">
      <TipTapToolBar editor={editor} />
      <EditorContent editor={editor} className="flex-1" height={50} />
    </div>
  );
}
