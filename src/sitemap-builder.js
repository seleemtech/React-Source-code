require("@babel/register")({
    presets: ["es2015", "react"]
  });
   
  import route from "./Route";
  import Sitemap from "react-router-sitemap";

  function generateSitemap() {
      return (
        new Sitemap(route)
            .build("https://localhost:3000/")
            .save("public/sitemap.xml")
      );
  }
  
  generateSitemap();