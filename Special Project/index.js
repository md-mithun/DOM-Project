data.map((data) => {
    const right = document.querySelector('.right');
    right.innerHTML += ` <div class="desc">
    <div class="name-arrow"  onclick="country(this)">
     <h1 class="country-name">${data.name.common}</h1>
     <i>></i>
    </div>
     <ol>
         <li>Population: ${data.population}</li>
         <li>Area: ${data.area}</li>
         <li>Capital: ${data.capital}</li>
         <li>Time Zones ${data.timezones}</li>
     </ol>`
});

function country(own) {
    const country = own;
    const desc = country.parentNode;
    if (document.querySelector('.height')) {
        document.querySelector('.height').classList.remove('height');

    } else {
        desc.classList.toggle('height');
    }
    if (document.querySelector('.rotate')) {
        document.querySelector('.rotate').classList.remove('rotate');
    } else {
        country.lastChild.previousSibling.classList.toggle('rotate')        //country.lastChild-> #text
    }
    const cName = country.childNodes[0].nextElementSibling.innerHTML;
    const flagLink = catchFlagLink(cName)[0].flags.svg;
    const alter = cName;
    setImg(flagLink,alter);
}
function catchFlagLink(cName) {
    const filterData = data.filter((country) => {
        return (country.name.common == cName)
    })
    return filterData;
}


function setImg(flagName,alter) {
    const img = document.getElementById('countryImg');
    img.src = flagName;
    img.alt=`${alter} flags`;
}


function visitedCountry() {
    const viisited = document.createElement('ul')
}