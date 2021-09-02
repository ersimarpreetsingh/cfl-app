import { Checkpoint } from 'src/app/models';
import { CheckpointService } from './../../../../api/checkpoint.service';
import { User } from './../../../../models/user.model';
import { AppService } from './../../../../api/app.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-participant-report',
  templateUrl: './participant-report.component.html',
  styleUrls: ['./participant-report.component.scss']
})
export class ParticipantReportComponent implements OnInit {
  schoolId!: string;
  students: User[] = [];
  checkpoints: Checkpoint[] = [];
  constructor(
    private route: ActivatedRoute,
    private appApi: AppService,
    private checkpointApi: CheckpointService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.schoolId = params.participantId;
      if (this.schoolId) {
        this.checkpointApi.getCheckpointListListener().subscribe(checkpoints => {
          this.checkpoints = checkpoints;
          this.appApi.getStudentsBySchool(this.schoolId).subscribe(res => {
            if (res.success) {
              this.students = res.data;
              this.students.forEach(student => {
                student.selections = [];
                this.checkpoints.forEach(checkpoint => {
                  if (student.transactions) {
                    const transaction = student.transactions.filter(trans => trans.checkPoint && trans.checkPoint._id === checkpoint._id);
                    student.selections?.push(transaction.map(trans => {
                      return `${trans.package.title}, ${trans.cost}`;
                    }).join('; '));
                  }
                  console.log(student.selections);
                });
              });
            }
          });
        });
        this.checkpointApi.getCheckpoints();
      }
    });
  }
  exportexcel(): void {
    /* table id is passed over here */
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, `${this.schoolId}.xlsx`);

  }
}
