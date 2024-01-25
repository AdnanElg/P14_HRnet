// Import modules :
import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import DropDown from "./DropDown";


// Test Integration :
describe("Table Dropdown", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <DropDown />
      </Provider>
    );

    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeInTheDocument();
  });
});

// A revoir si autre test à faire ?