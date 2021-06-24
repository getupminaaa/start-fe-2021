const $classTable = document.querySelector("#class");
const $quizTable = document.querySelector("#quiz");

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
          } class="badge bg-secondary">문서</a></td>
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
