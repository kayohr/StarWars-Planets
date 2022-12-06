import React, { useEffect, useMemo, useState } from 'react';
import PlanetsConxtet from './PlanetsContext';
import requestAPIFetch from '../../services/RequestAPI';

export default function PlanetsProvider({children}){
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [tablee, setTablee] = useState([])
  const [search, setSearch] = useState({
    name: '',
    comparison: 'maior que',
    column: 'population',
    value: 0,
   })
   const [arrayColum, setArrayColum] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
   ]);


 useEffect(() => {
    requestAPIFetch().then((result) => setData(result))
    .then((result) => setTablee(result))
 }, [search.name])

 const value = useMemo(() => ({
    data,
    filters,
    search,
    arrayColum,
    tablee,
    setFilters,
    setData,
    setSearch,
    setArrayColum,
    setTablee,
 }), [data, filters,search, arrayColum, tablee, setArrayColum, setTablee, setFilters, setData,setSearch, setArrayColum])

    return (
        <PlanetsConxtet.Provider value={value}>
            {children}
        </PlanetsConxtet.Provider>
    )
}