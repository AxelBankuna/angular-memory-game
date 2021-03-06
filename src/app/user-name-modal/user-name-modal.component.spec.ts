import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameModalComponent } from './user-name-modal.component';

describe('UserNameModalComponent', () => {
  let component: UserNameModalComponent;
  let fixture: ComponentFixture<UserNameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
