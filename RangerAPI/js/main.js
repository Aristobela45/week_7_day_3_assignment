// function to get ranger data

const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers')
    console.log(response)
    console.log(response.data)
    return response.data
}

// create a constant to hold my DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}


// create a constant to hold my DOM Elements
const createList = (id, name, color) => {
    const html = `<div class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${id}>
    <li class="list-group-item">${name}</li>
    <li class="list-group-item">${color}</li>    
    <li class="list-group-item">${season}</li>
    <button id="hello" onclick="deleteRow(this.id)">Remove</button>
    
  </ul>
</div>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

const loadData = async () => {
    const rangers = await getData()

    rangers.forEach(element => createList(element.id, element.name, element.color, element.season))
}

const clearData = () => {
    document.querySelector('.ranger-list').innerHTML = '';
} 

const deleteRow = (id) => {
    console.log(id)
    element = document.querySelector(`#${id}`)
    element.innerHTML = ''
}