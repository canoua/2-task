import IMask from "imask";

export default function mask() {
  const currentYear = new Date().getFullYear() - 1;
  const inputMask = document.querySelector(".card__input-masked");
  const mask = new IMask(inputMask, {
    mask: "DD.MM.YYYY",
    blocks: {
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: 1910,
        to: currentYear,
      },
    },
  });
}
