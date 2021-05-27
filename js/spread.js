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

 /*let [zodiacSigns, flowers, food] = stuff;
 console.log(zodiacSigns);*/

