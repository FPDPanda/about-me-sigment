import Articles from "../../entities/articles";
import ArticlesService from "../../services/ArticlesService";
import "./articles.css";

function Articles(): HTMLElement {
  const articlesPage = new ArticlesService().getArticlesPage();

  return div(
    { class: "articles-container" },
    h1({ class: "articles-title" }, articlesPage.title),
    ...(articlesPage.articles || []).map((article) =>
      div(
        { class: "article" },
        h2({ class: "article-title" }, article.title),
        ...article.paragraphs.map((text) => p(text))
      )
    ),
    div(a({ href: "/" }, "Back to Home"))
  );
}

export default Articles;
