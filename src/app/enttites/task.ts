export interface Task{
    _id: string,
    taskName: string,
    description:string,
    id_project: string,
    created_date: string,
    priority: number,
    status: number,
    assignedTo: string
}