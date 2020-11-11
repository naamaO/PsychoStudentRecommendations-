import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models';
import { Academy, Program, RequestRecommendation } from 'src/app/_models/request';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.less']
})
export class CandidateComponent implements OnInit {

  private request: RequestRecommendation;

  academyList =
    [
      { id: 1, name: 'המרכז הבינתחומי הרצליה', programs: [{ id: 1, name: 'aaa' }] },
      { id: 2, name: 'אוניברסיטת תל-אביב' },
      { id: 3, name: 'האוניברסיטה העברית' },
      { id: 4, name: 'המרכז האקדמי רופין' },
      { id: 5, name: 'האוניברסיטה הפתוחה' },
      { id: 6, name: 'הטכניון' }
    ];
  programList = [
    new Program(1, 'קלינית ילד', 1),
    new Program(1, 'קלינית מבוגר', 1),
    new Program(1, 'חברתית', 1),
    new Program(1, 'קלינית', 2),
    new Program(1, 'חברתית', 2),
    new Program(1, 'פסיכוביולוגיה', 2),
    new Program(1, 'קוגניטיבית', 2),
    new Program(1, 'קוגניציה ומוח', 2),
    new Program(1, 'בינתחומית', 2),
    new Program(1, 'פסיכולוגיה קלינית', 3),
    new Program(1, 'פסיכולוגיה קלינית גרונטולוגית', 3),
    new Program(1, 'פסיכולוגיה חברתית', 4),
    new Program(1, 'פסיכולוגיה קוגנטיבית והנדסת גורמי אנוש', 5),
    new Program(1, 'פסיכולוגיה ארגונית', 5),
    new Program(1, 'שיווק התנהגותי', 5)
  ];
  programList2 = [
    { id: 1, name: 'קלינית ילד', academyId: 1 },
    { id: 1, name: 'קלינית מבוגר', academyId: 1 },
    { id: 1, name: 'חברתית', academyId: 1 },
    { id: 1, name: 'קלינית', academyId: 2 },
    { id: 1, name: 'חברתית', academyId: 2 },
    { id: 1, name: 'פסיכוביולוגיה', academyId: 2 }
  ];
  academyDetails: Academy[] = [];
  requestForm: FormGroup;
  user: User;


  constructor() { }

  ngOnInit() {
    this.requestForm = new FormGroup({
      academies: new FormArray([]),
      programs: new FormArray([]),
      fullName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[ א-ת]+$')])),
      idNum: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern("^[0-9]*$")])),
      address: new FormControl('', Validators.compose([Validators.required])),
      zipCode: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phoneNumberP: new FormControl('', Validators.compose([Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")])),
      phoneNumberS: new FormControl('', Validators.compose([Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")])),
      BAMajorIn: new FormControl('', Validators.compose([Validators.required])),
      university: new FormControl('', Validators.compose([Validators.required])),
      isGraduated: new FormControl('', Validators.compose([Validators.required])),
      graduationYear: new FormControl('', Validators.compose([Validators.required])),
    });
    this.addAcademyCheckbox();
    this.initAcademies()
  }

  filteredprogramList(id: number) {

    return this.programList.filter(p => {
      return p.academyId == id
    })
  }

  get academiesFormArray() {
    return this.requestForm.controls.academies as FormArray;
  }
  get programsFormArray() {
    return this.requestForm.controls.programs as FormArray;
  }

  private addAcademyCheckbox() {
    this.academyList.forEach(() => this.academiesFormArray.push(new FormGroup({ isSelected: new FormControl(false), program: new FormControl() })));
    console.log('academiesFormArray: ', this.requestForm.controls.academies);
  }

  private addProgramListbox() {
    this.programList.forEach(() => this.programsFormArray.push(new FormControl(false)));
  }

  private initAcademies() {
    this.academyList.forEach((al) => {
      let programPerAcademy = this.programList.filter(p => p.academyId === al.id);
      this.academyDetails.push(new Academy({ id: al.id, name: al.name, programs: programPerAcademy, inqueriesAddres: '', isSelected: true }));
    })

  }

  public programSelected(selectedProgramId) {

  }

  submit() {
    if (this.requestForm.valid) {
      this.request.candidate = {
        fullName: this.requestForm.controls.fullName.value,
        address: this.requestForm.controls.address.value,
        email: this.requestForm.controls.email.value,
        BAMajorIn: this.requestForm.controls.BAMajorIn.value,
        graduationYear: this.requestForm.controls.graduationYear.value,
        id: this.requestForm.controls.id.value,
        isGraduated: this.requestForm.controls.isGraduated.value,
        password: this.requestForm.controls.password.value,
        phoneNumberP: this.requestForm.controls.phoneNumberP.value,
        phoneNumberS: this.requestForm.controls.phoneNumberS.value,
        role: this.requestForm.controls.role.value,
        university: this.requestForm.controls.university.value,
        username: this.requestForm.controls.username.value,
        zipCode: this.requestForm.controls.zipCode.value
      }
      let selectedAccademies = [];
      let selectedPrograms = [];
      for (let i; i < this.requestForm.value.academies.length; i++) {
        if (this.requestForm.value.academies[i].isSelected) {
          selectedAccademies.push(this.academyList[i]);
          selectedPrograms.push(this.academyList[i].programs)
        }
        this.request.academyList = selectedAccademies;
        this.request.program = selectedPrograms;
        for (let i; i < this.request.recommender.length; i++) {
          this.request.recommender[i].email = this.requestForm.controls.email.value
          fullName: this.requestForm.controls.fullName.value
        }

      }
    }
    else console.log("erorr")
   }
 }