export interface Checkpoint {
    _id?: string;
    title: string;
    imageUrl: string;
    description: string;
    isStepped: boolean;
    packages: Package[];
    trueFalseQuestion: TrueFalseQuestion;
    chatCode?: string;
    videoCode?: any;
    completed?: boolean;
}

export interface TrueFalseQuestion {
    question: string;
    answer: boolean;
    trueStatement: string;
    falseStatement: string;
}

export interface Package {
    _id?: string;
    title: string;
    description: string;
    priceType: string;
    price: number;
    percentOf: string;
    debitFrom: string;
    creditTo: string;
    hasAdditionalPricing?: boolean;
    additionalPriceType?: string;
    additioanlPrice?: number;
    additionalPercentOf?: string;
    additionalDebitFrom?: string;
    additionalCreditTo?: string;
    moreInfo: string;
    forMilitary: boolean;
    useAllSavings: boolean;
    degreeKey?: string;
    checkpointId?: string;
    parentId?: string;
    checkpoint?: any;
    subPackages?: any[];
}
