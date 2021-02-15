//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
// import "../bs1/assets/js/script.min.js";
// import "../bs1/assets/css/styles.min.css";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
import Jumbotron from "./component/jumbotron.js";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
