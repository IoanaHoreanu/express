const request = require("supertest");
const app = require("../app");

describe("GET /api/movies/:id", () => {
  it("should return a single movie by ID", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  it("should return 404 if movie ID is not found", async () => {
    const response = await request(app).get("/api/movies/999");

    expect(response.status).toEqual(404);
  });

  it("should return 404 for invalid movie ID (e.g., 0)", async () => {
    const response = await request(app).get("/api/movies/0");

    expect(response.status).toEqual(404);
  });
});
