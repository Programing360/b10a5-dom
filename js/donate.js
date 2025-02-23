document.getElementById('blog-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-form').classList.add('hidden')
        document.getElementById('blog-form').classList.remove('hidden')
        document.getElementById('blog-btn').classList.add('hidden')
        document.getElementById('home-btn').classList.remove('hidden')
        document.getElementById('history-form').classList.add('hidden')
        // bg-colour
        const bgSetP = document.getElementById('history-btn');
        bgSetP.classList.remove('bg-lime-500')
        const bgSet = document.getElementById('donation-btn');
        bgSet.classList.remove('bg-lime-500')
        const bgSetX = document.getElementById('blog-btn');
        bgSetX.classList.add('bg-lime-500')
        const bgSetY = document.getElementById('home-btn');
        bgSetY.classList.add('bg-lime-500')
    })
document.getElementById('home-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-form').classList.remove('hidden')
        document.getElementById('blog-form').classList.add('hidden')
        document.getElementById('blog-btn').classList.remove('hidden')
        document.getElementById('home-btn').classList.add('hidden')
        document.getElementById('history-form').classList.add('hidden')
        // bg-colour
        const bgSetP = document.getElementById('history-btn');
        bgSetP.classList.remove('bg-lime-500')
        const bgSet = document.getElementById('donation-btn');
        bgSet.classList.remove('bg-lime-500')
        const bgSetX = document.getElementById('home-btn');
        bgSetX.classList.add('bg-lime-500')
        const bgSetY = document.getElementById('blog-btn');
        bgSetY.classList.add('bg-lime-500')
    })

document.getElementById('donation-btn')
    .addEventListener('click', function () {
        document.getElementById('history-form').classList.add('hidden')
        document.getElementById('blog-form').classList.add('hidden')
        document.getElementById('donation-form').classList.remove('hidden')
        document.getElementById('home-btn').classList.add('hidden')
        document.getElementById('blog-btn').classList.remove('hidden')
        
        // bg set------------------------
        const bgSet = document.getElementById('donation-btn');
        bgSet.classList.add('bg-lime-500')
        const bgSetP = document.getElementById('history-btn');
        bgSetP.classList.remove('bg-lime-500')
        const bgSetX = document.getElementById('home-btn');
        bgSetX.classList.remove('bg-lime-500')
        const bgSetY = document.getElementById('blog-btn');
        bgSetY.classList.remove('bg-lime-500')
    })
document.getElementById('history-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-form').classList.add('hidden')
        document.getElementById('blog-form').classList.add('hidden')
        // bg-set-------------------------------
        const bgSetP = document.getElementById('history-btn');
        bgSetP.classList.add('bg-lime-500')
        const bgSet = document.getElementById('donation-btn');
        bgSet.classList.remove('bg-lime-500')
        const bgSetX = document.getElementById('home-btn');
        bgSetX.classList.remove('bg-lime-500')
        const bgSetY = document.getElementById('blog-btn');
        bgSetY.classList.remove('bg-lime-500')
        // --------------------------------------------------
        
    })
    
// donation amount create
// getInputValueById('donate-now-btn')