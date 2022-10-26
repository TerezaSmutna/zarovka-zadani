import { Bulb } from './Bulb/index.js';
document.querySelector('.container').append(
  Bulb({isOn : true}),
  Bulb({isOn : false}),
  Bulb({isOn : false})
)
