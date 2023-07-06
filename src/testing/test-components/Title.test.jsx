import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import Title from "../../components/Title";

describe("Unit testing of Title Component", () => {
  test("Should render correcttly when 'Title' is invoked with valid children", () => {
    const title = TestRenderer.create(<Title>5</Title>);
    const jsonTitle = title.toJSON();
    expect(jsonTitle).toBeTruthy();
  });

  test("Should return ''null when 'Title' is invoked without chindren", () => {
    const title = TestRenderer.create(<Title />);
    const jsonTitle = title.toJSON();
    // Search how I can do this test.
    expect(jsonTitle).toBeNull();
  });

  test("Should return 'null' when 'Title' is invoked with invalid children", () => {
    const title = TestRenderer.create(<Title>15</Title>);
    const jsonTitle = title.toJSON();
    expect(jsonTitle).toBeNull();
  });

  test("Should return 'null' when 'Title' is invoked with more than 1 children", () => {
    const title = TestRenderer.create(
      <Title>
        <p>1</p>
        <p>2</p>
      </Title>
    );
    const jsonTitle = title.toJSON();
    expect(jsonTitle).toBeNull();
  });
});
