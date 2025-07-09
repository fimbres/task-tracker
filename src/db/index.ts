import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { Task, TaskStatus, DB as DBType } from "../types/db";

const DB_PATH = join(__dirname, 'db.json');

export class DB {
    private db: DBType;

    constructor() {
        const file = readFileSync(DB_PATH, "utf-8");

        this.db = JSON.parse(file) ?? { todos: [] };
    }

    addTask(description: string) {
        const newTask: Task = {
            id: this.db.todos.length + 1,
            description,
            status: TaskStatus.ToDo,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        this.db.todos.push(newTask);
        writeFileSync(DB_PATH, JSON.stringify(this.db));

        return newTask.id;
    }

    getAllTasks() {
        return this.db.todos;
    }

    getTasksByStatus(status: TaskStatus) {
        return this.db.todos.filter(t => t.status === status);
    }

    removeTask(id: number) {
        const newData = this.db.todos.filter(t => t.id !== id);

        this.db.todos = newData;
        writeFileSync(DB_PATH, JSON.stringify(this.db));
    }

    updateTaskDescription(id: number, description: string) {
        const newData = this.db.todos.map(t => t.id === id ? { ...t, description } : t);

        this.db.todos = newData;
        writeFileSync(DB_PATH, JSON.stringify(this.db));
    }

    updateTaskStatus(id: number, status: TaskStatus) {
        const newData = this.db.todos.map(t => t.id === id ? { ...t, status } : t);

        this.db.todos = newData;
        writeFileSync(DB_PATH, JSON.stringify(this.db));
    }
}