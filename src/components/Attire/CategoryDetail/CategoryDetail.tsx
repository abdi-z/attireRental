import React from "react";
import "./CategoryDetail.css";
import { useParams } from "react-router-dom";

export const CategoryDetail = () => {
  const arrayOfOpeningSentences = [
    {
      firstSentence: " Looking for some lit",
      secondSentence: " ? Look no further",
    },
    {
      firstSentence: "Here are some trendy ",
      secondSentence: ". Enjoy",
    },
    {
      firstSentence: "Some hot ",
      secondSentence: "that caught our eyes",
    },
    {
      firstSentence: "Our recommended ",
      secondSentence: "just for you",
    },
    // {
    //   firstSentence: "Some hot ",
    //   secondSentence: "... ",
    // },
    // {
    //   firstSentence: "The best clothes for",
    //   secondSentence: "the best clothes for",
    // },
  ];
  const { name } = useParams();
  var random = Math.floor(Math.random() * arrayOfOpeningSentences.length);
  return (
    <div className="category-detail">
      <h2>
        {arrayOfOpeningSentences[random].firstSentence +
          " " +
          name +
          arrayOfOpeningSentences[random].secondSentence}
      </h2>
    </div>
  );
};
