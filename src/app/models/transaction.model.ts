export interface Transaction {
    accountUsed: string;
    title?: string;
    cost: number;
    debitFrom: string;
    creditTo?: string;
    useAllSavings?: boolean;
    package?: any;
    lifeEvent?: any;
    checkPoint?: any;
    user?: any;
}

export enum AccountType{
    'CA' = 'Checking Accout',
    'SA' = 'Savings Account',
    'CC' = 'Credit Card',
}
