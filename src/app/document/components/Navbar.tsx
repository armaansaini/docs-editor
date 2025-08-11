import Image from "next/image";
import Link from "next/link";
import DocumentInput from "./DocumentInput";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../../components/ui/menubar";

export default function Navbar() {
  return (
    <nav className="flex h-14 m-2 items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={36}
            height={36}
            alt="docs-editor-logo"
          />
        </Link>

        <div className="flex flex-col justify-center">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Save</MenubarItem>
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger>Insert</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Save</MenubarItem>
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Save</MenubarItem>
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
}
