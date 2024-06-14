import Counter from "./pages/counter";
import DisplayList from "./pages/displayList";
import Form from "./pages/form";

const App: React.FC = () => {
  return (
    <div className="flex bg-slate-800 h-screen w-screen justify-center items-center">
      {/* <Counter /> */}
      {/* <Form /> */}
      <DisplayList />
    </div>
  );
};

export default App;
