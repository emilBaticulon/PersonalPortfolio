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
        image: `assets/img/portfolios/threed-models-thumb.jpg`,
        imageAlt: `Three D Click and Print 3D model - Thumbnail Image`,
        link: `#`,
        title: `Three D Click and Print 3D model`,
        category: [
            `3D/CAD`,
        ],
        excerpt:`Three D Click and Print 3D model`,
        description: `I created 3d models for 3DClickandPrint. These 3d assets are used on the company&apos;s material selection software, providing customers a preview of the various materials before purchasing for print.`,
    },
    {
        id: 2,
        image: `assets/img/portfolios/iduk-open-graph-thumb.jpg`,
        imageAlt: `British College of Interior Design Open Graph Image - Thumbnail Image`,
        link: `#`,
        title: `British College of Interior Design: OG Image`,
        category: [
            `frontend`,
        ],
        excerpt:`British College of Interior Design Open Graph Image`,
        description: `I designed and coded the Open Graph images for Australian News & Features Service across their websites British College of Interior Design, British College of Professional Styling, British College of Journalism, and Travel Journalism UK, to increase their SEO rankings and provide more potential for viewers to share their web pages and click through to their websites.`,
    },
    {
        id: 3,
        image: `assets/img/portfolios/socially-nina-thumb.jpg`,
        imageAlt: `Socially Nina Website - Thumbnail Image`,
        link: `#`,
        title: `Socially Nina`,
        excerpt:`Socially Nina`,
        category: [
            `frontend`,
            `design`,
        ],
        description: `I built the SociallyNina website in WordPress using Elementor, based on the approved design. I created 4 different page layouts, making sure each page is responsive and optimized to a score of A+ in GTMetrix. I also assisted in fixing Google Search Console issues.`,
    },
    {
        id: 4,
        image: `assets/img/portfolios/porsche-approved-thumb.jpg`,
        imageAlt: `Porsche Approved Australia - Thumbnail Image`,
        link: `#`,
        title: `Porsche Approved Australia`,
        category: [
            `frontend`,
        ],
        excerpt:`Porsche Approved Australia`,
        description: `I assisted in restructuring the HTML and CSS for the vehicle listing modules for Porsche Australia dealerships. In line with this, I recoded the list view for the vehicles, implementing responsiveness across screen devices.`,
    },
    {
        id: 5,
        image: `assets/img/portfolios/new-peugeot-thumb.jpg`,
        imageAlt: `Peugeot 5008 landing page - Thumbnail Image`,
        link: `#`,
        title: `New Peugeot 5008`,
        category: [
            `frontend`,
        ],
        excerpt:`New Peugeot 5008 Landing Page`,
        description: `Peugeot Australia requested a redesign for their dealership websites. I was part of the team who rebuilt the websites to implement the new Peugeot branding. I created page templates for the content team to use, and structured the HTML and CSS for mobile-first responsiveness.`,
    },
    {
        id: 6,
        image: `assets/img/portfolios/peugeot-configurator-thumb.jpg`,
        imageAlt: `Peugeot Configurator - Thumbnail Image`,
        link: `#`,
        title: `Peugeot Configurator`,
        category: [
            `frontend`,
        ],
        excerpt:`Peugeot Configurator`,
        description: `For The Peugeot Australia Configurator web app, I fixed underlying CSS issues related to responsiveness, and reduced the number of HTML elements to reduce the document size for improved performance. The client noted that their was a significant increase in successful test drive bookings.`,
    },
    {
        id: 7,
        image: `assets/img/portfolios/ducati-melbourne-thumb.jpg`,
        imageAlt: `Ducati Melbourne - Thumbnail Image`,
        link: `#`,
        title: `Ducati Melbourne West`,
        category: [
            `frontend`,
        ],
        excerpt:`Ducati Melbourne West`,
        description: `I assisted a colleague to create and code the new website for Ducati Melbourne West, taking into account the updated styles and branding. I was mainly focused on seamless responsiveness and optimized performance.`,
    },
    {
        id: 8,
        image: `assets/img/portfolios/psuk-landing-thumb.jpg`,
        imageAlt: `British College of Professional Styling Black Friday Landing Page - Thumbnail Image`,
        link: `#`,
        title: `British College of Professional Styling`,
        category: [
            `frontend`,
        ],
        excerpt:`British College of Professional Styling Black Friday Landing Page`,
        description: `I created custom web pages for Australian News & Features Service from scratch, for multiple seasonal campaigns such as Black Friday and New Year&pos;s Specials. These custom web pages include TrustPilot sections and forms with coupon codes that populate their database, enabling the business to push their seasonal automated emails.`,
    },
    {
        id: 9,
        image: `assets/img/portfolios/iduk-home-thumb.jpg`,
        imageAlt: `British College of Interior Design Home Page - Thumbnail Image`,
        link: `#`,
        title: `British College of Interior Design`,
        category: [
            `frontend`,
        ],
        excerpt:`British College of Interior Design Home Page`,
        description: `I rebuilt the Australian News & Features Service webites, pages and templates to match the redesign wanted by the client. The goal was to make all their websites responsive, optimize the sites&apos; speed, ultimately improving the performance of each site.`,
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

const skills = [
    {
        id: 1,
        name: 'HTML',
        icon: 'assets/icons/icons.svg#html5',
        level: '95',
        color: '#E34F26',
        info: 'HTML5 is the most used markup language in the world. It is used to create web pages and web applications.',
        link: 'https://en.wikipedia.org/wiki/HTML5',
    },
    {
        id: 2,
        name: 'CSS',
        icon: 'assets/icons/icons.svg#css3',
        level: '95',
        color: '#1572B6',
        info: 'CSS3 is the most used styling language in the world. It is used to style web pages and web applications.',
        link: 'https://en.wikipedia.org/wiki/CSS3',
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: 'assets/icons/icons.svg#js',
        level: '95',
        color: '#F7DF1E',
        info: 'JavaScript is the most used scripting language in the world. It is used to create web pages and web applications.',
        link: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
        id: 4,
        name: 'Visual Studio Code',
        icon: 'assets/icons/icons.svg#vsCode',
        level: '95',
        color: '#007ACC',
        info: 'Visual Studio Code is the most used IDE in the world. It is used to create web pages and web applications.',
        link: 'https://code.visualstudio.com/',
    },
    {
        id: 5,
        name: 'Bootstrap',
        icon: 'assets/icons/icons.svg#bootstrap',
        level: '95',
        color: '#7952B3',
        info: 'Bootstrap is the most used framework in the world. It is used to create web pages and web applications.',
        link: 'https://getbootstrap.com/',
    },
    {
        id: 6,
        name: 'Font Awesome',
        icon: 'assets/icons/icons.svg#fontAwesome',
        level: '95',
        color: '#528DD7',
        info: 'Font Awesome is the most used icon library in the world. It is used to create web pages and web applications.',
        link: 'https://fontawesome.com/',
    },
    {
        id: 7,
        name: 'Google Fonts',
        icon: 'assets/icons/icons.svg#googleFonts',
        level: '95',
        color: '#4285F4',
        info: 'Google Fonts is the most used font library in the world. It is used to create web pages and web applications.',
        link: 'https://fonts.google.com/',
    },
    {
        id: 8,
        name: 'Affinity Designer',
        icon: 'assets/icons/icons.svg#affinityDesigner',
        level: '95',
        color: '#1B72BE',
        info: 'Affinity Designer is the most used design software in the world. It is used to create web pages and web applications.',
        link: 'https://affinity.serif.com/en-gb/designer/',
    },
    {
        id: 9,
        name: 'Affinity Photo',
        icon: 'assets/icons/icons.svg#affinityPhoto',
        level: '95',
        color: '#7E4DD2',
        info: 'Affinity Photo is the most used photo software in the world. It is used to create web pages and web applications.',
        link: 'https://affinity.serif.com/en-gb/photo/',
    },
    {
        id: 10,
        name: 'Adobe Photoshop',
        icon: 'assets/icons/icons.svg#adobePhotoshop',
        level: '95',
        color: '#31A8FF',
        info: 'Adobe Photoshop is the most used photo software in the world. It is used to create web pages and web applications.',
        link: 'https://www.adobe.com/products/photoshop.html',
    },
    {
        id: 11,
        name: 'Adobe Illustrator',
        icon: 'assets/icons/icons.svg#adobeIllustrator',
        level: '95',
        color: '#FF9A00',
        info: 'Adobe Illustrator is the most used photo software in the world. It is used to create web pages and web applications.',
        link: 'https://www.adobe.com/products/illustrator.html',
    },
    {
        id: 12,
        name: 'Adobe XD',
        icon: 'assets/icons/icons.svg#adobeXD',
        level: '95',
        color: '#FF61F6',
        info: 'Adobe XD is the most used photo software in the world. It is used to create web pages and web applications.',
        link: 'https://www.adobe.com/products/xd.html',
    },
    {
        id: 13,
        name: 'Git',
        icon: 'assets/icons/icons.svg#git',
        level: '95',
        color: '#F05032',
        info: 'Git is the most used version control system in the world. It is used to create web pages and web applications.',
        link: 'https://git-scm.com/',
    },
    {
        id: 14,
        name: 'GitHub',
        icon: 'assets/icons/icons.svg#github',
        level: '95',
        color: '#181717',
        info: 'GitHub is the most used version control system in the world. It is used to create web pages and web applications.',
        link: 'https://github.com/emilBaticulon',
    },
    {
        id: 15,
        name: 'Google Chrome',
        icon: 'assets/icons/icons.svg#googleChrome',
        level: '95',
        color: '#4285F4',
        info: 'Google Chrome is the most used browser in the world. It is used to create web pages and web applications.',
        link: 'https://www.google.com/chrome/',
    },
    {
        id: 16,
        name: 'Microsoft Edge',
        icon: 'assets/icons/icons.svg#microsoftEdge',
        level: '95',
        color: '#0078D7',
        info: 'Microsoft Edge is the most used browser in the world. It is used to create web pages and web applications.',
        link: 'https://www.microsoft.com/en-us/edge',
    },
    {
        id: 17,
        name: 'Safari',
        icon: 'assets/icons/icons.svg#safari',
        level: '95',
        color: '#FFC107', // #000000
        info: 'Safari is the most used browser in the world. It is used to create web pages and web applications.',
        link: 'https://www.apple.com/safari/',
    },
    {
        id: 18,
        name: 'Firefox',
        icon: 'assets/icons/icons.svg#firefox',
        level: '95',
        color: '#FF7139',
        info: 'Firefox is the most used browser in the world. It is used to create web pages and web applications.',
        link: 'https://www.mozilla.org/en-US/firefox/',
    },
    {
        id: 19,
        name: 'FileZilla',
        icon: 'assets/icons/icons.svg#fileZilla',
        level: '95',
        color: '#BF0000',
        info: 'FileZilla is the most used FTP client in the world. It is used to create web pages and web applications.',
        link: 'https://filezilla-project.org/',
    },
    {
        id: 20,
        name: 'Google Analytics',
        icon: 'assets/icons/icons.svg#googleAnalytics',
        level: '95',
        color: '#E37400',
        info: 'Google Analytics is the most used analytics software in the world. It is used to create web pages and web applications.',
        link: 'https://analytics.google.com/',
    },
    {
        id: 21,
        name: 'Google Search Console',
        icon: 'assets/icons/icons.svg#googleSearchConsole',
        level: '95',
        color: '#458CF5',
        info: 'Google Search Console is the most used analytics software in the world. It is used to create web pages and web applications.',
        link: 'https://search.google.com/search-console/',
    },
    {
        id: 22,
        name: 'Google Sheets',
        icon: 'assets/icons/icons.svg#googleSheets',
        level: '95',
        color: '#34A853',
        info: '',
        link: 'https://sheets.google.com/',
    },
    {
        id: 23,
        name: 'Google Drive',
        icon: 'assets/icons/icons.svg#googleDrive',
        level: '95',
        color: '#4285F4',
        info: '',
        link: 'https://drive.google.com/',
    },
    {
        id: 24,
        name: 'Google Meet',
        icon: 'assets/icons/icons.svg#googleMeet',
        level: '95',
        color: '#00897B',
        info: '',
        link: 'https://meet.google.com/',
    },
    {
        id: 25,
        name: 'Google Chat',
        icon: 'assets/icons/icons.svg#googleChat',
        level: '95',
        color: '#00AC47',
        info: '',
    },
    {
        id: 26,
        name: 'Gmail',
        icon: 'assets/icons/icons.svg#googleGmail',
        level: '95',
        color: '#EA4335',
        info: '',
        link: 'https://mail.google.com/',
    },
    {
        id: 27,
        name: 'Google Domains',
        icon: 'assets/icons/icons.svg#googleDomains',
        level: '95',
        color: '#4285F4',
        info: '',
        link: 'https://domains.google.com/',
    },
    {
        id: 28,
        name: 'Microsoft Word',
        icon: 'assets/icons/icons.svg#microsoftWord',
        level: '95',
        color: '#2B579A',
        info: '',
        link: 'https://www.microsoft.com/en-us/office/office-365-for-business.aspx',
    },
    {
        id: 29,
        name: 'Microsoft Excel',
        icon: 'assets/icons/icons.svg#microsoftExcel',
        level: '95',
        color: '#217346',
        info: '',
        link: 'https://www.microsoft.com/en-us/office/office-365-for-business.aspx',
    },
    {
        id: 30,
        name: 'Microsoft Teams',
        icon: 'assets/icons/icons.svg#microsoftTeams',
        level: '95',
        color: '#6264A7',
        info: '',
        link: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
    },
    {
        id: 31,
        name: 'Microsoft Windows',
        icon: 'assets/icons/icons.svg#microsoftWindows',
        level: '95',
        color: '#0078D6',
        info: '',
        link: 'https://www.microsoft.com/en-us/windows/',
    },
    {
        id: 32,
        name: 'Windows Terminal',
        icon: 'assets/icons/icons.svg#windowsTerminal',
        level: '95',
        color: '#4D4D4D',
        info: '',
        link: 'https://github.com/microsoft/terminal',
    },
    {
        id: 33,
        name: 'WordPress',
        icon: 'assets/icons/icons.svg#wordpress',
        level: '95',
        color: '#21759B',
        info: '',
        link: 'https://wordpress.org/',
    },
    // {
    //     id: 33,
    //     name: 'WP Rocket',
    //     icon: 'assets/icons/icons.svg#wpRocket',
    //     level: '95',
    //     color: '#F56640',
    //     info: '',
    //     link: 'https://wp-rocket.me/',
    // },
    // {
    //     id: 34,
    //     name: 'Yoast SEO',
    //     icon: 'assets/icons/icons.svg#yoastSEO',
    //     level: '95',
    //     color: '#A4286A',
    //     info: '',
    //     link: 'https://yoast.com/',
    // },
    {
        id: 35,
        name: 'Jira',
        icon: 'assets/icons/icons.svg#jira',
        level: '95',
        color: '#0052CC',
        info: '',
        link: 'https://www.atlassian.com/software/jira',
    },
    {
        id: 36,
        name: 'Confluence',
        icon: 'assets/icons/icons.svg#confluence',
        level: '95',
        color: '#172B4D',
        info: '',
        link: 'https://www.atlassian.com/software/confluence',
    },
    {
        id: 37,
        name: 'ClickUp',
        icon: 'assets/icons/icons.svg#clickUp',
        level: '95',
        color: '#7B68EE',
        info: '',
        link: 'https://clickup.com/',
    },
    {
        id: 38,
        name: 'Zoom',
        icon: 'assets/icons/icons.svg#zoom',
        level: '95',
        color: '#2D8CFF',
        info: '',
        link: 'https://zoom.us/',
    },
    {
        id: 39,
        name: 'Slack',
        icon: 'assets/icons/icons.svg#slack',
        level: '95',
        color: '#4A154B',
        info: '',
        link: 'https://slack.com/',
    },
    {
        id: 40,
        name: 'GNU Bash',
        icon: 'assets/icons/icons.svg#gnuBash',
        level: '95',
        color: '#4EAA25',
        info: '',
        link: 'https://www.gnu.org/software/bash/',
    },
    {
        id: 41,
        name: 'Cloudflare',
        icon: 'assets/icons/icons.svg#cloudflare',
        level: '95',
        color: '#F38020',
        info: '',
        link: 'https://www.cloudflare.com/',
    },
    {
        id: 42,
        name: 'Cloudflare Pages',
        icon: 'assets/icons/icons.svg#cloudflarePages',
        level: '95',
        color: '#F38020',
        info: '',
        link: 'https://www.cloudflare.com/',
    },
    {
        id: 43,
        name: 'Figma',
        icon: 'assets/icons/icons.svg#figma',
        level: '95',
        color: '#F24E1E',
        info: '',
        link: 'https://www.figma.com/',
    },
    {
        id: 44,
        name: 'Webflow',
        icon: 'assets/icons/icons.svg#webflow',
        level: '95',
        color: '#4353FF',
        info: '',
        link: 'https://www.webflow.com/',
    },
    {
        id: 45,
        name: 'Pingdom',
        icon: 'assets/icons/icons.svg#pingdom',
        level: '95',
        color: '#FFF000',
        info: '',
        link: 'https://www.pingdom.com/',
    },
    {
        id: 46,
        name: 'PageSpeed Insights',
        icon: 'assets/icons/icons.svg#pageSpeedInsights',
        level: '95',
        color: '#4285F4',
        info: '',
        link: 'https://pagespeed.web.dev/',
    },
    {
        id: 47,
        name: 'Wappalyzer',
        icon: 'assets/icons/icons.svg#wappalyzer',
        level: '95',
        color: '#32067C',
        info: '',
        link: 'https://www.wappalyzer.com/',
    },
    {
        id: 48,
        name: 'Lighthouse',
        icon: 'assets/icons/icons.svg#lighthouse',
        level: '95',
        color: '#F44B21',
        info: '',
        link: 'https://developers.google.com/web/tools/lighthouse/',
    },
    // {
    //     id: 49,
    //     name: 'Bitwarden',
    //     icon: 'assets/icons/icons.svg#bitwarden',
    //     level: '95',
    //     color: '#175DDC',
    //     info: '',
    //     link: 'https://bitwarden.com/',
    // },
    {
        id: 50,
        name: 'Hotjar',
        icon: 'assets/icons/icons.svg#hotjar',
        level: '95',
        color: '#FD3A5C',
        info: '',
        link: 'https://hotjar.com/',
    },
    {
        id: 51,
        name: 'Namecheap',
        icon: 'assets/icons/icons.svg#namecheap',
        level: '95',
        color: '#DE3723',
        info: '',
        link: 'https://www.namecheap.com/',
    },
    {
        id: 52,
        name: 'Canva',
        icon: 'assets/icons/icons.svg#canva',
        level: '95',
        color: '#00C4CC',
        info: '',
        link: 'https://www.canva.com/',
    },
    {
        id: 53,
        name: 'CodePen',
        icon: 'assets/icons/icons.svg#codePen',
        level: '95',
        color: '#000000',
        info: '',
        link: 'https://codepen.io/',
    },
    // {
    //     id: 54,
    //     name: 'Cpanel',
    //     icon: 'assets/icons/icons.svg#cpanel',
    //     level: '95',
    //     color: '#FF6C2C',
    //     info: '',
    //     link: 'https://cpanel.net/',
    // },
    // {
    //     id: 55,
    //     name: 'Plesk',
    //     icon: 'assets/icons/icons.svg#plesk',
    //     level: '95',
    //     color: '#52BBE6',
    //     info: '',
    //     link: 'https://www.plesk.com/',
    // },
    // {
    //     id: 56,
    //     name: 'Python',
    //     icon: 'assets/icons/icons.svg#python',
    //     level: '95',
    //     color: '#3776AB',
    //     info: '',
    //     link: 'https://www.python.org/',
    // },
    // {
    //     id: 57,
    //     name: 'Flask',
    //     icon: 'assets/icons/icons.svg#flask',
    //     level: '95',
    //     color: '#000000',
    //     info: '',
    //     link: 'https://flask.palletsprojects.com/',
    // },
    // {
    //     id: 58,
    //     name: 'Go Lang',
    //     icon: 'assets/icons/icons.svg#goLang',
    //     level: '95',
    //     color: '#00ADD8',
    //     info: '',
    //     link: 'https://golang.org/',
    // },
    // {
    //     id: 59,
    //     name: 'Node JS',
    //     icon: 'assets/icons/icons.svg#nodeJS',
    //     level: '95',
    //     color: '#339933',
    //     info: '',
    //     link: 'https://nodejs.org/en/',
    // },
    // {
    //     id: 60,
    //     name: 'Svelte',
    //     icon: 'assets/icons/icons.svg#svelte',
    //     level: '95',
    //     color: '#FF3E00',
    //     info: '',
    //     link: 'https://svelte.dev/',
    // },
    // {
    //     id: 61,
    //     name: 'Nginx',
    //     icon: 'assets/icons/icons.svg#nginx',
    //     level: '95',
    //     color: '#009639',
    //     info: '',
    //     link: 'https://nginx.org/',
    // },
    // {
    //     id: ,
    //     name: 'Vultr',
    //     icon: 'assets/icons/icons.svg#vultr',
    //     level: '95',
    //     color: '#007BFC',
    //     info: '',
    //     link: 'https://www.vultr.com/',
    // },
    // {
    //     id: ,
    //     name: 'FreeCodeCamp',
    //     icon: 'assets/icons/icons.svg#freeCodeCamp',
    //     level: '95',
    //     color: '#0A0A23',
    //     info: '',
    //     link: 'https://www.freecodecamp.org/',
    // },
    // {
    //     id: 54,
    //     name: 'CodeProject',
    //     icon: 'assets/icons/icons.svg#codeProject',
    //     level: '95',
    //     color: '#FF9900',
    //     info: '',
    //     link: 'https://www.codeproject.com/',
    // },
    // {
    //     id: ,
    //     name: 'Autodesk',
    //     icon: 'assets/icons/icons.svg#autodesk',
    //     level: '95',
    //     color: '#0696D7',
    //     info: '',
    //     link: 'https://www.autodesk.com/',
    // },
    // {
    //     id: ,
    //     name: 'Bulma',
    //     icon: 'assets/icons/icons.svg#bulma',
    //     level: '95',
    //     color: '#00D1B2,
    //     info: 'Bulma is one of the most popular CSS framework in the world. It is used to create web pages and web applications.',
    //     link: 'https://bulma.io/',
    // },
    // {
    //     id: ,
    //     name: 'Tailwind CSS',
    //     icon: 'assets/icons/icons.svg#tailwind',
    //     level: '95',
    //     color: '#06B6D4',
    //     info: 'Tailwind CSS is the most used framework in the world. It is used to create web pages and web applications.',
    //     link: 'https://tailwindcss.com/',
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

    sidemenuToggleContainer.addEventListener('click', (e) => {
        e.stopPropagation();
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

    // Skills - Start
    let skillsListContainer = document.querySelector('.skill-list--container');

    for (s = 0; s < skills.length; s++) {
        let skill = skills[s];
        let skillName = skill.name;
        let skillIcon = skill.icon;

        let skillItem = document.createElement('div');
        skillItem.classList.add('skill-item--container');
        skillItem.innerHTML = `
            <div class="skill-item--wrapper">
                <svg class="skill-icon" data-name="${skillName}" viewBox="0 0 24 24">
                    <use xlink:href="${skillIcon}"></use>
                </svg>
            </div>
        `;
        // skillItem.innerHTML = `
        //     <div class="skill-item__icon">
        //         <svg class="skill-item__icon-svg">
        //             <use xlink:href="${skill.icon}"></use>
        //         </svg>
        //     </div>
        //     <div class="skill-item__info">
        //         <h3 class="skill-item__name">${skill.name}</h3>
        //         <p class="skill-item__level">${skill.level}</p>
        //     </div>
        // `;
        skillsListContainer.appendChild(skillItem);
    }

    // Skills - End


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
                        <div class="portfolio-item--image--container">
                            <img class="portfolio-item--image" data-full-image="${imgFull}" src="${img}" alt="${imgAlt}" width="253" height="158" loading="lazy">
                        </div>

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


            // console.log(currentItemLink);

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


    // Back to top - Start
    let backToTopBtn = document.querySelector('.back-top-btn');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Back to top - End


    // Automatically add current year - Start
    let currentYear = new Date().getFullYear();
    let year = document.querySelector('#currentYear');

    function addCurrentYear() {
        return currentYear;
    }

    year.innerHTML = addCurrentYear();
    // Automatically add current year - End
});
