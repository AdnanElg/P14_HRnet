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

    const addUser = screen.queryByAltText("icône addUser");
    expect(addUser).not.toBeInTheDocument();

    const current = screen.getByText("Current");
    expect(current).toBeInTheDocument();

    const create = screen.queryByText("Create");
    expect(create).not.toBeInTheDocument();
  });

  test("navigates to the home page on clicking the logo", async () => {
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

  test("toggles between hamburger and addUser on click", async () => {
    userEvent.setup();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const hamburgerActive = screen.getByAltText("icône hamburger");
    expect(hamburgerActive).toBeInTheDocument();

    const addUserInactive = screen.queryByAltText("icône addUser");
    expect(addUserInactive).not.toBeInTheDocument();

    await userEvent.click(hamburgerActive);
    window.location.pathname = "/employees";

    const addUserActive = screen.getByAltText("icône addUser");
    expect(addUserActive).toBeInTheDocument();

    const hamburgerInactive = screen.queryByAltText("icône hamburger");
    expect(hamburgerInactive).not.toBeInTheDocument();
  });

  test("toggles between Create and Current on link click", async () => {
    userEvent.setup();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const currentActive = screen.getByText("Current");
    expect(currentActive).toBeInTheDocument();

    const createInactive = screen.queryByText("Create");
    expect(createInactive).not.toBeInTheDocument();

    await userEvent.click(currentActive);
    window.location.pathname = "/employees";

    const createActive = screen.getByText("Create");
    expect(createActive).toBeInTheDocument();

    const currentInactive = screen.queryByText("Current");
    expect(currentInactive).not.toBeInTheDocument();
  });
});
