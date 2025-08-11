"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorState } from "@/store/use-editor-store";
import { LucideIcon } from "lucide-react";
import FontFamilyButton from "./ToolbarComponents/FontFamilyButton";

import HeadingLevelButton from "./ToolbarComponents/HeadingLevelButton";
import useToolbarSections from "./ToolbarComponents/useToolbarSections";
import ColorButton from "./ToolbarComponents/ColorButton";
import HighlightButton from "./ToolbarComponents/HighlightButton";
import LinkButton from "./ToolbarComponents/LinkButton";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm min-w-7 h-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive ? "bg-neutral-200/80" : ""
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default function Toolbar() {
  // const { editor } = useEditorState();
  const { actionButtons, textStyleButtons, moreActionButtons } =
    useToolbarSections();

  return (
    <div className="flex bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] items-center gap-x-0.5 overflow-x-auto">
      {actionButtons.map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {textStyleButtons.map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {moreActionButtons.map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <ColorButton />
      <HighlightButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <LinkButton />
    </div>
  );
}
