interface ArticleProps {
  article: string;
  views_ceil: number;
  rank: number;
}

function Article({ article }: { article: ArticleProps }) {
  return (
    <div className="flex h-[72px] items-center rounded-xl p-6 border border-neutral-300">
      <div className="text-neutral-300" data-testid="rank">
        {article.rank}
      </div>
      <div className="font-medium px-4" data-testid="article">
        {article.article.replaceAll("_", " ")}
      </div>
      <div
        className="ml-auto text-sm text-neutral-500 font-poppins"
        data-testid="views_ceil"
      >
        {new Intl.NumberFormat("en-US").format(article.views_ceil)} views
      </div>
    </div>
  );
}

export default Article;
