import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe.only("Unit testing from Card Component with snapshots", () => {
  test("Should render without errors when the component 'CARD' is invoked", () => {
    const component = TestRenderer.create(<Card />);
    const jsonCard = component.toJSON();
    expect(jsonCard).toBeTruthy();
  });

  test("Should render one child almost when prop children has a value", () => {
    const component = TestRenderer.create(
      <Card>
        <h1 className="element">Hello</h1>
      </Card>
    );

    const jsonCard = component.toJSON();
    console.log("jsonCard.children is:", jsonCard.children);
    expect(jsonCard.children.length).toBe(1);
  });

  test("Should be a 'div' element when Card component is rendered", () => {
    // Rendering Card component
    const card = TestRenderer.create(<Card />);
    const jsonCard = card.toJSON();
    // its type must be a div element
    expect(jsonCard.type).toBe("div");
  });
});
