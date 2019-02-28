import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationWriteComponent } from './publication-write.component';

describe('PublicationWriteComponent', () => {
  let component: PublicationWriteComponent;
  let fixture: ComponentFixture<PublicationWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
