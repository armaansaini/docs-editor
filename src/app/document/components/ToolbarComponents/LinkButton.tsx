"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useEditorState } from "@/store/use-editor-store";
import { Link2Icon } from "lucide-react";
import { useState } from "react";

export default function LinkButton() {
  const { editor } = useEditorState();
  const [value, setValue] = useState(editor?.getAttributes("link").href || "");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) setValue(editor?.getAttributes("link").href || "");
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="text-sm min-w-7 h-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80">
          <span className="text-sm">
            <Link2Icon className="size-4" />
          </span>
          <div className="h-0.5 w-3/4" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5 flex items-center gap-x-2">
        <Input
          placeholder="https://example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
