export interface LeaveApplicationCreate  {
    username : string,
    startdate: string,
    enddate:string,
    totaldays:string,
    leavetype:string,
    status:string,
}

export const LeaveApplicationCreateDefaultValues:LeaveApplicationCreate = {
    username : "",
    startdate: "",
    enddate:"",
    totaldays:"",
    leavetype:"",
    status:""
}

export interface LeaveApplicationEdit  {
    id:string,
    username : string,
    startdate: string,
    enddate:string,
    totaldays:string,
    leavetype:string,
    status:string,
}

export const LeaveApplicationEditDefaultValues:LeaveApplicationEdit = {
    id:"",
    username : "",
    startdate: "",
    enddate:"",
    totaldays:"",
    leavetype:"",
    status:""
}

export interface Leavebalances {
    username:string,
    leavebalance:string
}