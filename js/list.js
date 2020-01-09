const prismic = PrismicJS.api("https://mice-tours.cdn.prismic.io/api/v2", {
  accessToken:
    "MC5YZTR2TlJFQUFMT0FhTkRQ.77-9Cijvv73vv71j77-9Y--_ve-_ve-_ve-_vS7vv73vv73vv73vv71FTe-_ve-_ve-_ve-_vVdV77-977-977-977-9Ge-_vX8"
});
let current = localStorage.getItem("current") || "hotel";

function getCards(type) {
  // declare query type
  const contentType = PrismicJS.Predicates.at("document.type", type);
  // set proper language to match prismic language code
  const lang = {
    lang: mainLang == "en" ? "en-gb" : mainLang == "tr" ? "tr" : mainLang
  };

  let result = document.querySelector(".sort-result");
  // this is where prismic query actually done

  prismic.then((api) => {
    api.query(contentType, lang).then((response) => {
      // get cards list container so that's later we can push all elements inside this element
      const contentBox = document.querySelector(".list-row");
      // check if there's elements inside row
      if (contentBox.hasChildNodes) {
        //if so then remove all elements
        contentBox.innerHTML = " ";
      }

      //Check if there's actually response from api
      if (response.results != 0) {
        let size = response.results_size;
        result.innerHTML = `${
          mainLang == "en"
            ? size + " " + changeHeaderTitle() + "<span> are shown </span>"
            : mainLang == "tr"
            ? size + " " + changeHeaderTitle() + "<span> gösterildi </span>"
            : size + " " + changeHeaderTitle() + "<span> показаны </span>"
        }`;

        switch (type) {
          case "hotel":
            response.results.map((project) => {
              const projectItem = createNode("div");

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
                                  <div class="rating">
                                  ${getCorrectStars(project.data.hotel_rating)}
                                  
                              </div>
                              <div class="region">
                                  ${project.data.region}
                              </div>
                              <div class="address">
                                  <img src="assets/location.svg">
                                  <span>${project.data.address}</span>
                              </div>
                              <div class="additional-info">
                                  ${getCorrectPrice(
                                    mainLang,
                                    project.data.price
                                  )}
                                
                              </div>
                                
                            </div>
                `;
              projectItem.className = "col-xs-12 col-sm-6 col-md-4 ";
              append(contentBox, projectItem);
            });
            break;

          case "conference_hall":
            response.results.map((project) => {
              const projectItem = createNode("div");

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
                                    <img src="assets/location.svg">
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
              projectItem.className = "col-xs-12 col-sm-6 col-md-4";
              append(contentBox, projectItem);
            });
            break;

          case "restaurant":
            response.results.map((project) => {
              const projectItem = createNode("div");

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
                                      <img src="assets/location.svg">
                                      <span>${project.data.adress[0].text}</span>
                                  </div>   
                                </div>
                    `;
              projectItem.className = "col-xs-12 col-sm-6 col-md-4";
              append(contentBox, projectItem);
            });
            break;

          case "transpo":
            response.results.map((project) => {
              const projectItem = createNode("div");

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
              projectItem.className = "col-xs-12 col-sm-6 col-md-4";
              append(contentBox, projectItem);
            });
            break;
        }

        changeHeaderTitle();

        gsap.from(".tab-item", {
          duration: 0.5,
          y: 30,
          opacity: 0,
          stagger: 0.2,
          ease: Power1.easOut
        });

        // set current category
        localStorage.setItem("current", type);
      } else {
        result.innerHTML = "";
        row.innerHTML = "<div><img src='assets/images/empty.jpg' /></div>";
        localStorage.setItem("current", type);
      }
    });
  });
}

/// trigger tab elements

let tabElements = [...document.querySelectorAll("[data-tab]")];

tabElements.map((el, i) => {
  el.addEventListener("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if (!el.dataset.tab == "gallery") {
      getCards(el.dataset.tab);
    }
  });
});

document.onreadystatechange = function(e) {
  if (document.readyState === "complete") {
    tabElements.filter((el) => el.dataset.tab == current)[0].className =
      "active";
    //dom is ready, window.onload fires later
  }
};

function changeHeaderTitle() {
  document.querySelector(".list-title").innerHTML = document.querySelector(
    ".active"
  ).innerHTML;
  return document.querySelector(".list-title").innerHTML;
}

window.onload = function() {
  this.getCards(current);
};
