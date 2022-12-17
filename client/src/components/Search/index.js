import React from "react";

const Search = ({ search }) => {
  return (
    <body className="space">
      <div className="main-Container">
        <div className="about-Container">
          <div className="headingGitFit">
            <h2>How GitFit Works</h2>
          </div>
          <div className="howContainer">
            <div className="container1">container 1</div>
            <div className="container2">container 2</div>
            <div className="container3">container 3</div>
          </div>
        </div>
        <p className="pGitFit">This is the about Git-Fit section</p>
      </div>
      <div className="main-Container">
        <div className="searchContainer">
          <div className="searchMenu">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Muscle
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Difficulty
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="searchInfo">
            <div className="information">
              This is going to be where the information displays
            </div>
            <div className="video">Youtube video</div>
          </div>
        </div>
      </div>

      <section className="main-Container">
        <div className="bmiExample">
        <div className="image-container">
            {/* Imported image */}
            {/* <img src={image}></img> */}
          </div>
          <div className="bmiText">This is the text for the bmi image</div>
        </div>
      </section>
    </body>
  );
};

export default Search;
