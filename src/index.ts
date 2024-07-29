interface Task {
    id: number;
    description: string;
    completed: boolean;
}

class TaskManager {
    private tasks: Task[];
    private taskCount: number = 0;

    constructor() {
        this.tasks = [];
    }

    public createTask(description: string): Task {
        this.taskCount++;
        const task: Task = {
            id: this.taskCount,
            description,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }

    public completeTask(id: number){
        const task = this.tasks.find(task => task.id === id);
        if(task!= undefined){
            task.completed=true;
        }
    }

    public listTasks(){
        console.log(this.tasks);
    }
}

class User {
    public id: number;
    private name: string;
    private passwd: string;
    public taskManager: TaskManager;

    constructor(id: number, name: string, passwd: string) {
        this.id = id;
        this.name = name;
        this.passwd=passwd;
        this.taskManager = new TaskManager();
    }

    public getName(): string {
        return this.name;
    }

    public getPasswd(): string {
        return this.passwd;
    }

    public setName(name: string): void {
        this.name=name;
    }

    public setPasswd(passwd: string): void {
        this.passwd=passwd;
    }

    public getTaskManager(): TaskManager {
        return this.taskManager;
    }
}

let user1 = new User(1001,"Bavi","password");
const taskManager = user1.getTaskManager();
taskManager.listTasks();
taskManager.createTask("Book the train ticket");
taskManager.createTask("set up the IDE");
taskManager.completeTask(2);