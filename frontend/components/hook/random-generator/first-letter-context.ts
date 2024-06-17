/**
 * A small context to store a randomly-generated first letter. Used
 * by certain generators like animal names to store alliterative values.
 */
const firstLetterContext = () => {
  let firstLetter = ''
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const set = () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length)
    firstLetter = alphabet[randomIndex]
  }

  const get = () => {
    return firstLetter
  }
  return { set, get }
}

const currentContext = firstLetterContext()

export default currentContext
