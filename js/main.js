import { smallRotatingCircle } from './anim/smallCircle.js';
import { backgroundSphere } from './anim/sphere.js';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#animate-button');
    smallRotatingCircle(btn);
    backgroundSphere();
  });
  