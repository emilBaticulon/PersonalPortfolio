const debugMode = true;

function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element && debugMode) {
        console.error(`Element not found for selector: ${selector}`);
    }
    return element;
}

function safeQuerySelectorAll(selector) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0 && debugMode) {
        console.error(`No elements found for selector: ${selector}`);
    }
    return elements;
}



function init() {
    const pathName = window.location.pathname;

    const homePage = (pathName === "/index.html") ? "/index.html" : (pathName === "/home") ? "/home" : "/";
    const errorUtilityPage = (pathName === "/error.html") ? "/error.html" : "/error";
    const thankYouUtilityPage = (pathName === "/thank-you.html") ? "/thank-you.html" : "/thank-you";

    const footerYear = safeQuerySelector('#currentYear');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // Code for homepage
    if (pathName === homePage) {
        const serviceList = safeQuerySelector('.service-list');
        const menuBtn = safeQuerySelector('.nav-btn.nav-menu');
        const menuCloseBtn = safeQuerySelector('.nav-btn.nav-close');
        const navWrapper = safeQuerySelector('.nav-wrapper');
        const portfolioItems = safeQuerySelectorAll('.card-item.portfolio-item');
        const backToTop = safeQuerySelector('.back-to-top');
        const navLinks = safeQuerySelectorAll('.nav-item.nav-link');

        // Open sidebar navigation
        if (menuBtn && navWrapper) {
            toggleShowClass(menuBtn, navWrapper);
        }

        // Close sidebar navigation
        if (menuCloseBtn && navWrapper) {
            toggleShowClass(menuCloseBtn, navWrapper);
        }

        // Handle mouse follower on service list
        if (serviceList) {
            handleMouseMove(serviceList);
        }

        // Handle mouse follower for each portfolio item
        portfolioItems.forEach(portfolioItem => handleMouseMove(portfolioItem));

        // Handle nav links smooth scrolling
        navLinks.forEach(navLink => {
            const navLinkTarget = navLink.getAttribute("href");

            toggleShowClass(navLink, navWrapper);

            navLink.addEventListener('click', () => {
                goToElement(navLinkTarget);
            });
        });

        // Back to top
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                goToElement('header');
            });
        }


        // Code for contact form
        const closeContactModal = safeQuerySelector(`.contact-modal-close`);
        const contactModal = safeQuerySelector(`.contact-form-modal`);
        const contactModalTriggers = safeQuerySelectorAll(`.contact-trigger`);

        // Open and close contact modal
        if (contactModalTriggers.length > 0) {
            contactModalTriggers.forEach(contactModalTrigger => {
                toggleShowClass(contactModalTrigger, contactModal);
            });
        } else if (debugMode) {
            console.log("Oops! Contact form not yet available. Please visit https://emil.baticulon.com");
        }

        if (closeContactModal && contactModal) {
            toggleShowClass(closeContactModal, contactModal);
        }

        if (contactModal) {
            const javascriptField = safeQuerySelector(".info-js");
            const referrerField = safeQuerySelector(".info-referrer");
            const urlField = safeQuerySelector(".info-url");
            const screenWidthField = safeQuerySelector(".info-screen-width");
            const screenHeightField = safeQuerySelector(".info-screen-height");
            const screenOrientationField = safeQuerySelector(".info-screen-orientation");
            const languageField = safeQuerySelector(".info-lang");
            const sendBtn = safeQuerySelector("#sendBtn");

            // Browser basic info
            const basicInfo = {
                path: window.location.pathname,
                referrer: document.referrer,
                lang: navigator.language,
                screenWidth: screen.width,
                screenHeight: screen.height,
                screenOrientation: screen.orientation.type,
            };

            const referrerValue = basicInfo.referrer?.trim() || 'Direct';

            // Update basic info fields on contact form
            addCustomAttribute(javascriptField, "value", "enabled");
            addCustomAttribute(referrerField, "value", referrerValue);
            addCustomAttribute(urlField, "value", basicInfo.path);
            addCustomAttribute(screenWidthField, "value", basicInfo.screenWidth);
            addCustomAttribute(screenHeightField, "value", basicInfo.screenHeight);
            addCustomAttribute(screenOrientationField, "value", basicInfo.screenOrientation);
            addCustomAttribute(languageField, "value", basicInfo.lang);

            if (sendBtn) {
                sendBtn.addEventListener('submit', handleSubmit)
            }
        }

        // Listen to page scroll
        window.addEventListener('scroll', () => {
            const viewportHeight = window.innerHeight;
            const bodyHeight = document.documentElement.scrollHeight;
            const currentPosition = window.scrollY + viewportHeight;
            const positionPercentage = Math.round(convertToPercentage(currentPosition, viewportHeight, bodyHeight));

            const progressBar = safeQuerySelector(".progress-bar");
            const backToTop = safeQuerySelector(".back-to-top");


            if (progressBar) {
                progressBar.setAttribute("value", positionPercentage);
            }

            if (backToTop) {
                addCustomProperty(backToTop, `--progress`, `${positionPercentage}%`)
            }
        });
    }




    // Global codes






    window.addEventListener('load', () => {
        // Indicate if document allow the use of javascript
        const html = safeQuerySelector("html");
        if (html) {
            html.classList.remove('no-js');
            html.classList.add('js');
        }

        // Remove loading screen
        const loader = safeQuerySelector(".loader");
        if (loader) {
            setTimeout(() => {
                loader.classList.toggle("show");
            }, 500);
        }
    });
}



// Handle contact form submit
async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(event.target.action, {
        method: event.target.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return window.location.href = '/thank-you.html';
        } else {
            response.json().then(formData => {
                if (Object.hasOwn(data, 'errors')) {
                    window.location.href = '/error.html';
                } else {
                    window.location.href = '/error.html';
                }
            });
        }
    }).catch(error => {
        return window.location.href = '/error.html';
    });

}

function handleMouseMove(element) {
    if (!element) return;
    element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        addCustomProperty(element, `--mouse-y`, `${mouseY}px`);
        addCustomProperty(element, `--mouse-x`, `${mouseX}px`);
    });
}

function toggleShowClass(triggerElement, targetElement) {
    if (!triggerElement || !targetElement) return;
    triggerElement.addEventListener('click', () => {
        targetElement.classList.toggle("show");
    });
}

function addCustomProperty(targetElement, customProperty, customPropertyValue) {
    if (!targetElement) return;
    targetElement.style.setProperty(customProperty, customPropertyValue);
}

function addCustomAttribute(targetElement, customAttribute, value) {
    if (!targetElement) return;
    targetElement.setAttribute(customAttribute, value);
}

function goToElement(selector) {
    const targetElement = safeQuerySelector(selector);
    if (!targetElement) return;

    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function convertToPercentage(value, min, max) {
    if (min > max) {
        throw new Error("Minimum value cannot be greater than maximum value.");
    }

    const range = max - min;
    if (range === 0) {
        return 0;
    }

    const clampedValue = Math.max(min, Math.min(value, max));
    const relativeValue = (clampedValue - min) / range;
    return relativeValue * 100;
}

document.addEventListener("DOMContentLoaded", init);

console.log(
    `%c This website is designed and developed 🚀⚙ by Emil Baticulon 😉`,
    `
        background: rgba(0, 0, 0, 0);
        color: inherit;
        display: block;
        padding: 15px 25px;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    `
);