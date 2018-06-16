export const FullStackWords = [
    { fs: ['academy', 'coding', 'school'] },
    { algorithm: ['codewars', 'kyu', 'solving', 'strategy'] },
    { redux: ['store', 'action creator', 'reducer'] },
    { binary: ['queue', 'linked list', 'data structure', 'stack', 'hash tables'] },
    { query: ['search', 'filter', 'data'] },
]


export const Food = [
    { main: 'bacon', taboo: ['breakfast', 'burger', 'pork', 'pig', 'egg'] },
    { main: 'cake', taboo: ['birthday', 'dessert', 'frosting', 'layers', 'wedding'] },
    { main: 'pizza', taboo: ['artichoke', 'cheese', 'pepporoni', 'dominoes', 'papa johns'] },
    { main: 'cheese', taboo: ['parmesan', 'american', 'swiss', 'cheddar', 'burger'] },
    { main: 'diet', taboo: ['healthy', 'low fat', 'sugarless', 'soda', 'coke'] },
    { main: 'pasta', taboo: ['italian', 'spaghetti', 'ravioli', 'penne', 'carbs'] },
    { main: 'soup', taboo: ['lentil', 'liquid', 'bread', 'chicken noodle', 'bowl'] },
    { main: 'mustard', taboo: ['ketchup', 'yellow', 'sauce', 'dijon', 'hot dog'] },
    { main: 'frozen yogurt', taboo: ['basic', 'light', 'pinkberry', 'dessert', 'refreshing'] }
]

export const Travel = [
    { main: 'plane', taboo: [] },
    { main: 'pilot', taboo: [] },
    { main: 'airsick', taboo: [] },
    { main: 'stewardess', taboo: [] },
    { main: 'time', taboo: [] },
    { main: 'Paris', taboo: [] },
    { main: 'China', taboo: [] },
    { main: 'tourist', taboo: [] },
    { main: 'currency', taboo: [] },
    { main: 'conversion', taboo: [] },
    { main: 'jetlag', taboo: [] },
]

function fetchApi(array) {
    let word = ''
    for (let i = 0; i < array.length; i++) {
        word = array[i].main
        console.log('word', word)
        fetch(`https://api.datamuse.com/words?rel_jjb=${word}`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('json', responseJson.slice(0, 4))
                return responseJson.slice(0, 4);
            })
            .catch((error) => {
                console.error(error);
            });
    }


}

fetchApi(Travel)