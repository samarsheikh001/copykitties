import React from "react";
import { EditorContent } from "@tiptap/react";
import TipTapToolBar from "./TipTapToolBar";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default function TipTapEditor({ editor }) {
  return (
    <div className="h-full">
      <GrammarlyEditorPlugin clientId="client_QyWAxPj5bc1KQouoo1rKho">
        <EditorContent editor={editor} className="h-full" />
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
      </GrammarlyEditorPlugin>
    </div>
  );
}
