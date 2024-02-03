// Import modules :
import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import Table from "./Table";

// Test Integration :
describe("Table Component", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    const table = screen.getByTestId("table");
    expect(table).toBeInTheDocument();

    const h2 = table.querySelector("h2");
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent(/Currently \d+ employees/);
  });
});
