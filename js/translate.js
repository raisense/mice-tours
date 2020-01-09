let mainLang = localStorage.getItem("lang") || "en";

i18next.init(
  {
    lng: mainLang,
    resources: {
      tr: {
        translation: {
          heroText1: "ÖZBEKİSTAN",
          heroText2: "TOPLANTILAR KONFERANS SERGİLERİ",
          heroText3: "ORGANİZATÖR",
          gallery: "Galeri",
          cards: [
            {
              cardTitle: "TOPLANTILAR",
              cardDesc: `<strong> MICE TOURS </strong> her tür iş toplantısına ev sahipliği yaptı ve mekanlarımızda yaşayacağınız kolaylık ve rahatlık eşsiz. Özbekistan'da bulunan MICE uzmanlarından oluşan özel ekipler, etkinliklerini ve idari uzmanlıklarını, çok tatmin edici ve organize bir toplantı programı ve programı için bir işletmenin gereksinimleriyle birleştirir.`
            },
            {
              cardTitle: "TEŞVİK",
              cardDesc: `<strong> MICE TOURS </strong>’un Teşvik Turları Bölümü, titizlikle planlanmış ve işletilen turlar aracılığıyla şirket yöneticileri, bayiler vb. İçin çok çeşitli kurumsal teşvik paketleri sunmaktadır.`
            },
            {
              cardTitle: "KONFERANS",
              cardDesc: `Biz <strong>MICE TOURS</strong> olarak Özbekistan'da MICE organizasyonunda profesyoneliz ve dünyanın herhangi bir yerinde işletmelere geniş bir seçenek yelpazesi sunabiliyoruz. Siz mekanı seçtiniz ve uzmanlarımız sorunsuz ve unutulmaz bir konferans sağlamak için tüm lojistiği yürüteceklerdir.`
            },
            {
              cardTitle: "ETKİNLİKLER",
              cardDesc: `İşletmeler daima ürünlerinin piyasaya sürülmesini ve kurumsal partilerin rahatlatıcı ortamlarda yapılmasını isterler. <strong> MICE TOURS </strong>, dağlar, çöller, adalar, gezi salonları ve hatta geleneksel bir otel gibi yerlerde bir işletme için bu tür organizasyonlar düzenleyebilir.`
            }
          ],
          about:
            "Siz veya kuruluşunuz konferans, seminer, personel teşvik programı mı yoksa bir sergiye mi katılıyorsunuz? Bizimle konuş. MICE TOURS uzmanı bir MICE (Toplantılar, Teşvikler, Konferanslar ve Sergiler) Yönetim Şirketidir ve bu olayları bir noktaya kadar halletmek için tecrübe ve kaynaklarla donanmıştır. Otel rezervasyonlarınızı yapabilir ve verimli bir şekilde araba kiralama konusunda yardımcı olabiliriz. Seyahat şirketimizin kuruluşlara sunduğu diğer ilginç hizmetler ve iş grupları heyecan verici MICE TOURS.",
          tabNavigation: [
            "Portföy",
            "Oteller",
            "Konferans Salonları",
            "Restoranlar",
            "Taşıma",
            "Galeri"
          ],
          showAllButton: "Show all",
          clientFeedbackTitle: "<strong> İSTEMCİ </strong> GERİ BİLDİRİM",
          clientFeedbackSubtitle: "Mutlu Turistimizden Kelimeler",
          address: "Buhara caddesi 26, Taşkent Asya Turu 100123, Özbekistan",
          footerFormTitle:
            "Yardım veya ek bilgi için bizimle iletişime geçmekten çekinmeyin",
          footerFormInputs: ["Ad Soyad", "E-mail", "Konu", "Seyahat detayları"],
          formButton: "Gönder",
          footerInfo: ["All Rights Reserved", "Developed with love by"],
          modalItems: ["Süre", "Rutin"],
          modalConditionsTitle: "Conditions",
          modalFormTitle: "For more details, please leave a request",
          modalFormInputs: [
            "Ad Soyad",
            "Telefon numarası",
            "E-mail",
            "Gezginlerin sayısı",
            "Seyahat tarihi",
            "Seyahat detayları"
          ]
        }
      },
      ru: {
        translation: {
          heroText1: "ОРГАНИЗАТОР",
          heroText2: "ВСТРЕЧИ СТИМУЛИРУЮЩИЕ КОНФЕРЕНЦИОННЫЕ ВЫСТАВКИ",
          heroText3: "УЗБЕКИСТАНА",
          gallery: "Галлерея",
          cards: [
            {
              cardTitle: "МИТИНГИ",
              cardDesc: `<strong> MICE TOURS </strong>принимал каждый тип
                               деловые встречи и легкость и удобство вы будете
                                Опыт работы на наших площадках не имеет аналогов. Выделенные команды
                                профессионалы MICE в Узбекистане сочетают свою эффективность
                                и административная экспертиза с требованиями бизнеса
                                делая для очень удовлетворительного и организованного графика встреч и
                                программа.`
            },
            {
              cardTitle: "ИНСЕНТНЫЙ",
              cardDesc: `Отдел инсентив-туров <strong>MICE TOUR </strong>
                                предлагает широкий выбор корпоративных пакетов стимулов
                                для руководителей компаний, дилеров и т. д. тщательно
                                запланированные и управляемые туры и`
            },
            {
              cardTitle: "КОНФЕРЕНЦИИ",
              cardDesc: `Мы в <strong> MICE TOURS </ strong> являемся профессионалами в
                            организуют MICE в Узбекистане и способны обеспечить
                            предприятия с широким выбором мест в любой части
                            Глобус. Вы выбираете место, и наши специалисты выполнят
                            вся логистика для обеспечения плавного и незабываемого
                            конференция.`
            },
            {
              cardTitle: "СОБЫТИЕ",
              cardDesc: ` Компании всегда хотят, чтобы их продукты были запущены, а корпоративные
                            вечеринки проводятся в расслабляющей обстановке.
                            <strong> MICE TOURS </ strong> могут организовать такие мероприятия для
                            бизнес в таких местах, как горы, пустыни, острова, круиз
                            комнаты отдыха и даже традиционный отель.`
            }
          ],
          about:
            "Планируете ли вы или ваша организация конференцию, семинар, программу мотивации персонала или участвуете в выставке? Поговори с нами. MICE TOURS - это специализированная управляющая компания MICE (Встречи, Стимулы, Конференции и Выставки), обладающая опытом и ресурсами для управления этими событиями. Мы поможем вам забронировать отель и поможем вам с арендой автомобиля. Другие интересные услуги, которые наша туристическая компания может предложить организациям и бизнес-группам, - это захватывающие MICE TOURS.",
          tabNavigation: [
            "Портфолио",
            "Oтели",
            "Конференционный залы",
            "Рестораны",
            "Транспорт",
            "Галлерея"
          ],
          showAllButton: "Показать все",
          clientFeedbackTitle: "ОБРАТНАЯ СВЯЗЬ КЛИЕНТА",
          clientFeedbackSubtitle: "Слова от нашего счастливого туриста",
          address: "Ул. Бухара, 26, Ташкент, Азиатур 100123, Узбекистан",
          footerFormTitle:
            "Не стесняйтесь обращаться к нам за помощью или дополнительной информацией",
          footerFormInputs: [
            "Полное имя",
            "Эл. почта",
            "Тема",
            "Детали путешествия"
          ],
          formButton: "Отправлять",
          footerInfo: ["All Rights Reserved", "Developed with love by"],
          modalItems: ["Продолжительность", "Рутин"],
          modalConditionsTitle: "Условия",
          modalFormTitle:
            "Для более подробной информации, пожалуйста, оставьте заявку",
          modalFormInputs: [
            "Полное имя",
            "Номер телефона",
            "Эл. почта",
            "Количество путешественников",
            "Дата путешествия",
            "Детали путешествия"
          ]
        }
      },
      en: {
        translation: {
          heroText1: "Uzbekistan",
          heroText2: "Meetings Incentives Conferencing Exhibitions",
          heroText3: "Organizer",
          gallery: "gallery",
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
          ],
          about:
            "Are you or your organization planning a conference, seminar, staff incentive program or participating in an exhibition? Talk to us. MICE TOURS is a specialist MICE (Meetings, Incentives, Conferences and Exhibitions) Management Company armed with the experience and resources to handle these events to a dot. We can get your hotel bookings done and assist you with car rentals efficiently. Other interesting services our travel company has to offer organizations and business groups are exciting MICE TOURS.",
          tabNavigation: [
            "Portfolio",
            "Hotels",
            "Conference Halls",
            "Restaurants",
            "Transport",
            "Gallery"
          ],
          showAllButton: "Show all",
          clientFeedbackTitle: "CLIENT FEEDBACK",
          clientFeedbackSubtitle: "Words From Our Happy Tourist",
          address: "Bukhara street 26, Tashkent Asiatour 100123, Uzbekistan",
          footerFormTitle:
            "Feel free to contact us for help or additional Info",
          footerFormInputs: [
            "Full Name",
            "E-mail",
            "Subject",
            "Travel details"
          ],
          formButton: "Send",
          footerInfo: ["All Rights Reserved", "Developed with love by"],
          modalItems: ["Duration", "Routine"],
          modalConditionsTitle: "Conditions",
          modalFormTitle: "For more details, please leave a request",
          modalFormInputs: [
            "Full Name",
            "Phone number",
            "E-mail",
            "Number of travelers",
            "Date of travel",
            "Travel details"
          ]
        }
      }
    }
  },
  function(err, t) {
    switch (window.location.pathname) {
      case "/list.html":
        updateContentForList();
        break;
      case "/index.html":
        updateContent();
        break;
      case "/gallery.html":
        updateGallery();
      default:
        "";
        break;
    }
  }
);

