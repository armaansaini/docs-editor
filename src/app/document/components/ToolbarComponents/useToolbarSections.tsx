import { type Editor } from "@tiptap/react";
import { useEditorState } from "@/store/use-editor-store";
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

const getActionButtons = (editor: Editor | null) => [
  {
    label: "Undo",
    icon: Undo2Icon,
    onClick: () => editor?.chain().focus().undo().run(),
  },
  {
    label: "Redo",
    icon: Redo2Icon,
    onClick: () => editor?.chain().focus().redo().run(),
  },
  {
    label: "Print",
    icon: PrinterIcon,
    onClick: () => window.print(),
  },
  {
    label: "Spell Check",
    icon: SpellCheckIcon,
    onClick: () => {
      const current = editor?.view.dom.getAttribute("spellcheck");
      editor?.view.dom.setAttribute(
        "spellcheck",
        current === "false" ? "true" : "false"
      );
    },
  },
];

const getTextStyleButtons = (editor: Editor | null) => [
  {
    label: "Bold",
    icon: BoldIcon,
    isActive: editor?.isActive("bold"),
    onClick: () => editor?.chain().focus().toggleBold().run(),
  },
  {
    label: "Italics",
    icon: ItalicIcon,
    isActive: editor?.isActive("italic"),
    onClick: () => editor?.chain().focus().toggleItalic().run(),
  },
  {
    label: "Underline",
    icon: UnderlineIcon,
    isActive: editor?.isActive("underline"),
    onClick: () => editor?.chain().focus().toggleUnderline().run(),
  },
  {
    label: "Strike",
    icon: StrikethroughIcon,
    isActive: editor?.isActive("strike"),
    onClick: () => editor?.chain().focus().toggleStrike().run(),
  },
];

const getMoreActionButtons = (editor: Editor | null) => [
  {
    label: "Comment",
    icon: MessageSquarePlusIcon,
    onClick: () => console.log("Commented"),
    isActive: false,
  },
  {
    label: "List Todo",
    icon: ListTodoIcon,
    onClick: () => editor?.chain().focus().toggleTaskList().run(),
    isActive: editor?.isActive("taskList"),
  },
  {
    label: "Remove Formatting",
    icon: RemoveFormattingIcon,
    onClick: () => editor?.chain().focus().unsetAllMarks().run(),
  },
];

interface ToolbarSectionType {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  isActive?: boolean;
}

export default function useToolbarSections() {
  const { editor } = useEditorState();

  const actionButtons: ToolbarSectionType[] = getActionButtons(editor);
  const textStyleButtons: ToolbarSectionType[] = getTextStyleButtons(editor);
  const moreActionButtons: ToolbarSectionType[] = getMoreActionButtons(editor);

  return { actionButtons, textStyleButtons, moreActionButtons };
}
