import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }



}
