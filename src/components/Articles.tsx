import { useContext, useEffect, useState } from "react";
import Article from "./Article";
import Pagination from "./Pagination";
import { SearchContext } from "../App";

// The wikipedia API allows you to get a list of articles with the most page views for a
// specific day:
// https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/allaccess/2015/10/10
export default function Articles() {
  const { numResults, currentPage, setCurrentPage, startDate } =
    useContext(SearchContext);

  const [articles, setArticles] = useState([]);
  const recordsPerPage = 10;

  // article: "Main_Page",
  // views: 18793503,
  // rank: 1
  useEffect(() => {
    const year = startDate.getFullYear();
    const month = ("0" + (startDate.getMonth() + 1)).slice(-2);
    const day = ("0" + startDate.getDate()).slice(-2);

    const date = `${year}/${month}/${day}`;

    fetch(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // remove the first two articles, which are always "Main_Page" and "Special:Search"
        // and update the rank of the remaining articles
        if (
          data.items[0].articles[0].article === "Main_Page" &&
          data.items[0].articles[1].article === "Special:Search"
        ) {
          const articles = data.items[0].articles.slice(2);

          for (const article of articles) {
            article.rank = article.rank - 2;
          }

          setArticles(articles);
        } else {
          setArticles(data.items[0].articles);
        }
      })
      .catch((error) => console.error(error));
  }, [startDate]);

  let indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(numResults / recordsPerPage);

  // if on last page and there are less than 10 records on the last page, then set the last record to the number of results
  if (currentPage === nPages && numResults % 10 !== 0) {
    indexOfLastRecord = numResults;
  }

  const currentRecords = articles.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <>
      <div className="flex justify-center flex-col p-6 md:p-8 gap-5 rounded-2xl bg-white">
        {currentRecords.map((article) => (
          <Article key={crypto.randomUUID()} article={article} />
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        numResults={numResults}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
