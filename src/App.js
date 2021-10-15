import "./App.css";
import LoaderComp from "./components/LoaderComp";
import React, { useState, useEffect, useRef } from "react";
import { createApi } from "unsplash-js";
import Navbar from "./components/Navbar";
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState("Entertainment");
  const [visible, setVisible] = useState(true);
  const [heading, setHeading] = useState("Entertainment Images");
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const inputText = useRef(null);
  const selectValue = useRef(null);
  const unsplash = new createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  });
  useEffect(() => {
    setNotFound(false);
    setError(false);
    unsplash.search
      .getPhotos({
        query: inputValue,
        perPage: 30,
      })
      .then((result) => {
        setPhotos(result.response.results);
        setVisible(false);
      })
      .catch((err) => {
        setError(true);
        setVisible(false);
      });
  }, [inputValue]);
  const searchPhoto = async (e) => {
    e.preventDefault();
    setHeading(`Images based on "${inputText.current.value.toUpperCase()}"`);
    setNotFound(false);
    setVisible(true);
    setError(false);
    await unsplash.search
      .getPhotos({
        query: inputText.current.value,
        perPage: 30,
      })
      .then((result) => {
        setPhotos(result.response.results);
        console.log("hello");
        setVisible(false);
        console.log(result.response.results);
        if (result.response.results.length > 0) {
          console.log("yes");
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        setError(true);
        setVisible(false);
      });
  };
  const onChangeOption = (e) => {
    setInputValue(e.target.value);
    setHeading(e.target.value + " Images");
    setVisible(true);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="searchField container mt-5 mb-5">
        <form
          onSubmit={(e) => {
            searchPhoto(e);
          }}
        >
          <svg style={{ display: "none" }}>
            <symbol id="magnify" viewBox="0 0 18 18" height="100%" width="100%">
              <path
                d="M12.5 11h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C13 2.9 10.1 0          6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5          1.5-1.5-5-5zm-6 0C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5            11z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </symbol>
          </svg>
          <div className="search-bar">
            <input
              type="text"
              className="input"
              placeholder="&nbsp;"
              ref={inputText}
              name="inputValue"
              required
            />
            <span className="label">Search for any images</span>
            <span className="highlight"></span>
            <div className="search-btn">
              <button
                className="fa fa-search searchIcon"
                type="submit"
                aria-hidden="true"
              ></button>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="selectTagContainer mb-3">
          <select
            className="browser-default custom-select"
            style={{ width: "12em" }}
            aria-label="Default select example"
            name="Images"
            ref={selectValue}
            onChange={onChangeOption}
          >
            <option selected value="Entertainment">
              Entertainment
            </option>
            <option value="Comedy">Comedy</option>
            <option value="Education">Education</option>
            <option value="Software">Software</option>
            <option value="Movie">Movie</option>
            <option value="Ghost">Ghost</option>
          </select>
        </div>
        {!notFound && !error && (
          <h1 className="text-center heading ">{heading}</h1>
        )}
        {notFound && <p className="text-center error">No Images Found</p>}
        {error && <p className="text-center error">Please Try Again</p>}
        {visible ? (
          <LoaderComp visible={visible} />
        ) : (
          <React.Fragment>
            <div className="row">
              {photos.map((photo) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-md-6 imageContainer col-sm-6 col-xs-12 mt-5">
                    <a
                      href={`https://www.google.com/search?q=${photo.alt_description}&oq=${photo.alt_description}&aqs=chrome..69i57j0i271l3.1758j0j7&sourceid=chrome&ie=UTF-8`}
                    >
                      <img
                        src={photo.urls.full}
                        className="card displayImage"
                        alt={photo.alt_description}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default App;
