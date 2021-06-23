const $classTable = document.querySelector("#class");
const $classBadge = document.querySelector("#badge");
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
          <td>
              <a href="${
                classData[i]["docUrl"]
              } class="badge bg-secondary">문서</a>
          </td>
          <td> ${links}</td>
          <td>${classData[i]["date"]}</td>
          <td>
              <a href="${classData[i]["gitUrl"]}">git</a>
          </td>
        </tr>
      `;
      $classTable.innerHTML = str;
    }
  });
