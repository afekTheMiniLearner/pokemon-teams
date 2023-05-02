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

export function convertTypesToIcons(types) {
  const icons = types.map((type) => {
    return { icon: TYPES_ICONS[type] };
  });
  return icons;
}
