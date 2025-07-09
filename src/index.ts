import { add, update, remove, updateStatus } from "actions/mutations";
import { list } from "actions/queries";

import { TaskStatus } from "types/db";

const [,, command, ...args] = process.argv;

switch(command) {
    case "add": add(args); break;
    case "update": update(args); break;
    case "delete": remove(args); break;
    case "mark-in-progress": updateStatus(TaskStatus.InProgress, args); break;
    case "mark-done": updateStatus(TaskStatus.Done, args); break;
    case "list": list(args); break;
    default: "INFORMATION \nThe options are: \nadd\nupdate\ndelete\nmark-in-progress\nmark-done\nlist";
}
