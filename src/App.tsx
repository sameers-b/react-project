import Counter from "./pages/counter";
import DisplayList from "./pages/displayList";
import FetchData from "./pages/fetchData";
import Form from "./pages/form";
import Timer from "./pages/timer";
import ToggleSwitch from "./pages/toggleSwitch";

const App: React.FC = () => {
  return (
    <div className="flex bg-slate-800 h-screen w-screen justify-center items-center">
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <DisplayList /> */}
      {/* <ToggleSwitch /> */}
      {/* <FetchData /> */}
      <Timer />
    </div>
  );
};

export default App;
