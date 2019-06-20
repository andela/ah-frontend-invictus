import React from 'react';
import NavbarComponent from '../components/Navbar';
import { Link } from "react-router-dom";
import '../../assets/styles/articles.scss';

const SearchComponent = (props) => {
  const { handleSearch, handleChange, search } = props;
  const articles = props.data.article;
  return (
    <div>
      <NavbarComponent />
      <div className="row"><div className="col-md-1" />
        <div className="col-md-10">
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input type="text" name="search" onChange={handleChange}
                value={search} className="form-control" placeholder="type something..."
                aria-label="type something..." aria-describedby="button-addon2" /><div>
                <select className="form-control" name="filter" onChange={handleChange} id="filterSelectID">
                  <option value="none">none</option>
                  <option value="tag">Tag</option>
                  <option value="author">Author</option>
                  <option value="title">Title</option></select></div>
              <label className="text-white" htmlFor="filterSelectID">Filter by</label>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
              </div></div></form><div>
            {
              (articles === undefined) || (articles.length === 0) ? "No Articles to display" : (articles.map(article => (
                <Link key={article.id} className="card-article-link" to={`/articles/${article.id}`}>
                  <div className="container">
                    <div className="row">
                      <div className="card-article" style={{ marginLeft: "25%" }}>
                        <img className="card-image" alt="" src="https://picsum.photos/600/350" />
                        <div className="card-body">
                          <div><p className="card-publish-date">Published On:
                            {article.created_at.substring(0, 10)}</p></div>
                          <h4 className="card-title">{article.title}</h4><p className="card-text">{article.description}</p>
                          <div className="card-body-footer">
                            <p className="card-footer-text">@{article.author}</p></div>
                          <div className="all-tags"><hr />
                            <ul>{article.tagList.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul></div>
                        </div></div></div></div>
                </Link>)))
            }
          </div></div><div className="col-md-1" /></div></div>
  );
};

export default SearchComponent;
