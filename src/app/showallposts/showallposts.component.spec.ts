import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallpostsComponent } from './showallposts.component';

describe('ShowallpostsComponent', () => {
  let component: ShowallpostsComponent;
  let fixture: ComponentFixture<ShowallpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
