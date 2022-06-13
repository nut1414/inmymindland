import { useRouter } from "next/router";

const ArticleId = () => {
  const rounter = useRouter();
  const articleId = rounter.query.ArticleId;
  return (
    <div>
        Hello {articleId}
    </div>
  )
};

export default ArticleId; 