import { create } from "zustand";
import { type Editor } from "@tiptap/react";

interface EditorState {
  editor: Editor | null;
  setEditor: (editer: Editor | null) => void;
}
export const useEditorState = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
