import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import store from "../../services/store";
import { Provider } from "react-redux";
import Form from "./Form";

describe("Form Integration Tests", () => {
  test("renders correctly without form", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();

    const img = screen.getByAltText('icône addUser');
    expect(img).toBeInTheDocument();
  
    const inputFirstName = screen.getByTestId('inputFirstName')
    expect(inputFirstName).toBeInTheDocument();

    const inputFirstNameError = screen.queryByText("Invalid FirstName");
    expect(inputFirstNameError).not.toBeInTheDocument();
  
    const inputLastName = screen.getByTestId('inputLastName')
    expect(inputLastName).toBeInTheDocument();

    const inputLastNameError = screen.queryByText("Invalid LastName");
    expect(inputLastNameError).not.toBeInTheDocument();

    const datePickerDateOfBirth = screen.getByTestId('datePickerDateOfBirth')
    expect(datePickerDateOfBirth).toBeInTheDocument();

    const datePickerDateOfBirthError = screen.queryByText("Date of Birth is required");
    expect(datePickerDateOfBirthError).not.toBeInTheDocument();

    const inputStreet = screen.getByTestId('inputStreet')
    expect(inputStreet).toBeInTheDocument();

    const inputStreetError = screen.queryByText("Invalid Street");
    expect(inputStreetError).not.toBeInTheDocument();

    const inputCity = screen.getByTestId('inputCity')
    expect(inputCity).toBeInTheDocument();

    const inputCityError = screen.queryByText("Invalid City");
    expect(inputCityError).not.toBeInTheDocument();

    const inputZipCode = screen.getByTestId('inputZipCode')
    expect(inputZipCode).toBeInTheDocument();

    const inputZipCodeError = screen.queryByText("Invalid ZipCode. Please enter only numbers.");
    expect(inputZipCodeError).not.toBeInTheDocument();

    const dropDownState = screen.getByTestId('dropDownState')
    expect(dropDownState).toBeInTheDocument();

    const dropDownStateError = screen.queryByText("State is required");
    expect(dropDownStateError).not.toBeInTheDocument();
    
    const datePickerStartDate = screen.getByTestId('datePickerStartDate')
    expect(datePickerStartDate).toBeInTheDocument();

    const dropDownDepartment = screen.getByTestId('dropDownDepartment')
    expect(dropDownDepartment).toBeInTheDocument();

    const dropDownDepartmentError = screen.queryByText("Department is required");
    expect(dropDownDepartmentError).not.toBeInTheDocument();

    const buttonSave = screen.getByRole('button', {
      name: 'Save'
    });
    expect(buttonSave).toBeInTheDocument();

    const imgError = screen.queryByAltText("icône exclamation");
    expect(imgError).not.toBeInTheDocument();
  });

  
  // Tester la modale lorsque je clique sur butoon save si modale apparait et si je clique sur close elle se ferme et si je clique sur btn addemployer sa me redirige bient vers la addemployer ou la page employerlist
  // Tester messsage erreur qui apparait lorsque je clique sur buttton save sans selectionner 
});
