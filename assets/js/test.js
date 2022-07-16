window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
});

window.addEventListener('load', () => {
    console.log('Loaded');
    console.log(window.innerWidth + "px width");

    // let testStr = "assets/img/portfolios/new-peugeot-thumb.jpg";
    // let testResult = testStr.replace("-thumb", "");
    // console.log(testResult);


    // Device Width Indicator - Start
    // let deviceWidth = window.innerWidth;
    // let indicatorElement = document.createElement('div');
    // let body = document.querySelector('body');

    // indicatorElement.style.position = 'fixed';
    // indicatorElement.style.top = '0';
    // indicatorElement.style.left = '0';
    // indicatorElement.style.backgroundColor = '#fff';
    // indicatorElement.style.color = '#000';
    // indicatorElement.style.padding = '10px';
    // indicatorElement.style.fontSize = '1rem';
    // indicatorElement.style.zIndex = '998';
    // indicatorElement.style.fontFamily = 'sans-serif';
    // indicatorElement.style.opacity = '0.5';

    // indicatorElement.innerText = deviceWidth + 'px wide';

    // body.appendChild(indicatorElement);
    // Device Width Indicator - End

    
});