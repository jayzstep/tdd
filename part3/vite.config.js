import { loadEnv } from "vite";

export default ({ mode }) => ({
  test: {
    env: loadEnv(mode, process.cwd(), ""),
  },
});
