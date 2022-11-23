import React, { useContext, useState } from "react";
import PlanetsConxtet from "../context/PlanetsContext";


function Table(){
    const {data, filter} = useContext(PlanetsConxtet);
    const [search, setSearch] = useState({
      name: '',
     })

    // const searchName= () => {
    //   const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))
  
    // }

    const handleChange= ({target}) => {
      // const dataSearchName = data.filter((el) => el.name.includes(search.name))
      
      setSearch({...dataSearchName, [target.name]:target.value });
      // setSearch(target.value);
      // setSearch(dataSearchName);
    }
    
    const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))
    // console.log(data)
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