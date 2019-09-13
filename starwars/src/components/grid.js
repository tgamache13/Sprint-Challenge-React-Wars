import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";

const IndivEntry = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `;


export default function Grid() {
    const[info, setInfo] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      const info = response.data.results;
      console.log("star wars data", info);
      setInfo(info);
    })
.catch(error => {
  console.log("The data was not returned", error);
});

},[]);
  return (
    <div className="container">
      
      <IndivEntry className="entry">
          {info.map(item => {
              return <Card key={item} name={item.name} eyeColor={item.eye_color} hairColor={item.hair_color} gender={item.gender} />;
          })}
      </IndivEntry>
    </div>
  );  

}
