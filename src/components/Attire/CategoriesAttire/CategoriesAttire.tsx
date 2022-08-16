import React from "react";
import "./CategoriesAttire.css";
import { Link } from "react-router-dom";

import axios from "axios";

export const CategoriesAttire = () => {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get("http://localhost:5000/api/categories");
        setCategories(result.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <nav className="navbar" style={{ marginTop: "0.1rem" }}>
      {error && <p>There was an error in getting categories</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        categories.map((category: any) => (
          <>
            <Link to={`categories/${category.categoryName}`} state={category}>
              {category.categoryName}
            </Link>
          </>
        ))
      )}
    </nav>
  );
};
