import { classBaseForm, quizBaseForm } from "./render";

function setClassData(classData, btnId, table) {
  let str = "";

  switch (btnId) {
    case "class_help": {
      str = classBaseForm(classData, str, "class_help");
      break;
    }
    case "class_git": {
      str = classBaseForm(classData, str, "class_git");
      break;
    }
    case "class_recent": {
      classData.sort().reverse();
      str = classBaseForm(classData, str, "class_recent");
      break;
    }
    case "class_all": {
      str = classBaseForm(classData, str, "");
      break;
    }
    default: {
      str = classBaseForm(classData, str, "");
      break;
    }
  }
  table.innerHTML = str;
}
function setQuizData(quizData, btnId, table) {
  let str = "";
  let isGit = false;
  switch (btnId) {
    case "quiz_all":
      isGit = false;
      break;

    case "quiz_git":
      isGit = true;
      break;

    default:
      isGit = false;

      break;
  }
  str = quizBaseForm(quizData, str, isGit);
  table.innerHTML = str;
}

export { setClassData, setQuizData };
