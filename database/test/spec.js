import seed from "../seed.js";

describe("Seeding", () => {
  const seeder = seed.createMockProducts();
  const document = seeder[0];

  it("should seed 100 products", () => {
    expect(seeder).toHaveLength(100);
  });
  it("each document should have 8 key/value pairs", () => {
    const length = Object.values(document).length;
    expect(length).toBe(8);
  });
  it("each document should have property id", () => {
    const hasId = Object.prototype.hasOwnProperty.call(document, "_id");
    expect(hasId).toBe(true);
  });
});
