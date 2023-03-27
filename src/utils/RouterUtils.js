import i18next from "i18next";

const to = (path) => {
  return `/${i18next.language}${path}`;
};

export { to };
