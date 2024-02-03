// Import modules :
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../services/store";
import { Provider } from "react-redux";
import Input from "./Input";

// Test Integration :
describe("Input Component", () => {
  test("renders correctly", () => {
    const props = {
      type: "text",
      label: "First Name",
      name: "firstname",
      register: { name: "firstname" },
      error: "",
      dataTestId: "inputFirstName",
    };

    render(
      <Provider store={store}>
        <Input {...props} />
      </Provider>
    );

    const input = screen.getByTestId("inputFirstName");
    expect(input).toBeInTheDocument();

    const imgError = screen.queryByAltText("icône exclamation inputFirstName");
    expect(imgError).not.toBeInTheDocument();

    const paragrapheError = screen.queryByText("Invalid FirstName");
    expect(paragrapheError).not.toBeInTheDocument();
  });

  test("Show an error when typing incorrectly in the input", async () => {
    userEvent.setup();

    const props = {
      type: "text",
      label: "First Name",
      name: "firstname",
      register: { name: "firstname" },
      error: "Invalid FirstName",
      dataTestId: "inputFirstName",
    };

    render(
      <Provider store={store}>
        <Input {...props} />
      </Provider>
    );

    const input = screen.getByTestId("inputFirstName");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "123");

    const imgError = screen.getByAltText("icône exclamation inputFirstName");
    expect(imgError).toBeInTheDocument();

    const paragrapheError = screen.getByText("Invalid FirstName");
    expect(paragrapheError).toBeInTheDocument();
  });
});
