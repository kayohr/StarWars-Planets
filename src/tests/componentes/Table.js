import React, { useContext, useEffect, useState } from "react";
import PlanetsConxtet from "../context/PlanetsContext";


function Table(){
    const {data, filter, setData} = useContext(PlanetsConxtet);
    const [search, setSearch] = useState({
      name: '',
      comparison: 'maior que',
      column: 'population',
      value: 0,
     })

    // const searchName= () => {
    //   const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))
  
    // }

    const handleChange= ({target}) => {
      // const dataSearchName = data.filter((el) => el.name.includes(search.name))
      
      setSearch({...search, [target.name]:target.value });
      // setSearch(target.value);
      // setSearch(dataSearchName);
    }
    
    const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))
    // console.log(data)

    const filterInformations = () => {
     
      switch (search.comparison) {
       case "maior que":
        setData(dataSearchName.filter((el) => +el[search.column] > +search.value))
        console.log('xablau');
         break;
         case "menor que":
          setData(dataSearchName.filter((el) => +el[search.column] < +search.value))
          break;
         case "igual a":
          setData(dataSearchName.filter((el) => +el[search.column] === +search.value))
         break;
       default:
      }
    }
    
    return (
      <>
      <form>
        <input
        data-testid='name-filter'
        onChange={handleChange}
        type="text" name='name' 
        value={search.name}
        placeholder="search bar"

        >
          {/* <input
          placeholder="search bar">
          </input> */}
          {/* <button type="button" onClick={handleClick}>Filter Episode</button> */}
          
        </input>
      
      <select
      data-testid='column-filter'
      name="column"
      onChange={ handleChange }>
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
      
      </select>

      <select
      data-testid='comparison-filter'
      name="comparison"
      onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
        </select>

        <input
        data-testid="value-filter"
        placeholder="value filter"
        name="value"
        value={ search.value }
        onChange={ handleChange }
        >
        </input>
        <button
        data-testid='button-filter'
        type="button"
        onClick={filterInformations}

        >Filter</button>
        </form>
      
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface Wate</th>
                <th>Population</th>
                <th>Films</th>
                <th>Created</th>
                <th>Edited</th>
                <th>url</th>
                
            </tr>
            </thead>

            <tbody>
      {
        data.length === 0 ? <p>Nada Encontrado</p> :
        dataSearchName.map((el) => (
          <tr key={ el.name } >
            <td>{el.name}</td>
          <td>{el.rotation_period}</td>
          <td>{el.orbital_period}</td>
          <td>{el.diameter}</td>
          <td>{el.climate}</td>
          <td>{el.gravity}</td>
          <td>{el.terrain}</td>
          <td>{el.surface_water}</td>
          <td>{el.population}</td>
          <td>{el.films}</td>
          <td>{el.created}</td>
          <td>{el.edited}</td>
          <td>{el.url}</td>
          
          </tr>
        ))
      }
      </tbody>
        </table>
        </>
    );
}

export default Table;