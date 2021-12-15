export const generateID = () => {
    const ID_LENGTH = 36;
    const START_LETTERS_ASCII = 97;
    const ALPHABET_LENGTH = 26;

    return [...new Array(ID_LENGTH)]
        .map(() => String.fromCharCode(START_LETTERS_ASCII + Math.random() * ALPHABET_LENGTH))
        .join('');
}