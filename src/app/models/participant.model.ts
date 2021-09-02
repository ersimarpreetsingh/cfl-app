export interface Participant{
    _id: string;
    organizationName?: string;
    contactPerson?: string;
    title?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    email?: string;
    comments?: string;
    schoolCode?: string;
    isApproved?: boolean;
}
