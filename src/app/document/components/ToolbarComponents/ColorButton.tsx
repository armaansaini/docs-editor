import { type ColorResult, CirclePicker, SketchPicker } from "react-color";

import { useEditorState } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ColorButton() {
  const { editor } = useEditorState();

  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm min-w-7 h-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80">
          <span className="text-xs">A</span>
          <div className="h-0.5 w-3/4" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <CirclePicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
