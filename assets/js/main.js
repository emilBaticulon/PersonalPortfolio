window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');




});


// Categories
// Frontend
// Design
const portfolios = [
    {
        id: 1,
        image: 'assets/img/portfolios/socially-nina-thumb.jpg',
        imageAlt: 'Socially Nina Website - Thumbnail Image',
        link: '#',
        title: 'Socially Nina',
        excerpt:"Socially Nina",
        category: [
            'frontend',
            'design',
        ],
        description: 'Years ago, before she created the &ldquo;Socially Nina&rdquo; brand, She spent days, nights and plenty of weekends working in corporate America, surrounded by co-workers and bosses that didn&apos;t care about her career trajectory and mental health.',
    },
    {
        id: 2,
        image: 'assets/img/portfolios/porsche-approved-thumb.jpg',
        imageAlt: 'Porsche Approved Australia - Thumbnail Image',
        link: '#',
        title: 'Porsche Approved Australia',
        category: [
            'frontend',
        ],
        excerpt:"Porsche Approved Australia",
        description: 'Fixed the underlying issues on CSS and reduce the number of HTML elements to reduce the document size, and I also help to make the website responsive.',
    },
    {
        id: 3,
        image: 'assets/img/portfolios/new-peugeot-thumb.jpg',
        imageAlt: 'Peugeot 5008 landing page - Thumbnail Image',
        link: '#',
        title: 'New Peugeot 5008',
        category: [
            'frontend',
        ],
        excerpt:"New Peugeot 5008 Landing Page",
        description: 'I created the page layout and the style of the website from scratch based on existing design requested by the client. I also help to make the website responsive and optimized performance.',
    },
    {
        id: 4,
        image: 'assets/img/portfolios/peugeot-configurator-thumb.jpg',
        imageAlt: 'Peugeot Configurator - Thumbnail Image',
        link: '#',
        title: 'Peugeot Configurator',
        category: [
            'frontend',
        ],
        excerpt:"Peugeot Configurator",
        description: 'Fixed the underlying issues on CSS and reduce the number of HTML elements to reduce the document size, and I also help to make the website responsive.',
    },
    {
        id: 5,
        image: 'assets/img/portfolios/ducati-melbourne-thumb.jpg',
        imageAlt: 'Ducati Melbourne - Thumbnail Image',
        link: '#',
        title: 'Ducati Melbourne West',
        category: [
            'frontend',
        ],
        excerpt:"Ducati Melbourne West",
        description: 'I helped a colleague to create the website layout and the style of the website from scratch based on existing design requested by the client. I also help to make the website responsive and optimized performance.',
    },
    {
        id: 6,
        image: 'assets/img/portfolios/psuk-landing-thumb.jpg',
        imageAlt: 'British College of Professional Styling Black Friday Landing Page - Thumbnail Image',
        link: '#',
        title: 'British College of Professional Styling',
        category: [
            'frontend',
        ],
        excerpt:"British College of Professional Styling Black Friday Landing Page",
        description: 'I created the page layout and the style of the website from scratch based on existing design requested by the client. I also help to make the website responsive and optimized performance.',
    },
    {
        id: 7,
        image: 'assets/img/portfolios/iduk-home-thumb.jpg',
        imageAlt: 'British College of Interior Design Home Page - Thumbnail Image',
        link: '#',
        title: 'British College of Interior Design',
        category: [
            'frontend',
        ],
        excerpt:"British College of Interior Design Home Page",
        description: 'I created the page layout and the style of the website from scratch based on existing design requested by the client. I also help to make the website responsive and optimized performance.',
    },
    {
        id: 8,
        image: 'assets/img/portfolios/iduk-open-graph-thumb.jpg',
        imageAlt: 'British College of Interior Design Open Graph Image - Thumbnail Image',
        link: '#',
        title: 'British College of Interior Design: OG Image',
        category: [
            'frontend',
        ],
        excerpt:"British College of Interior Design Open Graph Image",
        description: 'I designed the Open Graph Image for the website to increase the SEO ranking of the post and to increase the chance of clicking the image when viewers shared the page.',
    },
];

