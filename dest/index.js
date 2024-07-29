"use strict";
class TaskManager {
    constructor() {
        this.taskCount = 0;
        this.tasks = [];
    }
    createTask(description) {
        this.taskCount++;
        const task = {
            id: this.taskCount,
            description,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task != undefined) {
            task.completed = true;
        }
    }
    listTasks() {
        console.log(this.tasks);
    }
}
class User {
    constructor(id, name, passwd) {
        this.id = id;
        this.name = name;
        this.passwd = passwd;
        this.taskManager = new TaskManager();
    }
    getName() {
        return this.name;
    }
    getPasswd() {
        return this.passwd;
    }
    setName(name) {
        this.name = name;
    }
    setPasswd(passwd) {
        this.passwd = passwd;
    }
    getTaskManager() {
        return this.taskManager;
    }
}
let user1 = new User(1001, "Bavi", "password");
const taskManager = user1.getTaskManager();
taskManager.listTasks();
taskManager.createTask("Book the train ticket");
taskManager.createTask("set up the IDE");
taskManager.completeTask(1);
//# sourceMappingURL=index.js.map