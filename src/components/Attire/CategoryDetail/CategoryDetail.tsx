import React from "react";
import "./CategoryDetail.css";
import { useParams } from "react-router-dom";

export const CategoryDetail = () => {
  const { name } = useParams();
  return <div>This is the {name} category page</div>;
};
