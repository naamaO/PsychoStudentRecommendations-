import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.less']
})
export class RecommendationComponent implements OnInit {

  constructor() { }
  public recommmendationForm: FormGroup;

  ngOnInit() {
    this.recommmendationForm = new FormGroup({
      IntroductoryTime: new FormControl(),
      BackgroundEvaluation: new FormControl(),
      Percentage: new FormGroup({ studentAverage: new FormControl('') }),
      isExcellenceGuaranteed: new FormGroup({ level: new FormControl('') }),
      Opinion: new FormControl(),
      Date: new FormControl(),
      FullName: new FormControl(),
      Institution: new FormControl(),
      Role: new FormControl(),
      Sign: new FormControl()

      // Percentage: new FormGroup({

      //   PercentageUpTo90: new FormControl(),
      //   PercentageUpTo80: new FormControl(),
      //   PercentageUpTo70: new FormControl(),
      //   PercentagelesssTo70: new FormControl(),
      // }),
      // GraduationWithHonors: new FormGroup({
      //   absolutlyGraduation: new FormControl(),
      //   CanGraduation: new FormControl(),
      //   maybeGraduation: new FormControl(),
      //   notGraduation: new FormControl(),
      // }),

    })

  }
  submit() { }


}
