import { Link, useParams } from 'react-router-dom';

function Article() {
  let params = useParams();
  return (
    <article className="article">
      <Link to="/articles">
        <h4 style={{ marginBottom: '1rem' }}>
          <span role="img" aria-label="Finger Point">
            👈{' '}
          </span>
          Go back to articles
        </h4>
      </Link>
      <h1>The slug of the article is::: {params.slug}</h1>
    </article>
  );
}
export default Article;
