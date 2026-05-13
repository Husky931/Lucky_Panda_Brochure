import Image from "next/image";

export default function Slide12FrenchBoxRitual() {
  return (
    <section
      data-label="12 French Box Ritual"
      style={{
        background: "var(--cream)",
      }}
    >
      <Image
        src="/used/slide_12/french_box_4.png"
        alt="French gift box flatlay with curated treats and tasting story cards"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </section>
  );
}