function updateContent() {
  // Change hero text

  // Hero title
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

  // About

  document.querySelector(".about-txt").innerHTML = i18next.t("about");

  // tab-items

  [...document.querySelectorAll("[data-tab]")].map((tab, i) => {
    if (tab.dataset.tab != "gallery") {
      tab.innerHTML = i18next.t("tabNavigation", { returnObjects: true })[i];
    } else {
      tab.querySelector("a").innerHTML = i18next.t("tabNavigation", {
        returnObjects: true
      })[i];
    }
  });

  // feedback
  document.querySelector(".reviews-title").innerHTML = i18next.t(
    "clientFeedbackTitle"
  );
  document.querySelector(".reviews-subtitle").innerHTML = i18next.t(
    "clientFeedbackSubtitle"
  );

  // adress

  document.querySelector(".info-address").innerHTML = i18next.t("address");

  // form title

  document.querySelector(".footer-form-title").innerHTML = i18next.t(
    "footerFormTitle"
  );

  // form inputs

  [
    ...document
      .querySelector(".custom-form-footer")
      .querySelectorAll("[data-input]")
  ].map((input, i) => {
    input.setAttribute(
      "placeholder",
      i18next.t("footerFormInputs", { returnObjects: true })[i]
    );
  });

  document
    .querySelector('[type="submit"]')
    .setAttribute("value", i18next.t("formButton"));

  // footer

  // modal

  [...document.querySelectorAll(".modal-label")].map((el, i) => {
    el.innerHTML = i18next.t("modalItems", { returnObjects: true })[i];
  });

  document.querySelector("conditions-title");

  // Modal input

  [
    ...document
      .querySelector(".custom-form-modal")
      .querySelectorAll("[data-input]")
  ].map((input, i) => {
    input.setAttribute(
      "placeholder",
      i18next.t("modalFormInputs", { returnObjects: true })[i]
    );
  });

  changeLanguageBtn(mainLang);
}

function updateContentForList() {
  [...document.querySelectorAll("[data-tab]")].map((tab, i) => {
    tab.innerHTML = i18next.t("tabNavigation", { returnObjects: true })[i + 1];
  });

  document.querySelector(".info-item__txt").innerHTML = i18next.t("address");

  // form title

  document.querySelector(".footer-form-title").innerHTML = i18next.t(
    "footerFormTitle"
  );

  // form inputs

  [
    ...document
      .querySelector(".custom-form-footer")
      .querySelectorAll("[data-input]")
  ].map((input, i) => {
    input.setAttribute(
      "placeholder",
      i18next.t("footerFormInputs", { returnObjects: true })[i]
    );
  });

  document
    .querySelector('[type="submit"]')
    .setAttribute("value", i18next.t("formButton"));

  changeLanguageBtn(mainLang);
}

function updateGallery() {
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

  console.log(mainBtn);

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
