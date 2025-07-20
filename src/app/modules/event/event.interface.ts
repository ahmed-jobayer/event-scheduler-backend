export type TCategory = 'Work' | 'Personal' | 'Other'

export type TEvent = {
    _id?: string;
    title: string;
    date: string;
    time: string;
    notes?: string;
    category?: TCategory;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
}