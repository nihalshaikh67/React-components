import { useEffect, useRef, useState } from "react";
import IMultiSelectDropdownprops from "./interface";
import { IoMdCheckmark } from "react-icons/io";

function MultiSelect({
  dropdownOptions,
  placeholder,
  label,
  onSelect,
}: IMultiSelectDropdownprops) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOptionList, setSelectedOptionsList] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  function onSelectOption(value: string) {
    const updatedList = selectedOptionList?.includes(value)
      ? selectedOptionList?.filter((item) => item !== value)
      : [...selectedOptionList, value];

    setSelectedOptionsList(updatedList);
    onSelect(updatedList);
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <label>{label}</label>
      <div
        className="w-[200px] rounded-md border border-[grey] h-[30px]"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <p className="ml-[6px] text-gray-500">
          {selectedOptionList?.length > 0
            ? `${selectedOptionList?.length} items selected`
            : placeholder}
        </p>
      </div>
      {showOptions && (
        <div className="shadow-md flex flex-col space-y-2 option-item">
          {dropdownOptions?.map((option) => {
            return (
              <div
                key={option}
                className="option-item ml-2 cursor-pointer"
                onClick={() => {
                  onSelectOption(option);
                }}
              >
                <div className="flex items-center justify-between">
                  <p>{option}</p>
                  {selectedOptionList?.includes(option) && (
                    <IoMdCheckmark className="mr-[5px]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
