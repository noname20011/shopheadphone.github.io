const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



// ======================= HEADER =========================== //
const navMenu = $('#nav-menu')
const navClose = $('#nav-close')
const navToggle = $('#nav-toggle')

if (navToggle) {
    navToggle.onclick = () => {
        navMenu.classList.add('show-menu')
    }
}

if (navClose) {
    navClose.onclick = () => {
        navMenu.classList.remove('show-menu')
    }
}

const menuItems = navMenu.querySelectorAll('.nav__item')
menuItems.forEach(menuItem => {
    menuItem.onclick = () => {
        navMenu.classList.remove('show-menu')
    }
})

// =============== SCROLL ACTIVE HEADER ===========//
function scrollHeader() {
    const nav = $('.nav')
    let scrollHeight = this.scrollY
    if (scrollHeight >= 60) {
        nav.classList.add('scroll-nav')
    } else {
        nav.classList.remove('scroll-nav')
    }
}

// ======================= SCROLL UP ================== //

function scrollUp() {
    const scrollUp = $('#scroll-up')
    let scrollHeight = this.scrollY
    if (scrollHeight >= 200) {
        scrollUp.classList.add('scrollup--active')
    } else {
        scrollUp.classList.remove('scrollup--active')
    }
}

// ======================= SCROLL ACTIVE SECTION LINK ================== //
function scrollActiveLink() {
    const sections = $$('section[id]')
    const nav = $('.nav')
    let windowScroll = this.pageYOffset
    if (nav) {
        const navMenu = nav.querySelector('#nav-menu')
        if (navMenu) {
            sections.forEach((linkSection) => {
                let sectionId = linkSection.getAttribute('id')
                let currentHeight = linkSection.offsetHeight
                let currentTop = linkSection.offsetTop
                if (windowScroll > currentTop && windowScroll <= currentTop + currentHeight) {
                    $('#nav-menu a[href*=' + sectionId + ']').classList.add('nav__item--active')
                } else {
                    $('#nav-menu a[href*=' + sectionId + ']').classList.remove('nav__item--active')
                }
            })
        }
    }
}

// ===== MOTION COMMON ======= //

window.onscroll = function(e) {
    scrollHeader()
    scrollUp()
    scrollActiveLink()
    scrollActiveLink()
}


// ====================== SCROLL ANIMATED ============ //

const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 100,
    // reset: true
})

sr.reveal(`.home__header, .section__title`, { delay: 300 })
sr.reveal(`.home__footer`, { delay: 400 })
sr.reveal(`.home__img`, { delay: 400, origin: 'top' })

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, { origin: 'top', interval: 100 })
sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
sr.reveal(`.case__img`, { origin: 'top' })
sr.reveal(`.case__data`)