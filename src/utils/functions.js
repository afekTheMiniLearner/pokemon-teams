import { ATTRIBUTES_LIST, TYPES_ICONS } from "./consts";

export function assertAttributes(attributes) {
  const assertedAttributes = { ...attributes };

  ATTRIBUTES_LIST.forEach((attr) => {
    if (!assertedAttributes[attr]) assertedAttributes[attr] = "??";
  });

  return assertedAttributes;
}

export function convertAttributesToLabels(attributes) {
  const assertedAttributes = assertAttributes(attributes);

  const labels = Object.entries(assertedAttributes).map(([key, value]) => {
    return { label: `${key}:${value}` };
  });
  return labels;
}

export function getTypesProperties(types) {
  return types.map((type) => {
    const { icon, style } = TYPES_ICONS[type];
    return { type, icon, style };
  });
}
