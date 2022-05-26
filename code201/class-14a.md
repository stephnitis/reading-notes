### [CSS Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)

- The `transform` property comes in two different settings, two-dimensional and three-dimensional.
- Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane.
- Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes
- Three-dimensional transforms work on both the x and y axes, as well as the z axis. These three-dimensional transforms help define not only the length and width of an element, but also the depth
- The `rotate` value provides the ability to rotate an element from 0 to 360 degrees. Using a positive value will rotate an element clockwise, and using a negative value will rotate the element counterclockwise.
- Using the `scale` value within the transform property allows you to change the appeared size of an element. The default scale value is 1, therefore any value between .99 and .01 makes an element appear smaller while any value greater than or equal to 1.01 makes an element appear larger.
- It is possible to scale only the height or width of an element using the `scaleX` and `scaleY` values. The `scaleX` value will scale the width of an element while the `scaleY` value will scale the height of an element.
- In order for three-dimensional transforms to work the elements need a perspective from which to transform: The perspective of an element can be set in two different ways. One way includes using the `perspective` value within the `transform` property on individual elements, while the other includes using the `perspective` property on the parent element residing over child elements being transformed.

### [Transitions & Animations](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)

- Transitions provide a change from one state to another, while animations can set multiple points of transition upon different keyframes.
- As mentioned, for a transition to take place, an element must have a change in state, and different styles must be identified for each state. The easiest way for determining styles for different states is by using the `:hover`, `:focus`, `:active`, and `:target` pseudo-classes.
- There are four transition related properties in total, including `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. Not all of these are required to build a transition, with the first three are the most popular.
- The `transition-property` property determines exactly what properties will be altered in conjunction with the other transitional properties.
- It is important to note, not all properties may be transitioned, only properties that have an identifiable halfway point
- The duration in which a transition takes place is set using the `transition-duration property`. The value of this property can be set using general timing values, including seconds (s) and milliseconds (ms)
- The `transition-timing-function` property is used to set the speed in which a transition will move
- set a delay with the `transition-delay` property. The delay sets a time value, seconds or milliseconds, that determines how long a transition should be stalled before executing
- To set multiple points at which an element should undergo a transition, use the `@keyframes` rule. The `@keyframes` rule includes the animation name, any animation breakpoints, and the properties intended to be animated
- It is important to note, as with transitions only individual properties may be animated.
- To have an animation repeat itself numerous times the `animation-iteration-count` property may be used
- Declare the direction an animation completes using the `animation-direction` property.
- The `animation-play-state` property allows an animation to be played or paused using the `running` and `paused` keyword values respectively

[8 simple CSS3 transitions that will wow your users](https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users)

1. Fade In: are coded in two steps: first, you set the initial state; next, you set the change
2. Change Color: just set the div’s class to “color” and specify the color we want in our CSS
3. Grow and Shrink: we can use CSS3’s transform to enlarge. To enlarge an element we specify a value greater than 1, to shrink it, we specify a value less than 1
4. Rotate Elements: Give your div the class “rotate” & visit link for CSS
5. Square to circle
6. 3D shadow: his effect is achieved by adding a box shadow, and then moving the element on the x axis using the transform and translate properties so that it appears to grow out of the screen.
7. Swing: This animation simply moves the element left and right
8. Inset border: One of the hottest button styles right now is the ghost button; a button with no background and a heavy border

**SO HOT RIGHT NOW**

### Additional References:

- [Code to animate buttons](https://codepen.io/retyui/pen/ByoaXV)
- [CSS3 Animations: Keyframes](https://codepen.io/akshaychauhan/pen/dyBqVo)
- [404](https://codepen.io/kieranfivestars/pen/MYdQxX)
- [Pure Bounce Animation](https://codepen.io/dp_lewis/pen/QWMxRR)
