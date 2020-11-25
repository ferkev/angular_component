import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TooltipComponent } from './tooltip.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatTooltipModule,
        MatButtonModule,
      ],
      declarations: [ TooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    component.position = 'right';
    component.textContent = 'A text Content';
    component.disableRipple = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should had button tooltip component', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const tooltip = button.query(By.css('.mat-tooltip'));
    expect(tooltip).toBeDefined();
  });

  it('should have a color', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.query(By.css(`mat-${component.color}`))).toBeDefined();
  });

  it('sould have a tooltip textContent', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.attributes['ng-reflect-message']).toEqual(component.textContent);
  });

  it('sould have a tooltip position', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.attributes['ng-reflect-position']).toEqual(component.position);
  });

  it('sould have a button without ripple', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.attributes['ng-reflect-disable-ripple']).toEqual(String(component.disableRipple));
  });

  it('should display tooltip on click', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(fixture.debugElement.query(By.css((`mat-focus-indicator mat-tooltip-trigger mat-icon-button mat-button-base mat-${component.color} _mat-animation-noopable`)))).toBeDefined();
  });
});
