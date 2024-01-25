import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import Datepicker from "./Datepicker";
import { useForm } from "react-hook-form";

// Test Integration :
describe("Table Datepicker", () => {
  test("renders correctly", () => {
    const { control } = useForm()

    const props = {
      label: "Date of Birth",
      name: "dateofbirth",
      error: "",
      control: control,
      resetKey: ""
    };

    render(
      <Provider store={store}>
        <Datepicker {...props}/>
      </Provider>
    );

    const dropdown = screen.getByTestId("datePicker");
    expect(dropdown).not.toBeInTheDocument();
  });
});