// Import modules :
import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import DropDown from "./DropDown";
import { useForm } from "react-hook-form";

test("user selects an option", () => {
  const { control } = useForm();

  const stateOptions = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    },
    {
      "name": "Alaska",
      "abbreviation": "AK"
    },
  ];

  const props = {
    label: "State",
    name: "state",
    options: stateOptions,
    error: "",
    control: control,
    resetKey: "",
  };
  
  render(
    <Provider store={store}>
      <DropDown {...props}/>
    </Provider>
  );

  const dropdown = screen.getByTestId("dropdown");
  expect(dropdown).toBeInTheDocument();
});
