//your JS code here. If required.
document.addEventListener('DOMContentLoaded', handleDOMLoad);

function handleDOMLoad() {
  var paragraph = document.createElement('p');
  var text = document.createTextNode('DOM load success');
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}