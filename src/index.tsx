import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";
import Footer from "./components/Layout/Footer/Footer";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";
import { Helmet } from "react-helmet";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
  <Helmet>
        <title>Esquare Info</title>
        <meta name="description" content="Esquare is a software solution provider, specialized in the design and development of custom solutions for web poratl and mobile applications."/>
      <meta name="keywords" content="Liferay, Liferay Consulting, Java, EaquareInfo, React"/>
      </Helmet>
    <Header parentMenu="home" />
    
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
    
    <Footer footerClass="rs-footer home9-style main-home" />
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
