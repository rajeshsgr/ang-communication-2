import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {


  //@Input() receivedParentMessage: string;

  check: string='deep';

  number1: number=0;
  number2: number=0;

  total:number;


  @Input('receivedParentMessage') receivedParentMessage: {firstName:string,lastName:string};

  @Output() messageToEmit = new EventEmitter<number>();


  //@Input('servElement') element: {type:string,name:string,content:string};

  emitTotalScore(){

    this.total=(Number(this.number1)+Number(this.number2));

    this.messageToEmit.emit(this.total);

    console.log(this.total);

  }

  constructor() { }

  ngOnInit() {
  }

}
