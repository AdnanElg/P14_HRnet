// Import modules
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import Employees from './Employees';
import store from '../../services/store';

// Test Integration :
describe('Employees Component', () => {
  test('should render the heading "Employees list"', () => {
    render(
      <Provider store={store}>
        <Employees />
      </Provider>
    );
    const h1 = screen.getByRole('heading', { name: 'Employees list' });
    expect(h1).toBeInTheDocument();
  });

  test('should render the Table component', () => {
    render(
      <Provider store={store}>
        <Employees />
      </Provider>
    );
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
  });
});