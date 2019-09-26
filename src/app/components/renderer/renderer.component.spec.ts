import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererComponent } from './renderer.component';
import { SharedModule } from '../../shared/shared.module';
import { AppComponent } from '../../app.component';
import { InputComponent } from '../input/input.component';
import { provideMockStore } from '@ngrx/store/testing';
import { number1InitialState } from '../../initial-state/number1.initial-state';
import { number2InitialState } from '../../initial-state/number2.initial-state';

describe('RendererComponent', () => {
  let component: RendererComponent;
  let fixture: ComponentFixture<RendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        AppComponent,
        InputComponent,
        RendererComponent
      ],
      providers: [
        provideMockStore({initialState: {number1: number1InitialState, number2: number2InitialState}}),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number1 should be -5', () => {
    let d = null;
    component.number1.subscribe(num => {
      d = num;
    }).unsubscribe();
    expect(d).toEqual(-5);
  });

  it('number2 should be 10', () => {
    let d = null;
    component.number2.subscribe(num => {
      d = num;
    }).unsubscribe();
    expect(d).toEqual(10);
  });
});
