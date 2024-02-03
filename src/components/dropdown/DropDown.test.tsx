import { render, screen, renderHook } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import DropDown from "./DropDown";
import { useForm } from "react-hook-form";

describe("component Dropdown", () => {
  test("renders correctly", () => {
    const { result } = renderHook(() => useForm());

    const stateOptions = [
      {
        label: "Alabama",
        value: "AL",
      },
      {
        label: "Alaska",
        value: "AK",
      },
    ];

    const props = {
      label: "State",
      name: "state",
      options: stateOptions,
      error: "",
      control: result.current.control,
      resetKey: "",
      dataTestId: "dropDownState",
    };

    render(
      <Provider store={store}>
        <DropDown {...props} />
      </Provider>
    );

    const dropdown = screen.getByTestId("dropDownState");
    expect(dropdown).toBeInTheDocument();
  });
});
