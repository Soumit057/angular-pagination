import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Angular Pagination';
  // Some array of things.
  public employeedata = [];
  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  constructor() {
    console.log('Application loaded. Initializing data.');

    this.employeedata = [
      { 'id': 1, 'name': 'Soumit Deb', 'phoneno': '(815) 6180492', 'email': 'sample1@gmail.com', 'gender': 'Male', 'nationality': 'Somalia' },
      { 'id': 2, 'name': 'Moshiur Rahman', 'phoneno': '(507) 3119958', 'email': 'sample2@gmail.com', 'gender': 'Male', 'nationality': 'United States' },
      { 'id': 3, 'name': 'Srabon Bhowmik', 'phoneno': '(478) 7181722', 'email': 'sample3@gmail.com', 'gender': 'Female', 'nationality': 'Russia' },
      { 'id': 4, 'name': 'Arijit Pritom', 'phoneno': '(698) 4411762', 'email': 'sample4@gmail.com', 'gender': 'Female', 'nationality': 'China' },
      { 'id': 5, 'name': 'Nazmus Shakib', 'phoneno': '(345) 6582965', 'email': 'sample5@gmail.com', 'gender': 'Male', 'nationality': 'Mongolia' },
      { 'id': 6, 'name': 'Clinton', 'phoneno': '(659) 9557733', 'email': 'sample6@gmail.com', 'gender': 'Male', 'nationality': 'Bhutan' },
      { 'id': 7, 'name': 'Micah', 'phoneno': '(864) 2101861', 'email': 'sample7@gmail.com', 'gender': 'Male', 'nationality': 'Peru' },
      { 'id': 8, 'name': 'John', 'phoneno': '(165) 5814372', 'email': 'sample8@gmail.com', 'gender': 'Male', 'nationality': 'Niger' },
      { 'id': 9, 'name': 'Aurthor', 'phoneno': '(428) 2282928', 'email': 'sample9@gmail.com', 'gender': 'Female', 'nationality': 'Argentina' },
      { 'id': 10, 'name': 'John Abraham', 'phoneno': '(673) 5170425', 'email': 'bbosman9@google.co.jp', 'gender': 'Female', 'nationality': 'Greece' },
      { 'id': 11, 'name': 'Shahrukh KHan', 'phoneno': '(978) 8885907', 'email': 'drowlandsa@slate.com', 'gender': 'Female', 'nationality': 'Indonesia' },
      { 'id': 12, 'name': 'Salman Khan', 'phoneno': '(956) 9360112', 'email': 'nkeetsb@canalblog.com', 'gender': 'Female', 'nationality': 'Finland' },
      { 'id': 13, 'name': 'Abul Hayat', 'phoneno': '(240) 7150720', 'email': 'sbussenc@so-net.ne.jp', 'gender': 'Female', 'nationality': 'Philippines' },
      { 'id': 14, 'name': 'Daliy Dose', 'phoneno': '(416) 4076124', 'email': 'adriversd@com.com', 'gender': 'Male', 'nationality': 'Bosnia and Herzegovina' },
      { 'id': 15, 'name': 'Carola Balasin', 'phoneno': '(262) 7945277', 'email': 'cbalasine@blogger.com', 'gender': 'Female', 'nationality': 'Bolivia' },
      { 'id': 16, 'name': 'Clarinda Barrick', 'phoneno': '(501) 3984600', 'email': 'cbarrickf@t-online.de', 'gender': 'Female', 'nationality': 'China' },
      { 'id': 17, 'name': 'Inglis Treweela', 'phoneno': '(718) 4157883', 'email': 'itreweelag@tripod.com', 'gender': 'Male', 'nationality': 'Finland' },
      { 'id': 18, 'name': 'Yardley Georgeot', 'phoneno': '(213) 5730967', 'email': 'ygeorgeoth@360.cn', 'gender': 'Male', 'nationality': 'Portugal' },
      { 'id': 19, 'name': 'Hestia Palffrey', 'phoneno': '(349) 6453938', 'email': 'hpalffreyi@nba.com', 'gender': 'Female', 'nationality': 'Madagascar' },
      { 'id': 20, 'name': 'Gwendolyn Mordon', 'phoneno': '(474) 3068249', 'email': 'gmordonj@uiuc.edu', 'gender': 'Female', 'nationality': 'Greece' }
    ];
  }
}
