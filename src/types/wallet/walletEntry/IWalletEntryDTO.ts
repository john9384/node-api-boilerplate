import { IWalletEntry, IWalletEntryStatus, IWalletTransactionTypes } from './IWalletEntry';

export interface ICreateWalletEntry {
  userId: string;
  walletId: string;
  balance: number;
  credit?: number;
  recipientId: string;
  debit?: number;
  reference?: string;
  status: IWalletEntryStatus;
  type: IWalletTransactionTypes;
}

export interface IReadWalletEntry {
  userId?: string;
  walletId?: string;
  userEmail: string;
}

export interface IWalletEntryDTO {
  create(payload: ICreateWalletEntry): Partial<IWalletEntry>;
}
