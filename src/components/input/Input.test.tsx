// Import modules :
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../services/store";
import { Provider } from "react-redux";
import Input from "./Input";

// Test Integration :
describe("Input Component", () => {
  test("renders correctly without error", () => {
    const props = {
      type: "text",
      label: "First Name",
      name: "firstname",
      register: { name: "firstname" },
      error: "", 
    };

    render(
      <Provider store={store}>
        <Input {...props} />
      </Provider>
    );

    const containerInput = screen.getByTestId("input");
    expect(containerInput).toBeInTheDocument();

    const label = screen.getByText('First Name');
    expect(label).toBeInTheDocument();

    const input = screen.getByRole('textbox', {
      name: "First Name",
    });
    expect(input).toBeInTheDocument();

    const imgError = screen.queryByAltText("icône exclamation");
    expect(imgError).not.toBeInTheDocument();

    const paragrapheError = screen.queryByText("FirstName is required");
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
    };

    render(
      <Provider store={store}>
        <Input {...props} />
      </Provider>
    );

    const input = screen.getByRole('textbox', {
      name: "First Name",
    });

    await userEvent.type(input, '123');

    const imgError = screen.getByAltText("icône exclamation");
    expect(imgError).toBeInTheDocument();

    const paragrapheError = screen.getByText("Invalid FirstName");
    expect(paragrapheError).toBeInTheDocument();
  });
});
