import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'left' | 'fade' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;

    const initialTransform =
      this.revealDirection === 'up'
        ? 'translateY(24px)'
        : this.revealDirection === 'left'
        ? 'translateX(-24px)'
        : 'none';

    el.style.opacity = '0';
    el.style.transform = initialTransform;
    el.style.transition = `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${this.revealDelay}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
