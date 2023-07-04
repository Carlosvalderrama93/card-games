import { test, describe, expect } from "vitest";

import TestRenderer from "react-test-renderer";
import FigureMain from "../../../components/icons/FigureMain";

describe("Unit testing of FigureMain Component", () => {
  test("Should render correctly when 'FigureMain' is invoked with valid arguments", () => {
    const figureMain = TestRenderer.create(<FigureMain suite={"heart"} />);
    const jsonFigureMain = figureMain.toJSON();
    expect(jsonFigureMain).toBeTruthy();
  });

  test("Should return 'null' when 'FigureMain' is invoked with invalid arguments", () => {
    const figureMain = TestRenderer.create(<FigureMain suite={"sad"} />);
    const jsonFigureMain = figureMain.toJSON();
    expect(jsonFigureMain).toBeNull();
  });

  test("Should return 'null' when 'FigureMain' is invoked without arguments", () => {
    const figureMain = TestRenderer.create(<FigureMain />);
    const jsonFigureMain = figureMain.toJSON();
    expect(jsonFigureMain).toBeNull();
  });

  test.only("Should return 'null' when 'FigureMain' is invoked with children", () => {
    const figureMain = TestRenderer.create(
      <FigureMain suite={"heart"}>
        <p>some</p>
      </FigureMain>
    );
    const jsonFigureMain = figureMain.toJSON();
    expect(jsonFigureMain).toBeNull();
  });
});
