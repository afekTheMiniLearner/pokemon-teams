import { ATTRIBUTES_LIST } from "./consts";

export function assertAttributes(attributes) {
  const assertedAttributes = { ...attributes };

  ATTRIBUTES_LIST.forEach((attr) => {
    if (!assertedAttributes[attr]) assertedAttributes[attr] = "??";
  });

  return assertedAttributes;
}

export function getAttributesArray(attributes) {
  const assertedAttributes = assertAttributes(attributes);

  const attributesArray = Object.entries(assertedAttributes).map(
    ([key, value]) => `${key}:${value}`
  );
  return attributesArray;
}
