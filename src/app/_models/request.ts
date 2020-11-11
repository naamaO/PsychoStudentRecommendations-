import { Role } from "./role";
import { Student } from './student';
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
    // id: number;
    // name: string;
    // academyId: number;
    constructor(public id: number,public name: string,public academyId: number ){}
}
export class Recommender {
    fullName: string;
    email: string;
}

export class RequestRecommendation {
   public candidate: Student;
  public academyList: Academy[];
  public program: Program[];
  public recommender: Recommender[];
   constructor(){}
}