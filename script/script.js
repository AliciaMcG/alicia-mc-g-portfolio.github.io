let topBttn = document.getElementById('to-top')
// the to-top button appears briefly when the page is first loaded after the first scroll. it is not supposed to. this is the best solution i can think of.
let topBttnSafeGuard = 0

function toTop () {
    document.documentElement.scrollTop = 0
}

function toggleTopBttn () {
    let scrollX = document.documentElement.scrollTop

    if (scrollX > 350)
    {
        topBttn.classList.add('to-top-on')
        topBttn.classList.remove('to-top-off')
        topBttnSafeGuard++
    }
    else if (topBttnSafeGuard!=0)
    {
        topBttn.classList.add('to-top-off')
        topBttn.classList.remove('to-top-on')
    }
}

topBttn.addEventListener('click', toTop)
window.addEventListener('scroll', toggleTopBttn)