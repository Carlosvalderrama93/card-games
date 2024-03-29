import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import Title from "../../../components/Title";
import IconMain from "../../../components/icons/IconMain";
import CardCorner from "../../../components/card/CardCorner";

describe.skip("Unit testing of CardCorner Component", () => {
  test("Should render correctly when 'CardCorner' is invoked with valid arguments", () => {
    const cardCorner = TestRenderer.create(
      <CardCorner>
        <Title>9</Title>
        <IconMain suite={"diamont"} />
      </CardCorner>
    );

    const jsonCardCorner = cardCorner.toJSON();
    expect(jsonCardCorner).toBeTruthy();
  });

  test("Should return 'null' when 'CardCorner' is invoked without arguments", () => {
    const cardCorner = TestRenderer.create(<CardCorner />);
    const jsonCardCorner = cardCorner.toJSON();
    expect(jsonCardCorner).toBeNull();
  });
});
