import { TaskModel } from "./task.model";
export declare class TaskService {
    _tasks: TaskModel[];
    findAllTasks(): TaskModel[];
    findTaskById({ id }: {
        id: number;
    }): TaskModel;
}
