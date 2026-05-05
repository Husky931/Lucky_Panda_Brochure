import Image from "next/image";

export default function Slide03GlobalJourney() {
  return (
    <section
      data-label="03 Global Journey"
      style={{
        background: "var(--cream)",
      }}
    >
      <Image
        src="/slide_3.png"
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
