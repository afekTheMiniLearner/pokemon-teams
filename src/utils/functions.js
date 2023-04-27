// eslint-disable-next-line import/prefer-default-export
export function getAttributesArray(attr) {
  return Object.entries(attr).map(([key, value]) => `${key}:${value}`);
}
