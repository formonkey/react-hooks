// eslint-disable-next-line no-extend-native
Array.prototype.unique = function(key) {
    const a = this.concat();

    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i][key] === a[j][key]) a.splice(j--, 1);
        }
    }

    return a;
};

// eslint-disable-next-line no-extend-native
Array.prototype.replace = function(b, key) {
    const index = this.findIndex(e => e[key] === b[key]);

    if (index >= 0) {
        this[index] = b;
    } else {
        this.push(b);
    }

    return this;
};

// eslint-disable-next-line no-extend-native
Array.prototype.sortByKey = function(key, sort = 'asc') {
    const data = this.sort(function(a, b) {
        const y = b[key];
        const x = a[key];

        return x < y ? -1 : x > y ? 1 : 0;
    });

    return sort === 'asc' ? data : data.reverse();
};

// eslint-disable-next-line no-extend-native
Array.prototype.filterByKey = function(key, value, noFilter) {
    return noFilter
        ? this
        : this.filter(element => (element[key] || !!element[key]) === value);
};

// eslint-disable-next-line no-extend-native
String.prototype.toPascalCase = function() {
    return this.match(/[a-z]+/gi)
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
        .join('');
};

// eslint-disable-next-line no-extend-native
String.prototype.dateFormat = function(characters = 3) {
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    let dia;
    let mes;
    
    const date = new Date(this);
    
    if (date.getTime()) {
        dia = date.getDate();
        mes = date.getMonth();

        return months[mes] ? `${dia} ${months[mes].slice(0, characters)}` : '';
    } else {
        const dateSplit = this.split('/');
        const correctDate = [dateSplit[1], dateSplit[0], dateSplit[2]].join('/');
        
        return correctDate.dateFormat();
    }
};

// eslint-disable-next-line no-extend-native
Number.prototype.numberFormat = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(
        new RegExp(re, 'g'),
        '$&' + (s || ',')
    );
};

// eslint-disable-next-line no-extend-native
Number.prototype.currencyFormat = function(currency) {
    return this.numberFormat(2, 0, '.', ',') + ' ' + currency;
};

// eslint-disable-next-line no-extend-native
Array.prototype.reduceByKey = function(key, initialValue = {}) {
    return this.reduce((temp, current) => {
        return { ...temp, [current[key]]: [...(temp[current[key]] || []), current] }
    }, initialValue);
}

// eslint-disable-next-line no-extend-native
String.prototype.getTime = function() {
    const dateParts = this.split('/');

    return (new Date(`${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`)).getTime();
}

// eslint-disable-next-line no-extend-native
Array.prototype.findQuery = function(object, initialQuery = {}) {
    return this.reduce((temp, current) => {
        return { ...temp, [current]: { $eq: object[current] } }
    }, initialQuery);
}
