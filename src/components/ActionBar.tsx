import { useContext } from "react";
import { SearchContext } from "../App";
import { ListBulletIcon } from "@heroicons/react/20/solid";

export default function ActionBar() {
  const { numResults, setNumResults, setCurrentPage } =
    useContext(SearchContext);

  function onSearchClick() {
    setCurrentPage(1);
  }

  return (
    <div className="flex h-24 justify-center flex-col gap-5 rounded-2xl bg-white">
      <div className="flex justify-center items-center rounded-full p-4 gap-4">
        <div className="h-[72px] w-[260px] rounded-full p-3 gap-6 bg-neutral-100"></div>
        <div className="inline-block h-full min-h-[1em] w-px mx-5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50"></div>
        <div className="flex justify-start items-center h-[72px] w-[260px] rounded-full p-3 gap-6">
          <div className="h-12 w-12 rounded-full bg-marigold-200">
            <ListBulletIcon className="text-red-200 text-sm" />
          </div>
          <div>
            <label
              htmlFor="search"
              className="font-medium text-xs text-neutral-500 font-poppins"
            >
              NUM RESULTS
            </label>
            <div className="mt-2">
              <select
                name="search"
                defaultValue={numResults}
                onChange={(event) =>
                  setNumResults(parseInt(event.target.value))
                }
                className="font-poppins"
              >
                <option>25</option>
                <option>50</option>
                <option>75</option>
                <option>100</option>
                <option>200</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className="h-16 w-[160px] rounded-full py-3 px-6 gap-2 ml-auto bg-green-900 text-white font-poppins font-medium"
          onClick={onSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
