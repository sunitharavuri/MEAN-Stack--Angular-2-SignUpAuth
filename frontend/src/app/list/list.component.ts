import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import {Challenge} from '../challenge';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  challenges: Challenge[];
  challenge: Challenge;
  name: string;
  description: string;
  priority: string;
  start_date: any;
  end_date: any;
  image: any;


  constructor(private challengeService: ChallengeService) { }



  ngOnInit() {
  }


}
