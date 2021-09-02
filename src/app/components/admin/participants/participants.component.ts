import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../api/app.service';
import { Participant } from 'src/app/models';
import { SnackbarService } from 'src/app/services/snackbar.service';
declare function initDatatables(): any;


@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  participantArray: Participant[] = [];
  constructor(private AppService$: AppService, private snackbar: SnackbarService) { }

  ngOnInit(): void {

    this.AppService$.getParticipant().subscribe(res => {
      if (res.success) {
        this.participantArray = res.data;
        setTimeout(() => {
          initDatatables();
        }, 500);

      } else { console.log(res); }
    },
      err => console.log(err));
  }

  approveParticipant(participant: Participant): void {
    participant.isApproved = true;
    this.AppService$.updateParticipant(participant).subscribe(res => {
      if (res.success) {
        const updatedParticipant = this.participantArray.find(p => p._id === participant._id);
        if (updatedParticipant) {
          updatedParticipant.isApproved = true;
        }
      }
    });
  }

  deleteParticipant(id: string): void {
    this.AppService$.deleteParticipant(id).subscribe(res => {
      if(res.success) {
        this.snackbar.show(res.message, true, 3000);
        this.participantArray = this.participantArray.filter(participant => participant._id !== id);
      }
    });
  }

}
