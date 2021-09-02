import { LifeEvent, Participant, Profession } from '.';
import { Transaction } from './transaction.model';
export interface User {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  occupation?: string;
  profession?: any;
  language?: string;
  imageUrl?: string;
  role: Role;
  schoolCode?: string;
  school?: any;
  begCheckingAcc?: number;
  checkingAcc?: number;
  begSavingAcc?: number;
  savingAcc?: number;
  retirementAcc?: number;
  begRetirementAcc?: number;
  creditCard?: number;
  creditCardLimit?: number;
  creditScore?: number;
  transactions?: Transaction[];
  trueFalseAnswers: TrueFalseAnswer[];
  lifeEventCheckpointStatus?: any[];
  warningStatus?: any;
  creditScoreAnswer?: any;
  lifeEvents?: any[];
  profileLink?: Date;
  selections?: any[];
}

export interface TrueFalseAnswer {
  checkpointId: string;
  answer: boolean;
}

export enum Role {
  ADMIN = 'admin',
  SUB_ADMIN = 'subAdmin',
  // CONTACT_PERSON= 'contactPerson',
  STUDENT = 'student'
}

