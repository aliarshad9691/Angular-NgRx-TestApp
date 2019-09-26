import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InputComponent } from './components/input/input.component';
import { RendererComponent } from './components/renderer/renderer.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as default started as 'false'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.started).toEqual(false);
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Input Component');
  });
});
