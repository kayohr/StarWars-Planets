import React, { useContext, useEffect, useState } from "react";
import PlanetsConxtet from "../context/PlanetsContext";
import requestAPIFetch from '../../services/RequestAPI';


function Table(){
    const {data, setData, search, setSearch, filters, setFilters, arrayColum, setArrayColum} = useContext(PlanetsConxtet);
    const [information, setInformation] = useState([]);
    const [test, setTest] = useState({});

    // const searchName= () => {
    //   const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))
  
    // }

    const handleChange= ({target}) => {
      // const dataSearchName = data.filter((el) => el.name.includes(search.name))
      
      setSearch({...search, [target.name]:target.value });
      // setSearch(target.value);
      // setSearch(dataSearchName);
    }
    
    // console.log(data)
    
      const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))

    
    
    const filterInformations = () => {
      setInformation([...information, search])
      
      // setTest([...data])
      switch (search.comparison) {
       case "maior que":
        setData(dataSearchName.filter((el) => +el[search.column] > +search.value))
        // console.log('xablau');
         break;
         case "menor que":
          setData(dataSearchName.filter((el) => +el[search.column] < +search.value))
          break;
         case "igual a":
          setData(dataSearchName.filter((el) => +el[search.column] === +search.value))
          break;
       default:
      } console.log(filters);
    }

    
    useEffect(()=>{
      const filterColum = arrayColum.filter((e) => !information.some((el) => el.column === e ));
      // console.log(filterColum);
      setTest(data)
      
      setFilters(filterColum);
        setSearch((prev) => ({
          ...prev,
          // comparison: setArrayColum[0],
          column: filterColum[0],
          // test: dataSearchName,
          // value: setArrayColum[0],
        }))
        
      },[data])
      
      
      const remove = ({target}) => {
        requestAPIFetch().then((result) => setData(result))
        const removeFilter = information.filter((e) => e.column !== target.attributes.column.value);
        setInformation(removeFilter);
        const optioAplication = removeFilter.map((e) => e.column)
        setFilters(arrayColum.filter((e) => !optioAplication.includes(e)))
        // console.log(filters);
        // setInformation(filterInformations)
        // filterInformations(dataSearchName)
        setTest(dataSearchName)

      }



      
     const removeAll = () => {
      requestAPIFetch().then((result) => setData(result))
      setInformation([]);
      setFilters(arrayColum.filter((e) => !test.includes(e)))
      // const newA = [...data]
      // console.log(newA);
      setTest(data)
    
      // setTest(dataSearchName)
      // const test = data.map((e) => e.column)
      
      // console.log(information);
    
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
       
          
        </input>
      
      <select
      data-testid='column-filter'
      name="column"
      onChange={ handleChange }>
      { 
      filters.map((e) => ( 
        <option key= {e} value= {e}>
          {e}
        </option>
      ))      
      }


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
        // onChange={ ({ target }) => target.value !== ''
        //     && setInformation([...arrayColum, target.value]) }

        >Filter</button>
        </form>
      
            <div>
              
             <div>
        {information.map((e) => (
          <div data-testid="filter" key={ e.column }>
            <span>
              {e.column} {e.comparison} {e.value}
            </span>
    
            <button
            onClick={remove}
            type='button'
            column={e.column}
            
            >
              X
            </button>
          
          </div>
        ))}
        <button
        data-testid="button-remove-filters"
            onClick={removeAll}
            type='button'
            
            >
             All Remove
            </button>
        </div> 
            
            </div>
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
        test.length === 0 ? <p>Nada Encontrado</p> :
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