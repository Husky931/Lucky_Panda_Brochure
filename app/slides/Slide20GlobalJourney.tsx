import Image from "next/image";

export default function Slide20GlobalJourney() {
  return (
    <section
      data-label="20 Global Journey"
      style={{
        background: "var(--cream)",
      }}
    >
      <Image
        src="/used/slide_20/slide_33.jpg"
        alt="Global journey slide"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </section>
  );
}
