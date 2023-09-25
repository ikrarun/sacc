export const host =
  process.env.NODE_ENV === "production"
    ? "https://ccsa.vercel.app"
    : "http://localhost:3000";
    