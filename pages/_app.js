import localFont from "next/font/local";
import "@/styles/globals.scss";

const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura/futur.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/FuturaBoldfont.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${futura.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
