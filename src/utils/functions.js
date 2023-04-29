import { ATTRIBUTES_LIST } from "./consts";

export function assertAttributes(attributes) {
  const assertedAttributes = { ...attributes };
  let total = 0;

  ATTRIBUTES_LIST.forEach((attr) => {
    if (assertedAttributes[attr]) total += +assertedAttributes[attr];
    else assertedAttributes[attr] = "??";
  });

  assertedAttributes.total = total;
  return assertedAttributes;
}

export function getAttributesArray(attributes) {
  const assertedAttributes = assertAttributes(attributes);

  const attributesArray = Object.entries(assertedAttributes).map(
    ([key, value]) => `${key}:${value}`
  );
  return attributesArray;
}
