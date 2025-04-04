export const fetchData = () => {
    const data = fetch("https://dummyjson.com/todos?limit=10&skip=80");
    return data.then((response) => {
        response.json().then(data => {
            console.log(data);
        })
    }).catch(e => {
        console.log(`Error ${e.message}`)
    })
}

