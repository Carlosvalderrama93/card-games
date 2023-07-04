import { test, describe, expect } from "vitest";

import TestRenderer from "react-test-renderer";
import IconMain from "../../../components/icons/IconMain";

describe("Unit testing of Title Component", () => {
  test("Should render correctly when 'IconMain' is invoked with valid arguments", () => {
    const component = TestRenderer.create(<IconMain suite={"heart"} />);
    const jsonIconMain = component.toJSON();
    expect(jsonIconMain).toBeTruthy();
  });

  test("Should return 'null' when 'Title' is invoked with invalid arguments", () => {
    const component = TestRenderer.create(<IconMain suite={"sad"} />);
    const jsonTitle = component.toJSON();
    expect(jsonTitle).toBeNull();
  });

  test("Should return 'null' when 'IconMain' is invoked without arguments", () => {
    const component = TestRenderer.create(<IconMain />);
    const jsonIconMain = component.toJSON();
    expect(jsonIconMain).toBeNull();
  });

  test("Should return 'null' when 'IconMain' is invoked with children", () => {
    const component = TestRenderer.create(
      <IconMain>
        <p>some</p>
      </IconMain>
    );
    const jsonIconMain = component.toJSON();
    expect(jsonIconMain).toBeNull();
  });
});
