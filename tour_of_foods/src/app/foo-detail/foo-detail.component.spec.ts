import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooDetailComponent } from './foo-detail.component';

describe('FooDetailComponent', () => {
  let component: FooDetailComponent;
  let fixture: ComponentFixture<FooDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
