import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="light" lang="en">
      <Head />
      <body data-theme="cupcake">
        <Main data-theme="cupcake" />
        <NextScript data-theme="cupcake" />
      </body>
    </Html>
  );
}
