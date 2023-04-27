const form = document.querySelector('#f1DataForm')
console.log(form)

form.addEventListener('submit', async ( event ) => {
    event.preventDefault();
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value

    console.log(season, round)
    const racerData = await getData(season, round)
    console.log(racerData)

    racerData.forEach(driver => {
        createList(driver.position, driver.points, driver.wins, driver.Driver.firstName, driver.Driver.lastName, driver.Driver.origin, driver.Driver.constructor[0])
    });
})

const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1${season}/${round}/driverStandings.json`)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}
// create a constant to hold my DOM Elements
const DOM_Elements = {
    f1_list: '.list-group.f1-list'
}
// create a constant to hold my DOM Elements
const createList = (position, points, wins, firstName, lastName, origin, constructor) => {
    console.log(position, points, wins, firstName, lastName, origin, constructor)
    const html = `<div class="driver-card mt-3 mb-3" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Position: ${position}</li>
            <li class="list-group-item">Points: ${points}</li>
            <li class="list-group-item">Wins: ${wins}</li>
            <li class="list-group-item">Driver: ${firstName} ${lastName}</li>
            <li class="list-group-item">origin: ${origin}</li>
            <li class="list-group-item">Constructor: ${constructor}</li>
        </ul>
    </div>`;
    document.querySelector(DOM_Elements.f1_list).insertAdjacentHTML('beforeend', html)
}