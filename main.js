const country = document.getElementById("")

async function getCountry(){
    const country = document.getElementById("country-search");

    const endpoint = new URL (`https://restcountries.com/v3.1/name/{country}?fullText=true`);
    
    if (!country) {
        alert("Please enter a country");
        return;
    }
}