;(function () {
    'use strict'
    document.querySelector('.nav-icon').addEventListener('click', function () {
        const dom = document.querySelector('.offcanvas-collapse')
        dom.classList.toggle('open')
        if (dom.classList.contains('open')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    })
})()
