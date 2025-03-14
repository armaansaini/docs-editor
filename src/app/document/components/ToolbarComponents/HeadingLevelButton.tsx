import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorState } from "@/store/use-editor-store";
import { type Level } from "@tiptap/extension-heading";
import { ChevronDownIcon } from "lucide-react";

export default function HeadingLevelButton() {
  const { editor } = useEditorState();

  const headings = [
    { label: "Normal Text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ];

  const getHeadingLevel = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }
    return "Normal Text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-between shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm h-7 w-[120px] "
          )}
        >
          {getHeadingLevel()}
          <ChevronDownIcon className="size-4 ml-2 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {headings.map(({ label, value, fontSize }) => (
          <button
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
            }}
            key={value}
            className={cn(
              "flex items-center px-2 text-sm gap-x-2 py-3 w-full rounded-sm hover:bg-neutral-200/80",
              editor?.isActive("heading", { level: value }) &&
                "bg-neutral-200/80",
              value === 0 && !editor?.isActive("heading") && "bg-neutral-200/80"
            )}
            style={{ fontSize }}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
