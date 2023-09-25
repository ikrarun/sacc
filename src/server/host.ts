export const host =
  process.env.NODE_ENV === "production"
    ? "https://c4success.vercel.app"
    : "http://localhost:3000";
    