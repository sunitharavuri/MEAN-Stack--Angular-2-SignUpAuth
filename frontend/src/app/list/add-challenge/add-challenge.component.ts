import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../challenge';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

  challenges: Challenge[];
  challenge: Challenge;
  name: string;
  description: string;
  priority: string;
  start_date: any;
  end_date: any;
  image: any;


  constructor(private challengeService: ChallengeService,
    private router: Router,
    private activatedRoute: ActivatedRoute){ }

addChallenge(event) {

    const newChallenge = {
      name: this.name,
      description: this.description,
      priority: this.priority,
      start_date: this.start_date,
      end_date: this.end_date,
      image: this.image

    }
    this.challengeService.addChallenge(newChallenge)
      .subscribe(challenge => {
        this.challenges.push(challenge);
        this.challengeService.getChallenges()
          .subscribe(challenges =>
            this.challenges = challenges);
        this.router.navigate(['list']);
      });
    this.name = '';
    this.description = '';
    this.priority = '';
    this.start_date = '';
    this.end_date = '';
    this.image = '';
    event.preventDefault();

  }


  ngOnInit() {
    this.challengeService.getChallenges()
      .subscribe(challenges =>
        this.challenges = challenges);

  }
}
