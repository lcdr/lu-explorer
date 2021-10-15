import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Behavior, Rev_Behavior } from '../../defs/api';

@Component({
  selector: 'app-behavior-detail',
  templateUrl: './behavior-detail.component.html',
  styleUrls: ['./behavior-detail.component.css']
})
export class BehaviorDetailComponent implements OnInit {

  @Input() behaviors: Record<number, Behavior>;
  @Input() behaviorID: number;

  active: boolean = false;
  hidden: boolean = true;

  constructor() {}

  ngOnInit() {}

  toggle(): void
  {
    if (!this.active)
    {
      this.active = true;
      this.hidden = false;
    }
    this.hidden = !this.hidden;
  }

}
