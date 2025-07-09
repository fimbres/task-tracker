import { DB } from "../db/index.js";
import { TaskStatus, Task } from "../types/db.js";

const db = new DB();

const print = (data: Task[]) => data.forEach(d => {
    console.log(`Task ID: ${d.id}, description: ${d.description}, status: ${d.status}, created at: ${d.createdAt}, updated at: ${d.updatedAt}`);
});

export const list = (args: string[]) => {
    let data: Task[];
    
    if(args.length === 0) {
        data = db.getAllTasks();
    }
    else if(args.length === 1) {
        data = db.getTasksByStatus(args[0] as TaskStatus);
    }
    else {
        return console.log("Maximum 1 argument allowed!");
    }

    print(data);
}
