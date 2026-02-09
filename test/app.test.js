import request from "supertest";
import app from "../src/app.js";

describe("API", () => {
  test("GET /products returns 200 and array", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("GET / returns 200 and contains 'Products'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Products");
  });
});
