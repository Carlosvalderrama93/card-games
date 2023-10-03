import { test, describe, expect } from "vitest";

import TestRenderer from "react-test-renderer";
import FigureMain from "../../components/icons/FigureMain";

describe.skip("Unit testing of FigureMain Component", () => {
  test("Should render correctly when 'FigureMain' is invoked with valid arguments", () => {
    const figureMain = TestRenderer.create(<FigureMain suite={"HEART"} />);
    const jsonFigureMain = figureMain.toJSON();
    expect(jsonFigureMain).toBeTruthy();
  });

  test("Should return 'null' when 'FigureMain' is invoked with invalid arguments", () => {
    const figureMain = TestRenderer.create(<FigureMain suite={"sad"} />);
    const jsonFigureMain = figureMain.toJSON();
    expect(jsonFigureMain).toBeNull();
  });

});
