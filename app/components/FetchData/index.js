import React, { Component, PropTypes } from 'react'
import './styles.styl'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const FetchData = ({ data, error }) => {
  const uniqueCountry = getUniqueCountry(data);
        return (<div className='block'>
        <h4>
          Ramen restaurent
        </h4>

        <label for="cars">Filter By Country: </label>

        <select id="cars" onChange={filerlist}>
            {uniqueCountry.map(el => <option value={el}>{el}</option>)}
        </select>

        <div className='msgBlock'>
          {data ? data.map(renderItem) : 'Loading restaurents...'}
        </div>
        <div className='alertBlock'>
          {error ? `Exception: ${error}` : ''}
        </div>
</div>)
}

const filerlist = (e) => {
  console.log(e.target.value);
  // now we need to dispatch action which can update the state and return a new array of list
}

// function for separting year and rank from string
function rank(str) {
  str = str.replace("#", "");
  var res = str.split(" ");
  return str;
}

// Fucntion which returns unique country
const getUniqueCountry = (data) => {
  if (data == null){ return [];}
  var country = [''];
  var unique = [];
  data.forEach(element => {
    country.push(element.Country);
  });
  country.sort();
  let len = country.length;
  for(let i=0;i<len;i++){
      if(country[i]!==country[i+1])
      unique.push(country[i])
  }
  return unique;
}

const start = (count) => {
    const stars = parseInt(count);
    var str = ""
    for (let i = 0; i < stars ; i++) {
        str += '* '
    }
    return str;
 }


const renderItem = (el) =>{

    return (<div>
      <Card>
        <CardHeader>Restaurent: {el.Brand} <span style={{marginLeft: "50px"}}></span>{el['Top Ten']}</CardHeader>
        <CardBody>
        Variety: {el.Variety}<br/>
        Country: {el.Country}<br/>
        Style: {el.Style}
        </CardBody>
        <CardFooter>Stars: { start(el.Stars) }</CardFooter>
      </Card>
      </div>);
}


FetchData.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string
}

export default FetchData



