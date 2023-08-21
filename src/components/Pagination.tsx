import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
  nPages: number;
  currentPage: number;
  numResults: number;
  setCurrentPage: (page: number) => void;
}

function Pagination({
  nPages,
  currentPage,
  numResults,
  setCurrentPage,
}: PaginationProps) {
  const pageNumbers = [1, 2, 3];

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const curPage = (pgNumber: number) => {
    setCurrentPage(pgNumber);
  };

  //  add 4th page number if there are more than 30 results
  if (numResults > 30) {
    pageNumbers.push(4);
  }

  return (
    <ul className="flex justify-center items-center gap-2">
      <li
        className={`h-10 w-10 leading-10 text-center rounded-full border border-neutral-400 mr-4 ${
          currentPage === 1 ? "bg-neutral-300" : ""
        } `}
      >
        <a
          onClick={prevPage}
          href="#"
          className={`${currentPage === 1 ? "pointer-events-none" : ""}`}
        >
          <ChevronLeftIcon />
        </a>
      </li>
      {pageNumbers.map((pgNumber) => (
        <li
          key={pgNumber}
          className={`h-10 w-10 leading-10 text-center rounded-full border border-neutral-400 ${
            currentPage === pgNumber ? "bg-avocado-400" : ""
          } `}
        >
          <a onClick={() => curPage(pgNumber)} href="#">
            {pgNumber}
          </a>
        </li>
      ))}
      <li
        className={`h-10 w-10 leading-10 text-center rounded-full border border-neutral-400 ml-4" ${
          currentPage === nPages ? "bg-neutral-300" : ""
        } ${
          currentPage > 4
            ? currentPage === nPages
              ? "bg-neutral-300"
              : "bg-avocado-400"
            : ""
        }`}
      >
        <a
          onClick={nextPage}
          href="#"
          className={`${currentPage === nPages ? "pointer-events-none" : ""}`}
        >
          <ChevronRightIcon />
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
