import { TaskService } from "./task.service";
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): import("./task.model").TaskModel[];
    getTaskById(id: number): import("./task.model").TaskModel;
}
