import { describe, it, expect } from "vitest";
import request from "supertest";

const baseUrl = "http://localhost:3000";

describe("API: /prompt (AI Processing Layer)", () => {
  it("should return a structured AI response for a valid prompt", async () => {
    const res = await request(baseUrl)
      .post("/prompt")
      .send({ prompt: "Write a poem about the sea." });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("result");
    expect(res.body).toHaveProperty("meta");
    expect(res.body.meta).toHaveProperty("provider", "mock");
    expect(res.body).toHaveProperty("promptId");
    expect(typeof res.body.result).toBe("string");
  });

  it("should return 400 for missing or empty prompt", async () => {
    const res = await request(baseUrl).post("/prompt").send({ prompt: "   " });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
