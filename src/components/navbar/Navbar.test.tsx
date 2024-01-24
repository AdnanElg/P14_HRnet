// Import modules :
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../services/store";
import Navbar from "./Navbar";

// Test Integration :
describe("Navbar Component", () => {
  test("renders correctly", () => {
    userEvent.setup();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const logo = screen.getByAltText("logo wealth health");
    expect(logo).toBeInTheDocument();

    const title = screen.getByText("HRnet Employees");
    expect(title).toBeInTheDocument();

    const hamburger = screen.getByAltText("icône hamburger");
    expect(hamburger).toBeInTheDocument();

    const link = screen.getByText("Current");
    expect(link).toBeInTheDocument();
  });

  it("navigates to the home page on clicking the logo", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const logo = screen.getByAltText("logo wealth health");
    await userEvent.click(logo);
    expect(window.location.pathname).toBe("/");
  });

  // + rajouter toggle image hamburger + addUser :

  test("toggles between Create and Current on link click", async () => {
    userEvent.setup();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const current = screen.getByText("Current");
    expect(current).toBeInTheDocument();

    await userEvent.click(current);
    window.location.pathname = "/employees";

    const create = screen.getByText("Create");
    expect(create).toBeInTheDocument();
  });
});
