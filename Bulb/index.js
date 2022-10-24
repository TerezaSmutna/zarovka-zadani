export const Bulb = (props) => {
  const { isOn } = props;

  let isOnClass = 'bulb';
  if (isOn) {
    isOnClass = 'bulb--on';
  } 
  const element = document.createElement('div');
  element.classList.add(isOnClass);

  /*element.addEventListener('click', () => {
    element.replaceWith(Bulb({ 
      isOn: !isOn,
    }));
  });*/
  return element;

}
