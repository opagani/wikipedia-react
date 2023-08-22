import { useContext } from "react";
import { SearchContext } from "../App";
import {
  CalendarIcon,
  ChevronUpIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateYesterday } from "../utils/utils";

export default function ActionBar() {
  const { numResults, setNumResults, setCurrentPage, startDate, setStartDate } =
    useContext(SearchContext);

  function onSearchClick() {
    setCurrentPage(1);
    setStartDate(startDate);
  }

  function handleChangeDate(date: Date) {
    setStartDate(date);
  }

  return (
    <div className="flex md:h-24 justify-center flex-col gap-5 md:rounded-full bg-white">
      <div className="flex justify-start md:justify-center flex-col md:flex-row items-center rounded-full py-3 px-6 md:p-4 md:gap-4">
        <div className="flex justify-start md:justify-center items-center w-full h-[66px] md:h-[72px] md:w-[260px] md:rounded-full p-3 gap-6 md:bg-neutral-100">
          <div className="flex flex-col justify-center items-center h-12 w-12 rounded-full bg-avocado-200">
            <CalendarIcon className="h-5 w-5 text-green-900" />
          </div>
          <div className="h-[42px] w-[125px]flex flex-col justify-center items-center">
            <div className="h-4 w-[50px] flex justify-center items-center gap-[6px]">
              <div className="text-xs font-medium font-poppins text-neutral-500">
                DATE
              </div>
              <ChevronUpIcon className="h-5 -w-5 text-neutral-500" />
            </div>
            <DatePicker
              selected={startDate}
              onChange={handleChangeDate}
              className="bg-neutral-100"
              dateFormat="MMMM d, yyyy"
              maxDate={getDateYesterday()}
            />
          </div>
        </div>
        <div className="md:inline-block md:h-full md:min-h-[1em] md:w-px md:mx-5 md:self-stretch md:bg-neutral-300 md:opacity-100 md:dark:opacity-50"></div>
        <div className="flex justify-start items-center w-full h-[66px] md:h-[72px] md:w-[260px] md:rounded-full p-3 gap-6">
          <div className="flex flex-col justify-center items-center h-12 w-12 rounded-full bg-marigold-200">
            <ListBulletIcon className="h-5 w-5 text-red-300" />
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
          className="h-12 md:h-16 w-full md:w-[160px] rounded-full my-3 bg-green-900 text-white font-poppins font-medium"
          onClick={onSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
