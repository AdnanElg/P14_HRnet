// Import modules :
import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import Datepicker from "./Datepicker";


// Test Integration :
describe("Table Datepicker", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Datepicker />
      </Provider>
    );

    const dropdown = screen.getByTestId("datePicker");
    expect(dropdown).toBeInTheDocument();
  });
});

// A revoir si autre test à faire ?