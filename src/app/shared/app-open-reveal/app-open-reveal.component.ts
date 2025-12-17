import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

const SESSION_KEY = 'openRevealDone';

@Component({
  selector: 'app-open-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-open-reveal.component.html',
  styleUrls: ['./app-open-reveal.component.scss']
})
export class AppOpenRevealComponent implements OnInit, AfterViewInit {
  @Output() done = new EventEmitter<void>();
  @ViewChild('logoPath') logoPath!: ElementRef<SVGPathElement>;
  @ViewChild('accentPath') accentPath!: ElementRef<SVGPathElement>;

  shouldShow = false;
  phase2 = false;
  hiding = false;
  private isBrowser: boolean;

  readonly DRAW_DURATION = 650;
  readonly MORPH_DURATION = 250;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      this.emitDone();
      return;
    }

    if (sessionStorage.getItem(SESSION_KEY)) {
      this.emitDone();
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      this.emitDone();
      return;
    }

    this.shouldShow = true;
    document.body.classList.add('reveal-animating');
  }

  ngAfterViewInit(): void {
    if (!this.shouldShow || !this.isBrowser) return;

    requestAnimationFrame(() => {
      const mainPath = this.logoPath?.nativeElement;
      const accent = this.accentPath?.nativeElement;

      if (mainPath) {
        const len = mainPath.getTotalLength();
        mainPath.style.strokeDasharray = `${len}`;
        mainPath.style.strokeDashoffset = `${len}`;
      }

      if (accent) {
        const len = accent.getTotalLength();
        accent.style.strokeDasharray = `${len}`;
        accent.style.strokeDashoffset = `${len}`;
      }

      requestAnimationFrame(() => {
        if (mainPath) mainPath.classList.add('draw');
        if (accent) accent.classList.add('draw');

        setTimeout(() => {
          this.phase2 = true;

          setTimeout(() => {
            this.hiding = true;
            sessionStorage.setItem(SESSION_KEY, 'true');
            document.body.classList.remove('reveal-animating');
            document.body.classList.add('reveal-ready');

            setTimeout(() => {
              this.shouldShow = false;
              this.emitDone();
            }, 100);
          }, this.MORPH_DURATION);
        }, this.DRAW_DURATION);
      });
    });
  }

  private emitDone(): void {
    if (this.isBrowser) {
      document.body.classList.add('reveal-ready');
    }
    this.done.emit();
  }
}
