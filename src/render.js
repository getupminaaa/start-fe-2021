function classBaseForm(classData, str, idx) {
  for (let i = 0; i < classData.length; i = i + 1) {
    let links = "";
    for (let j = 0; j < classData[i]["links"].length; j = j + 1) {
      links += `<a href="${classData[i]["links"][j]}"
        class="badge bg-secondary">${j + 1}</a>
        &nbsp;`;
    }
    if (idx == "class_git" && classData[i]["gitUrl"] === "") {
    } else if (idx == "class_help" && classData[i]["links"].length === 0) {
    } else {
      str += `
        <tr>
          <th scope="row">${
            idx == "class_recent" ? classData.length - i : i + 1
          }</th>
          <td>${classData[i]["title"]}</td>
          <td><a href="${
            classData[i]["docUrl"]
          }" class="badge bg-secondary">문서</a></td>
          <td> ${links}</td>
          <td>${classData[i]["date"]}</td>
          <td><a href="${classData[i]["gitUrl"]}">
          ${classData[i].gitUrl ? "git" : ""}</a></td>
        </tr>
      `;
    }
  }
  return str;
}
function quizBaseForm(quizData, str, flag) {
  for (let i = 0; i < quizData.length; i = i + 1) {
    if (flag && quizData[i]["gitUrl"] === "") {
    } else {
      str += `
        <tr>
          <td>${quizData[i]["title"]}</td>
          <td><a class="badge bg-secondary"href="${
            quizData[i].docUrl
          }">문서</a></td>
          <td><a href="${quizData[i]["previewUrl"]}">보기</a></td>
          <td><a href="${quizData[i]["gitUrl"]}">${
        quizData[i].gitUrl ? "git" : ""
      }</a></td>
        </tr>
      `;
    }
  }
  return str;
}

export { classBaseForm, quizBaseForm };
