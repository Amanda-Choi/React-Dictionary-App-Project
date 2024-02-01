import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  const search = useCallback(() => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageKey = "331fct734c14fe46300adod3e6c6aacb";
    let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageKey}`;
    let headers = { Authorization: `Bearer ${imageKey}` };
    axios.get(imagesUrl, { headers: headers }).then(handleImageResponse);
  }, [keyword]); // <-- Include 'keyword' in the dependency array

  useEffect(() => {
    search(); // Trigger the initial search when the component mounts
    setLoaded(true);
  }, [search]); // <-- Include 'search' in the dependency array

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Look up a word"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return "Loading";
  }
}
