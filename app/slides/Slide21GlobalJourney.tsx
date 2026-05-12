import Image from "next/image";

export default function Slide21GlobalJourney() {
  return (
    <section
      data-label="21 Global Journey"
      style={{
        background: "var(--cream)",
      }}
    >
      <Image
        src="/slide_33.jpg"
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
