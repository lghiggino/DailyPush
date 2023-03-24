const { strClone } = require("./4.2.objectReferences");

describe("4.2.objectReferences", () => {
  it("should clone object", () => {
    let user = {
      name: "John",
      sizes: {
        height: 182,
        width: 50,
      },
    };

    let clone = strClone(user);

    expect(user.sizes).toMatchObject(clone.sizes);

    user.sizes.width = 60;

    expect(user.sizes.width).toBe(60);
    expect(clone.sizes.width).toBe(50);
  });
});
