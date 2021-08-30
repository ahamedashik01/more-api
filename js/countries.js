const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
};

loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    // used forEach insted of for of 
    countries.forEach(country => { //here country is the loop of countries
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p style="font-size : 20px">${country.capital}</p>
        <a id="link" href="#country-details" style="font-size:18px; padding: 5px 10px 5px 10px; background-color: #eabd69; border-radius: 5px; cursor: pointer;" onclick="loadCountryDetails('${country.name}')">Details</a>
        `;
        countriesDiv.appendChild(div);
    });
};

const loadCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetails(data[0]));
};
const countryDiv = document.createElement('div');
const displayCountriesDetails = country => {
    const countryDetailsDiv = document.getElementById('country-details');
    // countryDetailsDiv.classList.add('details');
    countryDiv.innerHTML = `
    <div class="details">
        <div>
        <p><b>Name : </b>${country.name}</p>
        
        <p><b>Native Name : </b>${country.nativeName}</p>
        <p><b>Numaric Code : </b>${country.numericCode}</p>
        <p><b>Population : </b>${country.population}</p>
        <p><b>Region : </b>${country.region}</p>
        </div>
        <div>
        <p><b>Flag</b></p>
        <img width ="250px" src="${country.flag}" >
        </div>
    </div>    
    `;
    countryDetailsDiv.appendChild(countryDiv);
};