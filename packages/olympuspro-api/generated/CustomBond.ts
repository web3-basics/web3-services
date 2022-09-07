/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  Fragment,
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { Call } from "@hovoh/ethcall";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface CustomBondInterface extends utils.Interface {
  functions: {
    "adjustment()": FunctionFragment;
    "bondInfo(address)": FunctionFragment;
    "bondPrice()": FunctionFragment;
    "changeOlympusTreasury(address)": FunctionFragment;
    "currentDebt()": FunctionFragment;
    "currentOlympusFee()": FunctionFragment;
    "debtDecay()": FunctionFragment;
    "debtRatio()": FunctionFragment;
    "deposit(uint256,uint256,address)": FunctionFragment;
    "initializeBond(uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "lastDecay()": FunctionFragment;
    "maxPayout()": FunctionFragment;
    "paySubsidy()": FunctionFragment;
    "payoutFor(uint256)": FunctionFragment;
    "pendingPayoutFor(address)": FunctionFragment;
    "percentVestedFor(address)": FunctionFragment;
    "policy()": FunctionFragment;
    "redeem(address)": FunctionFragment;
    "setAdjustment(bool,uint256,uint256,uint256)": FunctionFragment;
    "setBondTerms(uint8,uint256)": FunctionFragment;
    "terms()": FunctionFragment;
    "totalDebt()": FunctionFragment;
    "totalPayoutGiven()": FunctionFragment;
    "totalPrincipalBonded()": FunctionFragment;
    "transferManagment(address)": FunctionFragment;
    "trueBondPrice()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "adjustment"
      | "bondInfo"
      | "bondPrice"
      | "changeOlympusTreasury"
      | "currentDebt"
      | "currentOlympusFee"
      | "debtDecay"
      | "debtRatio"
      | "deposit"
      | "initializeBond"
      | "lastDecay"
      | "maxPayout"
      | "paySubsidy"
      | "payoutFor"
      | "pendingPayoutFor"
      | "percentVestedFor"
      | "policy"
      | "redeem"
      | "setAdjustment"
      | "setBondTerms"
      | "terms"
      | "totalDebt"
      | "totalPayoutGiven"
      | "totalPrincipalBonded"
      | "transferManagment"
      | "trueBondPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "adjustment",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bondInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "bondPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeOlympusTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentOlympusFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "debtDecay", values?: undefined): string;
  encodeFunctionData(functionFragment: "debtRatio", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeBond",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "lastDecay", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxPayout", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paySubsidy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payoutFor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingPayoutFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "percentVestedFor",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "policy", values?: undefined): string;
  encodeFunctionData(functionFragment: "redeem", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAdjustment",
    values: [boolean, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBondTerms",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "terms", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalPayoutGiven",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPrincipalBonded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferManagment",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trueBondPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "adjustment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bondInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bondPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeOlympusTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentOlympusFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtDecay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debtRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastDecay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxPayout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paySubsidy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payoutFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingPayoutFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "percentVestedFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "policy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAdjustment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBondTerms",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "terms", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalPayoutGiven",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPrincipalBonded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferManagment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trueBondPrice",
    data: BytesLike
  ): Result;

  events: {
    "BondCreated(uint256,uint256,uint256)": EventFragment;
    "BondPriceChanged(uint256,uint256)": EventFragment;
    "BondRedeemed(address,uint256,uint256)": EventFragment;
    "ControlVariableAdjustment(uint256,uint256,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BondCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BondPriceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BondRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControlVariableAdjustment"): EventFragment;
}

export interface BondCreatedEventObject {
  deposit: BigNumber;
  payout: BigNumber;
  expires: BigNumber;
}
export type BondCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  BondCreatedEventObject
>;

export type BondCreatedEventFilter = TypedEventFilter<BondCreatedEvent>;

export interface BondPriceChangedEventObject {
  internalPrice: BigNumber;
  debtRatio: BigNumber;
}
export type BondPriceChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  BondPriceChangedEventObject
>;

export type BondPriceChangedEventFilter =
  TypedEventFilter<BondPriceChangedEvent>;

export interface BondRedeemedEventObject {
  recipient: string;
  payout: BigNumber;
  remaining: BigNumber;
}
export type BondRedeemedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  BondRedeemedEventObject
>;

export type BondRedeemedEventFilter = TypedEventFilter<BondRedeemedEvent>;

export interface ControlVariableAdjustmentEventObject {
  initialBCV: BigNumber;
  newBCV: BigNumber;
  adjustment: BigNumber;
  addition: boolean;
}
export type ControlVariableAdjustmentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, boolean],
  ControlVariableAdjustmentEventObject
>;

export type ControlVariableAdjustmentEventFilter =
  TypedEventFilter<ControlVariableAdjustmentEvent>;

