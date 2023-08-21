import ActionBar from "./components/ActionBar";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="flex justify-center flex-col max-w-[800px] mx-auto gap-10 pt-14 pb-20 font-lora">
      <h1 className="mx-auto text-[40px] h-[60px]">Top Wikipedia articles</h1>
      <ActionBar />
      <Articles />
    </div>
  );
}

export default App;
