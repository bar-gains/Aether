import { describe, it, expect } from "vitest";
import request from "supertest";

const baseUrl = "http://localhost:3000";

describe("API: /api/prompts", () => {
  let createdId;

  it("should create a prompt", async () => {
    const res = await request(baseUrl)
      .post("/api/prompts")
      .send({ prompt: "Test prompt" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    createdId = res.body.id;
  });

  it("should get all prompts", async () => {
    const res = await request(baseUrl).get("/api/prompts");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get a prompt by id", async () => {
    const res = await request(baseUrl).get(`/api/prompts/${createdId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", createdId);
  });

  it("should update a prompt", async () => {
    const res = await request(baseUrl)
      .put(`/api/prompts/${createdId}`)
      .send({ prompt: "Updated prompt" });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("changes");
  });

  it("should delete a prompt", async () => {
    const res = await request(baseUrl).delete(`/api/prompts/${createdId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("changes");
  });
});
