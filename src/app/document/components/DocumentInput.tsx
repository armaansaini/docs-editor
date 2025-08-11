import { BsCloudCheck } from "react-icons/bs";

export default function DocumentInput() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg cursor-pointer px-1.5 truncate">
        Untitled Document
      </span>
      <BsCloudCheck size={18} />
    </div>
  );
}
