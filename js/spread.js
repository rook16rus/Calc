const stuff = [
    [
        '♈',
        '♉',
        '♊',
        '♋',
        '♌',
    ], [
        '♍',
        '♎',
    ], [
        [
            '♏',
            '♐',
            '♑',
        ],
        [
            '♒',
            '♓',
        ],
        [
            '🌸',
            '🌷',
            '🌹',
            '🌺',
        ]
    ], [
        '🌻',
        '🌼',
        '🌽',
    ],[
        [
            { value: '🍅' },
            { value: '🍎' },
        ], [
            { value: '🍏' },
            { get: () => '🍑' },
        ], [
            { get: () => '🍒' },
            { get: () => '🍓' },
        ],
    ]
];

/**
 * Из представленного массива stuff необходимо заполнить
 * константы zodiacSigns, flowers, food соответственно
 * знаками задиака, цветами и съедобными объектами.
 * Значения должны получиться плоскими массивами
 * без оберток в виде объектов и методов вида:
 * 🍅 🍎 🍏 🍑 🍒 🍓
 * Попробуйте написать как можно меньше кода для достижения
 * результата.
 */

 const zodiacSigns = stuff[0].concat(stuff[1]).concat(stuff[2][0]).concat(stuff[2][1]);
 const flowers = stuff[2][2].concat(stuff[3]);
 const food = stuff[4][0][0].value.concat(stuff[4][0][1].value).concat(stuff[4][1][0].value).concat(stuff[4][1][1].get()).concat(stuff[4][2][0].get()).concat(stuff[4][2][1].get());

 console.log(zodiacSigns);
 console.log(flowers)
 console.log(food);

