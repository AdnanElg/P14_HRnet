// Import modules
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import NotFound from "./NotFound";
import store from "../../services/store";

// Test Integration :
test("should render the Error component", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </Provider>
  );
  const error = screen.getByTestId("error");
  expect(error).toBeInTheDocument();
});
