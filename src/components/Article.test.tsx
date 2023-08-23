import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Test Component
import Article from "./Article";

const articleTest = {
  article: "Sean_O'Malley_(fighter)",
  project: "en.wikipedia",
  views_ceil: 214400,
  rank: 1,
};

describe("Article", () => {
  it("should display a rank of 1", () => {
    render(<Article article={articleTest} />);
    const rank = screen.getByTestId("rank");
    expect(rank.innerHTML).toEqual("1");
  });

  it("should display article without any '_' in it", () => {
    render(<Article article={articleTest} />);
    const article = screen.getByTestId("article");
    expect(article.innerHTML).toEqual("Sean O'Malley (fighter)");
  });

  it("should display views_ceil of 214,400", () => {
    render(<Article article={articleTest} />);
    const views_ceil = screen.getByTestId("views_ceil");
    expect(views_ceil.innerHTML).toEqual("214,400 views");
  });
});

//   it("should not allow subtraction when count is already 0 and min is 0", () => {
//     render(<Counter count={0} setCount={() => null} />);
//     const input = screen.getByTestId("input");
//     const subtract = screen.getByTestId("subtract");
//     fireEvent.click(subtract);
//     expect(input.value).toEqual("0");
//   });

//   it("should add", () => {
//     const setCount = jest.fn();
//     render(<Counter count={0} setCount={setCount} />);
//     const add = screen.getByTestId("add");
//     fireEvent.click(add);
//     expect(setCount).toHaveBeenCalledWith(1);
//   });

//   it("should subtract", () => {
//     const setCount = jest.fn();
//     render(<Counter count={1} setCount={setCount} />);
//     const subtract = screen.getByTestId("subtract");
//     fireEvent.click(subtract);
//     expect(setCount).toHaveBeenCalledWith(0);
//   });
