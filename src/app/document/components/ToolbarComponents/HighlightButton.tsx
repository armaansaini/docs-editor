import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useEditorState } from "@/store/use-editor-store";
import { PencilIcon, PenIcon, PenToolIcon } from "lucide-react";
import { type ColorResult, SketchPicker } from "react-color";

export default function HighlightButton() {
  const { editor } = useEditorState();

  const value = editor?.getAttributes("textStyle").highlight || "#ffffff";

  const onChange = (color: ColorResult) =>
    editor?.chain().focus().setHighlight({ color: color.hex }).run();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm min-w-7 h-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80">
          <span className="text-sm">
            <PencilIcon className="size-3.5" />
          </span>
          <div className="h-0.5 w-3/4" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
