import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GRAPHQL_CODEGEN_URL: z.url().nonempty().nonoptional(),
    NEXT_PUBLIC_GRAPHQL_BACKEND_URL: z.url().nonempty().nonoptional(),
    NEXT_PUBLIC_BASE_URL: z.url().nonempty().nonoptional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GRAPHQL_CODEGEN_URL:
      process.env.NEXT_PUBLIC_GRAPHQL_CODEGEN_URL,
    NEXT_PUBLIC_GRAPHQL_BACKEND_URL:
      process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  emptyStringAsUndefined: true,
});
