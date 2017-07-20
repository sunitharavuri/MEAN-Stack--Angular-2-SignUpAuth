import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../challenge';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnInit {
  challenges: Challenge[];
  challenge: Challenge;
  name: string;
  description: string;
  priority: string;
  start_date: any;
  end_date: any;
  image: any;


  constructor(private challengeService: ChallengeService) { }


  deleteChallenge(id: any) {
    var challenges = this.challenges;
    this.challengeService.deleteChallenge(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < challenges.length; i++) {
            if (challenges[i]._id == id) {
              challenges.splice(i, 1);
            }
          }
        }
      })
  }

  ngOnInit() {
    this.challengeService.getChallenges()
      .subscribe(challenges =>
        this.challenges = challenges);
  }
}

