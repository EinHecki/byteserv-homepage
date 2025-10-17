import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/kassensysteme", "routes/kassensysteme.tsx"),
  route("/digitale-gastro", "routes/digitale-gastro.tsx"),
  route("/webentwicklung", "routes/webentwicklung.tsx"),
  route("/it-systeme", "routes/it-systeme.tsx"),
  route("/api/contact/submit", "routes/api.contact.submit.tsx"),
] satisfies RouteConfig;