const recommends = [
    {
        id: 1,
        name: 'Christa Castillo',
        job: 'Online Marketing &amp; Analytics Specialist',
        link: 'https://www.linkedin.com/in/cpmcastillo/',
        img: "assets/img/recommends/christa.jpg",
        imgAlt: "Christa Castillo - Online Marketing Specialist",
        text: "I worked with Emil for 2 years and his understanding of content management and frontend development is exceptional. He knows his stuff, I have to say. With this he was able to demonstrate his skills on several tasks that were assigned to him, accomplished his task effectively and satisfied the requirements of our client and the project. And through critical thinking was also able to solve problems that come on the way. Kudos to that!! 🙂",
    },
    {
        id: 2,
        name: 'Julie Are',
        job: 'Senior Web Editor',
        link: 'https://www.linkedin.com/in/julieannbare/',
        img: "assets/img/recommends/julie.jpg",
        imgAlt: "Julie Are - Senior Web Editor",
        text: " have worked with Emil for almost two years on an Australian company. He's on the same department/team as I am under Content and Design management team but he's our go-to or our specialist when it comes to technicalities, programming related and more in depth design topics. He's basically the one who interprets to the team why some designs would not work on our current system because he's more knowledgeable about it. He started a year before me but as a newbie from the team I admire that he's willing to help if there's something we're unsure and provides some tips that will help the team or any individual's work more efficient. He's a great addition to any team. And I believe his best asset is that he has great interests on new tools to use or anything about technology.",
    },
    {
        id: 3,
        name: 'Kiefer Yusingbo',
        job: 'Web and Email Designer',
        link: 'https://www.linkedin.com/in/kiefermaeyusingbo/',
        img: "assets/img/recommends/bebu.jpg",
        imgAlt: "Kiefer Yusingbo - Web and Email Designer",
        text: "Emil and I have been in the same company for 2 years. He's brought many significant improvements in our processes, especially in our content and design standards. He's the first person to ask if you're looking for tech news and trends, whether it's design, front end development or SEO -- he would be the one to bring these to the team's attention and would take initiative to turn them into successful projects. He's helped everyone with advice, tips and tricks. And above all, he values the importance of clean coding and it's always seen in his work. It's a pleasure to have him in the team, and I recommend him 100%!",
    },
    {
        id: 4,
        name: 'Peter Artenjak',
        job: 'Project Manager',
        link: 'https://www.linkedin.com/in/peter-artenjak/',
        img: "assets/img/recommends/peter.jpg",
        imgAlt: "Peter Artenjak - Project Manager",
        text: "I&apos;ve worked with Emil at Interactive Partners on several projects, where he prepared UX and UI designs. Clients always complimented his creativity and versatile solutions. He takes an analytical approach to practical problems. When challenged he is able to explain the reasoning behind his approach clearly. On top of this, he is well organized. Working with him was always a pleasure!",
    },
    {
        id: 5,
        name: 'James Tubiano',
        job: 'Rockstar Web Developer',
        link: 'https://www.linkedin.com/in/james-tubiano-140428149/',
        img: "assets/img/recommends/james.jpg",
        imgAlt: "James Tubiano - Rockstar Web Developer",
        text: "Emil was the most hard working developer working with the team, hes passionate about what hes doing and works in the smartest way to resolve the issue in the development, KUDOS to emil",
    },
    {
        id: 6,
        name: 'Andrea Gonzales',
        job: 'Client Delivery Manager',
        link: 'https://www.linkedin.com/in/ma-andrea-g-238256154/',
        img: "assets/img/recommends/andrea.jpg",
        imgAlt: "Andrea Gonzales - Client Delivery Manager",
        text: "Emil is a reliable and very artistic designer. Very easy to talk to and get the job well done and good. I would recommend him to anyone.",
    },
    {
        id: 7,
        name: 'Renz Dumalag',
        job: 'Web Developer',
        link: 'https://www.linkedin.com/in/renz-carlo-dumalag-8080a9122/',
        img: "assets/img/recommends/renz.jpg",
        imgAlt: "Renz Dumalag - Web Developer",
        text: "Good bloke! 10/10 would work with him again. 🙂",
    },
    {
        id: 8,
        name: 'Hilarion Vasquez',
        job: 'Web Designer & SEO',
        link: 'https://www.linkedin.com/in/hilarionv/',
        img: "assets/img/recommends/ron.jpg",
        imgAlt: "Hilarion Vasquez - Web Designer &amp; SEO",
        text: "Emil is a brilliant and gifted designer who really understands how to work under pressure. I worked with him directly on a project, and he produced excellent results which tremendously helped the project move forward.",
    },

];

