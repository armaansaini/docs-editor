import { useEditorState } from "@/store/use-editor-store";
import useDebounce from "./useDebounce";

export default function useAutoSaveToDatabase({
  documentId,
}: {
  documentId: string;
}) {
  const { editor } = useEditorState();

  const debouncedJSON = useDebounce(JSON.stringify(editor?.getJSON()), 2000);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(documentId, JSON.stringify(debouncedJSON));
  }

  // save this debounced value to db
  console.log(debouncedJSON, documentId);
}
