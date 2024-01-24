// Import modules
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import Home from './Home';
import store from '../../services/store';

// Test Integration :
describe('Home Component', () => {
  test('should render the heading "Add an employee"', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const h1 = screen.getByRole('heading', { name: 'Add an employee' });
    expect(h1).toBeInTheDocument();
  });

  test('should render the Form component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});