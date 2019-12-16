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

function getCorrectStars(rating) {
  const starBox = createNode("div");
  starBox.innerHTML = `
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
                    stroke="#B5287C" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
                    stroke="#B5287C" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
                    stroke="#B5287C" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
                    stroke="#B5287C" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
                    stroke="#B5287C" />
              </svg>`;
  [...starBox.querySelectorAll("svg")].map((star, i) => {
    if (i + 1 <= Math.floor(rating)) {
      star.style.fill = "#B5287C";
    }
  });
  return nodeToString(starBox);
}

function nodeToString(node) {
  var tmpNode = createNode("div");
  tmpNode.appendChild(node.cloneNode(true));
  var str = tmpNode.innerHTML;
  tmpNode = node = null; // prevent memory leaks in IE
  return str;
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
}

function renderElements(parent, array) {
  console.log(parent, array);
  let ol = createNode("ol");
  let ul = createNode("ul");
  array.map((el) => {
    let paragraphs = createNode("div");

    switch (el.type) {
      case "paragraph":
        let p = createNode("p");
        p.innerHTML = el.text;
        append(paragraphs, p);
        break;
      case "list-item":
        let ul_li = createNode("li");
        ul_li.innerHTML = el.text;
        ul_li.innerHTML.length > 20 ? append(ul, ul_li) : "";
        break;
      case "o-list-item":
        let ol_li = createNode("li");
        ol_li.innerHTML = el.text;
        append(ol, ol_li);
        break;

      default:
        break;
    }

    paragraphs.hasChildNodes ? append(parent, paragraphs) : "";
    ul.hasChildNodes ? append(parent, ul) : "";
    ol.hasChildNodes ? append(parent, ol) : "";
  });
}

function showToast(e) {
  console.log(e);
}
