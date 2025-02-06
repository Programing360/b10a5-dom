document.getElementById('blog-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-form').classList.add('hidden')
        document.getElementById('blog-form').classList.remove('hidden')
        document.getElementById('blog-btn').classList.add('hidden')
        document.getElementById('home-btn').classList.remove('hidden')
    })
document.getElementById('home-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-form').classList.remove('hidden')
        document.getElementById('blog-form').classList.add('hidden')
        document.getElementById('blog-btn').classList.remove('hidden')
        document.getElementById('home-btn').classList.add('hidden')
    })

    // donation amount create
    // getInputValueById('donate-now-btn')