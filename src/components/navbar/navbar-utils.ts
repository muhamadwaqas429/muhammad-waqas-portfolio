// src/components/navbar/navbar-utils.ts
export const scrollToSection = (ref: React.RefObject<HTMLElement> | null) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};

export const getActiveSection = (sections: Record<string, React.RefObject<HTMLElement> | null>) => {
  let active = "";
  for (const [key, ref] of Object.entries(sections)) {
    if (ref && ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      if (top <= window.innerHeight / 2) active = key;
    }
  }
  return active;
};
