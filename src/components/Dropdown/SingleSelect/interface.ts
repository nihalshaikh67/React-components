export default interface IDropdownprops {
    dropdownOptions : string[];
    placeholder:string;
    label:string;
    onSelect:(value:string)=> void;
    
}
