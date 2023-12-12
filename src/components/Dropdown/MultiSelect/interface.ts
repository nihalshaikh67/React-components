export default interface IMultiSelectDropdownprops {
    dropdownOptions : string[];
    placeholder:string;
    label:string;
    onSelect:(value:string[])=> void;
    
}
