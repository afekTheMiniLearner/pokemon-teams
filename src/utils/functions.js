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

export function getTypesIcons(types) {
  const icons = {};
  types.forEach((type) => {
    icons[type] = TYPES_ICONS[type];
  });
  
  return icons;
}
