// Import modules :
import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import Form from "./Form";


// Test Integration :
describe("Table Datepicker", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();

    const datepicker = screen.getByTestId("datepicker");
    expect(datepicker).toBeInTheDocument();

    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeInTheDocument()
  });
});

// A revoir si autre test à faire ?