import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/_models';
import { Academy, Program } from 'src/app/_models/request';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.less']
})
export class CandidateComponent implements OnInit {

  academyList =
    [
      { id: 1, name: 'המרכז הבינתחומי הרצליה' },
      { id: 2, name: 'אוניברסיטת תל-אביב' },
      { id: 3, name: 'האוניברסיטה העברית' },
      { id: 4, name: 'המרכז האקדמי רופין' },
      { id: 5, name: 'האוניברסיטה הפתוחה' },
      { id: 6, name: 'הטכניון' }
    ];
  programList = [
    new Program({ id: 1, name: 'קלינית ילד', academyId: 1 }),
    new Program({ id: 1, name: 'קלינית מבוגר', academyId: 1 }),
    new Program({ id: 1, name: 'חברתית', academyId: 1 }),
    new Program({ id: 1, name: 'קלינית', academyId: 2 }),
    new Program({ id: 1, name: 'חברתית', academyId: 2 }),
    new Program({ id: 1, name: 'פסיכוביולוגיה', academyId: 2 }),
    new Program({ id: 1, name: 'קוגניטיבית', academyId: 2 }),
    new Program({ id: 1, name: 'קוגניציה ומוח', academyId: 2 }),
    new Program({ id: 1, name: 'בינתחומית', academyId: 2 }),
    new Program({ id: 1, name: 'פסיכולוגיה קלינית', academyId: 3 }),
    new Program({ id: 1, name: 'פסיכולוגיה קלינית גרונטולוגית', academyId: 3 }),
    new Program({ id: 1, name: 'פסיכולוגיה חברתית', academyId: 4 }),
    new Program({ id: 1, name: 'פסיכולוגיה קוגנטיבית והנדסת גורמי אנוש', academyId: 5 }),
    new Program({ id: 1, name: 'פסיכולוגיה ארגונית', academyId: 5 }),
    new Program({ id: 1, name: 'שיווק התנהגותי', academyId: 5 })
  ];
  academyDetails: Academy[]=[];
  requestForm: FormGroup;
  user: User;


  constructor() { }

  ngOnInit() {
    this.requestForm = new FormGroup({
      academies: new FormArray([]),
      programs: new FormArray([]),
      fullName: new FormControl(),
      idNum: new FormControl(),
      address: new FormControl(),
      zipCode: new FormControl(),
      email: new FormControl(),
      phoneNumberP: new FormControl(),
      phoneNumberS: new FormControl(),
      BAMajorIn: new FormControl(),
      university: new FormControl(),
      isGraduated: new FormControl(),
      graduationYear: new FormControl(),
    });
    //  this.addAcademyCheckbox();
    this.initAcademies()
  }

  filteredprogramList(id:number){

return this.programList.filter(p=>{
 return p.academyId==id
})
  }

  get academiesFormArray() {
    return this.requestForm.controls.academies as FormArray;
  }

  private addAcademyCheckbox() {
    this.academyList.forEach(() => this.academiesFormArray.push(new FormControl(false)));
  }

  private initAcademies() {
    this.academyList.forEach((al) => {
      let programPerAcademy = this.programList.filter(p => p.academyId === al.id);
      this.academyDetails.push(new Academy({ id: al.id, name: al.name, programs: programPerAcademy, inqueriesAddres: '', isSelected: true }));
    })
  }

  submit() {
    const selectedAcademyIds = this.requestForm.value.orders
      .map((checked, i) => checked ? this.academyList[i].id : null)
      .filter(v => v !== null);
    console.log(selectedAcademyIds);
  }

}
