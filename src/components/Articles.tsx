import { useEffect, useState } from "react";
import Article from "./Article";

// The wikipedia API allows you to get a list of articles with the most page views for a
// specific day:
// https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/allaccess/2015/10/10
export default function Articles() {
  const [articles, setArticles] = useState([]);

  // article: "Main_Page",
  // views: 18793503,
  // rank: 1
  useEffect(() => {
    fetch(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.items[0].articles));
  }, []);

  return (
    <div className="flex justify-center flex-col p-8 gap-5 rounded-2xl bg-white">
      {articles.map((article) => (
        <Article key={crypto.randomUUID()} article={article} />
      ))}
    </div>
  );
}
