export class Model{
    user;
    items;
    constructor(){
        this.user = "Adam",
        this.items = [new ToDoItem("Buy Flowers", false),
                      new ToDoItem("Get Shoes", false ),
                      new ToDoItem("Collect Ticket", true), 
                      new ToDoItem("Call Joe", false)]
    }
}

export class ToDoItem{
    action;
    done;

    constructor(action, done){
        this.action = action;
        this.done = done;
    }
}
