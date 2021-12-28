import { getAddress } from '@ethersproject/address'
import { SignerOrProvider } from './types'
import { ValueCapture } from './abi/ValueCapture'
import { ValueCaptureFactory } from './abi/ValueCaptureFactory'
import { RewardDistribution } from './abi/RewardDistribution'
import { RewardDistributionFactory } from './abi/RewardDistributionFactory'
import { Xmcb } from './abi/Xmcb'
import { XmcbFactory } from './abi/XmcbFactory'
import { GovernorAlpha } from './abi/GovernorAlpha'
import { GovernorAlphaFactory } from './abi/GovernorAlphaFactory'
import { Timelock } from './abi/Timelock'
import { TimelockFactory } from './abi/TimelockFactory'
import { McbMinter } from './abi/McbMinter'
import { McbMinterFactory } from './abi/McbMinterFactory'

export function getMinterContract(contractAddress: string, signerOrProvider: SignerOrProvider): McbMinter {
  getAddress(contractAddress)
  return McbMinterFactory.connect(contractAddress, signerOrProvider)
}

export function getValueCaptureContract(contractAddress: string, signerOrProvider: SignerOrProvider): ValueCapture {
  getAddress(contractAddress)
  return ValueCaptureFactory.connect(contractAddress, signerOrProvider)
}

export function getRewardDistributionContract(contractAddress: string, signerOrProvider: SignerOrProvider): RewardDistribution {
  getAddress(contractAddress)
  return RewardDistributionFactory.connect(contractAddress, signerOrProvider)
}

export function getXmcbContract(contractAddress: string, signerOrProvider: SignerOrProvider): Xmcb {
  getAddress(contractAddress)
  return XmcbFactory.connect(contractAddress, signerOrProvider)
}

export function getDaoGovernorContract(contractAddress: string, signerOrProvider: SignerOrProvider): GovernorAlpha {
  getAddress(contractAddress)
  return GovernorAlphaFactory.connect(contractAddress, signerOrProvider)
}

export function getTimeLockContract(contractAddress: string, signerOrProvider: SignerOrProvider): Timelock {
  getAddress(contractAddress)
  return TimelockFactory.connect(contractAddress, signerOrProvider)
}

