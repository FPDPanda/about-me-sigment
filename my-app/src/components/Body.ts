import Articles from "./articles/Articles";
import Home from "./home/Home";

function Body() {
  const path = window.location.pathname;

  if (path.split("/").pop() == "articles") {
    return Articles();
  }
  return Home();
}

export default Body;
