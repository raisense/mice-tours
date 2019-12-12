//Helper functions
function getCorrectPrice(language, price) {
  if (language == "en") {
    return "From $" + price + "/night";
  } else if (language == "ru") {
    return "Цена от " + price + "$";
  } else {
    return price + "$ 'dan başlayan fiyatlarla";
  }
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function remove(parent, el) {
  parent.removeChild(el);
}

function trimText(txt) {
  let trimmed,
    length = 216;
  if (txt.length >= length) {
    trimmed = txt.substring(0, length);
    trimmed += "...";
    return trimmed;
  }
  return txt;

  // return txt.trunc(120, true);
}
