import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveComicComponent } from './remove-comic.component';

describe('RemoveComicComponent', () => {
  let component: RemoveComicComponent;
  let fixture: ComponentFixture<RemoveComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
