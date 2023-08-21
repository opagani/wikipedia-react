import { useEffect, useState } from "react";
import Article from "./Article";
import Pagination from "./Pagination";

// The wikipedia API allows you to get a list of articles with the most page views for a
// specific day:
// https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/allaccess/2015/10/10
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numResults, setNumResults] = useState(100);
  const recordsPerPage = 10;

  // article: "Main_Page",
  // views: 18793503,
  // rank: 1
  useEffect(() => {
    fetch(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setArticles(data.items[0].articles))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setNumResults(numResults);
  }, [numResults]);

  let indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(numResults / recordsPerPage);

  // if on last page and there are less than 10 records on the last page, then set the last record to the number of results
  if (currentPage === nPages && numResults % 10 !== 0) {
    indexOfLastRecord = numResults;
  }

  const currentRecords = articles.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="flex justify-center flex-col p-8 gap-5 rounded-2xl bg-white">
      {currentRecords.map((article) => (
        <Article key={crypto.randomUUID()} article={article} />
      ))}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        numResults={numResults}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
