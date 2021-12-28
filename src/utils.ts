import { BigNumber } from 'bignumber.js'
import { BigNumberish, InvalidArgumentError } from './types'

export function normalizeBigNumberish(bigNumberish: BigNumberish): BigNumber {
  const bigNumber: BigNumber = bigNumberish instanceof BigNumber ? bigNumberish : new BigNumber(bigNumberish.toString())
  if (bigNumber.isNaN()) {
    throw new InvalidArgumentError(
      `Passed bigNumberish '${bigNumberish}' of type '${typeof bigNumberish}' is not valid.`
    )
  }
  return bigNumber
}
