// eslint-disable-next-line import/prefer-default-export
export function getInformationFromAttr(attr) {
  const { attack, defense, spAttack, spDefense, health, total, generation } =
    attr;
  return `attack:${attack} defense:${defense}
  spAttack:${spAttack} spDefense:${spDefense}
  health:${health} total:${total}
  generation:${generation}`;
}
