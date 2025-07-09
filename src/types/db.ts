export enum TaskStatus {
    ToDo = "todo",
    InProgress = "in-progress",
    Done = "done"
}

export type Task = {
    id: number;
    description: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
}

export type DB = {
    todos: Task[];
}
