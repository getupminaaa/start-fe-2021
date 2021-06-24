import { setClassData, setQuizData } from "./filter";

function fetchData(url, btnId, table) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (url.includes("class")) {
        setClassData(data, btnId, table);
      } else {
        setQuizData(data, btnId, table);
      }
    });
}

export { fetchData };
