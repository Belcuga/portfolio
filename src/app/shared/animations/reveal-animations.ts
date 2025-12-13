import { trigger, state, style, transition, animate, AnimationMetadata } from '@angular/animations';

/**
 * Shared animation definitions for scroll-based reveal animations.
 * 
 * Usage:
 * Import these animations in your component and use them with the RevealOnScroll directive:
 * 
 * @Component({
 *   animations: [fadeInUp, fadeIn, slideInLeft, slideInRight, scaleIn]
 * })
 * 
 * Then in template:
 * <div [@fadeInUp]="animationState">Content</div>
 * 
 * Or use with the RevealOnScroll directive which handles the state automatically.
 */

/**
 * Fade in with upward motion (default animation style)
 * opacity: 0 → 1
 * transform: translateY(20px) → translateY(0)
 */
export const fadeInUp = trigger('fadeInUp', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(20px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden => visible', [
    animate('600ms cubic-bezier(0.4, 0, 0.2, 1)')
  ])
]);

/**
 * Simple fade in
 * opacity: 0 → 1
 */
export const fadeIn = trigger('fadeIn', [
  state('hidden', style({
    opacity: 0
  })),
  state('visible', style({
    opacity: 1
  })),
  transition('hidden => visible', [
    animate('500ms ease-out')
  ])
]);

/**
 * Slide in from left
 * transform: translateX(-30px) → translateX(0)
 */
export const slideInLeft = trigger('slideInLeft', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-30px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
    animate('600ms cubic-bezier(0.4, 0, 0.2, 1)')
  ])
]);

/**
 * Slide in from right
 * transform: translateX(30px) → translateX(0)
 */
export const slideInRight = trigger('slideInRight', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(30px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
    animate('600ms cubic-bezier(0.4, 0, 0.2, 1)')
  ])
]);

/**
 * Scale in with fade
 * transform: scale(0.9) → scale(1)
 */
export const scaleIn = trigger('scaleIn', [
  state('hidden', style({
    opacity: 0,
    transform: 'scale(0.95)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scale(1)'
  })),
  transition('hidden => visible', [
    animate('500ms cubic-bezier(0.4, 0, 0.2, 1)')
  ])
]);

/**
 * Slide in from bottom (more pronounced than fadeInUp)
 * transform: translateY(40px) → translateY(0)
 */
export const slideInBottom = trigger('slideInBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(40px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden => visible', [
    animate('600ms cubic-bezier(0.4, 0, 0.2, 1)')
  ])
]);

/**
 * Helper function to create custom animations with configurable duration and delay
 */
export function createRevealAnimation(
  name: string,
  duration: number = 600,
  easing: string = 'cubic-bezier(0.4, 0, 0.2, 1)'
): AnimationMetadata {
  return trigger(name, [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(20px)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', [
      animate(`${duration}ms ${easing}`)
    ])
  ]);
}

