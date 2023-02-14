/// NAV

const nav = document.querySelector('[data-nav="nav"]')
const navBtn = document.querySelector('[data-nav="btn"]')
const navLines = document.querySelectorAll('[data-nav="line"]')
const navMenu = document.querySelector('[data-nav="menu"]')
const navLink = document.querySelectorAll('[data-nav="link"]')

const showMenu = () => {
    navMenu.classList.toggle('show')
    document.body.classList.toggle('stickyBody')

    if (navMenu.classList.contains('show')) {
        navLines.forEach(el => {
            el.style.width = '100%'
            el.style.backgroundColor = '#cf6f16';
        })
    } else {
        navLines.forEach(el => el.removeAttribute('style'))
    }
}

const navScrollBehaviour = () => {
    
    if (window.scrollY > 50) {
        nav.classList.add('navScroll')
    } else {
        nav.classList.remove('navScroll')
    }

}

window.addEventListener('scroll', navScrollBehaviour)
navBtn.addEventListener('click', showMenu)
navLink.forEach( (el) => {
    el.addEventListener('click', showMenu)
})

/// HEADER

const allLetters = document.querySelectorAll('[data-header="span"]')

const headerParalax = () => {
    for (let i = 0; i < allLetters.length; i++) {

        if (window.scrollY > 0) {
            allLetters[i].style.transform = `translateY(${window.scrollY}px) scale(${1 + (window.scrollY * 0.002)})`
            allLetters[i].style.opacity = `${1 - (window.scrollY * 0.002)}`
        } else {
            allLetters[i].removeAttribute('style')
        }
    }
}

window.addEventListener('scroll', headerParalax)

/// TUTORIAL

const allOptions = document.querySelectorAll('[data-option="all"]')
const allMenu = document.querySelectorAll('[data-tutorial="menu"]')

const handleOptions = (e) => {
    
    if(e.target === allMenu[0]) {

        allOptions.forEach( (el) => {

            el.style.display = "none";

            if (el.attributes[0].value === 'all') {
                el.style.display = "block";
            }

        })

    } else if(e.target === allMenu[1]) {

        allOptions.forEach( (el) => {

            el.style.display = "none";

            if (el.attributes[1].value === 'option1') {
                el.style.display = "block";
            }

        })

    } else if(e.target === allMenu[2]) {

        allOptions.forEach( (el) => {
            
            el.style.display = "none";

            if (el.attributes[1].value === 'option2') {
                el.style.display = "block";
            }

        })

    } else {
        allOptions.forEach( (el) => {

            el.style.display = "none";

            if (el.attributes[1].value === 'option3') {
                el.style.display = "block";
            }

        })
    }

}

allMenu.forEach( el => {
    el.addEventListener('click', handleOptions)
})

/// FOOTER DATA

const footerData = new Date;
const footerSpan = document.querySelector('[data-footer="year"]')

footerSpan.textContent = footerData.getFullYear();