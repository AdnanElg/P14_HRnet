// Import modules :
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../services/store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Error from "./Error";

// Test Integration :
describe("Error Component", () => {
  test("renders correctly", async () => {
    userEvent.setup();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Error />
        </MemoryRouter>
      </Provider>
    );
    const error = screen.getByTestId("error");
    expect(error).toBeInTheDocument();

    const img = screen.getByAltText("picture 404");
    expect(img).toBeInTheDocument();

    const paragraphe = screen.getByText(
      "Oops ! The page you are requesting does not exist."
    );
    expect(paragraphe).toBeInTheDocument();

    const link = screen.getByText("Return to home page");
    expect(link).toBeInTheDocument();
    await userEvent.click(link);
    expect(window.location.pathname).toBe("/");
  });
});
