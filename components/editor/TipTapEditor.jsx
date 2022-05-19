import React from "react";
import { EditorContent } from "@tiptap/react";
import TipTapToolBar from "./TipTapToolBar";

export default function TipTapEditor({ editor }) {
  return (
    <div className="h-full">
      <EditorContent editor={editor} className="h-full" />
    </div>
  );
}
