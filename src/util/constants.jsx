export const VITE_SERVER =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://hassan-store-server-v-0.vercel.app/";
