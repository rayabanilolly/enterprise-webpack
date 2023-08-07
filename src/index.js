import _ from 'lodash';
import testHTML from './pages/test.html';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = testHTML;

  return element;
}

document.body.appendChild(component());
