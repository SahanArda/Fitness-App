export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '2ce7f06874msh0cd3ab0601f86dfp12023bjsnf56c27827620' //process.env.REACT_APP_RAPID_API_KEY
          
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}