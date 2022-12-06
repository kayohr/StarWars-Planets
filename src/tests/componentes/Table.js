import React, { useContext, useState } from "react";
import PlanetsConxtet from "../context/PlanetsContext";


function Table(){
    const {data, setData, search, setSearch, filters, setFilters, arrayColum, tablee,setArrayColum, setTablee} = useContext(PlanetsConxtet);
    const [information, setInformation] = useState([]);
    const [test, setTest] = useState({});
    // const [dataSearchName, setdataSearchName ] = useState([])
    const [click, setClick] = useState(false)
    // const [dataRender, setDataRender] = useState([])
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
    // useEffect(() => {
    //   setdataSearchName(data.filter((el) => el.name.toUpperCase().includes(search.name?.toUpperCase())))

    // },[])
    
    // const filterInformations = () => {
    //   setInformation([...information, search])
      
    //   // setTest([...data])
    //   switch (search.comparison) {
    //    case "maior que":
    //     setData(dataSearchName.filter((el) => +el[search.column] > +search.value))
    //     // console.log('xablau');
    //      break;
    //      case "menor que":
    //       setData(dataSearchName.filter((el) => +el[search.column] < +search.value))
    //       break;
    //      case "igual a":
    //       setData(dataSearchName.filter((el) => +el[search.column] === +search.value))
    //       break;
    //    default:
    //   } 
      
    //   }
    const filterInformations = () => {
      const dataSearchName = data.filter((e) => e.name.toUpperCase()
        .includes(search.name.toUpperCase()));
      const finalFilter = dataSearchName.filter((e) => {
        const filterResults = filters.map(({ column, comparison, value }) => {
          switch (comparison) {
          case 'menor que':
            return +e[column] < +value;
          case 'igual a':
            return +e[column] === +value;
          case 'maior que':
            return +e[column] > +value;
          default:
            return true;
          }
        });
        return filterResults.every((_planet) => _planet);
      });
      return finalFilter;
    };
    
    const submitFilters = () => {
      setArrayColum(arrayColum.filter((e) => e !== search.column));
      setFilters([...filters,
        { column: search.column,
          comparison: search.comparison,
          value: search.value }]);
      setSearch({
        ...search,
        column: arrayColum[0],
      });
    };
    // Atualiza as opções de filtro, select.
    // useEffect(()=>{
    //   const filterColum = arrayColum.filter((e) => !information.some((el) => el.column === e ));
    //   // console.log(filterColum);
    //   setTest(data)
    //   // setTablee(data)
    //   setFilters(filterColum);
    //     setSearch((prev) => ({
    //       ...prev,
    //       column: filterColum[0],

         
    //     }))
        
    //   },[data])
      
      console.log(filters);
      // const remove = ({target}) => {
      //   // setClick(true)
      // //  const tablee = await requestAPIFetch()
      //   const removeFilter = information.filter((e) => e.column !== target.attributes.column.value);
      //   setInformation(removeFilter);
      //   const optioAplication = removeFilter.map((e) => e.column)
      //   setFilters(arrayColum.filter((e) => !optioAplication.includes(e)))
      //   // console.log(filters);
      //   // setInformation(filterInformations)
      //   // filterInformations()
      //   // setTest(dataSearchName)
      //   // setTablee(data)
        
      //   // information.forEach((e) => {
      //   //   switch (e.comparison) {
      //   //     case "maior que":
      //   //       setData(tablee.filter((el) => +el[e.column] > +e.value))
      //   //      // console.log('xablau');
      //   //       break;
      //   //       case "menor que":
      //   //         setData(tablee.filter((el) => +el[e.column] < +e.value))
      //   //        break;
      //   //       case "igual a":
      //   //         setData(tablee.filter((el) => +el[e.column] === +e.value))
      //   //        break;
      //   //     default:
      //   //    } 
      //   // })
        
      // }
      const remove = (event) => {
        setFilters(filters.filter((e)=> e.column !== event.target.value))
      }
      
      // useEffect(() => {
      //   setTablee(data)
      //   // setClick(false)
      // },[tablee])

      
     const removeAll = () => {
      setFilters([])
    

     }

    //  const sorted = () =>{
      
      
    //     // const array = data.filter((el) => el[sortOrder.column]);
    //     // console.log(array);
        
    //     // if (sortOrder.sort === 'ASC') {
    //     //   array.sort((a, b) => (+a[sortOrder.column]) - (+b[sortOrder.column]));
    //     // } else {
    //     //   array.sort((a, b) => (+b[sortOrder.column]) - (+a[sortOrder.column]));
    //     // }
    //     // setInformation(array)
    //     // setData(array)
    //     // setsortOrder(array)
    //   };
       
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
      arrayColum.map((e) => ( 
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
        onClick={submitFilters}
        // onChange={ ({ target }) => target.value !== ''
        //     && setInformation([...arrayColum, target.value]) }

        >Filter</button>
        </form>
      
        

            <div>
            <label htmlFor="column">
          {/* Coluna:
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
          </select> */}
        </label>


        <label htmlFor="ASC">
          {/* <input 
          id="ASC"
          type='radio'
          data-testid='column-sort-input-asc'
          value='ASC' 
          checked={ sortOrder.sort === 'ASC' }
          // onChange={ () => setsortOrder('ASC')}
          // onChange={ ({ target }) => setsortOrder(target.value) }
          />
          
          Ascendente
          
        </label>

        <label htmlFor="DESC">
          <input
          id="DESC"
          type='radio'
          data-testid='column-sort-input-desc'
          value='DESC'
          checked={ sortOrder.sort === 'DESC' }
          // onChange={ () => setsortOrder('DESC')}
          // onChange={ ({ target }) => setsortOrder({column: }) }
          />
          Descendente */}
          
        </label>
        <button
        type="button"
        data-testid='column-sort-button'
        // onClick={sorted}
        >
          Ordenar
        </button>
              
             <div>
        {filters.map((e) => (
          <div data-testid="filter" key={ e.column }>
            <span>
              {e.column} {e.comparison} {e.value}
            </span>
    
            <button
            onClick={remove}
            type='button'
            
            value={e.column}
            
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
        filterInformations().map((el) => (
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