import { Html, Head } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body></body>
    </Html>
  );
}
