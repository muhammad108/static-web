import React from "react";
import "./article.css";

const ArticleData = [
  {
    title: "Burhan Akhlaque",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum deleniti, ut dolor rerum assumenda eligendi aspernatur in ex impedit asperiores natus commodi molestias nam iusto laudantium, nobis accusamus sit eius?",
    text: "Lorem ipsum dolor sit amet, dolor sit amet,",
  },
  {
    title: "Aamir Khan",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum deleniti, ut dolor rerum assumenda eligendi aspernatur in ex impedit asperiores natus commodi molestias nam iusto laudantium, nobis accusamus sit eius?",
    text: "Lorem ipsum dolor sit amet, dolor sit amet,.",
  },
  {
    title: "Integrated GPS Tracker",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum deleniti, ut dolor rerum assumenda eligendi aspernatur in ex impedit asperiores natus commodi molestias nam iusto laudantium, nobis accusamus sit eius?",
    text: "Lorem ipsum dolor sit amet, dolor sit amet,.",
  },
];

const Article = () => {
  return (
    <div id="article" className="container-fluid section">
      <h2 className="article-head">People We Work With</h2>
      <div className="row">
        {ArticleData.map((article, index) => (
          <div key={index} className="col-md-4">
            <ArticleBox {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ArticleBox = ({ title, description, text }) => (
  <div className="article-box">
    <p>{description}</p>
    <div className="article-text">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default Article;

