import shortid from "shortid";

export interface ITodo {
    title: string;
    id: string;
}

export const createTodo = (title: string, id?: string) => {
    if(!id) {
        id=shortid.generate();
    }
    const t: ITodo = {
        title,
        id
    };
    return t;
};

export const testTodos: ITodo[] = [
    createTodo("Water the plant", "1"),
    createTodo("Pay bills", "2"),
];
