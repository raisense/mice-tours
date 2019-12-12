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
  console.log(type);
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
        result.innerHTML = response.results_size;

        switch (type) {
          case "hotel":
            response.results.map((project) => {
              const projectItem = createNode("div");
              console.log(mainLang);

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
              projectItem.className = "col-xs-12 col-sm-6 col-md-4";
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
              projectItem.className = "col-xs-12 col-sm-6 col-md-4";
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
              projectItem.className = "col-xs-12 col-sm-6 col-md-4";
              append(contentBox, projectItem);
            });
            break;
        }
        // response.results.map((item) => {
        //   console.log(item);
        //   let el = createNode("div");
        //   el.className = "col-sm-4";
        //   el.innerHTML = `
        //     <div class="tab-item">
        //         <div class="tab-item-img">
        //             <img src="${
        //               item.data.image
        //                 ? item.data.image.url
        //                 : item.data.transport_image
        //                 ? item.data.transport_image.url
        //                 : item.data.restaurant_image.url
        //             }" alt="">
        //         </div>
        //         <div class="tab-item-info">
        //             <div class="tab-item-title">${item.data.name[0].text}</div>
        //             <div class="rating">
        //                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
        //                         stroke="#B5287C" />
        //                 </svg>
        //                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
        //                         stroke="#B5287C" />
        //                 </svg>
        //                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
        //                         stroke="#B5287C" />
        //                 </svg>
        //                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
        //                         stroke="#B5287C" />
        //                 </svg>
        //                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M5 1.12978L6.0211 3.19874L6.13743 3.43446L6.39756 3.47226L8.6808 3.80403L7.02864 5.4145L6.8404 5.59798L6.88484 5.85707L7.27486 8.13108L5.23267 7.05743L5 6.93511L4.76733 7.05743L2.72514 8.13108L3.11516 5.85707L3.1596 5.59798L2.97136 5.4145L1.3192 3.80403L3.60244 3.47226L3.86257 3.43446L3.9789 3.19874L5 1.12978Z"
        //                         stroke="#B5287C" />
        //                 </svg>
        //             </div>
        //             <div class="region">
        //                 ${item.data.region || item.data.location_region || ""}
        //             </div>
        //             <div class="address">
        //                 <img src="/assets/location.svg">
        //                 <span>${
        //                   item.data.address
        //                     ? item.data.address
        //                     : item.data.adress
        //                     ? item.data.adress[0].text
        //                     : ""
        //                 }</span>
        //             </div>
        //             <div class="additional-info">
        //                 ${getCorrectPrice(mainLang, item.data.price)}
        //             </div>
        //         </div>
        //     </div>
        //   `;
        //   console.log(getCorrectPrice(mainLang, item.data.price));
        //   append(row, el);
        //   result.style.display = "block";

        //   // run function to format rating starts
        //   ratingStar(document.querySelector(".rating"), item.data.hotel_rating);
        // });

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

function ratingStar(svg, rating) {
  const starElements = [...svg.childNodes].filter((el, i) => i % 2 != 0);

  // console.log(starElements);

  starElements.map((star, i) => {
    // while (i + 1 != rating) {
    //   console.log(star);
    //   // star.style.fill = "#B5287C";
    // }
    // switch (rating) {
    //   case rating <= 5 && rating > 4 && i <= 5:
    //     star.style.fill = "#B5287C";
    //     break;
    //   case rating <= 4 && rating > 3 && i <= 4:
    //     star.style.fill = "#B5287C";
    //     break;
    //   case rating <= 3 && rating > 2:
    //   default:
    //     break;
    // }
  });

  // console.log(stars);
}

/// trigger tab elements

let tabElements = [...document.querySelectorAll("[data-tab]")];

tabElements.map((el, i) => {
  el.addEventListener("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    getCards(el.dataset.tab);
  });
});

document.onreadystatechange = function(e) {
  if (document.readyState === "complete") {
    tabElements.filter((el) => el.dataset.tab == current)[0].className =
      "active";
    //dom is ready, window.onload fires later
  }
};

window.onload = function() {
  this.getCards(current);
};
