/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ValueCaptureInterface extends ethers.utils.Interface {
  functions: {
    "SYSTEM_DECIMALS()": FunctionFragment;
    "VALUE_CAPTURE_ADMIN_ROLE()": FunctionFragment;
    "addUSDToken(address,uint256)": FunctionFragment;
    "authenticator()": FunctionFragment;
    "captureNotifyRecipient()": FunctionFragment;
    "externalExchanges(address)": FunctionFragment;
    "forwardERC20Token(address,uint256)": FunctionFragment;
    "forwardERC721Token(address,uint256)": FunctionFragment;
    "forwardETH(uint256)": FunctionFragment;
    "forwardMultiAssets(address[],uint256[])": FunctionFragment;
    "getCapturedValue()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "lastCapturedBlock()": FunctionFragment;
    "listUSDTokens(uint256,uint256)": FunctionFragment;
    "normalizers(address)": FunctionFragment;
    "removeUSDToken(address)": FunctionFragment;
    "sendCaptureNotification()": FunctionFragment;
    "setCaptureNotifyRecipient(address)": FunctionFragment;
    "setExternalExchange(address,address)": FunctionFragment;
    "totalCapturedUSD()": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "SYSTEM_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VALUE_CAPTURE_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addUSDToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "authenticator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "captureNotifyRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "externalExchanges",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "forwardERC20Token",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forwardERC721Token",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forwardETH",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forwardMultiAssets",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getCapturedValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastCapturedBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listUSDTokens",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "normalizers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeUSDToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCaptureNotification",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCaptureNotifyRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setExternalExchange",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCapturedUSD",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "SYSTEM_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VALUE_CAPTURE_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUSDToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authenticator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "captureNotifyRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "externalExchanges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forwardERC20Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forwardERC721Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forwardETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forwardMultiAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCapturedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastCapturedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listUSDTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUSDToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendCaptureNotification",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCaptureNotifyRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExternalExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCapturedUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "AddUSDToken(address)": EventFragment;
    "ExchangeToken(address,uint256,address,uint256)": EventFragment;
    "ForwardAsset(address,uint256,uint256)": EventFragment;
    "ForwardERC20Token(address,uint256)": EventFragment;
    "ForwardERC721Token(address,uint256)": EventFragment;
    "ForwardETH(uint256)": EventFragment;
    "RemoveUSDToken(address)": EventFragment;
    "SendValueCaptureNotification(address,uint256,uint256)": EventFragment;
    "SetConvertor(address,address)": EventFragment;
    "SetMiner(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddUSDToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExchangeToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForwardAsset"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForwardERC20Token"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForwardERC721Token"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForwardETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveUSDToken"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SendValueCaptureNotification"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConvertor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMiner"): EventFragment;
}

export class ValueCapture extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ValueCaptureInterface;

  functions: {
    SYSTEM_DECIMALS(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "SYSTEM_DECIMALS()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    VALUE_CAPTURE_ADMIN_ROLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "VALUE_CAPTURE_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    addUSDToken(
      token: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addUSDToken(address,uint256)"(
      token: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    authenticator(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "authenticator()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    captureNotifyRecipient(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "captureNotifyRecipient()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    externalExchanges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "externalExchanges(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    forwardERC20Token(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "forwardERC20Token(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    forwardERC721Token(
      token: string,
      tokenID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "forwardERC721Token(address,uint256)"(
      token: string,
      tokenID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    forwardETH(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "forwardETH(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    forwardMultiAssets(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "forwardMultiAssets(address[],uint256[])"(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getCapturedValue(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getCapturedValue()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    initialize(
      authenticator_: string,
      vault_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      authenticator_: string,
      vault_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lastCapturedBlock(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "lastCapturedBlock()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    listUSDTokens(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      result: string[];
      0: string[];
    }>;

    "listUSDTokens(uint256,uint256)"(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      result: string[];
      0: string[];
    }>;

    normalizers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "normalizers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    removeUSDToken(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeUSDToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendCaptureNotification(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendCaptureNotification()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCaptureNotifyRecipient(
      newRecipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCaptureNotifyRecipient(address)"(
      newRecipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setExternalExchange(
      token: string,
      exchange_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setExternalExchange(address,address)"(
      token: string,
      exchange_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalCapturedUSD(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalCapturedUSD()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    vault(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "vault()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  SYSTEM_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  "SYSTEM_DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

  VALUE_CAPTURE_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "VALUE_CAPTURE_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  addUSDToken(
    token: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addUSDToken(address,uint256)"(
    token: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  authenticator(overrides?: CallOverrides): Promise<string>;

  "authenticator()"(overrides?: CallOverrides): Promise<string>;

  captureNotifyRecipient(overrides?: CallOverrides): Promise<string>;

  "captureNotifyRecipient()"(overrides?: CallOverrides): Promise<string>;

  externalExchanges(arg0: string, overrides?: CallOverrides): Promise<string>;

  "externalExchanges(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  forwardERC20Token(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "forwardERC20Token(address,uint256)"(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  forwardERC721Token(
    token: string,
    tokenID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "forwardERC721Token(address,uint256)"(
    token: string,
    tokenID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  forwardETH(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "forwardETH(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  forwardMultiAssets(
    tokens: string[],
    amountsIn: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "forwardMultiAssets(address[],uint256[])"(
    tokens: string[],
    amountsIn: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getCapturedValue(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getCapturedValue()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  initialize(
    authenticator_: string,
    vault_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    authenticator_: string,
    vault_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lastCapturedBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "lastCapturedBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  listUSDTokens(
    begin: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "listUSDTokens(uint256,uint256)"(
    begin: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  normalizers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "normalizers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeUSDToken(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeUSDToken(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendCaptureNotification(overrides?: Overrides): Promise<ContractTransaction>;

  "sendCaptureNotification()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCaptureNotifyRecipient(
    newRecipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCaptureNotifyRecipient(address)"(
    newRecipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setExternalExchange(
    token: string,
    exchange_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setExternalExchange(address,address)"(
    token: string,
    exchange_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalCapturedUSD(overrides?: CallOverrides): Promise<BigNumber>;

  "totalCapturedUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    SYSTEM_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    "SYSTEM_DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    VALUE_CAPTURE_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "VALUE_CAPTURE_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    addUSDToken(
      token: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addUSDToken(address,uint256)"(
      token: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    authenticator(overrides?: CallOverrides): Promise<string>;

    "authenticator()"(overrides?: CallOverrides): Promise<string>;

    captureNotifyRecipient(overrides?: CallOverrides): Promise<string>;

    "captureNotifyRecipient()"(overrides?: CallOverrides): Promise<string>;

    externalExchanges(arg0: string, overrides?: CallOverrides): Promise<string>;

    "externalExchanges(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    forwardERC20Token(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "forwardERC20Token(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    forwardERC721Token(
      token: string,
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "forwardERC721Token(address,uint256)"(
      token: string,
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    forwardETH(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "forwardETH(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    forwardMultiAssets(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "forwardMultiAssets(address[],uint256[])"(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getCapturedValue(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getCapturedValue()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    initialize(
      authenticator_: string,
      vault_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      authenticator_: string,
      vault_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastCapturedBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastCapturedBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    listUSDTokens(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "listUSDTokens(uint256,uint256)"(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    normalizers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "normalizers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeUSDToken(token: string, overrides?: CallOverrides): Promise<void>;

    "removeUSDToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sendCaptureNotification(overrides?: CallOverrides): Promise<void>;

    "sendCaptureNotification()"(overrides?: CallOverrides): Promise<void>;

    setCaptureNotifyRecipient(
      newRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCaptureNotifyRecipient(address)"(
      newRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setExternalExchange(
      token: string,
      exchange_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setExternalExchange(address,address)"(
      token: string,
      exchange_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalCapturedUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "totalCapturedUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AddUSDToken(usdToken: string | null): EventFilter;

    ExchangeToken(
      tokenIn: string | null,
      balanceIn: null,
      tokenOut: string | null,
      balanceOut: null
    ): EventFilter;

    ForwardAsset(
      tokenOut: string | null,
      amountOut: null,
      normalizeAmountOut: null
    ): EventFilter;

    ForwardERC20Token(tokenOut: string | null, amount: null): EventFilter;

    ForwardERC721Token(tokenOut: string | null, tokenID: null): EventFilter;

    ForwardETH(amount: null): EventFilter;

    RemoveUSDToken(usdToken: string | null): EventFilter;

    SendValueCaptureNotification(
      recipient: string | null,
      totalCapturedUSD: null,
      lastCapturedBlock: null
    ): EventFilter;

    SetConvertor(
      tokenAddress: string | null,
      exchange: string | null
    ): EventFilter;

    SetMiner(oldMinter: string | null, newMinter: string | null): EventFilter;
  };

  estimateGas: {
    SYSTEM_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    "SYSTEM_DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    VALUE_CAPTURE_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "VALUE_CAPTURE_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    addUSDToken(
      token: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addUSDToken(address,uint256)"(
      token: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    authenticator(overrides?: CallOverrides): Promise<BigNumber>;

    "authenticator()"(overrides?: CallOverrides): Promise<BigNumber>;

    captureNotifyRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    "captureNotifyRecipient()"(overrides?: CallOverrides): Promise<BigNumber>;

    externalExchanges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "externalExchanges(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forwardERC20Token(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "forwardERC20Token(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    forwardERC721Token(
      token: string,
      tokenID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "forwardERC721Token(address,uint256)"(
      token: string,
      tokenID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    forwardETH(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "forwardETH(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    forwardMultiAssets(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "forwardMultiAssets(address[],uint256[])"(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getCapturedValue(overrides?: CallOverrides): Promise<BigNumber>;

    "getCapturedValue()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      authenticator_: string,
      vault_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      authenticator_: string,
      vault_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lastCapturedBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastCapturedBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    listUSDTokens(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "listUSDTokens(uint256,uint256)"(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    normalizers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "normalizers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeUSDToken(token: string, overrides?: Overrides): Promise<BigNumber>;

    "removeUSDToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendCaptureNotification(overrides?: Overrides): Promise<BigNumber>;

    "sendCaptureNotification()"(overrides?: Overrides): Promise<BigNumber>;

    setCaptureNotifyRecipient(
      newRecipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCaptureNotifyRecipient(address)"(
      newRecipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setExternalExchange(
      token: string,
      exchange_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setExternalExchange(address,address)"(
      token: string,
      exchange_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalCapturedUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "totalCapturedUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    SYSTEM_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SYSTEM_DECIMALS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VALUE_CAPTURE_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "VALUE_CAPTURE_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addUSDToken(
      token: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addUSDToken(address,uint256)"(
      token: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    authenticator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "authenticator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    captureNotifyRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "captureNotifyRecipient()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    externalExchanges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "externalExchanges(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forwardERC20Token(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "forwardERC20Token(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    forwardERC721Token(
      token: string,
      tokenID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "forwardERC721Token(address,uint256)"(
      token: string,
      tokenID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    forwardETH(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "forwardETH(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    forwardMultiAssets(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "forwardMultiAssets(address[],uint256[])"(
      tokens: string[],
      amountsIn: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getCapturedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCapturedValue()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      authenticator_: string,
      vault_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      authenticator_: string,
      vault_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lastCapturedBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastCapturedBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listUSDTokens(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "listUSDTokens(uint256,uint256)"(
      begin: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    normalizers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "normalizers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeUSDToken(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeUSDToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendCaptureNotification(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendCaptureNotification()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCaptureNotifyRecipient(
      newRecipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCaptureNotifyRecipient(address)"(
      newRecipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setExternalExchange(
      token: string,
      exchange_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setExternalExchange(address,address)"(
      token: string,
      exchange_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalCapturedUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalCapturedUSD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
