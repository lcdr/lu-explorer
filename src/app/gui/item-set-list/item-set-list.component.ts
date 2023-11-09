import { Component, Input } from "@angular/core";

@Component({
  selector: "lux-item-set-list",
  templateUrl: "./item-set-list.component.html",
  styleUrls: ["./item-set-list.component.css"]
})
export class ItemSetListComponent {
  @Input()
  set ids(value: number[]) {
    this._where = "where isets.setID in (" + value + ")";
  }

  @Input()
  set where(value: string) {
    this._where = "where " + value;
  }

  _where: string = "";
}
