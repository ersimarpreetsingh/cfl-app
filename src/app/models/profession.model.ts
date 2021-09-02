export interface Category {
    _id?: string;
    name: string;
    professions?: Profession[];
}

export interface Profession {
    _id?: string;
    name: string;
    requiredDegree: string;
    studentOption: string;
    grossAnnualSalary: number;
    taxableIncome: number;
    federalTax: number;
    MATax: number;
    socSec: number;
    medicare: number;
    netPayYearly: number;
    netPayMonthly: number;
    category?: Category;
    categoryId?: string;
    selected: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: any;
}
