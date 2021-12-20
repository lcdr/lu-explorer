import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-xml-elem',
  templateUrl: './xml-elem.component.html',
  styleUrls: ['./xml-elem.component.css']
})
export class XmlElemComponent {
  @Input()
  elem: Element;

  iter(c: HTMLCollection): Element[] {
    return Array.from(c);
  }
}
