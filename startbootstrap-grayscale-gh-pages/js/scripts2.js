function setLanguage(e) {
    "fa" === e
        ? (document.querySelectorAll(".lang-en").forEach((e) => e.classList.remove("active-lang")),
          document.querySelectorAll(".lang-fa").forEach((e) => e.classList.add("active-lang")))
        : (document.querySelectorAll(".lang-fa").forEach((e) => e.classList.remove("active-lang")),
          document.querySelectorAll(".lang-en").forEach((e) => e.classList.add("active-lang"))),
        localStorage.setItem("siteLanguage", e);
}
function renderArticles() {
    (containerEn.innerHTML = ""), (containerFa.innerHTML = "");
    let e = document.body.classList.contains("lang-en");
    e
        ? articles.forEach((e) => {
              containerEn.innerHTML += `\n        <div class="news-card">\n          <div class="image2" style="background-image:url('${e.image}')"></div>\n          <div class="content2">\n            <a href="news.html?id=${e.id}">\n              <span class="title2">${e.title}</span>\n            </a>\n            <p class="desc2">${e.desc}</p>\n            <a class="action2" href="news.html?id=${e.id}">\n              Find out more <span aria-hidden="true">→</span>\n            </a>\n          </div>\n        </div>\n      `;
          })
        : articles2.forEach((e) => {
              containerFa.innerHTML += `\n        <div class="news-card">\n          <div class="image2" style="background-image:url('${e.image}')"></div>\n          <div class="content2">\n            <a href="news.html?id=${e.id}">\n              <span class="title2">${e.title}</span>\n            </a>\n            <p class="desc2">${e.desc}</p>\n            <a class="action2" href="news.html?id=${e.id}">\n              مشاهده بیشتر <span aria-hidden="true">→</span>\n            </a>\n          </div>\n        </div>\n      `;
          });
}
window.addEventListener("load", () => {
    const e = document.querySelector(".loader");
    e.classList.add("loader-hidden"),
        e.addEventListener("transitionend", () => {
            e.remove();
        });
}),
    window.addEventListener("DOMContentLoaded", (e) => {
        var n = function () {
            const e = document.body.querySelector("#mainNav");
            e && (0 === window.scrollY ? e.classList.remove("navbar-shrink") : e.classList.add("navbar-shrink"));
        };
        n(), document.addEventListener("scroll", n);
        const t = document.body.querySelector("#mainNav");
        t && new bootstrap.ScrollSpy(document.body, { target: "#mainNav", rootMargin: "0px 0px -40%" });
        const a = document.body.querySelector(".navbar-toggler"),
            i = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
        i.map(function (e) {
            e.addEventListener("click", () => {
                "none" !== window.getComputedStyle(a).display && a.click();
            });
        });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        function e() {
            const slider = document.querySelector(".slider");
            if (!slider) return;
          
            let list = slider.querySelector(".list");
            let items = slider.querySelectorAll(".list .item");
            let dots = slider.querySelectorAll(".dots li");
            let prev = document.getElementById("prev");
            let next = document.getElementById("next");
            let prg = document.getElementById("prg");
            let prgTitle = document.getElementById("prg-title");
            let prg2 = document.getElementById("prg2");
            let prgTitle2 = document.getElementById("prg-title2");
          
            if (items.length === 0) return;
          
            let active = 0;
            let autoSlide; // 🔹 تایمر خودکار اینجا تعریف می‌شود
          
            // ----- متن‌ها -----
            let titles_en = [
                "<b>Borujerd Textile</b><br>Energy audit aimed at reducing water, gas and electricity waste in the Borujerd textile factory complex",
                "<b>South Pars Gas Industries</b><br>Hydraulic and Thermodynamic Simulation of the Steam Condensate Network in the Sulfur Recovery",
                "<b>Niroo Research Institute</b><br>Value Engineering-Based Roadmap for Solar Desalination Development in Iran: Techno-Economic Assessment of PV-RO, PTC-MED, and PTC-MSF Systems",
                "<b>Imam Khomeini University of Nowshahr</b><br>Design of a Shipboard Power and Freshwater Generation System Using Engine Jacket Water Waste Heat",
                "<b>Bandar Imam Petrochemical Co.</b><br>Energy Monitoring System for BIPC",
                "<b>The National Iranian oil products Distribution Company (NIOPDC)</b><br>Recycling of oil depot wastewater",
                "<b>Itok Company</b><br>Pollution control from liquid fuels",
            ];
            let texts_en = [
                "<br>In the first phase of the project, the exhaust gas of the boilers was examined with the help of a flue gas analyzer, and as a result, by providing solutions, the intensity of gas consumption was reduced and the quality of combustion was improved. One of the side results of this issue is the reduction of CO<sub>2</sub> and NO<sub>x</sub> emission rates.In the second phase, using energy audits, solutions were proposed to improve the thermal losses of textile factories, and a development plan based on solar energy and RO desalination was also presented",
                "Hydraulic and thermodynamic simulation of the overall steam condensate collection network of the sulfur recovery unit in phase 1 of the South Pars Refinery using Aspen HYSYS software.<br><br> Identification of sensitive points in losses and evaluation of steam traps, simulation of the steam production and consumption network of the SRU section.<br><br>  Providing solutions and their technical-dynamic evaluation to reduce steam thermal losses and condensate lines.",
                "<br> With the help of value engineering, a comprehensive potential assessment was done to develop a road map of Iran's desalination plants. This method can be developed for all countries.<br> PV-RO is identified as the best system for freshwater production in most Iranian cities.<br> Zahedan is the most suitable city for constructing PTC-MED and PTC-MSF systems.",
                "Design of power and fresh water generation system on the ship<br> This device can produce from 0.5 to 12 m3/day freshwater by heat of jacket water at 80C.<br> The advantage of this unit over reverse osmosis (RO) is resistance to high salinity, no need for maintenance with a short period, use of waste heat rather than generated electricity.<br> A desalination unit designed for use on ships receives its thermal energy solely from the engine jacket water.",
                "HEBP is leading the energy consulting and system design for a comprehensive monitoring solution at the BIPC.<br> The project's core goal is to significantly boost energy efficiency, optimize utility consumption, and establish a robust framework for data-driven decision-making. <br>Our work involves a thorough analysis of the facility's existing diagrams to identify key performance indicators (KPIs). We are then developing software architectural maps and executing the preliminary design of intuitive, real-time energy monitoring dashboards. These tools will provide actionable insights to",
                " Greywater recovery<br> Using RO desalination<br>Reducing water consumption and waste<br> Power generation using modern organic Rankine systems<br> Simultaneous Cogeneration of power and fresh water",
                " Providing a new solution for removing sulfur dioxide gases from industrial chimneys<br> Production of solid sulfur from sulfur dioxide gas for use in industry<br> National Top Design in the Rah Neshan Competition",
            ];
          
            let titles_fa = [
                "<b>نساجی بروجرد</b><br><br>ممیزی انرژی مجموعه کارخانه‌جات نساجی بروجرد",
                "<b>صنایع گاز پارس جنوبی</b><br><br>شبیه‌سازی هیدرولیکی و ترمودینامیکی شبکه کندانس بخار در واحد بازیافت گوگرد",
                "<b>پژوهشگاه نیرو</b><br><br>نقشه‌راه توسعه آب شیرین‌ کن خورشیدی در ایران مبتنی بر مهندسی ارزش",
                "<b>دانشگاه امام خمینی نوشهر</b><br><br>طراحی سیستم تولید آب شیرین روی کشتی با استفاده از گرمای اتلافی",
                "<b> پتروشیمی بندر امام </b><br><br>سامانه مانیتورینگ انرژی برای مجتمع پتروشیمی بندر امام خمینی",
                "<b>شرکت پخش و پالایش </b><br><br>بازچرخانی پساب انبار نفت",
                "<b>شرکت ایتوک</b><br><br>کنترل آلودگی ناشی از سوخت های مایع ",
            ];
            let texts_fa = [
                "<br> در گام اول کار ، داده های مورد نیاز شامل دما ها ، دبی ها و حتی غلظت گاز های خروجی از دودکش ها جمع آوری گردید. در گام دوم با بررسی سناریو های ممکن به ارائه گام های اجرایی جهت افزایش راندمان انرژی و کاهش آلاینده های زیست محیطی پرداخته شد. در این راهکار ها بازیابی حرارت اتلافی ، استفاده از انرژی خورشیدی و توسعه واحد نمک زدایی مورد توجه قرار گرفت.",
                "<br>شبیه‌سازی هیدرولیکی و ترمودینامیکی شبکه کلی جمع‌آوری میعانات بخار پالایشگاه در واحد بازیابی گوگرد فاز ۱ پالایشگاه پارس جنوبی با استفاده از نرم‌افزار Aspen HYSYS. شناسایی نقاط حساس در تلفات و ارزیابی تله‌های بخار، شبیه‌سازی شبکه تولید و مصرف بخار بخش SRU. ارائه راهکارها و ارزیابی فنی-دینامیکی آن‌ها برای کاهش تلفات حرارتی بخار و خطوط میعانات.",
                "<br> با کمک مهندسی ارزش، یک ارزیابی پتانسیل جامع برای تدوین نقشه راه واحد های آب شیرین‌کن ایران انجام شد.. PV-RO به عنوان بهترین سیستم برای تولید آب شیرین در اکثر شهرهای ایران شناخته شده است. زاهدان مناسب‌ترین شهر برای ساخت سیستم‌های PTC-MED و PTC-MSF است.",
                "<br> این دستگاه می‌تواند روزانه از ۰.۵ تا ۱۲ متر مکعب آب شیرین با حرارت آب خنک کن موتور در دمای ۸۰ درجه سانتی‌گراد تولید کند. مزیت این واحد نسبت به اسمز معکوس (RO)، مقاومت در برابر شوری بالا، عدم نیاز به نگهداری با دوره کوتاه، استفاده از گرمای هدر رفته به جای برق تولیدی است. قابلیت نصب در فضایی به ابعاد ۳ متر مکعب است.",
                "<br> مشاوره انرژی و طراحی سیستم مانیتورینگ برای مجتمع پتروشیمی بندر امام گام بزرگی در راستای شفافیت جریان اقتصاد انرژی بود. هدف اصلی پروژه، افزایش چشمگیر بهره‌وری انرژی، بهینه‌سازی مصرف تأسیسات و ایجاد یک چارچوب قوی برای تصمیم‌گیری مبتنی بر داده است. دامنه کاری  شامل تحلیل دقیق نمودارهای فرآیند و تأسیسات موجود برای شناسایی شاخص‌های کلیدی عملکرد است. توسعه داشبوردهای شفاف جریان انرژی و مصرف خوراک و تولید محصولات به شکل یکپارچه از جمله خروجی های این پروژه بوده است. این ابزارها بینش‌های عملی برای توانمندسازی مدیریت عملیاتی و پیشبرد بهبودهای پایدار فراهم خواهند کرد.",
                "<br>بازیابی آب خاکستری<br>استفاده از آب شیرین کن RO<br>کاهش مصرف آب و هدر رفت آن <br> تولید توان با استفاده از سامانه های نوین رانکین آلی <br> تولید همزمانی توان و آب شیرین",
                "<br>ارائه راهکار نوین برای حدف گازهای گوگرد دی اکسید از دودکش صنایع<br>تولید گوگرد جامد حاصل از گاز گوگرد دی اکسید برای استفاده در صنعت<br> طرح برتر ملی در مسابقات ره نشان",
            ];
          
            let lastIndex = items.length - 1;
          
            function reloadSlider() {
                let offset = items[active].offsetLeft;
                list.style.left = -offset + "px";
              
                let lastActiveDot = slider.querySelector(".dots li.active");
                if (lastActiveDot) lastActiveDot.classList.remove("active");
                dots[active].classList.add("active");
              
                // 🔹 همیشه هر دو زبان رو آپدیت می‌کنیم
                if (prg) prg.innerHTML = texts_en[active];
                if (prgTitle) prgTitle.innerHTML = titles_en[active];
                if (prg2) prg2.innerHTML = texts_fa[active];
                if (prgTitle2) prgTitle2.innerHTML = titles_fa[active];
              
                // 🔹 هر بار ری‌لود اسلایدر بشه، تایمر ریست می‌شه
                resetTimer();
              }
          
            // 🔹 تابع ریست تایمر
            function resetTimer() {
              if (autoSlide) clearInterval(autoSlide); // تایمر قبلی حذف می‌شود
              autoSlide = setInterval(() => {
                next.click(); // حرکت خودکار به بعدی
              }, 10000); // هر 10 ثانیه
            }
          
            // 🔹 دکمه بعدی
            next.onclick = function () {
              active = active + 1 > lastIndex ? 0 : active + 1;
              reloadSlider();
            };
          
            // 🔹 دکمه قبلی
            prev.onclick = function () {
              active = active - 1 < 0 ? lastIndex : active - 1;
              reloadSlider();
            };
          
            // 🔹 کلیک روی دات‌ها
            dots.forEach((li, key) => {
              li.addEventListener("click", function () {
                active = key;
                reloadSlider();
              });
            });
          
            // اجرای اولیه
            reloadSlider();
          }
          
        function n(e) {
            "fa" === e
                ? (document.body.classList.remove("lang-en"),
                  document.querySelectorAll(".lang-en").forEach((e) => e.classList.remove("active-lang")),
                  document.querySelectorAll(".lang-fa").forEach((e) => e.classList.add("active-lang")))
                : (document.body.classList.add("lang-en"),
                  document.querySelectorAll(".lang-fa").forEach((e) => e.classList.remove("active-lang")),
                  document.querySelectorAll(".lang-en").forEach((e) => e.classList.add("active-lang"))),
                localStorage.setItem("siteLanguage", e),
                t(),
                renderArticles();
        }
        let t = () => {};
        const a = document.getElementById("langToggle");
        a &&
            a.addEventListener("click", () => {
                const e = document.body.classList.contains("lang-en"),
                    t = e ? "fa" : "en";
                n(t);
            }),
            e();
        const i = localStorage.getItem("siteLanguage") || "en";
        n(i);
    }),
    document.addEventListener("DOMContentLoaded", () => {
        const e = document.querySelector(".stats-section");
        if (!e) return;
        const n = (e) => {
            const n = +e.getAttribute("data-target"),
                t = 3e3;
            let a = 0;
            const i = n / (t / 16),
                o = () => {
                    (a += i),
                        a < n
                            ? ((e.innerText = Math.ceil(a)), requestAnimationFrame(o))
                            : ((e.innerText = n),
                              "counter1" === e.id && (e.innerText = `${n}+`),
                              "counter2" === e.id && (e.innerText = `${n}kW+`),
                              "counter3" === e.id && (e.innerText = `${n}+`));
                };
            o();
        };
        let t = !1;
        const a = new IntersectionObserver(
            (e) => {
                e[0].isIntersecting &&
                    !t &&
                    ((t = !0),
                    n(document.getElementById("counter1")),
                    n(document.getElementById("counter2")),
                    n(document.getElementById("counter3")));
            },
            { threshold: 0.3 }
        );
        a.observe(e);
    });
