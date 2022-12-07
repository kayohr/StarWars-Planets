import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import mocks from './Mock';
import renderWithContext from './renderWithContext';


describe(' Render', () => {

  
  global.fetch = (url) => {
    return Promise.resolve({
    json: () => Promise.resolve(mocks)
    })
    } 

  test('', async () => {


renderWithContext(<App />);

const table = screen.getByRole('table')
expect(table).toBeVisible()
expect(table).toBeDefined()
const planetName = await screen.findAllByTestId('planet-name');
expect(planetName).toHaveLength(10);

expect(screen.findByRole('cell', {  name: /tatooine/i}))
expect(screen.findByRole('cell', { name: /alderaan/i }))
expect(screen.findByRole('cell', {  name:  /yavin iv/i}))
expect(screen.findByRole('cell', {  name: /hoth/i}))
expect(screen.findByRole('cell', {  name: /Dagobah/i}))
expect(screen.findByRole('cell', {  name: /Bespin/i}))
expect(screen.findByRole('cell', {  name: /Endor/i}))
expect(screen.findByRole('cell', {  name: /Naboo/i}))
expect(screen.findByRole('cell', {  name: /Coruscant/i}))
expect(screen.findByRole('cell', {  name: /Kamino/i}))
const nameInput = screen.getByTestId('name-filter');
expect(nameInput).toBeInTheDocument();     
const columnFilterID = screen.getByTestId('column-filter')
expect(columnFilterID).toBeEnabled();
const comparisonDataId = screen.getByTestId('comparison-filter')
expect(comparisonDataId).toBeEnabled();
const valueDataId = screen.getByTestId('value-filter')
expect(valueDataId).toBeEnabled();
const planetYavin = await screen.findByText(/Yavin IV/i);
expect(planetYavin).toBeVisible();
userEvent.selectOptions(columnFilterID, 'population');
userEvent.selectOptions(comparisonDataId, 'maior que');
fireEvent.change(valueDataId, { target: { value: 30000000 } });
const btnFilterDataId = screen.getByTestId('button-filter');
expect(btnFilterDataId).toBeEnabled();

userEvent.click(btnFilterDataId);
expect(planetYavin).not.toBeVisible();
userEvent.selectOptions(columnFilterID, 'orbital_period');
userEvent.selectOptions(comparisonDataId, 'igual a');
fireEvent.change(valueDataId, { target: { value: 4818 } });
userEvent.click(btnFilterDataId);
userEvent.selectOptions(columnFilterID, 'rotation_period');
userEvent.selectOptions(comparisonDataId, 'maior que');
fireEvent.change(valueDataId, { target: { value: 17 } });
userEvent.click(btnFilterDataId);
const removeBtnX = screen.getAllByRole('button', { name: /x/i });
userEvent.click(removeBtnX[0]);
userEvent.selectOptions(columnFilterID, 'diameter');
userEvent.type(columnFilterID, 'rotation_period');
userEvent.selectOptions(comparisonDataId, 'menor que');
userEvent.type(valueDataId, '24');
userEvent.click(btnFilterDataId);
userEvent.selectOptions(comparisonDataId, 'menor que');
fireEvent.change(valueDataId, { target: { value: 10200 } });
userEvent.click(btnFilterDataId);
expect(planetYavin).not.toBeVisible();
userEvent.click(btnFilterDataId);
expect(planetYavin).toBeDefined();
const btnAllDataId = screen.getByRole('button', {name: /all remove/i})

   expect(btnAllDataId).toBeVisible()
 expect(btnAllDataId).toBeEnabled()
 
 const select = screen.findByTestId('column-filter');
 expect((await select).children).toHaveLength(0)
 
 await waitFor(() =>{
   
   userEvent.type( screen.findByRole("option", { name: /population/i}))
  userEvent.type( screen.findByRole("option", { name: /orbital_period/i}))
  userEvent.type( screen.findByRole("option", { name: /diameter/i}))
  userEvent.type( screen.findByRole("option", { name: /rotation_period/i}))
  userEvent.type( screen.findByRole("option", { name: /surface_water/i}))
  
  userEvent.type( screen.findByRole("option", { name: /maior que/i}))
  userEvent.type( screen.findByRole("option", { name: /menor que/i}))
  userEvent.type( screen.findByRole("option", { name: /igual a/i}))


  })
})

describe(' renderWithContext', () => {

  
  global.fetch = (url) => {
    return Promise.resolve({
    json: () => Promise.resolve(mocks)
    })
    } 

  test('', async () => {

renderWithContext(<App />);

const nameBtn = screen.getByRole('button', {  name: /filter/i})
   expect(nameBtn).not.toBeDisabled();
   expect(nameBtn).toBeInTheDocument()
   expect(nameBtn).toBeVisible()
   userEvent.click(nameBtn)
   expect(screen.getByRole("button", { name: /filter/i })).not.toBeDisabled()
   const diameterMaior = screen.findByText(/diameter maior que 0/i)
   expect(diameterMaior).toBeDefined()
   userEvent.type(diameterMaior,( { target: { value: 1000 }}))
   const columnFIlter = screen.getByTestId('column-filter')
   expect(columnFIlter).toHaveLength(4)
   userEvent.type(screen.findByRole('button', {  name: /x/i}))
   expect(columnFIlter).toHaveLength(4)
   expect(screen.findByText(/4 Results/i)).toBeDefined()
   userEvent.click(nameBtn)
   userEvent.click(nameBtn)
   expect(columnFIlter).toHaveLength(3)
   userEvent.click(screen.getByRole('button', {  name: /all remove/i}))
   expect(screen.findByText(/population maior que 0/i)).toBeDefined()
   expect(columnFIlter).toHaveLength(3)
   const columnHead = screen.getByRole('columnheader', {  name: /name/i})
   expect(columnHead).toBeDefined()
   userEvent.type(screen.findByText(/population maior que 0/i))
   expect(nameBtn).not.toBeDisabled();
   expect(nameBtn).toBeInTheDocument()
   expect(screen.findByRole("option", { name: "population"})).toBeDefined();
  })
  })

  describe(' renderWithContext', () => {

  
    global.fetch = (url) => {
      return Promise.resolve({
      json: () => Promise.resolve(mocks)
      })
      } 
  
    test('', async () => {
  
  renderWithContext(<App />);

const planetName = screen.findByRole('planet-name');
const elements = [planetName]
const nothingFound =  screen.findByText(/nada encontrado/i);
expect(nothingFound).toBeDefined()
elements.map((e) => e.name)
expect(nothingFound).toBeDefined()
expect(screen.getAllByRole('columnheader',planetName, {  name: /rotation_period/i}))
expect(screen.getAllByRole('columnheader',planetName, { name: /orbital_period/i }))
expect(screen.getAllByRole('columnheader',planetName,  {  name:  /diameter/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /climate/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /gravity/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /terrain/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /surface_water/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /population/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /films/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /created/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /edited/i}))
expect(screen.getAllByRole('columnheader',planetName,  {  name: /url/i}))

})

  })
})