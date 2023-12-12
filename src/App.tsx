import MultiSelect from "./components/Dropdown/MultiSelect";
import SingleSelect from "./components/Dropdown/SingleSelect";

function App() {
  return (
    <div className="flex justify-center mt-10">
      <SingleSelect
        label="Country"
        dropdownOptions={["India", "PAK", "USA", "CANADA"]}
        placeholder="select country"
        onSelect={(value) => {
          console.log(value);
        }}
      />
      <MultiSelect
        label="Games"
        dropdownOptions={["Cricket", "Tennis", "Yoga", "Gym"]}
        placeholder="Select Sport"
        onSelect={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}

export default App;
