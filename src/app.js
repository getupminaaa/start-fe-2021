import { fetchData } from "./getJSON";
import("./app.css");

const $class_loading = document.getElementById("class-loading");
const $quiz_loading = document.getElementById("quiz-loading");
const $classTable = document.getElementById("class");
const $quizTable = document.getElementById("quiz");
const $classFilter = document.querySelector("#class-filter");
const $classBtns = $classFilter.querySelectorAll("div.btn-group > button");
const $quizFilter = document.querySelector("#quiz-filter");
const $quizBtns = $quizFilter.querySelectorAll("div.btn-group > button");

function btnClick(btns, filter, loading, table) {
  for (let i = 0; i < btns.length; i = i + 1) {
    btns[i].addEventListener("click", function (event) {
      let btnId = event.target.id;
      if (btnId.includes("class")) {
        fetchData(`./class.json`, btnId, table);
      } else {
        fetchData(`./quiz.json`, btnId, table);
      }

      waitLoading(loading);
      let current = filter.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

waitLoading($class_loading);
waitLoading($quiz_loading);
setTimeout((handler) => {
  fetchData(`./class.json`, $classBtns[0], $classTable);
  fetchData(`./quiz.json`, $quizBtns[0], $quizTable);
  // loading.style.display = "none";
}, 500);

btnClick($classBtns, $classFilter, $class_loading, $classTable); //버튼들을 라디오 버튼화 및 데이터 셋할 수 있도록..
btnClick($quizBtns, $quizFilter, $quiz_loading, $quizTable);

function waitLoading(loading) {
  loading.style.display = "block";
  setTimeout((handler) => {
    loading.style.display = "none";
  }, 500);
}
