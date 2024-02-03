import { render, screen, renderHook } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import Datepicker from "./Datepicker";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";

// Test Integration :
describe("component Datepicker", () => {
  test("renders correctly", () => {
    const { result } = renderHook(() => useForm());

    const props = {
      label: "Date of Birth",
      name: "dateofbirth",
      error: "",
      control: result.current.control,
      resetKey: "",
      dataTestId: "datePickerDateOfBirth",
    };

    render(
      <Provider store={store}>
        <Datepicker {...props} />
      </Provider>
    );

    const datepicker = screen.getByTestId("datePickerDateOfBirth");
    expect(datepicker).toBeInTheDocument();

    const imgError = screen.queryByAltText(
      "icône exclamation datePickerDateOfBirth"
    );
    expect(imgError).not.toBeInTheDocument();

    const paragrapheError = screen.queryByText(
      "Date of Birth, You must be 18 years or older"
    );
    expect(paragrapheError).not.toBeInTheDocument();
  });

  test("Show an error when typing incorrectly in the datepicker", async () => {
    const { result } = renderHook(() => useForm());
    userEvent.setup();

    const props = {
      label: "Date of Birth",
      name: "dateofbirth",
      error: "Date of Birth, You must be 18 years or older",
      control: result.current.control,
      resetKey: "",
      dataTestId: "datePickerDateOfBirth",
    };

    render(
      <Provider store={store}>
        <Datepicker {...props} />
      </Provider>
    );

    const datepicker = screen.getByTestId("datePickerDateOfBirth");
    expect(datepicker).toBeInTheDocument();

    await userEvent.type(datepicker, "12/02/2010");

    const imgError = screen.getByAltText(
      "icône exclamation datePickerDateOfBirth"
    );
    expect(imgError).toBeInTheDocument();

    const paragrapheError = screen.getByText(
      "Date of Birth, You must be 18 years or older"
    );
    expect(paragrapheError).toBeInTheDocument();
  });
});
