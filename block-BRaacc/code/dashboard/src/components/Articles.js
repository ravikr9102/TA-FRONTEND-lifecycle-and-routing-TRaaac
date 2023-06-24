import React from 'react';
import articles from '../data/articles.json';
import '../styles/index.css';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li>
              <Link to={`/articles/${article.slug}`}>
                <h3 className="article-title">{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Articles;
