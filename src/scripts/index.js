import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/importer.js";
import main from "./view/main.js";

document.addEventListener("DOMContentLoaded", () => {
  main();
});
