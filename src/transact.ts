import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { Overrides } from '@ethersproject/contracts'
import { Xmcb } from './abi/Xmcb'
import { DECIMALS } from './constants'
import { normalizeBigNumberish } from './utils'
import { BigNumberish } from './types'

export async function stakeMCB(
  xmcb: Xmcb,
  amount: BigNumberish, // should be a decimal number (ie: 1.234)
  overrides: Overrides = {},
): Promise<ethers.providers.TransactionResponse> {
  const largeAmount = normalizeBigNumberish(amount)
    .shiftedBy(DECIMALS)
    .dp(0, BigNumber.ROUND_DOWN)
  return await xmcb.deposit(largeAmount.toFixed(), overrides)
}

export async function unstakeMCB(
  xmcb: Xmcb,
  amount: BigNumberish, // should be a decimal number (ie: 1.234)
  overrides: Overrides = {},
): Promise<ethers.providers.TransactionResponse> {
  const largeAmount = normalizeBigNumberish(amount)
    .shiftedBy(DECIMALS)
    .dp(0, BigNumber.ROUND_DOWN)
  return await xmcb.withdraw(largeAmount.toFixed(), overrides)
}
