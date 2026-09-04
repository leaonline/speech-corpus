/**
 * Extracts nested i18n dictionaries into a Set of strings
 * @param i18n {object} the required i18n object, may contain nested definitions
 * @param texts {Set=} optional existing set to be extended
 * @return {Set<string>}
 */
export const fromI18n = (i18n, texts = new Set(), log = () => {}) => {
    const values = Object.values(i18n)
    log('fromI18n entries:', values?.length)
    Object.values(i18n).forEach(value => {
        if (typeof value === 'string') {
            texts.add(value)
        }
        else if (typeof value === 'object' && value !== null) {
            fromI18n(value, texts)
        }
    })
    return texts
}
