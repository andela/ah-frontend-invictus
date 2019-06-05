import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default class ProfileArticleComponent extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10 users-articles">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab"
                data-toggle="tab" href="#articles" icon={faPaperclip} role="tab"
                aria-controls="home" aria-selected="true"><FontAwesomeIcon icon={faPaperclip} />Articles</a>
            </li>
          </ul>
          <div className="d-flex justify-content-around  all-articles">
            <div className="mb-5 card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className=" card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                    nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                    nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                    nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                    nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>

            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                    nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                  nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                  nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card-profile">
              <img src="https://picsum.photos/600/300" className="card-img-top" alt="happy" />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">voluptate porro vel nihil molestiae ut reiciendis\
                  nqui aperiam non debitis possimus qui neque nisi nulla</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1" />
      </div>
    );
  }
}
