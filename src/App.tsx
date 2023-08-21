import { createContext, useState } from "react";
import ActionBar from "./components/ActionBar";
import Articles from "./components/Articles";

export const SearchContext = createContext({
  numResults: 100,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNumResults: (numResults: number) => {},
  currentPage: 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentPage: (currentPage: number) => {},
});

function App() {
  const [numResults, setNumResults] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <SearchContext.Provider
      value={{ numResults, setNumResults, currentPage, setCurrentPage }}
    >
      <div className="flex justify-center flex-col max-w-[800px] mx-auto gap-10 pt-14 pb-20 font-lora">
        <h1 className="mx-auto text-[40px] h-[60px]">Top Wikipedia articles</h1>
        <ActionBar />
        <Articles />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
