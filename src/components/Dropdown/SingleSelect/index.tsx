import { useState } from "react";
import IDropdownprops from "./interface";
import { IoMdCheckmark } from "react-icons/io";

function SingleSelect({
  dropdownOptions,
  placeholder,
  label,
  onSelect,
}: IDropdownprops) {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  function onSelectOption(value: string) {
    setSelectedOption(value);
    onSelect(value);
  }
  return (
    <div>
      <label>{label}</label>
      <div
        className="w-[200px] rounded-md border border-[grey] h-[30px]"
        onClick={(e) => {
          e.stopPropagation();
          setShowOptions(!showOptions);
        }}
      >
        <p className="ml-[6px] text-gray-500">
          {selectedOption || placeholder}
        </p>
      </div>
      {showOptions && (
        <div className="shadow-md flex flex-col space-y-2">
          {dropdownOptions?.map((option) => {
            return (
              <div
                key={option}
                className="ml-2 cursor-pointer"
                onClick={() => {
                  onSelectOption(option);
                  setShowOptions(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <p>{option}</p>
                  {selectedOption === option && (
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

export default SingleSelect;
