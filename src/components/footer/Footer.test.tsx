// Import modules :
import { render, screen } from "@testing-library/react";
import store from "../../services/store";
import { Provider } from "react-redux";
import Footer from "./Footer";

// Test Integration :
describe("Footer Component", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();

    const img = screen.getByAltText("logo wealth health");
    expect(img).toBeInTheDocument();

    const paragraphe = screen.getByText("Copyright 2023 Wealth Health");
    expect(paragraphe).toBeInTheDocument();
  });
});
