const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

search.addEventListener('keypress', function(e) {
    if(e.key === "Enter"){
        const url = 'https://nix.shiori.com.br/searx/search?q=' + search.value;
        search.click();
        window.open(url,'_self');
    }
})
