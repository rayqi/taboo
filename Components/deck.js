export const FullStackWords = [
    { fs: ['academy', 'coding', 'school'] },
    { algorithm: ['codewars', 'kyu', 'solving', 'strategy'] },
    { redux: ['store', 'action creator', 'reducer'] },
    { binary: ['queue', 'linked list', 'data structure', 'stack', 'hash tables'] },
    { query: ['search', 'filter', 'data'] },
]

export const Coding = [
    { main: 'javascript', taboo: [] },
    { main: 'binary', taboo: [] },
    { main: 'algorithm', taboo: [] },
    { main: 'sequelize', taboo: [] },
    { main: 'query', taboo: [] },
    { main: 'database', taboo: [] },
    { main: 'programming', taboo: [] },
    { main: 'debugging', taboo: [] },
    { main: 'code', taboo: [] },
    { main: 'return', taboo: [] },
    { main: 'logger', taboo: [] },
    { main: 'lifecycle', taboo: [] }
]

export const Food = [
    { main: 'bacon', taboo: ['breakfast', 'burger', 'pork', 'pig', 'egg'] },
    { main: 'cake', taboo: ['birthday', 'dessert', 'frosting', 'layers', 'wedding'] },
    { main: 'pizza', taboo: ['artichoke', 'cheese', 'pepporoni', 'dominoes', 'papa johns'] },
    { main: 'cheese', taboo: ['parmesan', 'american', 'swiss', 'cheddar', 'burger'] },
    // { main: 'diet', taboo: ['healthy', 'low fat', 'sugarless', 'soda', 'coke'] },
    // { main: 'pasta', taboo: ['italian', 'spaghetti', 'ravioli', 'penne', 'carbs'] },
    // { main: 'soup', taboo: ['lentil', 'liquid', 'bread', 'chicken noodle', 'bowl'] },
    // { main: 'mustard', taboo: ['ketchup', 'yellow', 'sauce', 'dijon', 'hot dog'] },
    // { main: 'frozen yogurt', taboo: ['basic', 'light', 'pinkberry', 'dessert', 'refreshing'] }
]

export const Travel = [
    { main: 'plane', taboo: [] },
    { main: 'pilot', taboo: [] },
    { main: 'flying', taboo: [] },
    { main: 'trip', taboo: [] },
    { main: 'time', taboo: [] },
    { main: 'leisure', taboo: [] },
    { main: 'beach', taboo: [] },
    { main: 'tourist', taboo: [] },
    { main: 'currency', taboo: [] },
    { main: 'translate', taboo: [] },
    { main: 'summer', taboo: [] },
    { main: 'train', taboo: [] }
]


function fetchApi(array) {
    let word = ''
    for (let i = 0; i < array.length; i++) {
        word = array[i].main
        fetch(`https://api.datamuse.com/words?rel_jjb=${word}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.slice(0, 4);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

fetchApi(Travel)