import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mocks from './Mock'
import userEvent from '@testing-library/user-event';
import testando from './testando'

// beforeEach(() => {
//   jest.spyOn(global, "fetch");
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(mocks),
//   });
// })
// it("Testa a chamada da API", () => {
//   testando(<App />);
//   expect(global.fetch).toHaveBeenCalled();
// });

// test('I am your test', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello, App!/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe(' Render', () => {
  test('', async () => {

    global.fetch = (url) => {
      return Promise.resolve({
      json: () => Promise.resolve(mocks)
      })
      } 

// jest.spyOn(global, 'fetch');
// global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(mocks) });

testando(<App />);

const table = screen.getByRole('table')
expect(table).toBeVisible()
expect(table).toBeDefined()
const searchInput = screen.queryByText('Endor');
expect(searchInput).toBeDefined();
userEvent.type(searchInput, 'Endor');

const nameDataId = screen.getByTestId('name-filter');
expect(nameDataId).toBeInTheDocument();
expect(nameDataId).toBeEnabled();

const nameSearchBar = screen.getByPlaceholderText(/search bar/i);
expect(nameSearchBar).toBeInTheDocument();

const columnDataId = screen.getByTestId('column-filter');
expect(columnDataId).toBeInTheDocument();
expect(columnDataId).toBeEnabled();

const comparisonDataId = screen.getByTestId('comparison-filter');
expect(comparisonDataId).toBeInTheDocument();
expect(comparisonDataId).toBeEnabled();

const valueDataId = screen.getByTestId('value-filter');
expect(valueDataId).toBeInTheDocument();
expect(valueDataId).toBeEnabled();

const valueFilter = screen.getByPlaceholderText(/value filter/i);
expect(valueFilter).toBeInTheDocument();

const btnFilterDataId = screen.getByTestId('button-filter');
expect(btnFilterDataId).toBeInTheDocument();
expect(btnFilterDataId).toBeEnabled();
expect(btnFilterDataId).toBeValid()
  expect(btnFilterDataId).toBeVisible()

const btnAllDataId = screen.getByTestId('button-remove-filters');
expect(btnAllDataId).toBeInTheDocument();
expect(btnAllDataId).toBeEnabled();
expect(btnAllDataId).toBeValid();
  expect(btnAllDataId).toBeVisible()


const allRemove = screen.getByRole('button', {name: /all remove/i});
  expect(allRemove).toBeInTheDocument()
  expect(allRemove).toBeValid()
  expect(allRemove).toBeVisible()

  const nothingFound = screen.getByText(/nada encontrado/i);
  expect(nothingFound).toBeInTheDocument()
  expect(nothingFound).toBeVisible()
  expect(nothingFound).not.toBeInvalid()

  const btnName = screen.getByRole('button', {name: /filter/i});
  expect(btnName).toBeInTheDocument()
  expect(btnName).toBeValid()
  expect(btnName).toBeVisible()

  expect(screen.getAllByRole("columnheader")).toHaveLength(13);


  const tatooine = screen.queryByText(/Tatooine/i);
  expect(tatooine).toBeDefined();

  const kamino =  screen.queryByText(/kamino/i);
  expect(kamino).toBeDefined();  
  

  
  await waitFor(() => {
  userEvent.selectOptions(comparisonDataId, 'maior que');
  userEvent.selectOptions(comparisonDataId, 'menor que');
  userEvent.selectOptions(comparisonDataId, 'igual a');
  
  userEvent.selectOptions(columnDataId, 'orbital_period');
  userEvent.selectOptions(columnDataId, 'diameter');
  userEvent.selectOptions(columnDataId, 'rotation_period');
  userEvent.selectOptions(columnDataId, 'surface_water');
  userEvent.click(btnFilterDataId)
  
  userEvent.click(btnAllDataId);
  userEvent.click(nameDataId, /search bar/i);
  userEvent.type(valueFilter, '40');
    userEvent.type(tatooine)
    userEvent.type(kamino)

  userEvent.click(btnFilterDataId, 'orbital_period');
  userEvent.click(btnFilterDataId, 'diameter');
  userEvent.click(btnFilterDataId, 'rotation_period');
  userEvent.click(btnFilterDataId, 'surface_water');


  userEvent.clear(valueFilter)
  userEvent.click(columnDataId, 'orbital_period');
  userEvent.click(columnDataId, 'diameter');
  userEvent.click(columnDataId, 'rotation_period');
  userEvent.click(columnDataId, 'surface_water');
  userEvent.click(comparisonDataId, 'maior que');
  userEvent.click(comparisonDataId, 'menor que');
  userEvent.click(comparisonDataId, 'igual a');


  
  });
})

