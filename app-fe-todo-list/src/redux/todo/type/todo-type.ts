export interface ITodoItem {
    id: number;
    title: string;
    status: boolean;
}

export interface ITodoList {
    items: ITodoItem[];
    componentState: { [name: string]: undefined | string | boolean }
}