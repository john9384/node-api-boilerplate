import { Date } from 'mongoose';

export interface IContract {
  id: string;
  authorId: string;
  contractCategoryId: string;
  recipientId: string;
  recipientEmail: string;
  authorSignature: string;
  recipientSignature: string;
  contentTemplateId: string;
  status: string;
  effectiveOn: Date;
  inviteeEmail: string;
  invitationDate: Date;
  createdAt: Date;
  updatedAt: Date;
  hasRecipientSigned?: boolean;
  hasAuthorSigned: boolean;
}

export interface IContractCategory {
  id: string;
  title: string;
  categoryId: string;
  createdBy: string;
  isDefault?: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastModifiedBy: string;
  isArchived: boolean;
}

export interface IContractContentTemplate {
  id: string;
  contractId: string;
  placeholders: Record<string, unknown>;
}

export interface IContractAppeal {
  id: string;
  contractId: string;
  appealRaiserId: string;
  complaint: string;
}
