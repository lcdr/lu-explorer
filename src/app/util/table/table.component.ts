import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs"
import { LuCoreDataService } from "../../services";


@Component({
  selector: "lux-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnChanges {
  @Input() select: string;
  @Input() from: string;
  @Input() where: string;
  @Input("order-by") orderBy: string;
  @Input() ascending: boolean = true;
  @Input() limit: number = 50;
  @Input() page: number = 0;
  rows: any[] = [];

  constructor(private luCoreData: LuCoreDataService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.query();
  }

  query() {
    this.luCoreData.querySql(
      "select " + this.select
      + " from " + this.from
      + (this.where ? " where " + this.where : "")
      + (this.orderBy ? " order by \"" + this.orderBy + "\" "
        + (this.ascending ? "asc" : "desc")
      : "")
      + " limit " + this.limit + " offset " + this.page * this.limit).subscribe(rows => this.rows = rows);
  }

  setOrderBy(column: string) {
    if (this.orderBy != column) {
      this.orderBy = column;
      this.ascending = true;
    } else {
      this.ascending  = !this.ascending;
    }
    this.query();
  }
}
