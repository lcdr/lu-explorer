import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})
export class ObjectsByTypeComponent {
  type: string = "";
  page: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      this.type = p.type;
      this.page = Number(p.page);
    });
  }
}
