import { test, describe, expect } from "vitest";

import TestRenderer from "react-test-renderer";
import IconMain from "../../../components/icons/IconMain";

describe("Unit testing of IconMain Component", () => {
  test("Should render correctly when 'IconMain' is invoked with valid arguments", () => {
    const iconMain = TestRenderer.create(<IconMain suite={"heart"} />);
    const jsonIconMain = iconMain.toJSON();
    expect(jsonIconMain).toBeTruthy();
  });

  test("Should return 'null' when 'IconMain' is invoked with invalid arguments", () => {
    const iconMain = TestRenderer.create(<IconMain suite={"sad"} />);
    const jsonIconMain = iconMain.toJSON();
    expect(jsonIconMain).toBeNull();
  });

  test("Should return 'null' when 'IconMain' is invoked without arguments", () => {
    const iconMain = TestRenderer.create(<IconMain />);
    const jsonIconMain = iconMain.toJSON();
    expect(jsonIconMain).toBeNull();
  });

  test.only("Should return 'null' when 'IconMain' is invoked with children", () => {
    const iconMain = TestRenderer.create(
      <IconMain suite={"heart"}>
        <p>some</p>
      </IconMain>
    );
    const jsonIconMain = iconMain.toJSON();
    expect(jsonIconMain).toBeNull();
  });
});
