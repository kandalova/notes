export const ALGORITHMS_CONTENT = {
    header: 'Алгоритмы',
    lists: [{
        header: 'Git по книге',
        items: [`<a href="https://github.com/egonSchiele/grokking_algorithms" target="_blank">egonSchiele/grokking_algorithms</a>`]
    }, {
        header: 'Время выполнения',
        items: [
            'Время выполнения алгоритмов растет с разной скоростью.',
            'О-большое - как возрастает время выполнения с ростом списка.',
            'О-большое - не сообщает время в секундах, позволяет сравнить количество операций.',
            'О-большое - определяет время выолнения в худшем случае.',
            'Константы не учитываются: O(N/2) = O(N).',
            '',
            'Линейное - максимальное количество попыток совпадает с размером списка О(n).',
            'Логарифмическое - O(logN)',
            'O(N*logN) - эффективные алгоритмы сортировки.',
            'O(N*N) - медленные алгоритмы сортировки.',
            'O(N!) - очень медленные алгоритмы сортировки.',
            'O(1) - постоянное время (независимо от размера) - операции выполняются мгновенно.',
        ],
    }, {
        header: 'Бинарный поиск',
        items: [
            'На вход - отсортирвоанный список.',
            'С каждой попыткой - отсекается половина оставшихся элементов.',
            'Нужно logN шагов.'
        ],
    }, {
        header: 'Массивы и связные списки (две структуры данных)',
        items: [
            {
                header: 'Массивы:',
                items: [
                    'Хранятся в памяти непрерывно.',
                    'При добавлении нового элемента, если рядом нет свободного места в памяти:',
                    {items: ['Переносить весь массив в другое место памяти.', 'Изначально указать размер больше - неэффективно расходуется память.']},
                    'Быстрое чтение элемента с любой позиции O(1).',
                    'Вставка элемента O(N).',
                    'Удаление элемента O(N).',

                ],
            },
            {
                header: 'Связные списки:',
                items: [
                    'Элементы списка размещаются в памяти где угодно, так как в каждом элементе хранится адрес следующего.',
                    'При добавлении элемента нет таких проблем.',
                    'Чтобы прочитать элемент из середины, нужно пройти через весь список. O(N).',
                    'Вставка элемента O(1).',
                    'Удаление элемента O(1) - если можно мгновенно получить доступ к удаляемому элементу.',
                ],
            },
        ],
    }, {
        header: 'Сортировка выбором',
        items: [
            'Для сортировки по возрстанию сначала находим самый большой элемент, затем самый большой из оставшихся и тд.',
            'О(N*N)',
        ],
    }, {
        header: 'Рекурсия',
        items: [
            'Это когда функция вызывает саму себя.',
            'Применяется тогда, когда решение становится более понятным.',
            'Рекурсия не убыстряет работу, иногда решение с циклами даже быстрее.',
            'Состоит  из базового случая (когда остановится) и рекурсивного (функция вызывает сама себя).',
            'Важно понимать - стек вызовов: когда функция вызыывается из другой функции, вызывающая функция приостанавливается, а не заканчивает работу; после выполнения вызыванной функции управление передается обратно к вызывающей и она продолжает работу.',
            'Рекурсивные функции тоже используют стек вызывов',
            'Сохранение все информации для каждого вызывова функции - могут быть большие затраты памяти:',
            {
                items: ['Использовть цикл вместо рекурсии.', 'Хвостовая рекурсия.']
            }
        ],
    }, {
        header: 'Разделяй и властвуй',
        items: [
            'Алгоритмы на базе этой стратегии - рекурсивные.',
            'Два шага:',
            {
                items: ['Определить базовый случай - простейший из всех возможных.', 'Задача делится или сокращается, пока не будет сведена к базовому случаю.']
            },
            'Алгоритм Евклида.',
            'Для массивов базовый случай - пустой массив или массив из 1 элемента.',
            'В языках функционального программирования нет циклов - приходится применять рекурсию и данную стратегию.',
        ],
    }, {
        header: 'Быстрая сортировка',
        items: [
            'Основана на стратегии "разделяй и влавствуй".',
            'Часто применяется в реальных программах.',
            'Пустой массив и массив из одного элемента - базовый случай, их не надо сортировать.',
            'Массив их двух элементов сортируется без проблем.',
            'Массив их трех и более элементов - в массиве выбирается опопрный элемент, пока просто первый (как его правильно выбрать - дальше).',
            'Находим элементы меньшие и большие опорного - процесс разделения.',
            'После этого имеем:',
            {
                items: ['Подмассив меньших элементов.', 'Опорный элемент.', 'Подмассив больших элементов.']
            },
            'Если подмассивы были бы отсортированны, то левый подмассив-опорный элемент-правый подмассив давали бы отсортированный массив.',
            'Нужно применить алгоритм быстрой сортировки к двум подмассивам и затем объединить результат.',
            'Доказательство по индукции.',
            'Скорость зависит от выбора опорного элемента.',
            'В худшем случае - О(N*N).',
            'В среднем - О(N*logN).',
            'Сортировка слиянием всегда О(N*logN), но у нее константа(которая обычно не учитывается) больше. Здесь эта константа учитывается, так как О-большое - одинаковое.',
            'Лучший случай - является средним.',
            'Если брать опорным слуйчайный элемент - в среднем алгоритм завершится за О(N*logN).',
        ],
    }, {
        header: 'Хэш-таблицы (сложная структура данных)',
        items: [
            'Хэш-функция + массив = хэш-таблица.',
            'Эта структура данных с дополнительной логикой (массивы и списки - напрямую отображают адрес памяти) - сложная структура данных.',
            'Другие названия: ассоциативные массивы, словари, отображения, хэш-карты, хэши.',
            'Работают быстро.',
            'Во многих языках есть реализация хэш-таблиц.',
            {
                header: 'Хэш-функции',
                items: [
                    'Получает строку (любые даннеы - последовательность байтов) - возвращает число.',
                    'Она должна быть последовательна: на конкретное слово всегда одно и то же число.',
                    'Разным словам - разные числа (нет).',
                    'Передаем хэш-функции слово -> она возращает число -> это число - индекс массива, где хранить данные этого слова.',
                    'Неизменно связывает название с одним индексом.',
                    'Связывет разные строки с разными индексами.',
                    'Знает размер массива и возвращает только дейтвительные индексы.',
                ]
            },
            {
                header: 'Примеры использования',
                items: [
                    {
                        header: "Для поиска",
                        items: [
                            'Отлично работают, когда нужно:',
                            'Создать связь, отображающую один объект на другой.',
                            'Найти значение в списке.',
                        ]
                    },
                    {
                        header: "Исключение дупликатов",
                        items: [
                            'Проверка ключей на присутствие.',
                        ]
                    },
                    {
                        header: "Как кэш",
                        items: [
                            'Механихм кэширования - сайт запоминаеи данные, вместо того, чтобы пересчитывать их заново.',
                            'Кэшируемые данные - хранятся в хэше.',
                            'Необходимо связать  url-адрес страницы и данные этой страницы.',
                        ]
                    }]
            },
            {
                header: 'Коллизии',
                items: [
                    'Когда двум ключам назначается один элемент массива.',
                    'Пройстейшая стратегия обхода - в элементе массива создается связанный список.',
                    'Выбор хэш-функции действительно важен: в идеале она должна распределять ключи равноверно по всему хэшу (никак не на один элемент).',
                    'Если связанный список становится слишком длинным - работа сильно замедляется. Но они не станут длинными при использовании хорошей хэш-функцииы.',
                ]
            },
            {
                header: 'Быстродействие',
                items: [
                    'В среднем - за О(1).',
                    'В худшем - за О(N).',
                    'В среднем случае - лучшее быстродействие от массивов и списков.',
                    'Для предотвращения коллизий (чтобы избежать худшего случая):',
                    {
                        items: [
                            'Низкий коэффициент заполнения.',
                            'Хорошая хэш-функция.',
                        ]
                    },
                    {
                        header: 'Коэффициент заполнения',
                        items: [
                            'Кол-во элементов в хэш-таблице / Общее количество элементов.',
                            'Изменяйте размер хэш-таблицы, когда коэфф. заполнения превышает 0.7.',
                            'Для изменения размера - выделяется новый массив (обычно вдвое больший) и заново заполняется.',
                            'Изменение размера не должно происходить слишком часто.',
                        ]
                    },
                    {
                        header: 'Хорошая хэш-функция',
                        items: [
                            'Должна обеспечивать равномерное распределение значений в массиве.',
                            'Плохая - создает скопление и порождает множетво коллизий.',
                            'Алгоритм SHA - можно использовать этот алгоритм.',
                        ]
                    },

                ]
            },
        ],
    }, {
        header: 'Поиск в ширину (BFS - Breadth-First Search)',
        items: [
            'Поиск в ширину - алгоритм для решения задачи поиска кратчайшего пути.',
            'Помогает ответить на вопросы:.',
            {
                items: ['Существует ли путь от узла А к узлу В.', 'Как выглядит кратчайший путь от узла А к узлу В (состоит из меньшего количество узлов/сегментов).']
            },
            {
                header: 'Графы',
                items: [
                    'Моделирует набор связей.',
                    'Состоит из ребер и узлов.',
                    'Узлы, соелиненные напрямую - соседи.',
                    'Направленный граф - отношения действуют только в одну сторону.',
                    'Ненправленный граф - отношения действуют в обе сторону (двусторонние стрелки).',
                    '*Топологическая сортировка - построение упорядоченного списка на основе графа.',
                    'Дерево - граф, в котором нет ребер, указывающих в обратном направлении (генеалогическое дерево).',
                    'В графе могут быть циклы - путь начинающийся в узле, может в него вернуться.',
                    'Ненаправленный граф - тоже цикл.',
                    'Вес - число, которое связывается с каждым ребром графа.',
                    'Взвешенный граф - граф с весами.',
                    'Невзвешанный граф - граф без весов.',
                    'Найти кратчайший путь в невзвешанном графе - поиск в ширину.',
                    'Найти кратчайший путь во взвешанном графе - алгоритм Дейкстры.',
                    'Направленные ациклические графы - DAG (Directed Acyclic Graph)',
                    {
                        header: 'Реализация графа',
                        items: [
                            'Как выразить отношение узел А -> узел В: хэш-таблица.',
                            'Узел отображается на массив связанных с ним узлов.',
                            'Порядок добавления пары ключ-значение не важен (в хэш-таблицах элементы не упорядочены).',
                        ]
                    }
                ]
            },
            {
                header: 'Пример: существует ли путь',
                items: [
                    'Мне нужно найти продовца манго на Facebook\'е.',
                    'Сначала ищу среди своих друзей: строю список друзей -> проверяю каждого, продает ли он.',
                    'Если продает - поиск завершен, нет - проверяю следущего.',
                    'Если никто из друзей не продает - ищу среди друзей моих друзей.',
                    'При каждой проверке кого-либо: если не продает, то добавляю его друзей в список поиска.',
                    'С таким алгоритмом поиск рано или поздно пройдет по всей сети, пока не найду продовца.',
                    'Такой алгоритм и называется ПОИСКОМ В ШИРИНУ.',
                ]
            },
            {
                header: 'Пример: поиск кратчайшего пути',
                items: [
                    'Мне нужно найти ближайшего продовца продовца.',
                    'Мои друзья - связи первого уровня.',
                    'Друзья друзей - связи второго уровня и тд.',
                    'Связи первого уровня предпочтительней связей второго уровня, а второго - предпочтительней третьего и тд.',
                    'Поиск по контактам второго уровня не должен проводиться, пока не проверю всех контактов первого уровня.',
                    'ПОИСК В ШИРИНУ это и делает - распостроняется от начальной точки - связи первого уровня будут проверны до второго уровня.',
                    'Это свойство выполняется, если поиск осуществляется в порядке добавления людей.',
                    'Проверять связи нужно в порядке их добавления - для этого сущестуют ОЧЕРЕДИ.',
                ]
            },
            {
                header: 'Очереди',
                items: [
                    'Работает как и очереди в обычной жизни - элемент добавленый первый будет извлечен первым.',
                    'Очередь - FIFO, а стек - LIFO.',
                ]
            },
            'Соседи могут повторятся - избыточная проверка несколько раз - после проверки элемент нужно пометить как проверенный.',
            'Если этого не сделать - может быть бесконечный цикл.',
            'Можно вести список уже проверенных элементов.',
            {
                header: 'Реализация алгоритма поиска в ширину',
                items: [
                    'Создается очередь (двусторонняя).',
                    'Создается список (массив) проверенных.',
                    'Все соседи добавляются в очередь.',
                    'Пока очередь не пуста:',
                    {
                        items: [
                            'из очереди извлекатеся первый элемент, проверяется только в том случае, если не помечен;',
                            'проверяется на условие поиска (продовец ли он);',
                            'если это продавец, поиск останавливается, return true;',
                            'если не является, соседи этого элемента добавляются в очередь, а он помечается как проверенный.',
                        ]
                    },
                    'Если все элементы проверены, но ничего не найдено - поиск завершается, return false.',
                ]
            },
            {
                header: 'Время выполнения',
                items: [
                    'Поиск выполнен по всей сети - прошли по каждому ребру.',
                    'Время выполнения как минимум О(кол-во ребер).',
                    'Добавление элемента в очередь поиска - О(1).',
                    'Выполнение этой операции для каждого элемента требует времени О(кол-во элементов).',
                    'ПОИСК В ШИРИНУ выполняется за время О(кол-во людей + кол-во ребер) = О(V+E).',
                ]
            },
        ],
    }, {
        header: 'Алгоритм Дейкстры',
        items: [
            'Помогает найти самый быстрый/кратчайший (по стоимости) путь в графе (взвешенном).',
            {
                header: 'Графы и алгоритм Дейкстры',
                items: [
                    'Общая информация про графы - раздел поиска в ширину.',
                    'Путь с обходом цикла никогда не будет кратчайшим - обход цикла только добавляет вес.',
                    'Алгоритм Дейкстры работает только с направленными ациклическими графами DAG.',
                    '!Алгоритм Дейкстры не работает с графом, у которого есть отрицательные веса!',
                    `*Алгоритм  <a href="https://medium.com/nuances-of-programming/%D0%BD%D0%B0%D0%B3%D0%BB%D1%8F%D0%B4%D0%BD%D0%BE%D0%B5-%D0%BE%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BB%D0%BC%D0%B0%D0%BD%D0%B0-%D1%84%D0%BE%D1%80%D0%B4%D0%B0-775a32db3c77" target="_blank">Беллмана-Форда</a> - для поиска кратчайшего путив графе, у которого есть отрицательные веса.`,
                ]
            },
            {
                header: 'Алгоритм',
                items: [
                    'Я стою на старте, у меня есть узел А,В, через которые я могу попасть в конечный узел. Сколько времени нужно, чтобы добраться до всех узлов?',
                    {
                        header: 'Шаг 1.',
                        items: [
                            'Так как время достижения конца неизвестно - считаем, что оно бесконечность (макимальное число) - также и для других узлов, до которых еще не дошли.',
                            'Нужно построить тиблицу со стоимостью всех узлов.',
                            'Для вычисления итогового пути в таблицу нужно добавить еще столбец родителя (для конечного пока неизвестно).',
                            'старт | А      | 6 минут',
                            'старт | B      | 2 минуты',
                            '-- | конец  | бесконечность',
                            'На первом шаге нужно найти/выбрать узел с наименьшим весом, сейчас это B.',
                        ]
                    },
                    {
                        header: 'Шаг 2.',
                        items: [
                            'Проверить , существует ли более дешевый путь к соседям этого узла, если существует, обновить стоимость и родителя этих узлов:',
                            {
                                items: [
                                    'Вычислить, сколько времени потребуется, чтобы добраться до всех соседей узла В из узла B.',
                                    'Если найшли более короткий путь для соседа В, то обновить его стоимость/вес и родетеля.',
                                    'Например, из B->A - 3 минуты, то есть в старт->B->А - 5 минут - время меньше, перезаписываем его для узла А.',
                                    'B->конец - 5 минут, т.е. старт->В->конец - 7 минут, обновляем.',
                                    '',
                                    'Имеем следующие обновленные данные:',
                                    'В | А      | 5 минут',
                                    'старт | B      | 2 минуты',
                                    'B | конец  | 7 минут',
                                ]
                            },

                        ]
                    },
                    {
                        header: 'Шаг 3.',
                        items: [
                            'Повторять, пока это не будет сделано для всех узлов графа:',
                            {
                                items: [
                                    'Снова шаг 1: находим узел с наименьшим временем. Узел В уже обработали - из оставшихся наименьшую оценку имеет узел А.',
                                    'Снова шаг 2: обновляем стоимость соседей А.',
                                    'А->конец - 1 минута, т.е. старт->B->A->конец - 6 минут,  обновляем.',
                                ]
                            },
                            '',
                            'После проверки А все узлы проверены (для конечного узла выполнять не нужно). Известно:',
                            'В     | А      | 5 минут',
                            'старт | B      | 2 минуты',
                            'А     | конец  | 6 минут',

                        ]
                    },
                    {
                        header: 'Шаг 4.',
                        items: [
                            'Вычисление итогового пути.',
                            'Мы знаем, что кратчайший путь - 6 минут',
                            'Переходим по цепочке родителей от конечного узла - находим итговый путь.',
                        ]
                    },
                ]
            },
            {
                header: 'Реализация',
                items: [
                    'Потребуется три хэш-таблицы:',
                    'сам граф (каждый ключ-узел отображает на другую хеш-таблицу, у которой ключ - название соседнего узла, значение - вес ребра до этого узла);',
                    'стоимость узла (сколько времени потребуется для перехода от начального узла к данному);',
                    'родители узла.',
                    'Потребуется массив для отслеживания всех уже обработанных узлов, чтобы исключить повторную обработку (добавлять сюда узлы после проверки).',
                ]
            },
        ],
    },]
}