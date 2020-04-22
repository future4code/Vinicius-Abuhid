function operateNumbers(a, b) {
    var result1 = a + "+" + b + "=" + (a + b);
    var result2 = a > b ? a + "-" + b + "=" + (a - b) : b + "-" + a + "=" + (b - a);
    var result3 = a + "x" + b + "=" + a * b;
    var result4 = a > b ? a + " \u00E9 maior" : b + " \u00E9 maior";
    console.log(result1, result2, result3, result4);
}
function checkArrayNumbers(array) {
    var allArrayelements = 0;
    var allOddNumbers = array.filter(function (item) {
        return item % 2 === 0 ? item : '';
    });
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        allArrayelements = allArrayelements + i;
    }
    return { arrayLenght: array.length, oddNumbersLenght: allOddNumbers.length, arrayElemntsAddition: allArrayelements };
}
console.log(checkArrayNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
var PostList = [{ name: 'vinicius', texto: 'bom dia' },
    { name: 'felipe', texto: 'ola' }, { name: 'nadia', texto: 'tudo bem?' }, { name: 'rosana', texto: 'boa tarde' },
    { name: 'vinicius', texto: 'joia?' }];
function findOutTheAuthor(posts, authour) {
    var filteredPosts = posts.filter(function (post) {
        if (post.name === authour) {
            return { texto: post.texto };
        }
    });
    return filteredPosts;
}
console.log(findOutTheAuthor(PostList, 'nadia'));
function findOutTheAge(year, era) {
    var age;
    if (year > 4000 && era === 'AC') {
        age = 'Pré-História';
    }
    else if ((year <= 4000 && era === 'AC') || (year < 476 && era !== 'AC')) {
        age = 'Idade Antiga';
    }
    else if ((year >= 476 && year < 1453) && era !== 'AC') {
        age = 'Idade Média';
    }
    else if ((year >= 1453 && year < 1789) && era !== 'AC') {
        age = 'Idade Moderna';
    }
    else if (year >= 1789 && era !== 'AC') {
        age = 'Idade Contemporânea';
    }
    else {
        age = 'Desculpe, não foi possível identificar o período histórico. Tente novamente mais tarde...';
    }
    return age;
}
console.log(findOutTheAge(3048, 'AC'));
console.log(findOutTheAge(1999));
console.log(findOutTheAge(1042, 'DC'));
