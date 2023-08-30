import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "react-hot-toast";

export default function Document() {
  return (
    <Html data-theme="light" lang="en">
      <Head />
      <body data-theme="cupcake">
        <Main data-theme="cupcake" />
        <Toaster />
        <NextScript data-theme="cupcake" />
      </body>
    </Html>
  );
}
