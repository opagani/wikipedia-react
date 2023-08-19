import Articles from "./components/Articles";

function App() {
  return (
    <div className="flex justify-center flex-col items-center py-8">
      <h1 className="text-2xl font-bold pb-4">Top Wikipedia articles</h1>
      <Articles />
    </div>
  );
}

export default App;
