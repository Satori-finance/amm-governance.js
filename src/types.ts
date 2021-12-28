import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'
import { Provider } from '@ethersproject/providers'

export type BigNumberish = BigNumber | ethers.BigNumber | string | number

export type SignerOrProvider = ethers.Signer | Provider

/**
 * Invalid argument or the query condition is impossible.
 */
export class InvalidArgumentError extends Error {
  public constructor(message: string) {
    super()
    this.name = message
  }
}
