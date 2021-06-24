const $classTable = document.querySelector("#class");
const $quizTable = document.querySelector("#quiz");
const $classFilter = document.querySelector("#class-filter");
const $classBtns = $classFilter.querySelectorAll("div.btn-group > button");
const $quizFilter = document.querySelector("#quiz-filter");
const $quizBtns = $quizFilter.querySelectorAll("div.btn-group > button");
const $class_all = document.querySelector("#class_all");
const $class_help = document.querySelector("#class_help");
const $class_git = document.querySelector("#class_git");
const $class_recent = document.querySelector("#class_recent");
const $quiz_all = document.querySelector("#quiz_all");
const $quiz_git = document.querySelector("#quiz_git");

fetch("./class.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (classData) {
    let str = "";
    for (let i = 0; i < classData.length; i = i + 1) {
      let links = "";
      for (let j = 0; j < classData[i]["links"].length; j = j + 1) {
        links += `<a href="${classData[i]["links"][j]}"
        class="badge bg-secondary">${j + 1}</a>
        &nbsp;`;
      }

      str += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${classData[i]["title"]}</td>
          <td><a href="${
            classData[i]["docUrl"]
          }" class="badge bg-secondary">문서</a></td>
          <td> ${links}</td>
          <td>${classData[i]["date"]}</td>
          <td><a href="${classData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
      $classTable.innerHTML = str;
    }
  });

fetch("./quiz.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (quizData) {
    let str = "";
    for (let i = 0; i < quizData.length; i = i + 1) {
      str += `
        <tr>
          <td>${quizData[i]["title"]}</td>
          <td><a class="badge bg-secondary"href="${quizData[i].docUrl}">문서</a></td>
          <td><a href="${quizData[i]["previewUrl"]}">보기</a></td>
          <td><a href="${quizData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
      $quizTable.innerHTML = str;
    }
  });

for (let i = 0; i < $classBtns.length; i = i + 1) {
  $classBtns[i].addEventListener("click", function () {
    let current = $classFilter.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
for (let i = 0; i < $quizBtns.length; i = i + 1) {
  $quizBtns[i].addEventListener("click", function () {
    let current = $quizFilter.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$class_help.addEventListener("click", function () {
  fetch("./class.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (classData) {
      let str = "";
      for (let i = 0; i < classData.length; i = i + 1) {
        let links = "";
        for (let j = 0; j < classData[i]["links"].length; j = j + 1) {
          links += `<a href="${classData[i]["links"][j]}"
        class="badge bg-secondary">${j + 1}</a>
        &nbsp;`;
        }
        if (classData[i]["links"].length === 0) {
        } else {
          str += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${classData[i]["title"]}</td>
          <td><a href="${
            classData[i]["docUrl"]
          }" class="badge bg-secondary">문서</a></td>
          <td> ${links}</td>
          <td>${classData[i]["date"]}</td>
          <td><a href="${classData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
          $classTable.innerHTML = str;
        }
      }
    });
});
$class_all.addEventListener("click", function () {
  fetch("./class.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (classData) {
      let str = "";
      for (let i = 0; i < classData.length; i = i + 1) {
        let links = "";
        for (let j = 0; j < classData[i]["links"].length; j = j + 1) {
          links += `<a href="${classData[i]["links"][j]}"
        class="badge bg-secondary">${j + 1}</a>
        &nbsp;`;
        }

        str += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${classData[i]["title"]}</td>
          <td><a href="${
            classData[i]["docUrl"]
          }" class="badge bg-secondary">문서</a></td>
          <td> ${links}</td>
          <td>${classData[i]["date"]}</td>
          <td><a href="${classData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
        $classTable.innerHTML = str;
      }
    });
});
$class_git.addEventListener("click", function () {
  fetch("./class.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (classData) {
      let str = "";
      for (let i = 0; i < classData.length; i = i + 1) {
        let links = "";
        for (let j = 0; j < classData[i]["links"].length; j = j + 1) {
          links += `<a href="${classData[i]["links"][j]}"
        class="badge bg-secondary">${j + 1}</a>
        &nbsp;`;
        }
        if (classData[i]["gitUrl"] === "") {
          console.log(classData[i]["gitUrl"]);
        } else {
          str += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${classData[i]["title"]}</td>
          <td><a href="${
            classData[i]["docUrl"]
          }" class="badge bg-secondary">문서</a></td>
          <td>${links}</td>
          <td>${classData[i]["date"]}</td>
          <td><a href="${classData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
          $classTable.innerHTML = str;
        }
      }
    });
});
$class_recent.addEventListener("click", function () {
  fetch("./class.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (classData) {
      classData.sort().reverse();
      let str = "";
      for (let i = 0; i < classData.length; i = i + 1) {
        let links = "";
        for (let j = 0; j < classData[i]["links"].length; j = j + 1) {
          links += `<a href="${classData[i]["links"][j]}"
        class="badge bg-secondary">${j + 1}</a>
        &nbsp;`;
        }

        str += `
        <tr>
          <th scope="row">${classData.length - i}</th>
          <td>${classData[i]["title"]}</td>
          <td><a href="${
            classData[i]["docUrl"]
          }" class="badge bg-secondary">문서</a></td>
          <td> ${links}</td>
          <td>${classData[i]["date"]}</td>
          <td><a href="${classData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
        $classTable.innerHTML = str;
      }
    });
});
$quiz_all.addEventListener("click", function () {
  fetch("./quiz.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (quizData) {
      let str = "";
      for (let i = 0; i < quizData.length; i = i + 1) {
        str += `
        <tr>
          <td>${quizData[i]["title"]}</td>
          <td><a class="badge bg-secondary"href="${quizData[i].docUrl}">문서</a></td>
          <td><a href="${quizData[i]["previewUrl"]}">보기</a></td>
          <td><a href="${quizData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
        $quizTable.innerHTML = str;
      }
    });
});
$quiz_git.addEventListener("click", function () {
  fetch("./quiz.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (quizData) {
      let str = "";
      for (let i = 0; i < quizData.length; i = i + 1) {
        if (quizData[i]["gitUrl"] === "") {
          console.log(quizData[i]["gitUrl"]);
        } else {
          str += `
        <tr>
          <td>${quizData[i]["title"]}</td>
          <td><a class="badge bg-secondary"href="${quizData[i].docUrl}">문서</a></td>
          <td><a href="${quizData[i]["previewUrl"]}">보기</a></td>
          <td><a href="${quizData[i]["gitUrl"]}">git</a></td>
        </tr>
      `;
          $quizTable.innerHTML = str;
        }
      }
    });
});
