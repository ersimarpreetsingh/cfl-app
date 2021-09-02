import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../api/app.service';
import { Student } from 'src/app/models';
declare function initDatatables(): any;
declare function destroyDatatables(): any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentArray: Student[] = [];
  constructor(private appApi: AppService) { }
  ngOnInit(): void {
    this.appApi.getStudent().subscribe(res => {
      if (res.success) {
        this.studentArray = res.data;
        setTimeout(() => {
          initDatatables();
        }, 500);
      } else { console.log(res); }
    },
      err => console.log(err));
  }

  deleteStudent(studentId: string): void {
    this.appApi.deleteStudent(studentId).subscribe(res => {
      if (res.success) {
        destroyDatatables();
        this.appApi.getStudent().subscribe(res2 => {
          if (res2.success) {
            this.studentArray = res2.data;
            setTimeout(() => {
              initDatatables();
            }, 500);
          }
        });
      }
    });
  }
}