// dev.to #0A0A0A
// behance #1769FF
// linkedin #0A66C2
// dribble #EA4C89
// github #181717
const socialLinks = [
    // {
    //     id: 1,
    //     link: '#',
    //     label: 'Facebook',
    //     img: 'assets/icons/icons.svg#lineFacebook',
    // },
    {
        id: 1,
        link: 'https://www.linkedin.com/in/emil-baticulon/',
        label: 'LinkedIn',
        icon: 'assets/icons/icons.svg#lineLinkedin',
    },
    {
        id: 2,
        link: 'https://github.com/emilBaticulon',
        label: 'Github',
        icon: 'assets/icons/icons.svg#lineGithub',
    },
    // {
    //     id: 3,
    //     link: 'mailto:emil.baticulon@gmail.com',
    //     label: 'Email',
    //     icon: 'assets/icons/icons.svg#lineEmail',
    // },
];

window.addEventListener('load', () => {

    // Remove preloader - Start
    let loader = document.querySelector('.preloader');
    setTimeout(() => {
        loader.classList.remove('active');
    }, 500);
    // Remove preloader - End

    // Open and Close Sidemenu - Start
    let sidemenuContainer = document.querySelector('.sidebar.sidebar-left');
    let sidemenuToggleContainer = document.querySelector('.open-close--container');
    let sidemenuToggleBtn = document.querySelector('.open-close--btn');

    sidemenuToggleBtn.addEventListener('click', () => {
        // console.log('toggle clicked');
        sidemenuContainer.classList.toggle('active');
        sidemenuToggleContainer.classList.toggle('active');
    });

    // Open and Close Sidemenu - End

    // Smooth Sroll to section - Start
    const links = document.querySelectorAll('.nav-link');

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });

        sidemenuContainer.classList.toggle('active');
        sidemenuToggleContainer.classList.toggle('active');
    }
    // Smooth Sroll to section - End


    // Portfolio - Start
    let portfolioListContainer = document.querySelector('.portfolio-list--container');
    let portfolioFilterContainer = document.querySelector('.portfolio-filter--container');
    let filterBtns = document.querySelectorAll('.btn-filter');
    // let portfolioItems = document.querySelectorAll('.portfolio-item');

    function displayPortfolioItems(portfolioItems) {


        let displayItems = portfolioItems.map((item) => {
            let id = item.id;
            let title = item.title;
            let img = item.image;
            let imgAlt = item.imageAlt;
            let imgFull = img.replace('-thumb', '');
            let link = item.link;
            let excerpt = item.excerpt;
            let description = item.description;
            let category = item.category;

            return `
                <button class="portfolio-item" data-category="${category}" data-id="${id}" aria-label="${title}">
                    <div class="portfolio-item--wrapper">
                        <img class="portfolio-item--image" data-full-image="${imgFull}" src="${img}" alt="${imgAlt}" width="253" height="158" loading="lazy">

                        <div class="portfolio-item--details">
                            <h3 class="portfolio-item--title">${title}</h3>
                        </div>
                    </div>
                </button>
            `;

        });

        displayItems = displayItems.reverse().join('');

        portfolioListContainer.innerHTML = displayItems;

        selectAllPortfolioItems();


        // let portfolioItems = displayItems.querySelectorAll('.portfolio-item');

    }

    // console.log(displayPortfolioItems(portfolios));


    function displayCategories(categoryBtns) {

        let categories = categoryBtns.reduce((values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ['all']);

        categories = categories.flat(1);
        categories = [...new Set(categories)];

        // console.log(categories);

        const categoryButtons = categories.map(category => {
            return `
                <button type="button" data-filter="${category}" class="btn-filter">${category}</button>
            `;
        }).join('');

        // console.log(categoryButtons);

        portfolioFilterContainer.innerHTML = categoryButtons;

        let filterBtns = document.querySelectorAll('.btn-filter');

        for (let f = 0; f < filterBtns.length; f++) {
            filterBtns[f].addEventListener('click', (e) => {
                // console.log(e.target.dataset.filter);
                const filter = e.target.dataset.filter;


                let filteredPortfolioItems = portfolios.filter(item => item.category.includes(filter))

                // console.log(filteredPortfolioItems);

                // displayPortfolioItems(filteredPortfolioItems);

                if (filter === 'all') {
                    displayPortfolioItems(portfolios);
                } else {
                    displayPortfolioItems(filteredPortfolioItems);
                }

                // console.log(displayPortfolioItems(filteredPortfolioItems));

            });
        }

    }


    displayPortfolioItems(portfolios);

    displayCategories(portfolios);



    // portfolioItemsArray = [...portfolioItems];
    // console.log(portfolioItemsArray);


    function selectAllPortfolioItems() {
        let portfolioItems = document.querySelectorAll('.portfolio-item');
        let portfolioModalContainer = document.querySelector('.portfolio-modal--container');
        let portfolioModalContent = document.querySelector('.portfolio-modal--content');
        let portfolioModalCloseBtn = document.querySelector('.portfolio-modal--close');

        for (let p = 0; p < portfolioItems.length; p++) {
            portfolioItems[p].addEventListener('click', (item) => {
                openPortfolioModal(item);
            });
        }

        function openPortfolioModal(target) {
            let currentItemId = target.target.dataset.id;

            let currentItem = portfolios.find(current => current.id == currentItemId);

            let currentItemTitle = currentItem.title;
            let currentItemFullImage = currentItem.image.replace('-thumb', '');
            let currentItemAlt = currentItem.imageAlt.replace('- Thumbnail Image', '');
            let currentItemDescription = currentItem.description;
            let currentItemLink = currentItem.link;



            portfolioModalContent.innerHTML = `
                <h4 class="portfolio-modal-title">${currentItemTitle}</h4>
                <p class="portfolio-modal-description">${currentItemDescription}</p>
                <img class="portfolio-modal-img" src="${currentItemFullImage}" alt="${currentItemAlt}" loading="lazy">
            `;

            if (currentItemLink !== '#') {
                portfolioModalContent.innerHTML += `
                    <div class="portfolio-modal-link--container">
                        <a class="portfolio-modal-link btn section-cta" href="${currentItemLink}" target="_blank" rel="noopener">View Project</a>
                    </div>
                `;
            }


            console.log(currentItemLink);

            // if (curr) {

            // }

            portfolioModalContainer.classList.add('active');
        }

        portfolioModalCloseBtn.addEventListener('click', () => {
            portfolioModalContainer.classList.remove('active');
        });


        portfolioModalContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('portfolio-modal--container')) {
                portfolioModalContainer.classList.remove('active');
            }
        });
    }







    // Portfolio - End






    // Recommend - Start

    let recommendListContainer = document.querySelector('.recommend-list--container');

    for (let r = 0; r < recommends.length; r++) {
        let recommend = recommends[r];
        let recommendName = recommend.name;
        let recommendJob = recommend.job;
        let recommendLink = recommend.link;
        let recommendImg = recommend.img;
        let recommendImgAlt = recommend.imgAlt;
        let recommendText = recommend.text;

        let recommendItem = document.createElement('div');
        recommendItem.classList.add('recommend-item');

        recommendItem.innerHTML = `
            <div class="recommend-item--wrapper">
                <div class="recommend-img--container">
                    <img class="recommend-img" src="${recommendImg}" alt="${recommendImgAlt}" width="250" height="250" loading="lazy">
                    <div class="recommend-badge">
                        <svg class="recommend-badge-icon" viewBox="0 0 24 24">
                            <use xlink:href="assets/icons/icons.svg#quote"></use>
                        </svg>
                    </div>
                </div>
                <div class="recommend-details">
                    <address id="${recommendName}" class="recommend-item--name">
                        <a href="${recommendLink}" class="author-link" rel="author">${recommendName}</a>
                    </address>
                    <p class="author--position">${recommendJob}</p>
                    <p class="recommend-item--text">${recommendText}</p>
                </div>
            </div>
        `;

        recommendListContainer.appendChild(recommendItem);

    }

    // Recommend - End



    // Footer Social Links - Start

    let footerSocialLinksContainer = document.querySelector('.social-footer--container');
    let sidebarSocialLinksContainer = document.querySelector('.sidebar-footer--container');

    for (let s=0; s < socialLinks.length; s++) {
        let socialLink = socialLinks[s];
        let socialLinkUrl = socialLink.link;
        let socialLabel = socialLink.label;
        let socialIcon = socialLink.icon;

        let socialLinkItem = document.createElement('a');
        socialLinkItem.classList.add('btn');
        socialLinkItem.classList.add('social-btn');
        socialLinkItem.classList.add('footer-social-link');
        socialLinkItem.setAttribute('href', socialLinkUrl);
        socialLinkItem.setAttribute('target', '_blank');
        socialLinkItem.setAttribute('rel', 'noopener');
        socialLinkItem.setAttribute('aria-label', socialLabel);

        socialLinkItem.innerHTML = `
            <svg class="footer-icon" viewBox="0 0 24 24">
                <use xlink:href="${socialIcon}"></use>
            </svg>
        `;

        footerSocialLinksContainer.appendChild(socialLinkItem);
        sidebarSocialLinksContainer.appendChild(socialLinkItem.cloneNode(true));

    }

    // Footer Social Links - End

    // Contact Form - Start
    let contactTrigger = document.querySelectorAll('.trigger');
    let contactModal = document.querySelector('.contact-modal--container');
    let contactModalClose = document.querySelector('.contact-modal--close');

    for(let c = 0; c < contactTrigger.length; c++) {
        let trigger = contactTrigger[c];
        trigger.addEventListener('click', () => {
            contactModal.classList.add('active');
        });

        contactModalClose.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });

        contactModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('contact-modal--container')) {
                contactModal.classList.remove('active');
            }
        });
    }

    // Basic Info - Start
    let durationStart = new Date().getTime();
    // let url = window.location.href;
    // let protocol = window.location.protocol;
    // let host = window.location.host;
    let path = window.location.pathname;
    let referrer = document.referrer;
    // let characterSet = document.characterSet;
    // let durationStart = new Date().getTime()
    let language = navigator.language;
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let screenOrientation = screen.orientation.type;
    // Basic Info - End
    const javascriptValue = document.getElementById("javascriptValue");
    const referrerValue = document.getElementById("referrerValue");
    const urlValue = document.getElementById("urlValue");
    const durationValue = document.getElementById("durationValue");
    const screenWidthValue = document.getElementById("screenWidthValue");
    const screenHeightValue = document.getElementById("screenHeightValue");
    const screenOrientationValue = document.getElementById("screenOrientationValue");
    const languageValue = document.getElementById("languageValue");
    const sendBtn = document.getElementById("sendBtn");

    javascriptValue.setAttribute("value", "Enabled");
    referrerValue.setAttribute("value", referrer);
    screenWidthValue.setAttribute("value", screenWidth);
    screenHeightValue.setAttribute("value", screenHeight);
    screenOrientationValue.setAttribute("value", screenOrientation);
    urlValue.setAttribute("value", path);
    languageValue.setAttribute("value", language);

    // function formatTime(time) {
    //     let hours = Math.floor(time / 3600);
    //     let minutes = Math.floor((time % 3600) / 60);
    //     let seconds = time % 60;

    //     return hours + ":" + minutes + ":" + seconds;
    // }

    // sendBtn.addEventListener("click", () => {
    //     const durationEnd = new Date().getTime();
    //     let duration = durationEnd - durationStart;

    //     duration = formatTime(duration);
    //     durationValue.setAttribute("value", duration);
    // });

    let form = document.getElementById("contactForm");

    async function handleSubmit(event) {
        event.preventDefault();

        const durationEnd = new Date().getTime();
        let duration = (durationEnd - durationStart) / 1000;

        // duration = formatTime(duration);
        durationValue.setAttribute("value", duration);

        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: event.target.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return window.location.href = 'thank-you.html';
            } else {
                response.json().then(formData => {
                    if (Object.hasOwn(data, 'errors')) {
                        window.location.href = 'error.html';
                    } else {
                        window.location.href = 'error.html';
                    }
                });
            }
        }).catch(error => {
            return window.location.href = 'error.html';
        });
    }

    form.addEventListener("submit", handleSubmit)


    // Contact Form - End




    // Automatically add current year - Start
    let currentYear = new Date().getFullYear();
    let year = document.querySelector('#currentYear');

    function addCurrentYear() {
        return currentYear;
    }

    year.innerHTML = addCurrentYear();
    // Automatically add current year - End
});
