const reviews = document.querySelector(".reviews");

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function prepend(parent, el) {
  return parent.prepend(el);
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

const prismic = PrismicJS.api("https://mice-tours.prismic.io/api/v2", {
  accessToken:
    "MC5YZXNrYUJFQUFCcGVXMkVr.77-977-977-977-9OSzvv73vv73vv73vv73vv70I77-9du-_vRbvv71HTR1eGkzvv73vv70fGO-_vXha77-9bw"
});

prismic.then((api) => {
  const feedback = PrismicJS.Predicates.at("document.type", "feedback");
  api.query(feedback).then((response) => {
    response.results.map((review) => {
      let slider = document.querySelector(".swiper-container"),
        sliderWrapper = createNode("div"),
        reviewItem = createNode("div"),
        btnNext = createNode("div"),
        btnPrev = createNode("div");

      sliderWrapper.className = "swiper-wrapper";
      reviewItem.className = "swiper-slide review-item";
      btnNext.className = "swiper-button-next";
      btnPrev.className = "swiper-button-prev";

      reviewItem.innerHTML = `
                  <div class="review-desc">
                    ${review.data.feedback[0].text}
                  </div>
                  <hr class="review-line" />
                  <div class="review-author">
                    <div class="review-author__img">
                      <img src="${review.data.image.url}" alt="" />
                    </div>
                    <div class="review-author__name">
                      ${review.data.author[0].text}
                    </div>
                  </div>   
      `;

      append(slider, sliderWrapper);
      append(sliderWrapper, reviewItem);
      append(slider, btnNext);
      append(slider, btnPrev);

      const swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    });
  });
});

let tabElements = [...document.querySelectorAll("[data-tab]")],
  current = 0;

tabElements.map((el, i) => {
  el.addEventListener("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    getCategoryProjects(el.dataset.tab);
  });
});

let loading = false;

const tl2 = new TimelineLite({ paused: true });
function getCategoryProjects(category) {
  prismic.then((api) => {
    const projects = PrismicJS.Predicates.at("document.type", "project");
    const byCategory = PrismicJS.Predicates.at("my.project.category", category);
    const contentBox = document.getElementById("tab-content-row");

    if (contentBox.hasChildNodes) {
      contentBox.innerHTML = " ";
    }

    api.query([projects, byCategory]).then((response) => {
      loading = true;

      if (response.results.length == 0) {
        contentBox.innerHTML == "sorry";
      }

      response.results.map((project) => {
        const projectItem = createNode("div");
        projectItem.innerHTML = `
                  
                      <div class="tab-item">
                          <div class="tab-item-img">
                              <img src="${project.data.image.url}" alt="" />
                          </div>
                          <div class="tab-item-info">
                            <div class="tab-item-title">${project.data.name[0].text}</div>
                            <div class="tab-item-route">Мобильное приложение</div>
                            <div class="tab-item-additional">
                              <div class="tab-item-duration">
                                <img src="assets/calendar.svg"/>
                              <span>10 Days / 9 Nights</span></div>
                              <div class="tab-item-price">from $900</div>

                      
                            </div>

                              <a href="#" class="more-btn">View details <img src="assets/arrow-right.svg"/> </a> 
                      
                          </div>
                          
                      </div>
          `;
        projectItem.className = "col-sm-4";
        // remove(contentBox, loader);
        append(contentBox, projectItem);
      });

      loading = false;
      console.log("loaded");
      tl2.staggerTo(".tab-item", 1, { autoAlpha: 1, y: 0, opacity: 1 }, 0.1);
      // tl2.play();
      // tl2.restart();
    });
  });
}

window.onload = function() {
  tabElements[0].className = "active";
  this.getCategoryProjects("mobile");
};
