import React from "react";
import "./CategoryDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import SingleAttire from "../SingleAttire/SingleAttire";

export const CategoryDetail = () => {
  const { name } = useParams();
  const attireob: any = useLocation().state;
  const arrayOfOpeningSentences = [
    {
      firstSentence: " Looking for some lit",
      secondSentence: " ? Look no further",
    },
    {
      firstSentence: "Here are some trendy",
      secondSentence: ". Enjoy",
    },
    {
      firstSentence: "Some hot",
      secondSentence: " that caught our eyes",
    },
    {
      firstSentence: "Our recommended",
      secondSentence: ", just for you",
    },
    {
      firstSentence: "These",
      secondSentence: " are quite good for their price",
    },
    {
      firstSentence: "These ",
      secondSentence: " are catching alot of user's eyes",
    },
  ];

  const [attires, setAttires] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          "http://localhost:5000/api/attires/category/" + attireob.categoryID
        );
        setAttires(result.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  var random = Math.floor(Math.random() * arrayOfOpeningSentences.length);
  return (
    <div className="category-detail">
      <h2>
        {arrayOfOpeningSentences[random].firstSentence +
          " " +
          name +
          arrayOfOpeningSentences[random].secondSentence +
          " ..."}
      </h2>
      <SimpleGrid m={10} minChildWidth="240px" spacing="60px" bg="grey.400">
        {/* ))}
         */}
        {error && <p>Something went wrong...</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          attires.map((attire: any) => (
            <>
              <Link to={`/attires/${attire._id}`}
              state={attire}
              >
                <SingleAttire attire={attire} />
              </Link>
            </>
          ))
        )}
      </SimpleGrid>
    </div>
  );
};
