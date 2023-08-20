interface ArticleProps {
  article: string;
  views: number;
  rank: number;
}

function Article({ article }: { article: ArticleProps }) {
  return (
    <div className="flex h-[72px] items-center rounded-xl p-6 border border-neutral-300">
      <div className="text-neutral-300">{article.rank}</div>
      <div className="font-medium px-4">
        {article.article.replaceAll("_", " ")}
      </div>
      <div className="ml-auto text-sm text-neutral-500 font-poppins">
        {article.views} views
      </div>
    </div>
  );
}

export default Article;
