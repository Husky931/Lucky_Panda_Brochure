import Image from "next/image";

export default function Slide08FrenchBoxRitual() {
  return (
    <section
      data-label="08 French Box Ritual"
      style={{
        background: "var(--cream)",
      }}
    >
      <Image
        src="/french_box/french_box_3.png"
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
