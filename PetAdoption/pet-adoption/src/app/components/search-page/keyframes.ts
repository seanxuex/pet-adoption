import { keyframes, style } from '@angular/animations';

export const zoomOutLeft = [
    style({transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)', offset: .4}),
    style({transform: 'scale(.1) translate3d(-2000px, 0, 0)', 'transform-origin': 'left center', offset: 1}),
]

export const zoomOutRight = [
    style({transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', offset: .4}),
    style({transform: 'scale(.1) translate3d(2000px, 0, 0)', 'transform-origin': 'right center', offset: 1}),
]