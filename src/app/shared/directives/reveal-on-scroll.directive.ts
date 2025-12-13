import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, inject } from '@angular/core';

/**
 * RevealOnScroll Directive
 * 
 * A reusable directive that animates elements when they enter the viewport using IntersectionObserver.
 * 
 * Usage:
 * 
 * Basic usage (defaults to fadeUp animation):
 * <div appRevealOnScroll>Content</div>
 * 
 * With animation type:
 * <div appRevealOnScroll="fadeIn">Content</div>
 * <div [appRevealOnScroll]="'slideInLeft'">Content</div>
 * 
 * With custom delay and duration:
 * <div appRevealOnScroll="fadeUp" [delay]="200" [duration]="800">Content</div>
 * 
 * With stagger for lists (use staggerIndex):
 * <div *ngFor="let item of items; let i = index" 
 *      appRevealOnScroll="fadeUp" 
 *      [staggerIndex]="i">Content</div>
 * 
 * To animate multiple times (not just once):
 * <div appRevealOnScroll="fadeUp" [once]="false">Content</div>
 * 
 * Available animation types:
 * - 'fadeUp' (default): fade in with upward motion
 * - 'fadeIn': simple fade in
 * - 'slideLeft': slide in from left
 * - 'slideRight': slide in from right
 * - 'scaleIn': scale in with fade
 * - 'slideBottom': slide in from bottom
 */

export type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'slideBottom';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
  host: {
    '[class.reveal-hidden]': '!isVisible',
    '[class.reveal-visible]': 'isVisible'
  }
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;
  
  @Input('appRevealOnScroll') animation: AnimationType = 'fadeUp';
  @Input() delay: number = 0;
  @Input() duration: number = 600;
  @Input() once: boolean = true;
  @Input() staggerIndex?: number;
  @Input() staggerIncrement: number = 100; // Delay increment per stagger index
  
  isVisible = false;
  computedDelay = 0;

  ngOnInit() {
    // Calculate delay including stagger
    this.computedDelay = this.delay + (this.staggerIndex !== undefined ? this.staggerIndex * this.staggerIncrement : 0);
    
    // Set initial hidden state
    this.setInitialState();
    
    // Create IntersectionObserver
    this.createObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setInitialState() {
    const element = this.elementRef.nativeElement;
    
    // Add initial hidden styles based on animation type
    this.renderer.addClass(element, 'reveal-hidden');
    this.renderer.addClass(element, `reveal-${this.animation}`);
    
    // Set initial transform/opacity based on animation type
    switch (this.animation) {
      case 'fadeUp':
        this.renderer.setStyle(element, 'opacity', '0');
        this.renderer.setStyle(element, 'transform', 'translateY(20px)');
        break;
      case 'fadeIn':
        this.renderer.setStyle(element, 'opacity', '0');
        break;
      case 'slideLeft':
        this.renderer.setStyle(element, 'opacity', '0');
        this.renderer.setStyle(element, 'transform', 'translateX(-30px)');
        break;
      case 'slideRight':
        this.renderer.setStyle(element, 'opacity', '0');
        this.renderer.setStyle(element, 'transform', 'translateX(30px)');
        break;
      case 'scaleIn':
        this.renderer.setStyle(element, 'opacity', '0');
        this.renderer.setStyle(element, 'transform', 'scale(0.95)');
        break;
      case 'slideBottom':
        this.renderer.setStyle(element, 'opacity', '0');
        this.renderer.setStyle(element, 'transform', 'translateY(40px)');
        break;
    }
    
    // Set transition properties
    this.renderer.setStyle(element, 'transition-property', 'opacity, transform');
    this.renderer.setStyle(element, 'transition-timing-function', 'cubic-bezier(0.4, 0, 0.2, 1)');
    this.renderer.setStyle(element, 'transition-duration', `${this.duration}ms`);
    this.renderer.setStyle(element, 'transition-delay', `${this.computedDelay}ms`);
  }

  private createObserver() {
    const options: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      threshold: 0.1 // Trigger when 10% of element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn();
          
          // If once is true, stop observing after animation
          if (this.once) {
            this.observer?.unobserve(entry.target);
          }
        } else if (!this.once) {
          // If once is false, animate out when leaving viewport
          this.animateOut();
        }
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  private animateIn() {
    this.isVisible = true;
    const element = this.elementRef.nativeElement;
    
    // Remove hidden class
    this.renderer.removeClass(element, 'reveal-hidden');
    this.renderer.addClass(element, 'reveal-visible');
    
    // Reset to final state
    this.renderer.setStyle(element, 'opacity', '1');
    
    switch (this.animation) {
      case 'fadeUp':
      case 'slideBottom':
        this.renderer.setStyle(element, 'transform', 'translateY(0)');
        break;
      case 'slideLeft':
      case 'slideRight':
        this.renderer.setStyle(element, 'transform', 'translateX(0)');
        break;
      case 'scaleIn':
        this.renderer.setStyle(element, 'transform', 'scale(1)');
        break;
      case 'fadeIn':
        // No transform needed
        break;
    }
  }

  private animateOut() {
    if (!this.once) {
      this.isVisible = false;
      this.setInitialState();
    }
  }
}

