const CONTRACT_ADDRESS = '0x72860d85AED91526CB513cF4C33392cB91468df6';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
};
  
  export { CONTRACT_ADDRESS, transformCharacterData };