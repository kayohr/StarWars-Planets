import React, { useEffect, useMemo, useState } from 'react';
import PlanetsConxtet from './PlanetsContext';
import requestAPIFetch from '../../services/RequestAPI';

export default function PlanetsProvider({children}){
  const [data, setData] = useState([]);

 useEffect(() => {
    requestAPIFetch().then((result) => setData(result))
 }, [])

 const value = useMemo(() => ({
    data
 }), [data])

    return (
        <PlanetsConxtet.Provider value={value}>
            {children}
        </PlanetsConxtet.Provider>
    )
}