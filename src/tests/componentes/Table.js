import React, { useContext, useEffect, useState } from "react";
import PlanetsConxtet from "../context/PlanetsContext";
import requestAPIFetch from '../../services/RequestAPI';


function Table(){
    const {data, setData, search, setSearch, filters, setFilters, arrayColum} = useContext(PlanetsConxtet);
    const [information, setInformation] = useState([]);
    const [test, setTest] = useState({});
    const [dataSearchName, setdataSearchName ] = useState([])
    const [click, setClick] = useState(false)
    const [sortOrder, setsortOrder] = useState({
      column: 'population',
      sort: 'ASC',
    });

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
    // const dataSearchName = data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase()))
    useEffect(() => {
      setdataSearchName(data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase())))

    },[search])
    
    
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
      } 
      }
      
    // Atualiza as opções de filtro, select.
    useEffect(()=>{
      const filterColum = arrayColum.filter((e) => !information.some((el) => el.column === e ));
      // console.log(filterColum);
      setTest(data)
      
      setFilters(filterColum);
        setSearch((prev) => ({
          ...prev,
          column: filterColum[0],
         
        }))
        
      },[data])
      
      
      const remove = ({target}) => {
        setClick(true)
        // requestAPIFetch().then((result) => setData(result))
        const removeFilter = information.filter((e) => e.column !== target.attributes.column.value);
        setInformation(removeFilter);
        const optioAplication = removeFilter.map((e) => e.column)
        setFilters(arrayColum.filter((e) => !optioAplication.includes(e)))
        // console.log(filters);
        // setInformation(filterInformations)
        // filterInformations()
        // setTest(dataSearchName)
        information.forEach((e) => {
          switch (e.comparison) {
            case "maior que":
             setData(data.filter((el) => +el[e.column] > +e.value))
             // console.log('xablau');
              break;
              case "menor que":
               setData(data.filter((el) => +el[e.column] < +e.value))
               break;
              case "igual a":
               setData(data.filter((el) => +el[e.column] === +e.value))
               break;
            default:
           } 
        })
        setdataSearchName(data)
      }
      
      
      // useEffect(() => {
      //   console.log(information);
      //   setClick(false)
      // },[click])

      
     const removeAll = () => {
      requestAPIFetch().then((result) => setData(result))
      setInformation([]);
      setFilters(arrayColum.filter((e) => !test.includes(e)))
      
      setTest(data)
    
    
     }

     const sorted = () =>{
      // setsortOrder(sortOrder.column)
        
      // const awesomeSort = (data, dir = 'ASC', key = null) => {
      //   const firstElement = (key) ? data[0][key] : data[0];
      //   const isNumber = !isNaN(firstElement);
      //   const isAsc = dir.toUpperCase() === 'ASC';
        
      //   if(isNumber) {
      //     return data.sort((a,b) => {
      //       const x = (key) ? a[key] : a;
      //       const y = (key) ? b[key] : b;
      //       if(isAsc) return x - y;
      //       if(!isAsc) return y - x;
      //     })
      //   } 
      //   return search.sort((a,b) => {
      //       const x = (key) ? a[key] : a;
      //       const y = (key) ? b[key] : b;
      //       if(isAsc) return x.localeCompare(y);
      //       if(!isAsc) return y.localeCompare(x);
      //     })
        
      // } }
      
      
        const array = test.filter((el) => el[filters.column]);
        
        if (sortOrder.sort === 'ASC') {
          array.sort((a, b) => (+a[sortOrder.column]) - (+b[sortOrder.column]));
        } else {
          array.sort((a, b) => (+b[sortOrder.column]) - (+a[sortOrder.column]));
        }
        setTest([...array])
      };
       
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
            <label htmlFor="column">
          Coluna:
          <select
            data-testid="column-sort"
            type="text"
            // name="column"
            // id="column"
            value={ sortOrder}
            // onChange={ ({ target }) => setsortOrder(target.value) }
            onChange={ ({ target }) => setsortOrder(target.value) }
          >
            {filters.map((opt) => (
              <option key={ opt } value={ opt }>{opt}</option>
            ))}
          </select>
        </label>


        <label htmlFor="ASC">
          <input 
          id="ASC"
          type='radio'
          data-testid='column-sort-input-asc'
          value='ASC' 
          checked={ sortOrder === 'ASC' }
          // onChange={ () => setsortOrder('ASC')}
          onChange={ ({ target }) => setsortOrder(target.value) }
          />
          
          Ascendente
          
        </label>

        <label htmlFor="DESC">
          <input
          id="DESC"
          type='radio'
          data-testid='column-sort-input-desc'
          value='DESC'
          checked={ sortOrder === 'DESC' }
          // onChange={ () => setsortOrder('DESC')}
          onChange={ ({ target }) => setsortOrder(target.value) }
          />
          Descendente
          
        </label>
        <button
        type="button"
        data-testid='column-sort-button'
        onClick={sorted}
        >
          Ordenar
        </button>
              
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
            <td data-testid="planet-name" >{el.name}</td>
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