import { MyApp, mount } from "sigment";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import "./assets/css/index.css";

MyApp.cleanHtml(true); //in development use false in production use true
MyApp.setMaxCacheSize(50); // cache 50 components

async function Main() {
  const app = fragment(Header() /*, await Body()*/, Footer());

  mount("root", app);
}

Main();

export default Main;
