import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnDestroy {

  @Input() textContent = 'A content text';
  @Input() color = 'primary';
  @Input() position = 'left';
  @Input() disableRipple = true;

  ngOnDestroy(): void {
    this.color = '';
    this.position = '';
    this.textContent = '';
    this.disableRipple = false;
  }
}
