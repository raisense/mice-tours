const prismic = PrismicJS.api("https://mice-tours.cdn.prismic.io/api/v2", {
  accessToken:
    "MC5YZTR2TlJFQUFMT0FhTkRQ.77-9Cijvv73vv71j77-9Y--_ve-_ve-_ve-_vS7vv73vv73vv73vv71FTe-_ve-_ve-_ve-_vVdV77-977-977-977-9Ge-_vX8"
});

prismic.then((api) => {
  const galleryQuery = PrismicJS.Predicates.at("document.type", "galler");
  const lang = {
    lang: mainLang == "en" ? "en-gb" : mainLang == "uz" ? "uz-uz" : mainLang
  };
  api.query(galleryQuery, lang).then((response) => {
    const container = document.querySelector(".gallery-row");

    response.results.map((item) => {
      const imageItem = createNode("div");

      imageItem.innerHTML = `
      <div class="image">
          <a href="${item.data.image.url}">
        <img src="${item.data.image.url}" /></a>
        </div>
        
        <p class="title">${item.data.description}</p>
        `;
      imageItem.className = "col-xs-12 col-sm-6 col-md-4";
      container.appendChild(imageItem);
    });
  });
});
