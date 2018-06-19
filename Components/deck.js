
export const Coding = [
    { main: 'javascript', taboo: ['language', 'coding', 'python', 'ruby', 'front-end'] },
    { main: 'binary', taboo: ['search', 'tree', 'data structure', 'breadth', 'nightmare'] },
    { main: 'algorithm', taboo: ['codewars', 'kyu', 'solving', 'strategy', 'rule'] },
    { main: 'sequelize', taboo: ['search', 'query', 'data', 'eager loading', 'filter'] },
    { main: 'query', taboo: ['search', 'filter', 'select', 'extract', 'information'] },
    { main: 'database', taboo: ['model', 'server', 'information', 'validation', 'postico'] },
    { main: 'programming', taboo: ['life', 'code', 'debugging', 'web development', 'engineer'] },
    { main: 'debugging', taboo: ['solve', 'annoying', 'look through', 'review', 'error'] },
    { main: 'code', taboo: ['wars', 'games', 'communication', 'hard', 'da vinci'] },
    { main: 'return', taboo: ['end', 'console.log', 'bottom', 'final', 'function'] },
    { main: 'Fullstack', taboo: ['academy', 'school', 'where', 'here', 'Grace Hopper'] },
    { main: 'lifecycle', taboo: ['component', 'mount', 'flow', 'loading', 'react'] }
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
    { main: 'plane', taboo: ['air', 'fly', 'ticket', 'travel', 'helicopter'] },
    { main: 'pilot', taboo: ['driver', 'cockpit', 'plane', 'in charge', 'beta'] },
    { main: 'flying', taboo: ['air', 'take off', 'plane', 'birds', 'wings'] },
    { main: 'trip', taboo: ['planner', 'euro', 'school bus', 'destination', 'fall'] },
    { main: 'time', taboo: ['zone', 'watch', 'jetlag', 'change', 'hours'] },
    { main: 'leisure', taboo: ['pleasure', 'purpose', 'free', 'summer', 'christmas'] },
    { main: 'beach', taboo: ['tropical', 'sand', 'water', 'island', 'relax'] },
    { main: 'tourist', taboo: ['slow walker', 'annoying', 'hate', 'travel', 'foreign'] },
    { main: 'currency', taboo: ['money', 'pounds', 'yuan', 'euro', 'dollar'] },
    { main: 'translate', taboo: ['english', 'convert', 'chinese', 'language', 'understand'] },
    { main: 'summer', taboo: ['fall', 'autumn', 'season', 'spring', 'winter'] },
    { main: 'train', taboo: ['mta', 'stops', 'bus', 'rail', 'path'] }
]

// Travel, Food, Coding

export function getData(keyWord) {
    const results = [];
    const apiURL = "https://api.datamuse.com/words?ml=";
    return fetch(`${apiURL}${keyWord}`)
        .then((res) => res.json())
        .then((data) => {
            return data.slice(0, 15).map((obj) => {
                return obj.word;
            })
        })
        .then((mainWords) => {
            const promiseArray = [];
            mainWords.forEach((elem) => {
                results.push({
                    main: elem
                })
                promiseArray.push(
                    fetch(`${apiURL}${elem}`)
                        .then(res => res.json())
                );
            })

            return Promise.all(promiseArray)
        })
        .then(data => {
            data.forEach((arrOfObj, index) => {
                const words = arrOfObj.slice(0, 5).map(obj => obj.word);
                results[index].taboo = words;
            })
            return results;
        })
        .catch((error) => {
            console.error(error);
        });


}
