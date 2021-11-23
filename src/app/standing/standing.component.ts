import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { scheduled } from 'rxjs';
import { Rangking } from '../interface/rangking';
import { Schedule } from '../interface/schedule';
import { Team } from '../interface/team';
import { SoccerService } from '../service/Soccer.Service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css'],
})
export class StandingComponent implements OnInit {
  public UsingAsync: boolean = false;
  public MyTeam: Team[];
  public LanguageName: string;
  public MySchedule: Schedule[];
  public Standings: Rangking[];

  constructor(
    private _titleService: Title,
    private _soccerService: SoccerService
  ) {
    this._titleService.setTitle('Pertangdingan YGY');
    this.MyTeam = [];
    this.MySchedule = [];
    this.Standings = [];
    this.getTeam();
    this.LanguageName = 'liga';
    this.ComputerRangking();
  }

  ngOnInit(): void {}
  getTeam() {
    if (this.UsingAsync) {
      let xx = this._soccerService.getTeamAsync();
      xx.then((Teams: Team[]) => (this.MyTeam = Teams));
    } else {
      this.MyTeam = this._soccerService.getTeam();
    }
  }

  private getSchdule() {
    if (this.UsingAsync) {
      let xx = this._soccerService.getScheduleAsync();
      xx.then((schedules: Schedule[]) => (this.MySchedule = schedules));
    } else {
      this.MySchedule = this._soccerService.getSchedule();
    }
  }

  public ComputerRangking() {
    var curDate: Date = new Date();
    var TeamAt: number;
    this.Standings = [];
    this.MySchedule.forEach((element) => {
      if (element.PlayingDate < curDate && element.HomeScore >= 0) {
        TeamAt = this.FindTeam(element.HomeTeam);
        if (TeamAt < 0) {
          this.Standings.push({
            TeamName: element.AwayTeam,
            GamePlayed: 0,
            wins: 0,
            Ties: 0,
            GoalsFor: 0,
            GoalAgaints: 0,
          });
          TeamAt = this.Standings.length - 1;
        }
        this.UpdCurrentRow(element, TeamAt, 'A');
      }
    });
  }
  private UpdCurrentRow(element: Schedule, TeamAt: number, HomeAway: string) {
    this.Standings[TeamAt].GamePlayed++;
    if (HomeAway == 'H') {
      this.Standings[TeamAt].GoalsFor += element.HomeScore;
      this.Standings[TeamAt].GoalAgaints += element.AwayScore;
      // win menang
      if (element.HomeScore > element.AwayScore) {
        this.Standings[TeamAt].wins++;
      }
    }
    if (HomeAway == 'A') {
      this.Standings[TeamAt].GoalsFor += element.AwayScore;
      this.Standings[TeamAt].GoalsFor += element.HomeScore;
      if (element.AwayScore > element.HomeScore) {
        this.Standings[TeamAt].wins++;
      }
    }
    if (element.AwayScore == element.HomeScore) {
      this.Standings[TeamAt].Ties++;
    }
  }
  private FindTeam(TeamName: string): number {
    var FoundAt: number = -1;
    for (var _x = 0; _x < this.Standings.length; _x++) {
      if (this.Standings[_x].TeamName == TeamName) {
        return _x;
      }
    }
    return FoundAt;
  }
}
