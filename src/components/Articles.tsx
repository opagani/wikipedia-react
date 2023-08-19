import { useEffect, useState } from "react";

interface Article {
  article: string;
  views: number;
  rank: number;
}

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
    <div className="flex justify-center flex-col items-center">
      <div>
        {articles.map((article) => (
          <Article key={crypto.randomUUID()} article={article} />
        ))}
      </div>
    </div>
  );
}

function Article({ article }: { article: Article }) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex h-6 items-center">
        <div className="text-gray-500">{article.rank}</div>
        <div className="ml-3 text-sm">
          <div className="font-medium text-gray-900">{article.article}</div>
        </div>
        <div className="ml-3 text-sm">
          <div className="font-medium text-gray-900">{article.views}</div>
        </div>
      </div>
    </div>
  );
}
