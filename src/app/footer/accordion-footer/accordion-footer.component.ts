import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-accordion-footer',
  standalone: true,
  templateUrl: './accordion-footer.component.html',
  styleUrl: './accordion-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HlmAccordionContentDirective,
    HlmAccordionDirective,
    HlmAccordionIconDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    BrnAccordionContentComponent,
    HlmIconComponent,
  ],
})
export class AccordionFooterComponent {
  title = input.required<string>();
  contents = input.required<string[]>();
}
