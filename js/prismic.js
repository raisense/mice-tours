const reviews = document.querySelector(".reviews");

const prismic = PrismicJS.api("https://mice-tours.cdn.prismic.io/api/v2", {
  accessToken:
    "MC5YZTR2TlJFQUFMT0FhTkRQ.77-9Cijvv73vv71j77-9Y--_ve-_ve-_ve-_vS7vv73vv73vv73vv71FTe-_ve-_ve-_ve-_vVdV77-977-977-977-9Ge-_vX8"
});

prismic.then((api) => {
  const feedback = PrismicJS.Predicates.at("document.type", "feedback");
  const lang = {
    lang: mainLang == "en" ? "en-gb" : mainLang == "uz" ? "uz-uz" : mainLang
  };
  api.query(feedback, lang).then((response) => {
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

// MODAL
function getSpecificItem(id) {
  prismic.then((api) => {
    const lang = {
      lang: mainLang == "en" ? "en-gb" : mainLang == "uz" ? "uz-uz" : mainLang
    };
    api
      .query(PrismicJS.Predicates.at("document.id", id), lang)
      .then((response) => {
        const data = response.results[0].data;
        const modalBody = document.querySelector(".modal-body");
        const modalHeader = document.querySelector(".modal-header");
        const durationText = document.querySelector(".duration-text");
        const routineText = document.querySelector(".routine-text");
        const modalInfo = document.querySelector(".modal-body__info");
        const modalConditions = document.querySelector(".conditions-body");

        modalHeader.style.backgroundImage = `url('${data.image.url}')`;
        modalHeader.innerHTML = `<h1>${data.name[0].text}</h1>`;
        // modalConditions.innerHTML = `${data.conditions[0].text}`;
        durationText.innerHTML =
          data.tour_duration.length > 0 ? data.tour_duration[0].text : "";
        routineText.innerHTML = data.description[0].text;
        console.log(data);
        if (modalInfo.hasChildNodes()) {
          return;
        } else {
          data.info.map((el) => {
            if (el.type == "paragraph") {
              let p = createNode("p");
              p.innerHTML = el.text;
              append(modalInfo, p);
            } else if (el.type == "list-item") {
              let li = createNode("li");
              li.innerHTML = el.text;
              append(modalInfo, li);
            }
          });
        }

        if (modalConditions.hasChildNodes()) {
          return;
        } else {
          data.conditions.map((el) => {
            if (el.type == "paragraph") {
              let p = createNode("p");
              p.innerHTML = el.text;
              append(modalConditions, p);
            } else if (el.type == "list-item") {
              let li = createNode("li");
              li.innerHTML = el.text;
              append(modalConditions, li);
            }
          });
        }
      });
  });
}

const tl2 = new TimelineLite({ paused: true });
function getCategoryProjects(category) {
  const lang = {
    lang: mainLang == "en" ? "en-gb" : mainLang == "tr" ? "tr" : mainLang
  };
  const projects = PrismicJS.Predicates.at("document.type", category);
  const contentBox = document.getElementById("tab-content-row");

  prismic.then((api) => {
    if (contentBox.hasChildNodes) {
      contentBox.innerHTML = " ";
    }

    api.query(projects, lang).then((response) => {
      if (response.results.length == 0) {
        contentBox.innerHTML == "sorry";
      }

      switch (category) {
        case "project":
          response.results.map((project) => {
            const projectItem = createNode("div");
            console.log(mainLang);

            projectItem.innerHTML = `
                    
                        <div class="tab-item">
                            <div class="tab-item-img">
                                <img src="${project.data.image.url}" alt="" />
                            </div>
                            <div class="tab-item-info">
                              <div class="tab-item-title">${
                                project.data.name[0].text
                              }</div>
                              <div class="tab-item-route">${
                                project.data.description[0].text
                              }</div>
                              <div class="tab-item-additional">
                                <div class="tab-item-duration">
                                  <img src="assets/calendar.svg"/>
                                <span>${
                                  project.data.tour_duration[0]
                                    ? project.data.tour_duration[0].text
                                    : ""
                                }</span></div>
                                <div class="tab-item-price">${
                                  mainLang == "en"
                                    ? "from $"
                                    : mainLang == "ru"
                                    ? "от $"
                                    : ""
                                }${project.data.price}${
              mainLang == "tr" ? "$' dan başlıyor" : ""
            }</div>                      
                              </div>
  
                                <a href="#" data-href="" onclick="getSpecificItem('${
                                  project.id
                                }')" class="more-btn" data-toggle="modal" data-target="#modal">${
              mainLang == "en"
                ? "View details"
                : mainLang == "tr"
                ? "Detayları göster"
                : "Посмотреть детали"
            }<img src="assets/arrow-right.svg"/> </a> 
                        
                            </div>
                            
                        </div>
            `;
            projectItem.className = "col-xs-12 col-sm-6 col-md-4 ";
            append(contentBox, projectItem);
          });

          break;
        case "hotel":
          response.results.map((project) => {
            const projectItem = createNode("div");
            console.log(mainLang);

            projectItem.innerHTML = `
                      
                          <div class="tab-item">
                              <div class="tab-item-img">
                                  <img src="${project.data.image.url}" alt="" />
                              </div>
                              <div class="tab-item-info">
                                <div class="tab-item-title">${
                                  project.data.name[0].text
                                }</div>
                                <div class="rating">
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
                                </svg>
                            </div>
                            <div class="region">
                                ${project.data.region}
                            </div>
                            <div class="address">
                                <img src="/assets/location.svg">
                                <span>${project.data.address}</span>
                            </div>
                            <div class="additional-info">
                                ${getCorrectPrice(mainLang, project.data.price)}
                              
                            </div>
                              
                          </div>
              `;
            projectItem.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
            append(contentBox, projectItem);
          });
          break;

        case "conference_hall":
          response.results.map((project) => {
            const projectItem = createNode("div");
            console.log(project);

            projectItem.innerHTML = `
                        
                            <div class="tab-item">
                                <div class="tab-item-img">
                                    <img src="${
                                      project.data.image.url
                                    }" alt="" />
                                </div>
                                <div class="tab-item-info">
                                  <div class="tab-item-title">${
                                    project.data.name[0].text
                                  }</div>
                                  
                              <div class="region">
                                  ${project.data.location_region}
                              </div>
                              <div class="address">
                                  <img src="/assets/location.svg">
                                  <span>${project.data.address}</span>
                              </div>
                              <div class="additional-info">
                              <img src="assets/person.svg">
                              ${project.data.volume} ${
              mainLang == "en"
                ? " people"
                : mainLang == "tr"
                ? " kişi"
                : " людей"
            }
                              </div>
                                
                            </div>
                `;
            projectItem.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
            append(contentBox, projectItem);
          });
          break;

        case "restaurant":
          response.results.map((project) => {
            const projectItem = createNode("div");
            console.log(project);

            projectItem.innerHTML = `
                          
                              <div class="tab-item">
                                  <div class="tab-item-img">
                                      <img src="${project.data.restaurant_image.url}" alt="" />
                                  </div>
                                  <div class="tab-item-info">
                                    <div class="tab-item-title">${project.data.name[0].text}</div>
                                    
                                <div class="region">
                                    ${project.data.region}
                                </div>
                                <div class="address">
                                    <img src="/assets/location.svg">
                                    <span>${project.data.adress[0].text}</span>
                                </div>   
                              </div>
                  `;
            projectItem.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
            append(contentBox, projectItem);
          });
          break;

        case "transpo":
          response.results.map((project) => {
            const projectItem = createNode("div");
            console.log(project);

            projectItem.innerHTML = `
                            
                                <div class="tab-item">
                                    <div class="tab-item-img">
                                        <img src="${
                                          project.data.image
                                            ? project.data.image.url
                                            : project.data.transport_image.url
                                        }" alt="" />
                                    </div>
                                    <div class="tab-item-info">
                                      <div class="tab-item-title">${
                                        project.data.name[0].text
                                      }</div>
                                      
                                    <div class="seats">
                                      <img src="/assets/person.svg">
                                      <span> ${
                                        mainLang == "en"
                                          ? "Number of seats: "
                                          : mainLang == "tr"
                                          ? "Koltukların sayısı: "
                                          : "Количество мест: "
                                      } ${project.data.seats}</span>
                                    </div>
                                    </div>   
                                </div>
                    `;
            projectItem.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
            append(contentBox, projectItem);
          });
          break;
      }

      gsap.from(".tab-item", {
        duration: 0.5,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: Power1.easOut
      });

      loading = false;
    });
  });
}

function handleRoute() {}

window.onload = function() {
  tabElements[0].className = "active";
  this.getCategoryProjects("project");
};
