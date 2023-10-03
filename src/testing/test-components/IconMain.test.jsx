import { test, describe, expect } from "vitest";

import TestRenderer from "react-test-renderer";
import IconMain from "../../components/icons/IconMain";

describe.skip("Unit testing of IconMain Component", () => {
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
});
