import React, { useState } from "react";
import jsonData from "../JSONData/Data1.json";
import { FcSearch } from "react-icons/fc";
import {
  ChakraProvider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Body = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="container">
      <div className="userInput">
        <input
          placeholder="What is your Query..."
          onChange={handleQueryChange}
        />
        <button className="btn">
          <FcSearch />
        </button>
      </div>
      <h2>{query}</h2>
      <h2>{jsonData.query}</h2>
      <p>{jsonData.answer}</p>

      <h2>Similar Questions and Answers:</h2>

      <div className="accordion">
        <ChakraProvider>
          <Accordion allowToggle>
            {jsonData.similar_queries.map((question, index) => (
              <AccordionItem key={index} className="AccordionItem">
                <h2>
                  <AccordionButton className="AccordionButton">
                    <Box as="span" flex="1" textAlign="left">
                      {question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="AccordionPanel" pb={4}>
                  {jsonData.similar_answers[index]}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Body;
