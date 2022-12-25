import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// SEO rendering
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Joanna He",
  viewport: "width=device-width,initial-scale=1",
});

// document
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

// import tailwind
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
