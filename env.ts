import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {},
  server: {
    SECRET_KEY: z.string(),
    VALID_PASSWORD: z.string(),
    NODE_ENV: z.enum(["development", "production"]),
  },
  runtimeEnv: {
    SECRET_KEY: process.env.SECRET_KEY,
    VALID_PASSWORD: process.env.VALID_PASSWORD,
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "lint",
});
