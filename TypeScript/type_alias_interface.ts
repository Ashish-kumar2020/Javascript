// type

type Employee = {
    id: number;
    name: string;
    salary: number;
}

const employee1 : Employee = {
    id: 1,
    name: "Ashish",
    salary: 40000000
}

const employee2 : Employee = {
    id: 1,
    name: "Ashish",
    salary: 40000000
}
// type makes things easier for us we do not need to write repeative code
// Note ;  type is not only for objects it is for all
type UserName = string;

let names : UserName = "Ashish";


// ----------- Union -------------

type Status = "loading" | "success" | "error"
// usage

let statuss: Status = "loading"

type Scores = number[];

const marks: Scores = [90, 80, 100];

// -------------- Interface ----------------
interface ButtonProps {
    title: string;
    disabled: boolean;
}

// most important feature of interface which union can not do is
// if we have to interface of same name then they got merged
interface name {
    name: string
}

interface name { 
    age:  number;
}

const person: name = {
    name: "Asjo",
    age: 27
}