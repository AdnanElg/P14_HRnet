import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../services/store";
import { Provider } from "react-redux";
import Form from "./Form";

describe("component Form", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();

    const img = screen.getByAltText("icône addUser");
    expect(img).toBeInTheDocument();

    const inputFirstName = screen.getByTestId("inputFirstName");
    expect(inputFirstName).toBeInTheDocument();

    const imgFirstNameError = screen.queryByAltText("icône exclamation");
    expect(imgFirstNameError).not.toBeInTheDocument();

    const paragrapheFirstNameError = screen.queryByText("Invalid FirstName");
    expect(paragrapheFirstNameError).not.toBeInTheDocument();

    const inputLastName = screen.getByTestId("inputLastName");
    expect(inputLastName).toBeInTheDocument();

    const imgLastNameError = screen.queryByAltText("icône exclamation");
    expect(imgLastNameError).not.toBeInTheDocument();

    const paragrapheLastNameError = screen.queryByText("Invalid LastName");
    expect(paragrapheLastNameError).not.toBeInTheDocument();

    const datePickerDateOfBirth = screen.getByTestId("datePickerDateOfBirth");
    expect(datePickerDateOfBirth).toBeInTheDocument();

    const imgDateOfBirthError = screen.queryByAltText("icône exclamation");
    expect(imgDateOfBirthError).not.toBeInTheDocument();

    const paragrapheDateOfBirthError = screen.queryByText(
      "Date of Birth is required"
    );
    expect(paragrapheDateOfBirthError).not.toBeInTheDocument();

    const inputStreet = screen.getByTestId("inputStreet");
    expect(inputStreet).toBeInTheDocument();

    const imgStreetError = screen.queryByAltText("icône exclamation");
    expect(imgStreetError).not.toBeInTheDocument();

    const paragrapheStreetError = screen.queryByText("Invalid Street");
    expect(paragrapheStreetError).not.toBeInTheDocument();

    const inputCity = screen.getByTestId("inputCity");
    expect(inputCity).toBeInTheDocument();

    const imgCityError = screen.queryByAltText("icône exclamation");
    expect(imgCityError).not.toBeInTheDocument();

    const paragrapheCityError = screen.queryByText("Invalid City");
    expect(paragrapheCityError).not.toBeInTheDocument();

    const inputZipCode = screen.getByTestId("inputZipCode");
    expect(inputZipCode).toBeInTheDocument();

    const imgZipCodeError = screen.queryByAltText("icône exclamation");
    expect(imgZipCodeError).not.toBeInTheDocument();

    const paragrapheZipCodeError = screen.queryByText(
      "Invalid ZipCode. Please enter only numbers."
    );
    expect(paragrapheZipCodeError).not.toBeInTheDocument();

    const dropDownState = screen.getByTestId("dropDownState");
    expect(dropDownState).toBeInTheDocument();

    const imgStateError = screen.queryByAltText("icône exclamation");
    expect(imgStateError).not.toBeInTheDocument();

    const paragrapheStateError = screen.queryByText("State is required");
    expect(paragrapheStateError).not.toBeInTheDocument();

    const datePickerStartDate = screen.getByTestId("datePickerStartDate");
    expect(datePickerStartDate).toBeInTheDocument();

    const dropDownDepartment = screen.getByTestId("dropDownDepartment");
    expect(dropDownDepartment).toBeInTheDocument();

    const imgDepartmentError = screen.queryByAltText("icône exclamation");
    expect(imgDepartmentError).not.toBeInTheDocument();

    const paragrapheDepartmentError = screen.queryByText(
      "Department is required"
    );
    expect(paragrapheDepartmentError).not.toBeInTheDocument();

    const modale = screen.queryByTestId("modale");
    expect(modale).not.toBeInTheDocument();

    const buttonSave = screen.getByRole("button", {
      name: "Save",
    });
    expect(buttonSave).toBeInTheDocument();
  });

  test("Show an error when typing incorrectly in the form", async () => {
    userEvent.setup();

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const buttonSave = screen.getByRole("button", {
      name: "Save",
    });
    expect(buttonSave).toBeInTheDocument();

    await userEvent.click(buttonSave);

    const imgFirstNameError = screen.getByAltText(
      "icône exclamation inputFirstName"
    );
    expect(imgFirstNameError).toBeInTheDocument();

    const paragrapheFirstNameError = screen.getByText("Invalid FirstName");
    expect(paragrapheFirstNameError).toBeInTheDocument();

    const imgLastNameError = screen.getByAltText(
      "icône exclamation inputLastName"
    );
    expect(imgLastNameError).toBeInTheDocument();

    const paragrapheLastNameError = screen.getByText("Invalid LastName");
    expect(paragrapheLastNameError).toBeInTheDocument();

    const imgDateOfBirthError = screen.getByAltText(
      "icône exclamation datePickerDateOfBirth"
    );
    expect(imgDateOfBirthError).toBeInTheDocument();

    const paragrapheDateOfBirthError = screen.getByText(
      "Date of Birth is required"
    );
    expect(paragrapheDateOfBirthError).toBeInTheDocument();

    const imgStreetError = screen.getByAltText("icône exclamation inputStreet");
    expect(imgStreetError).toBeInTheDocument();

    const paragrapheStreetError = screen.getByText("Invalid Street");
    expect(paragrapheStreetError).toBeInTheDocument();

    const imgCityError = screen.getByAltText("icône exclamation inputCity");
    expect(imgCityError).toBeInTheDocument();

    const paragrapheCityError = screen.getByText("Invalid City");
    expect(paragrapheCityError).toBeInTheDocument();

    const imgZipCodeError = screen.getByAltText(
      "icône exclamation inputZipCode"
    );
    expect(imgZipCodeError).toBeInTheDocument();

    const paragrapheZipCodeError = screen.getByText(
      "Invalid ZipCode. Please enter only numbers."
    );
    expect(paragrapheZipCodeError).toBeInTheDocument();

    const imgStateError = screen.getByAltText(
      "icône exclamation dropDownState"
    );
    expect(imgStateError).toBeInTheDocument();

    const paragrapheStateError = screen.getByText("State is required");
    expect(paragrapheStateError).toBeInTheDocument();

    const imgDepartmentError = screen.getByAltText(
      "icône exclamation dropDownDepartment"
    );
    expect(imgDepartmentError).toBeInTheDocument();

    const paragrapheDepartmentError = screen.getByText(
      "Department is required"
    );
    expect(paragrapheDepartmentError).toBeInTheDocument();
  });
});
