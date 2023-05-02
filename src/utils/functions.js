import { ATTRIBUTES_LIST } from "./consts";

export function assertAttributes(attributes) {
  const assertedAttributes = { ...attributes };

  ATTRIBUTES_LIST.forEach((attr) => {
    if (!assertedAttributes[attr]) assertedAttributes[attr] = "??";
  });

  return assertedAttributes;
}

export function convertAttributesToContent(attributes) {
  const assertedAttributes = assertAttributes(attributes);

  const content = Object.entries(assertedAttributes).map(([key, value]) => {
    return { label: `${key}:${value}` };
  });
  return content;
}
