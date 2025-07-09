import { DB } from "../db/index.js";
import { TaskStatus } from "../types/db.js";

const db = new DB();

export const add = (args: string[]) => {
    if(args.length !== 1) {
        return console.log("Only one argument accepted!");
    }

    const newId = db.addTask(args[0]);

    console.log(`Task added successfully (ID: ${newId})`);
}

export const update = (args: string[]) => {
    if(args.length !== 2) {
        console.log("Only two arguments accepted!");
    }
    else if(!Number.isInteger(args[0])) {
        console.log("First argument should be a the id! (int number)")
    }
    
    db.updateTaskDescription(Number(args[0]), args[1]);
}

export const remove = (args: string[]) => {
    if(args.length !== 1) {
        return console.log("Only one argument accepted!");
    }
    else if(!Number.isInteger(args[0])) {
        console.log("First argument should be a the id! (int number)")
    }

    db.removeTask(Number(args[0]));
}

export const updateStatus = (status: TaskStatus, args: string[]) => {
    if(args.length !== 1) {
        return console.log("Only one arguments accepted!");
    }
    else if(!Number.isInteger(args[0])) {
        console.log("First argument should be a the id! (int number)")
    }

    db.updateTaskStatus(Number(args[0]), status);
}