const langToggle = document.getElementById("langToggle"),
    savedLang = localStorage.getItem("siteLanguage") || "en";
setLanguage(savedLang),
    langToggle &&
        langToggle.addEventListener("click", () => {
            const e = localStorage.getItem("siteLanguage") || "en",
                n = "en" === e ? "fa" : "en";
            setLanguage(n);
        });
const articles = [
        {
            id: 1,
            title: "Iran’s Oil Revenue Growth in 2024",
            desc: "According to OPEC statistics, Iran’s oil revenues in 2024 surpassed...",
            image: "../assets/img/5-en.png",
        },
        {
            id: 2,
            title: "Step-by-Step Process of Establishing a Solar Power Plant (Up to 200 kW)",
            desc: "The development of small-scale solar power plants (up to 200 kW) in Iran follows...",
            image: "../assets/img/4-en.png",
        },
        {
            id: 3,
            title: "Regional Trends: Renewable Energy Development in Iran’s Neighboring Countries",
            desc: "A review of renewable energy trends in Iran’s neighboring countries shows that...",
            image: "../assets/img/3-en.png",
        },
        {
            id: 4,
            title: "Performance of Renewable Power Plants During Peak Summer Demand",
            desc: "Analysis of renewable power plant performance during last summer shows...",
            image: "../assets/img/2-en.png",
        },
        {
            id: 5,
            title: "Comprehensive Renewable Energy Atlases: Unlocking Iran’s Potential",
            desc: "With the publication of comprehensive renewable energy...",
            image: "../assets/img/1-en.png",
        },
    ],
    articles2 = [
        {
            id: 1,
            title: "رشد درآمد نفتی ایران در سال ۲۰۲۴",
            desc: " طبق آمار اوپک، درآمدهای نفتی ایران در سال ۲۰۲۴ پیشی گرفت از ...",
            image: "../assets/img/5-fa.png",
        },
        {
            id: 2,
            title: "فرآیند احداث نیروگاه خورشیدی (تا سقف ۲۰۰ کیلووات)",
            desc: "توسعه نیروگاه‌های خورشیدی مقیاس کوچک (تا ۲۰۰ کیلووات) در ایران به شرح زیر است...",
            image: "../assets/img/4-fa.png",
        },
        {
            id: 3,
            title: "روندهای منطقه‌ای: توسعه انرژی‌های تجدیدپذیر در کشورهای همسایه ایران",
            desc: "بررسی روند انرژی‌های تجدیدپذیر در کشورهای همسایه ایران نشان می‌دهد که...",
            image: "../assets/img/3-fa.png",
        },
        {
            id: 4,
            title: "عملکرد نیروگاه‌های تجدیدپذیر در اوج مصرف تابستان",
            desc: "تحلیل عملکرد نیروگاه‌های تجدیدپذیر در تابستان گذشته نشان می‌دهد...",
            image: "../assets/img/2-fa.png",
        },
        {
            id: 5,
            title: "اطلس‌های جامع انرژی‌های تجدیدپذیر: گشودن ظرفیت‌های ایران",
            desc: "با انتشار گزارش جامع انرژی‌های تجدیدپذیر...",
            image: "../assets/img/1-fa.png",
        },
    ],
    containerEn = document.getElementById("news-container-en"),
    containerFa = document.getElementById("news-container-fa");
renderArticles();

