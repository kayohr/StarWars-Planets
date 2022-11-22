import React, { useContext } from "react";
import PlanetsConxtet from "../context/PlanetsContext";


function Table(){
    const {data} = useContext(PlanetsConxtet);
    console.log(data)
    return (
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
        data.map((el) => (
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
    );
}

export default Table;