export interface CustomBond extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CustomBondInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    adjustment(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
        add: boolean;
        rate: BigNumber;
        target: BigNumber;
        buffer: BigNumber;
        lastBlockTimestamp: BigNumber;
      }
    >;

    bondInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        payout: BigNumber;
        vesting: BigNumber;
        lastBlockTimestamp: BigNumber;
        truePricePaid: BigNumber;
      }
    >;

    bondPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price_: BigNumber }>;

    changeOlympusTreasury(
      _olympusTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentOlympusFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { currentFee_: BigNumber }>;

    debtDecay(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { decay_: BigNumber }>;

    debtRatio(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { debtRatio_: BigNumber }>;

    deposit(
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeBond(
      _controlVariable: BigNumberish,
      _vestingTerm: BigNumberish,
      _minimumPrice: BigNumberish,
      _maxPayout: BigNumberish,
      _maxDebt: BigNumberish,
      _initialDebt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastDecay(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxPayout(overrides?: CallOverrides): Promise<[BigNumber]>;

    paySubsidy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payoutFor(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { _payout: BigNumber; _fee: BigNumber }
    >;

    pendingPayoutFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pendingPayout_: BigNumber }>;

    percentVestedFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { percentVested_: BigNumber }>;

    policy(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdjustment(
      _addition: boolean,
      _increment: BigNumberish,
      _target: BigNumberish,
      _buffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBondTerms(
      _parameter: BigNumberish,
      _input: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terms(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        controlVariable: BigNumber;
        vestingTerm: BigNumber;
        minimumPrice: BigNumber;
        maxPayout: BigNumber;
        maxDebt: BigNumber;
      }
    >;

    totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalPayoutGiven(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalPrincipalBonded(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferManagment(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trueBondPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price_: BigNumber }>;
  };

  adjustment(
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
      add: boolean;
      rate: BigNumber;
      target: BigNumber;
      buffer: BigNumber;
      lastBlockTimestamp: BigNumber;
    }
  >;

  bondInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      payout: BigNumber;
      vesting: BigNumber;
      lastBlockTimestamp: BigNumber;
      truePricePaid: BigNumber;
    }
  >;

  bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

  changeOlympusTreasury(
    _olympusTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

  currentOlympusFee(overrides?: CallOverrides): Promise<BigNumber>;

  debtDecay(overrides?: CallOverrides): Promise<BigNumber>;

  debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _amount: BigNumberish,
    _maxPrice: BigNumberish,
    _depositor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeBond(
    _controlVariable: BigNumberish,
    _vestingTerm: BigNumberish,
    _minimumPrice: BigNumberish,
    _maxPayout: BigNumberish,
    _maxDebt: BigNumberish,
    _initialDebt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastDecay(overrides?: CallOverrides): Promise<BigNumber>;

  maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

  paySubsidy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payoutFor(
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { _payout: BigNumber; _fee: BigNumber }>;

  pendingPayoutFor(
    _depositor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  percentVestedFor(
    _depositor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  policy(overrides?: CallOverrides): Promise<string>;

  redeem(
    _depositor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdjustment(
    _addition: boolean,
    _increment: BigNumberish,
    _target: BigNumberish,
    _buffer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBondTerms(
    _parameter: BigNumberish,
    _input: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terms(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      controlVariable: BigNumber;
      vestingTerm: BigNumber;
      minimumPrice: BigNumber;
      maxPayout: BigNumber;
      maxDebt: BigNumber;
    }
  >;

  totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  totalPayoutGiven(overrides?: CallOverrides): Promise<BigNumber>;

  totalPrincipalBonded(overrides?: CallOverrides): Promise<BigNumber>;

  transferManagment(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trueBondPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    adjustment(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
        add: boolean;
        rate: BigNumber;
        target: BigNumber;
        buffer: BigNumber;
        lastBlockTimestamp: BigNumber;
      }
    >;

    bondInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        payout: BigNumber;
        vesting: BigNumber;
        lastBlockTimestamp: BigNumber;
        truePricePaid: BigNumber;
      }
    >;

    bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

    changeOlympusTreasury(
      _olympusTreasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

    currentOlympusFee(overrides?: CallOverrides): Promise<BigNumber>;

    debtDecay(overrides?: CallOverrides): Promise<BigNumber>;

    debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeBond(
      _controlVariable: BigNumberish,
      _vestingTerm: BigNumberish,
      _minimumPrice: BigNumberish,
      _maxPayout: BigNumberish,
      _maxDebt: BigNumberish,
      _initialDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lastDecay(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

    paySubsidy(overrides?: CallOverrides): Promise<BigNumber>;

    payoutFor(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { _payout: BigNumber; _fee: BigNumber }
    >;

    pendingPayoutFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    percentVestedFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<string>;

    redeem(_depositor: string, overrides?: CallOverrides): Promise<BigNumber>;

    setAdjustment(
      _addition: boolean,
      _increment: BigNumberish,
      _target: BigNumberish,
      _buffer: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBondTerms(
      _parameter: BigNumberish,
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    terms(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        controlVariable: BigNumber;
        vestingTerm: BigNumber;
        minimumPrice: BigNumber;
        maxPayout: BigNumber;
        maxDebt: BigNumber;
      }
    >;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    totalPayoutGiven(overrides?: CallOverrides): Promise<BigNumber>;

    totalPrincipalBonded(overrides?: CallOverrides): Promise<BigNumber>;

    transferManagment(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trueBondPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "BondCreated(uint256,uint256,uint256)"(
      deposit?: null,
      payout?: null,
      expires?: null
    ): BondCreatedEventFilter;
    BondCreated(
      deposit?: null,
      payout?: null,
      expires?: null
    ): BondCreatedEventFilter;

    "BondPriceChanged(uint256,uint256)"(
      internalPrice?: null,
      debtRatio?: null
    ): BondPriceChangedEventFilter;
    BondPriceChanged(
      internalPrice?: null,
      debtRatio?: null
    ): BondPriceChangedEventFilter;

    "BondRedeemed(address,uint256,uint256)"(
      recipient?: null,
      payout?: null,
      remaining?: null
    ): BondRedeemedEventFilter;
    BondRedeemed(
      recipient?: null,
      payout?: null,
      remaining?: null
    ): BondRedeemedEventFilter;

    "ControlVariableAdjustment(uint256,uint256,uint256,bool)"(
      initialBCV?: null,
      newBCV?: null,
      adjustment?: null,
      addition?: null
    ): ControlVariableAdjustmentEventFilter;
    ControlVariableAdjustment(
      initialBCV?: null,
      newBCV?: null,
      adjustment?: null,
      addition?: null
    ): ControlVariableAdjustmentEventFilter;
  };

  estimateGas: {
    adjustment(overrides?: CallOverrides): Promise<BigNumber>;

    bondInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

    changeOlympusTreasury(
      _olympusTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

    currentOlympusFee(overrides?: CallOverrides): Promise<BigNumber>;

    debtDecay(overrides?: CallOverrides): Promise<BigNumber>;

    debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeBond(
      _controlVariable: BigNumberish,
      _vestingTerm: BigNumberish,
      _minimumPrice: BigNumberish,
      _maxPayout: BigNumberish,
      _maxDebt: BigNumberish,
      _initialDebt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastDecay(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

    paySubsidy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payoutFor(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingPayoutFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    percentVestedFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdjustment(
      _addition: boolean,
      _increment: BigNumberish,
      _target: BigNumberish,
      _buffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBondTerms(
      _parameter: BigNumberish,
      _input: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terms(overrides?: CallOverrides): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    totalPayoutGiven(overrides?: CallOverrides): Promise<BigNumber>;

    totalPrincipalBonded(overrides?: CallOverrides): Promise<BigNumber>;

    transferManagment(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trueBondPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    adjustment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bondPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOlympusTreasury(
      _olympusTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentOlympusFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeBond(
      _controlVariable: BigNumberish,
      _vestingTerm: BigNumberish,
      _minimumPrice: BigNumberish,
      _maxPayout: BigNumberish,
      _maxDebt: BigNumberish,
      _initialDebt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxPayout(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paySubsidy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payoutFor(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingPayoutFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    percentVestedFor(
      _depositor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    policy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdjustment(
      _addition: boolean,
      _increment: BigNumberish,
      _target: BigNumberish,
      _buffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBondTerms(
      _parameter: BigNumberish,
      _input: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terms(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPayoutGiven(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPrincipalBonded(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferManagment(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trueBondPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

export interface CustomBondMulticall {
  address: string;
  abi: Fragment[];
  functions: FunctionFragment[];

  adjustment(
    overrides?: CallOverrides
  ): Call<
    [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
      add: boolean;
      rate: BigNumber;
      target: BigNumber;
      buffer: BigNumber;
      lastBlockTimestamp: BigNumber;
    }
  >;

  bondInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Call<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      payout: BigNumber;
      vesting: BigNumber;
      lastBlockTimestamp: BigNumber;
      truePricePaid: BigNumber;
    }
  >;

  bondPrice(overrides?: CallOverrides): Call<BigNumber>;

  currentDebt(overrides?: CallOverrides): Call<BigNumber>;

  currentOlympusFee(overrides?: CallOverrides): Call<BigNumber>;

  debtDecay(overrides?: CallOverrides): Call<BigNumber>;

  debtRatio(overrides?: CallOverrides): Call<BigNumber>;

  lastDecay(overrides?: CallOverrides): Call<BigNumber>;

  maxPayout(overrides?: CallOverrides): Call<BigNumber>;

  payoutFor(
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Call<[BigNumber, BigNumber] & { _payout: BigNumber; _fee: BigNumber }>;

  pendingPayoutFor(
    _depositor: string,
    overrides?: CallOverrides
  ): Call<BigNumber>;

  percentVestedFor(
    _depositor: string,
    overrides?: CallOverrides
  ): Call<BigNumber>;

  policy(overrides?: CallOverrides): Call<string>;

  terms(
    overrides?: CallOverrides
  ): Call<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      controlVariable: BigNumber;
      vestingTerm: BigNumber;
      minimumPrice: BigNumber;
      maxPayout: BigNumber;
      maxDebt: BigNumber;
    }
  >;

  totalDebt(overrides?: CallOverrides): Call<BigNumber>;

  totalPayoutGiven(overrides?: CallOverrides): Call<BigNumber>;

  totalPrincipalBonded(overrides?: CallOverrides): Call<BigNumber>;

  trueBondPrice(overrides?: CallOverrides): Call<BigNumber>;
}
