import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlElemComponent } from './xml-elem.component';

describe('XmlElemComponent', () => {
  let component: XmlElemComponent;
  let fixture: ComponentFixture<XmlElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
