import { Checkpoint } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckpointService } from './../../../../api/checkpoint.service';
import { SnackbarService } from './../../../../services/snackbar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpoint-form',
  templateUrl: './checkpoint-form.component.html',
  styleUrls: ['./checkpoint-form.component.scss']
})
export class CheckpointFormComponent implements OnInit {
  checkpointId!: string;
  checkpoint!: Checkpoint;
  checkpointForm = new FormGroup({
    title: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    isStepped: new FormControl(false),
    tfQuestion: new FormControl('', Validators.required),
    tfAnswer: new FormControl('', Validators.required),
    trueStatement: new FormControl('', Validators.required),
    falseStatement: new FormControl('', Validators.required),
    chatCode: new FormControl(''),
    videoCode: new FormControl(''),
  });

  submitButtonText = 'ADD';

  constructor(
    private snackbar: SnackbarService,
    private checkpointApi: CheckpointService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.checkpointId = params.checkpointId;

      if (this.checkpointId) {
        this.checkpointApi.getCheckpointById(this.checkpointId).subscribe(res => {
          if (res.success) {
            this.checkpoint = res.data;
            this.checkpointForm.setValue({
              title: this.checkpoint.title ? this.checkpoint.title : '',
              imageUrl: this.checkpoint.imageUrl ? this.checkpoint.imageUrl : '',
              description: this.checkpoint.description ? this.checkpoint.description : '',
              isStepped: this.checkpoint.isStepped ? this.checkpoint.isStepped : '',
              tfQuestion: this.checkpoint.trueFalseQuestion?.question ? this.checkpoint.trueFalseQuestion.question : '',
              tfAnswer: this.checkpoint.trueFalseQuestion ? this.checkpoint.trueFalseQuestion.answer.toString() : '',
              trueStatement: this.checkpoint.trueFalseQuestion && this.checkpoint.trueFalseQuestion.trueStatement
                ? this.checkpoint.trueFalseQuestion.trueStatement
                : '',
              falseStatement: this.checkpoint.trueFalseQuestion && this.checkpoint.trueFalseQuestion.falseStatement
                ? this.checkpoint.trueFalseQuestion.falseStatement
                : '',
              chatCode: this.checkpoint.chatCode ? this.checkpoint.chatCode : '',
              videoCode: this.checkpoint.videoCode ? this.checkpoint.videoCode : '',
            });
            this.submitButtonText = 'UPDATE';
          }
        });
      }
    });
  }

  addCheckpoint(): void {
    if (this.checkpointForm.valid) {
      const formdata = this.checkpointForm.value;
      formdata.trueFalseQuestion = {
        question: formdata.tfQuestion,
        answer: JSON.parse(formdata.tfAnswer),
        trueStatement: formdata.trueStatement,
        falseStatement: formdata.falseStatement
      };
      if (this.checkpointId) {
        formdata._id = this.checkpointId;
        this.checkpointApi.updateCheckpoint(formdata).subscribe(res => {
          if (res.success) {
            this.snackbar.show(res.message, res.success);
            this.router.navigateByUrl('/admin/dashboard/checkpoints');
          }
        });
      } else {
        this.checkpointApi.addCheckpoint(formdata).subscribe(res => {
          if (res.success) {
            this.snackbar.show(res.message, res.success);
            this.router.navigateByUrl('/admin/dashboard/checkpoints');
          }
        });
      }
    } else {
      this.snackbar.show('Please fill the form with valid details.', false);
    }
  }
}
