export const scrollToSection = (
  ref: React.RefObject<HTMLElement | null>,
  offset = 80
) => {
  if (!ref?.current) return;

  const y =
    ref.current.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