describe('Informações da table ', () => {
  it('', async () => {
 global.fetch = (url) => {
      return Promise.resolve({
      json: () => Promise.resolve(mocks)
      })
      } 

testando(<App />);
const ColumnName = screen.getByRole('columnheader', { name: /name/i })
expect(ColumnName).toBeInTheDocument();
  expect(ColumnName).toBeVisible()
const columnRotation = screen.getByRole('columnheader', {name: /rotation period/i})
  expect(columnRotation).toBeVisible()
expect(columnRotation).toBeInTheDocument();
const columnOrbital = screen.getByRole('columnheader', {name: /orbital period/i})
  expect(columnOrbital).toBeVisible()
expect(columnOrbital).toBeInTheDocument();
const columnDiameter = screen.getByRole('columnheader', {name: /diameter/i})
  expect(columnDiameter).toBeVisible()
expect(columnDiameter).toBeInTheDocument();
const columnClimate = screen.getByRole('columnheader', {name: /climate/i})
  expect(columnClimate).toBeVisible()
expect(columnClimate).toBeInTheDocument();

const columnGravity = screen.getByRole('columnheader', {name: /gravity/i})
  expect(columnGravity).toBeVisible()
expect(columnGravity).toBeInTheDocument();
const columnTerrain = screen.getByRole('columnheader', {name: /terrain/i})
  expect(columnTerrain).toBeVisible()
expect(columnTerrain).toBeInTheDocument();
const columnSurface = screen.getByRole('columnheader', {name: /Surface Wate/i})
  expect(columnSurface).toBeVisible()
expect(columnSurface).toBeInTheDocument();
const columnPopulation = screen.getByRole('columnheader', {name: /Population/i})
  expect(columnPopulation).toBeVisible()
expect(columnPopulation).toBeInTheDocument();
const columnFilms = screen.getByRole('columnheader', {name: /Films/i})
  expect(columnFilms).toBeVisible()
expect(columnFilms).toBeInTheDocument();
const columnCreated = screen.getByRole('columnheader', {name: /Created/i})
  expect(columnCreated).toBeVisible()
expect(columnCreated).toBeInTheDocument();
const columnEdited = screen.getByRole('columnheader', {name: /Edited/i})
  expect(columnEdited).toBeVisible()
expect(columnEdited).toBeInTheDocument();
const columnurl = screen.getByRole('columnheader', {name: /url/i})
  expect(columnurl).toBeVisible()
expect(columnurl).toBeInTheDocument();
const nothingFound = screen.getByText(/nada encontrado/i)
  expect(nothingFound).toBeVisible()
expect(nothingFound).toBeInTheDocument()
const btnFilter = screen.getByRole('button', {name: /filter/i})
  expect(btnFilter).toBeVisible()
expect(btnFilter).toBeEnabled()
const btnAllRemove = screen.getByRole('button', {name: /all remove/i})
  expect(btnAllRemove).toBeVisible()
expect(btnAllRemove).toBeEnabled()


await waitFor(() => {

 
    })
  });
})

describe(' Filtros de coluna maior que', () => {
  it('', async () => {
 global.fetch = (url) => {
      return Promise.resolve({
      json: () => Promise.resolve(mocks)
      })
      } 

testando(<App />);


  const btnFilterDataId = screen.getByTestId('button-filter');
  expect(btnFilterDataId).toBeInTheDocument();
  expect(btnFilterDataId).toBeEnabled();
  expect(btnFilterDataId).toBeValid()
  expect(btnFilterDataId).toBeVisible()

const populationMaiorQ = screen.queryByText(/population maior que 0/i)
expect(populationMaiorQ).toBeDefined()
// const columnDataId = screen.getByTestId('column-filter');
// expect(columnDataId).toBeInTheDocument();

const orbitalMaiorQ = screen.queryByText(/orbital_period maior que 0/i)
expect(orbitalMaiorQ).toBeDefined()

const diameterMaiorQ = screen.queryByText(/diameter maior que 0/i)
expect(diameterMaiorQ).toBeDefined()

const rotationMaiorQ = screen.queryByText(/rotation_period maior que 0/i)
expect(rotationMaiorQ).toBeDefined()

const surfaceMaiorQ = screen.queryByText(/surface_water maior que 0/i)
expect(surfaceMaiorQ).toBeDefined()

const btnAllDataId = screen.getByTestId('button-remove-filters');
expect(btnAllDataId).toBeInTheDocument();
expect(btnAllDataId).toBeEnabled();
expect(btnAllDataId).toBeValid();
  expect(btnAllDataId).toBeVisible()

  await waitFor(() => { 
userEvent.click(btnFilterDataId, /population maior que 0/i);
userEvent.click(btnFilterDataId, /orbital_period maior que 0/i);
userEvent.click(btnFilterDataId, /rotation_period maior que 0/i);
userEvent.click(btnFilterDataId, /surface_water maior que 0/i);

  userEvent.click(btnAllDataId, /population maior que 0/i);
  userEvent.click(btnAllDataId, /orbital_period maior que 0/i);
  userEvent.click(btnAllDataId,  /rotation_period maior que 0/i);
  userEvent.click(btnAllDataId, /surface_water maior que 0/i);


// await waitFor(() => {
// userEvent.click(columnDataId, 'orbital_period');
// userEvent.selectOptions(columnDataId, 'diameter');
// userEvent.selectOptions(columnDataId, 'rotation_period');
// userEvent.selectOptions(columnDataId, 'surface_water');
//   });
})
}) })

