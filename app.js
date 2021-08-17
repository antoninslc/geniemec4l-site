//toggle
$('.topbar-btn').click(function(e) {
	e.preventDefault();
	$('.topbar-nav').toggleClass('is-open');
})


//reveal
const ratio = .05
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})

//navbar
var departScroll = window.pageYOffset;

    window.onscroll = function(a) {

        var currentScrollpos = window.pageYOffset;

        if (departScroll > currentScrollpos)
            {
                document.getElementById('navbar').style.top="0";
            }
        else {
                document.getElementById('navbar').style.top="-72px";
            }

        departScroll = currentScrollpos;
    }
