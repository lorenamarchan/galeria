import { animation, trigger, animateChild, group, transition, animate, style, query  } from '@angular/animations';


export const SlideInAnimation = 
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({ left: '100%'})
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('600ms ease-in-out', style({ left: '-100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('600ms ease-in-out', style({ left: '0%'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ])