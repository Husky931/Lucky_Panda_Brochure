import Script from "next/script";
import SharedSvgDefs from "./slides/SharedSvgDefs";
import { slides } from "./slides";

export default function Home() {
  return (
    <>
      <Script src="/deck-stage.js" strategy="afterInteractive" />
      <SharedSvgDefs />
      <deck-stage width="1920" height="1080">
        {slides.map((Slide, index) => (
          <Slide key={index} />
        ))}
      </deck-stage>
    </>
  );
}