describe('Filtros de coluna menor que ', () => {
  it('', async () => {
 global.fetch = (url) => {
      return Promise.resolve({
      json: () => Promise.resolve(mocks)
      })
      } 

testando(<App />);

 

  const btnFilterDataId = screen.getByTestId('button-filter');
  expect(btnFilterDataId).toBeInTheDocument();
  expect(btnFilterDataId).toBeEnabled();
  expect(btnFilterDataId).toBeValid()
  expect(btnFilterDataId).toBeVisible()

const populationMenorQ = screen.queryByText(/population menor que 0/i)
expect(populationMenorQ).toBeDefined()

const orbitalMenorQ = screen.queryByText(/orbital_period menor que 0/i)
expect(orbitalMenorQ).toBeDefined()

const diameterMenorQ = screen.queryByText(/diameter menor que 0/i)
expect(diameterMenorQ).toBeDefined()

const rotationMenorQ = screen.queryByText(/rotation_period menor que 0/i)
expect(rotationMenorQ).toBeDefined()

const surfaceMenorQ = screen.queryByText(/surface_water menor que 0/i)
expect(surfaceMenorQ).toBeDefined()

const btnAllDataId = screen.getByTestId('button-remove-filters');
expect(btnAllDataId).toBeInTheDocument();
expect(btnAllDataId).toBeEnabled();
expect(btnAllDataId).toBeValid();
  expect(btnAllDataId).toBeVisible()

  await waitFor(() => {
userEvent.click(btnFilterDataId, /population menor que 0/i);
userEvent.click(btnFilterDataId, /orbital_period menor que 0/i);
userEvent.click(btnFilterDataId, /rotation_period menor que 0/i);
userEvent.click(btnFilterDataId, /surface_water menor que 0/i);

userEvent.click(btnAllDataId, /population menor que 0/i);
userEvent.click(btnAllDataId, /orbital_period menor que 0/i);
userEvent.click(btnAllDataId,  /rotation_period menor que 0/i);
userEvent.click(btnAllDataId, /surface_water menor que 0/i);
  });
})})

describe('Filtros de coluna igual a ', () => {
  it('', async () => {
 global.fetch = (url) => {
      return Promise.resolve({
      json: () => Promise.resolve(mocks)
      })
      } 

testando(<App />);

  const btnFilterDataId = screen.getByTestId('button-filter');
  expect(btnFilterDataId).toBeInTheDocument();
  expect(btnFilterDataId).toBeEnabled();
  expect(btnFilterDataId).toBeValid()
  expect(btnFilterDataId).toBeVisible()
// const populationIgualA = screen.findByText(/population igual a 0/i)
expect( screen.queryByText( /population igual a 0/i)).toBeDefined()

const orbitalIgualA = screen.queryByText(/orbital_period igual a 0/i)
expect(orbitalIgualA).toBeDefined()

const diameterIgualA = screen.queryByText(/diameter igual a 0/i)
expect(diameterIgualA).toBeDefined()

const rotationIgualA = screen.queryByText(/rotation_period igual a 0/i)
expect(rotationIgualA).toBeDefined()

const surfaceIgualA = screen.queryByText(/surface_water igual a 0/i)
expect(surfaceIgualA).toBeDefined()


const btnAllDataId = screen.getByTestId('button-remove-filters');
expect(btnAllDataId).toBeInTheDocument();
expect(btnAllDataId).toBeEnabled();
expect(btnAllDataId).toBeValid();
  expect(btnAllDataId).toBeVisible()

  await waitFor(() => { 

userEvent.click(btnFilterDataId, /population igual que 0/i);
userEvent.click(btnFilterDataId, /orbital_period igual que 0/i);
userEvent.click(btnFilterDataId, /rotation_period igual que 0/i);
userEvent.click(btnFilterDataId, /surface_water igual que 0/i);

userEvent.click(btnAllDataId, /population igual que 0/i);
userEvent.click(btnAllDataId, /orbital_period igual que 0/i);
userEvent.click(btnAllDataId,  /rotation_period igual que 0/i);
userEvent.click(btnAllDataId, /surface_water igual que 0/i);

  });})
})



describe(' ', () => {
  it('', async () => {


testando(<App />);
const columnSort =  screen.getByTestId('column-sort');
expect(columnSort).toBeInTheDocument();
const columnAsc = screen.getByTestId('column-sort-input-asc')
expect(columnAsc).toBeInTheDocument();
const columnDesc = screen.getByTestId('column-sort-input-desc')
expect(columnDesc).toBeInTheDocument();
const sortBtn = screen.getByTestId('column-sort-button')
expect(sortBtn).toBeInTheDocument();
expect(sortBtn).toBeEnabled();
expect(sortBtn).toBeValid();

await waitFor (() => { 
userEvent.selectOptions(columnSort, 'population');
userEvent.click(columnAsc)
userEvent.click(columnDesc)
userEvent.click(sortBtn)

})


      
  });
  });
})