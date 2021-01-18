import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post-content">
              <div className="post-left">
                <h3 className="post-title">How To Tie Your Shoes</h3>
                <div className="break"></div>
                <p>Tying shoes can be difficult. Get some pro tips from a shoe-tying expert.</p>
                <div className="post-details">
                  <h4 className="post-details-title">
                    Materials needed:
                  </h4>
                  <div className="break"></div>
                  <div className="post-material-list">
                    <ul>
                      <li>Shoes</li>
                      <li>Intense Focus</li>
                      <li>Agile Fingers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="post-right">
                <div className="post-details">
                  <h4 className="post-details-title">Instructions:</h4>
                  <div className="break"></div>
                  <div className="post-right-stepList">

                    <ol>
                      <li>1. Take one lace</li>
                      <li>2. Pass it around</li>
                      <li>3. Do the loopy-loop</li>
                      <li>4. Pull it tight</li>
                    </ol>
                  </div>
                  <div className="media-bar">
                    <a href=""><i class="fas fa-video icon"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-bottomBar">
              <div className="post-bottomBar-controls">
                <button><i class="fas fa-heart icon"></i></button>
                <button><i class="fas fa-heart-broken icon"></i></button>
                <button><i class="fas fa-share icon"></i></button>
              </div>
            </div>
          </div>
    )
}

export default Post;
