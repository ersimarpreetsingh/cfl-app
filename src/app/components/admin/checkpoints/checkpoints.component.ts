import { CheckpointService } from './../../../api/checkpoint.service';
import { Checkpoint } from './../../../models';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.scss']
})
export class CheckpointsComponent implements OnInit {

  constructor(private checkpointApi: CheckpointService, private snackbarService: SnackbarService) { }
  checkpoints: Checkpoint[] = [];
  ngOnInit(): void {
    this.checkpointApi.getCheckpointListListener().subscribe(res => {
      this.checkpoints = res;
    });
    this.checkpointApi.getCheckpoints();
  }

  deletePackage(packageId: string): void {
    this.checkpointApi.deletePackage(packageId).subscribe(res => {
      if (res.success) {
        this.snackbarService.show(res.message, true, 3000);
        this.checkpointApi.getCheckpoints();
      }
    })
  }

}
