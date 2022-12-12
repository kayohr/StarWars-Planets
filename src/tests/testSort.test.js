import { findByText, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import sortFunc from '../services/funcSortTes';
import mocks from './Mock';
import renderWithContext from './renderWithContext';


describe(' Render', () => {

  
  global.fetch = (url) => {
    return Promise.resolve({
    json: () => Promise.resolve(mocks)
    })
    } 



renderWithContext(<App />);

test('filters elements correctly', async () => {
    const array = [
      { name: 'Bob', value: 'unknown' },
      { name: 'Alice', value: 'known' },
      { name: 'Eve', value: 'unknown' },
    ];
  
    const sortColumn = 'value';
    const sortOrder = 'ASC';
  
    const expected = [
      { name: 'Alice', value: 'known' },
    ];
    const expected2 = [
        { name: 'Eve', value: 'unknown' },
      ];

    const columnSort = screen.queryByTestId(sortColumn);
    userEvent.type(columnSort, /value/i);

    const orderSortAsc = screen.findByTestId(sortOrder)
    userEvent.type(orderSortAsc, /asc/i);

    const columnSortId = screen.queryByTestId('column-sort')
    userEvent.type(columnSortId)
    userEvent.type(array)
    expect(columnSortId).toHaveLength(5);
    
    const columnSort2 = screen.getByTestId('column-sort');
    userEvent.selectOptions(columnSort2, 'surface_water');

    const orderSortIdAsc = screen.getByTestId('column-sort-input-asc')
    userEvent.click(orderSortIdAsc, expected)
    const sortASC = screen.getByTestId('column-sort-input-asc');
    userEvent.click(sortASC);

    const orderSortIdDesc = screen.getByTestId('column-sort-input-desc')
    userEvent.click(orderSortIdDesc, expected2)
    const sortDesc = screen.getByTestId('column-sort-input-desc');
    userEvent.click(sortDesc);

    const btnSort = screen.getByTestId('column-sort-button')
    userEvent.click(btnSort);
      
   
        const array2 = [{name: 'Yavin IV'}, {name: 'Tatooine'}, {name: 'Bespin'}];
        const result = sortFunc('ASC', 'name', array2);
        expect(result).toEqual();
      
      
      
        const array3 = [{name: 'Yavin IV'}, {name: 'Tatooine'}, {name: 'Bespin'}];
        const result2 = sortFunc('DESC', 'name', array3);
        expect(result2).toEqual();
        
  
   
  });




// describe('ArraySort', () => {
//     global.fetch = (url) => {
//         return Promise.resolve({
//         json: () => Promise.resolve(mocks)
//         })
//         } 
    
    
    
//     renderWithContext(<App />);
    
//   test('sorts the array in ascending order when sortOrder is set to ASC', () => {
//     // Use the shallow function from Enzyme to render the ArraySort component
//     const wrapper = (
//       <funcSortTes
//         sortOrder="ASC"
//         sortColumn="column"
//         array={[{ column1: 3 }, { column1: 1 }, { column1: 2 }]}
//       />
//     );

//     // Use toEqual to verify that the sorted array is exactly equal to the expected output
//     expect(wrapper.state('array')).toEqual([{ column1: 1 }, { column1: 2 }, { column1: 3 }]);
//   });

//   test('sorts the array in descending order when sortOrder is set to DESC', () => {
//     // Use the shallow function from Enzyme to render the ArraySort component
//     const wrapper = (
//       <funcSortTes
//         sortOrder="DESC"
//         sortColumn="column"
//         array={[{ column: 3 }, { column: 1 }, { column: 2 }]}
//       />
//     );

//     // Use toEqual to verify that the sorted array is exactly equal to the expected output
//     expect(wrapper, 'array').toEqual([{ column1: 1 }, { column1: 2 }, { column1: 3 }]);
//   });
// });

})