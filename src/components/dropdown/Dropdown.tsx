import { useState } from "react";
import { DropdownItemProps, DropdownProps } from "./types";
import { useClickOutsideHook } from "./useClickOutsideHook";

const Dropdown = ({ children, trigger }: DropdownProps) => {
  const [show, setShow] = useState<boolean>();
  const dropRef = useClickOutsideHook({
    callbackFn: () => setShow(false), // Pass a function, not the result of the function call
  });
  return (
    <div
      className="w-fit relative"
      onClick={() => {
        setShow((curr) => !curr);
      }}
      ref={dropRef}
    >
      <div>{trigger}</div>
      {show && (
        <ul
          className="min-w-max absolute right-0 mt-2 bg-zinc-900 divide-y 
        divide-gray-600 rounded-lg shadow overflow-hidden"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export function DropdownItem({ children }: DropdownItemProps) {
  return (
    <li
      className="flex gap-3 items-center px-4 py-2 transition-colors
     text-gray-200 hover:bg-zinc-800 cursor-pointer"
    >
      {children}
    </li>
  );
}

export default Dropdown;
