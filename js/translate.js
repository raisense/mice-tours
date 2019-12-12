let mainLang = localStorage.getItem("lang") || "en";

i18next.init(
  {
    lng: mainLang,
    resources: {
      tr: {
        translation: {
          heroText1: "O'zbekiston",
          heroText2: "Kelajagi buyuk davlat",
          heroText3: "",
          cards: [
            {
              cardTitle: "UCHRASHUVLAR",
              cardDesc: `<strong> MICE TOURS </strong> has hosted every type of
                  business meetings and the ease and convenience you will
                  experience at our venues is unparalleled. Dedicated teams of
                  professionals in MICE in Uzbekistan combine their efficiency
                  and administrative expertise with a business’ requirements
                  making for a very satisfactory and organized meet schedule and
                  program.`
            },
            {
              cardTitle: "INSENTLAR",
              cardDesc: `<strong> MICE TOURS </strong>’s Incentive Tours Division
                  offers a wide-ranging choice of corporate incentive packages
                  for company executives, dealers etc. through meticulously
                  planned and operated tours and`
            },
            {
              cardTitle: "KONFERENSIYALAR",
              cardDesc: `We at <strong> MICE TOURS </strong> are professionals at
              organizing MICE in Uzbekistan and are capable of providing
              businesses with an extensive choice of venues in any part of
              the globe. You choose the venue and our experts will execute
              all the logistics to ensure a smooth and unforgettable
              conference.`
            },
            {
              cardTitle: "TADBIRLAR",
              cardDesc: ` Businesses always want their products launched and corporate
              parties conducted in relaxing settings.
              <strong> MICE TOURS </strong> can organize such events for a
              business at locations like mountains, deserts, islands, cruise
              lounges and even a traditional hotel.`
            }
          ]
        }
      },
      ru: {
        translation: {
          heroText1: "Узбекистан",
          heroText2: "hello-world 2",
          heroText3: "hello-world 3",
          cards: [
            {
              cardTitle: "МИТИНГИ",
              cardDesc: `<strong> MICE TOURS </strong> has hosted every type of
                  business meetings and the ease and convenience you will
                  experience at our venues is unparalleled. Dedicated teams of
                  professionals in MICE in Uzbekistan combine their efficiency
                  and administrative expertise with a business’ requirements
                  making for a very satisfactory and organized meet schedule and
                  program.`
            },
            {
              cardTitle: "ИНСЕНТНЫЙ",
              cardDesc: `<strong> MICE TOURS </strong>’s Incentive Tours Division
                  offers a wide-ranging choice of corporate incentive packages
                  for company executives, dealers etc. through meticulously
                  planned and operated tours and`
            },
            {
              cardTitle: "КОНФЕРЕНЦИИ",
              cardDesc: `We at <strong> MICE TOURS </strong> are professionals at
              organizing MICE in Uzbekistan and are capable of providing
              businesses with an extensive choice of venues in any part of
              the globe. You choose the venue and our experts will execute
              all the logistics to ensure a smooth and unforgettable
              conference.`
            },
            {
              cardTitle: "СОБЫТИЕ",
              cardDesc: ` Businesses always want their products launched and corporate
              parties conducted in relaxing settings.
              <strong> MICE TOURS </strong> can organize such events for a
              business at locations like mountains, deserts, islands, cruise
              lounges and even a traditional hotel.`
            }
          ]
        }
      },
      en: {
        translation: {
          heroText1: "Uzbekistan",
          heroText2: "Meetings Incentives Conferencing Exhibitions",
          heroText3: "Organizer",
          cards: [
            {
              cardTitle: "MEETINGS",
              cardDesc: `<strong> MICE TOURS </strong> has hosted every type of
                  business meetings and the ease and convenience you will
                  experience at our venues is unparalleled. Dedicated teams of
                  professionals in MICE in Uzbekistan combine their efficiency
                  and administrative expertise with a business’ requirements
                  making for a very satisfactory and organized meet schedule and
                  program.`
            },
            {
              cardTitle: "INCENTIVE",
              cardDesc: `<strong> MICE TOURS </strong>’s Incentive Tours Division
                  offers a wide-ranging choice of corporate incentive packages
                  for company executives, dealers etc. through meticulously
                  planned and operated tours and`
            },
            {
              cardTitle: "CONFERENCES",
              cardDesc: `We at <strong> MICE TOURS </strong> are professionals at
              organizing MICE in Uzbekistan and are capable of providing
              businesses with an extensive choice of venues in any part of
              the globe. You choose the venue and our experts will execute
              all the logistics to ensure a smooth and unforgettable
              conference.`
            },
            {
              cardTitle: "EVENTS",
              cardDesc: ` Businesses always want their products launched and corporate
              parties conducted in relaxing settings.
              <strong> MICE TOURS </strong> can organize such events for a
              business at locations like mountains, deserts, islands, cruise
              lounges and even a traditional hotel.`
            }
          ]
        }
      }
    }
  },
  function(err, t) {
    updateContent();
    // console.log(i18next.t("heroText1"));
  }
);

function updateContent() {
  // Change hero text

  [...document.querySelectorAll("[data-hero]")].map((el, i) => {
    el.innerHTML = i18next.t(`heroText${i + 1}`);
  });

  [...document.querySelectorAll(".card")].map((card, i) => {
    let cardElements = Array.from(card.childNodes),
      cardTitle = cardElements[1],
      cardDesc = cardElements[5];

    cardTitle.innerHTML = i18next.t("cards", { returnObjects: true })[
      i
    ].cardTitle;
    cardDesc.innerHTML = i18next.t("cards", { returnObjects: true })[
      i
    ].cardDesc;
  });

  changeLanguageBtn(mainLang);
}

// Additional functions

function changeLng(lng) {
  i18next.changeLanguage(lng);
  localStorage.setItem("lang", lng);
}

function append(parent, child) {
  parent.appendChild(child);
}

i18next.on("languageChanged", () => {
  const windowReload = new Promise((resolve, reject) => {
    resolve(window.location.reload());
  });

  windowReload.then(() => {
    setTimeout(() => {
      updateContent();
    }, 300);
  });
});

//change language button

function changeLanguageBtn(lng) {
  let mainBtn = document.getElementById("main-lang"),
    secondBtn = document.getElementById("second-lang"),
    thirdBtn = document.getElementById("third-lang");

  switch (lng) {
    case "en":
      mainBtn.innerHTML = "English";
      secondBtn.innerHTML = "<img class='flag' src='assets/tr.svg'/> Türkçe";
      thirdBtn.innerHTML = "<img class='flag' src='assets/ru.svg'/> Русский";

      secondBtn.addEventListener("click", () => changeLng("tr"));
      thirdBtn.addEventListener("click", () => changeLng("ru"));

      return;
    case "ru":
      mainBtn.innerHTML = "Русский";
      secondBtn.innerHTML = "<img class='flag' src='assets/us.svg'/> English";
      thirdBtn.innerHTML = "<img class='flag' src='assets/tr.svg'/> Türkçe";

      secondBtn.addEventListener("click", () => changeLng("en"));
      thirdBtn.addEventListener("click", () => changeLng("tr"));
      return;
    case "tr":
      mainBtn.innerHTML = "Türkçe";
      secondBtn.innerHTML = "<img class='flag' src='assets/us.svg'/> English";
      thirdBtn.innerHTML = "<img class='flag' src='assets/ru.svg'/> Русский";

      secondBtn.addEventListener("click", () => changeLng("en"));
      thirdBtn.addEventListener("click", () => changeLng("ru"));
      return;

    default:
      return;
  }
}
