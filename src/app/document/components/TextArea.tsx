"use client";
export default function TextArea() {
  const handleKeyDown = (e) => {
    console.log(e.keyCode, e.ctrlKey);
    if (e.ctrlKey && e.keyCode === 66) {
      e.preventDefault();
      console.log("bold");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        onResize={() => {}}
        className="border border-[#c7c7c7] h-[1024px] w-[816px]"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
