import { Role } from "./role";
import { User } from './user';

export class Academy {
    id: number;
    name: string;
    inqueriesAddres: string;
    isSelected: boolean;
    programs: Program[];

    constructor(public data: { id: number, name: string, inqueriesAddres: string, isSelected: boolean, programs: Program[] }) {

    }
}
export class Program {
    id: number;
    name: string;
    academyId: number;
    constructor(public data: { id: number, name: string, academyId: number }){}
}
export class Recommender {
    fullName: string;
    email: string;
}

export class RequestRecommendation {
    candidate: User;
    academyList: Academy[];
    program: Program;
    recommender: Recommender[];
}