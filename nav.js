const toggleMenu = () => {
    const hamburger = document.querySelector('.open');
    const close = document.querySelector('.close');
    const navBar = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const txtColor = document.getElementById("logo-text-color")
    const crclColor = document.getElementById("circle-color")
    const innerCrclColor = document.getElementById("inner-circle-color");

    hamburger.addEventListener('click', () => {
        hamburger.style.display = "none";
        close.style.display = "block";
        overlay.style.height = "100%";
        txtColor.style.fill = "white";
        crclColor.style.fill = "white";
        innerCrclColor.style.fill = "hsl(229, 31%, 21%)";
        
        setTimeout(function() {
            navBar.style.display = "block";
        }, 50);
        
    });

    close.addEventListener('click', () => {
        hamburger.style.display = "block";
        navBar.removeAttribute('style');
        close.style.display = "none";
        overlay.style.height = "0%";
        
        setTimeout(function() {
            txtColor.style.fill = "initial";
            crclColor.style.fill = "hsl(231, 69%, 60%)";
            innerCrclColor.style.fill = "white";
        }, 100);
        
});

}
toggleMenu();

// Tab Functionality

const tabs = document.querySelectorAll('[data-tab-target');
const tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })


        target.classList.add('active');
        tab.classList.add('active');
    })
})

// Accordion

const accordionTitle = document.querySelectorAll('[data-target');
const accordionContents = document.querySelectorAll('[accordion-content');

accordionTitle.forEach(title => {
    title.addEventListener('click', () => {
        const titleTarget = document.querySelector(title.dataset.target);     
        const svgIcon = title.querySelector('svg');
        const iconPath = title.querySelector('path');

        svgIcon.classList.toggle('close-icon');
       
        if (iconPath.getAttribute("stroke") == "#5267DF") {
            iconPath.setAttribute("stroke", "red");
        } else {
            iconPath.setAttribute("stroke", "#5267DF");
        };
        
        title.classList.toggle('active');    
        titleTarget.classList.toggle('active');  
    })
})

// Form Validation

const form = document.getElementById('form');
console.log(form);
const email = document.getElementById('email');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // get value from email field

    const emailAddress = email.value.trim();
    console.log(emailAddress);
    const errorIcon = document.getElementById('error-img');
    const small = document.getElementById('label');

    if(emailAddress === "") {
        errorIcon.style.display = "block";
        small.style.display = "block";
        email.classList.add('error');
    } else if(emailAddress != "") {
        errorIcon.style.display = "none";
        small.style.display = "none";
        email.classList.remove('error');
    } return true;
}
