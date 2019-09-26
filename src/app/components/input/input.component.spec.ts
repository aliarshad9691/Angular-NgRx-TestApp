import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { SharedModule } from '../../shared/shared.module';
import { AppComponent } from '../../app.component';
import { RendererComponent } from '../renderer/renderer.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Subject } from 'rxjs';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const subject: Subject<number> = new Subject();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        AppComponent,
        InputComponent,
        RendererComponent
      ],
      providers: [
        provideMockStore({initialState: {number1: -5, number2: 10}}),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.number = subject.asObservable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display number1', () => {
    subject.next(5);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(5);
  });
});
