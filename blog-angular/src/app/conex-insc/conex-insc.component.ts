import {Component, Input, OnInit} from '@angular/core';
import {Authchoice} from "./authchoice";

@Component({
  selector: 'app-conex-insc',
  templateUrl: './conex-insc.component.html',
  styleUrl: './conex-insc.component.scss'
})
export class ConexInscComponent implements OnInit{


  @Input() choice: Authchoice;

  ngOnInit(): void {
  }

}
