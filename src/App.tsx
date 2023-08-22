import { createContext, useState } from "react";
import ActionBar from "./components/ActionBar";
import Articles from "./components/Articles";
import { getDateYesterday } from "./utils/utils";

export const SearchContext = createContext({
  numResults: 100,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNumResults: (numResults: number) => {},
  currentPage: 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentPage: (currentPage: number) => {},
  startDate: new Date(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setStartDate: (startDate: Date) => {},
});

function App() {
  const [numResults, setNumResults] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  const [startDate, setStartDate] = useState<Date>(getDateYesterday());

  return (
    <SearchContext.Provider
      value={{
        numResults,
        setNumResults,
        currentPage,
        setCurrentPage,
        startDate,
        setStartDate,
      }}
    >
      <div className="flex justify-center flex-col md:max-w-[800px] mx-auto gap-6 pt-8 md:pt-14 pb-20 font-lora">
        <div className="mx-auto text-[28px] md:text-[40px]">
          <h1>Top Wikipedia articles</h1>
        </div>
        <ActionBar />
        <Articles />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
