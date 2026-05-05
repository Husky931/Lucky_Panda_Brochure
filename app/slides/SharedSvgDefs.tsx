export default function SharedSvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="paw" viewBox="0 0 64 64">
          <ellipse cx="20" cy="22" rx="6" ry="8" />
          <ellipse cx="32" cy="16" rx="6" ry="8" />
          <ellipse cx="44" cy="22" rx="6" ry="8" />
          <ellipse cx="50" cy="36" rx="5" ry="6" />
          <path d="M32 30 C 22 30, 16 38, 18 48 C 20 56, 28 58, 32 58 C 36 58, 44 56, 46 48 C 48 38, 42 30, 32 30 Z" />
        </symbol>
        <symbol id="fleur" viewBox="0 0 24 24">
          <path
            d="M12 2 C 13 6, 16 7, 18 6 C 17 9, 18 11, 20 12 C 18 13, 17 15, 18 18 C 16 17, 13 18, 12 22 C 11 18, 8 17, 6 18 C 7 15, 6 13, 4 12 C 6 11, 7 9, 6 6 C 8 7, 11 6, 12 2 Z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="heart" viewBox="0 0 24 24">
          <path
            d="M12 21 C 4 15, 2 10, 4 6 C 6 2, 11 3, 12 7 C 13 3, 18 2, 20 6 C 22 10, 20 15, 12 21 Z"
            fill="currentColor"
          />
        </symbol>
      </defs>
    </svg>
  );
}
