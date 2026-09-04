import { SHA256 } from 'meteor/sha'

const whitespace = /^\s*$/
const byValidString = t => typeof t === 'string' && t.length && !whitespace.test(t)
const byLength = (a, b) => a.length - b.length

/**
 * Transforms given to a list of [<hash><separator><text>] entries.
 * While theoretically representing a tuple, they are in fact a string array
 * @param data {}
 * @param separator
 * @param shaFunction
 * @return {string[]}
 */
export const transformToHashTuple = ({data, separator = '%%%', shaFunction = SHA256 }) => {
    const toHashSeparatorTextString = txt => {
        const hash = shaFunction(txt)
        return `${hash}${separator}${txt}`
    }
    return Array.from(data)
        .filter(byValidString)
        .toSorted(byLength)
        .map(toHashSeparatorTextString)
}
