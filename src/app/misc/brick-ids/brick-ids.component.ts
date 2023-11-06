import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brick-ids',
  templateUrl: './brick-ids.component.html',
  styleUrls: ['./brick-ids.component.css']
})
export class BrickIdsComponent {
  sort: string = 'LEGOBrickID';
  limit: number = 50;
  ascending: boolean = true;
  page: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(p => this.page = Number(p.page || 0));
  }

  setSort(key: string) {
    if (this.sort != key) {
      this.sort = key;
      this.ascending = true;
    } else {
      this.ascending  = !this.ascending;
    }
  }
}
