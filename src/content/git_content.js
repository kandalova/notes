export const GIT_CONTENT = {
    header: 'Git notes',
    lists: [{
        header: 'Общая информация',
        ordered: false,
        items: [
            'Git - это консольная утилита, для отслеживания и ведения истории изменения файлов',
            'Репозиторием называют хранилище кода и историю его изменений. Git работает локально и репозитории хранятся в определенных папках на жестком диске.',
            'Так же репозитории можно хранить и в интернете. Обычно для этого используют три сервиса:',
            {
                items: ['GitHub', 'Bitbucket', 'GitLab'],
                ordered: false
            },
            "Клонировать удаленный репо можно 3-мя способами: ",
            {
                items: [
                    'Скачать zip (не лучший вариаент)',
                    'Клонировать через https - нужно вводить логин/пароль при каждом коммите либо настроить .gitconfig',
                    `Через SHH - удобно, но нужно <a href="https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank"> сгенерить ключи</a>`],
                ordered: false
            },
        ]
    }, {
        header: 'Подключить второй аккаунт',
        ordered: true,
        items: [
            'Нужно иметь этот второй аккаунт на GitHub/GitLаb.',
            'Сгенерировать новый ключ SSH и указать путь к новому ключу (например, ~/.ssh/second_key_rsa ).',
            'Добавить ключ SSH в учетную запись GitHub/GitLаb второго пользователя.',
            'Настроить новый ключ для использования:',
            {
                ordered: false,
                items: [
                    'Создать, если нет, файл  ~/.ssh/config.',
                    'Указать в этом файле различные конфигурации.',
                    'Если первый пользователь на gitlab, а второй - на github, то можно указать конфигурацию только для нового хоста:\n' +
                    '<pre><code v-pre>' +
                    'Host second.github.com\n' +
                    '    HostName github.com\n' +
                    '    IdentityFile ~/.ssh/second_key_rsa</code></pre>',
                    'Если оба пользователя на одном сервисе, например, github: \n' +
                    '<pre><code v-pre>' +
                    'Host second.github.com\n' +
                    '    HostName github.com\n' +
                    '    IdentityFile ~/.ssh/second_key_rsa' +
                    '    IdentitiesOnly yes' + '\n\r' +
                    'Host first.github.com\n' +
                    '    HostName github.com\n' +
                    '    IdentityFile ~/.ssh/first_key_rsa\n' +
                    '    IdentitiesOnly yes</code></pre>',
                    `<a href="https://serverfault.com/questions/450796/how-could-i-stop-ssh-offering-a-wrong-key/450807#450807" target="_blank">IdentitiesOnly</a>`,
                    'second.github.com, first.github.com - могут быть любыми строками, используя эти имена можно обращаться к репозиториям в качестве конкретного пользователя:\n' +
                    '<pre><code v-pre>' +
                    'git clone git@second.github.com:USER/PROJECT.git</code></pre>',
                    'Если склонировать со второго аккаунта репозиторий, принадлежащий первому пользователю, не сможем отправлять в него коммиты, пока не добавим второго пользователя в качестве соавтора .',
                    'Тестирование конфигурации SSH:' +
                    '<pre><code v-pre>ssh git@second.github.com</code></pre>\n' +
                    'нужно согласиться на продолжение соединения, при успешном соединении будет выведено: \n' +
                    '<pre><code v-pre>PTY allocation request failed on channel 0 \n' +
                    'Hi USER! You\'ve successfully authenticated, but GitHub does not provide shell access.\n' +
                    'Connection to github.com closed.</code></pre>',

                ]
            },
            'Настроить авторство для Git:',
            {
                ordered: false,
                items: [
                    'В состав Git входит утилита git config.',
                    'Если при запуске git config указать параметр --system, то параметры будут читаться и сохраняться в  файл [path]/etc/gitconfig, он одержит значения, общие для всех пользователей системы и для всех их репозиториев.',
                    'Файл ~/.gitconfig или ~/.config/git/config хранит настройки конкретного пользователя. Этот файл используется при указании параметра --global и применяется ко всем репозиториям, с которыми вы работаете в текущей системе.',
                    'Файл config в каталоге Git (т. е. .git/config) репозитория хранит настройки конкретного репозитория. Вы можете заставить Git читать и писать в этот файл с помощью параметра --local, но на самом деле это значение по умолчанию.',
                    'Имя автора и адрес email обычно хранятся в файле глобальной конфигурации ( ~/.gitconfig ).',
                    'Можно переопределить их для каждого репозитория, выполнив следующие действия в каталоге репозитория:\n' +
                    '<pre><code v-pre>' +
                    'git config --local user.name "NAME"\n' +
                    'git config --local user.email "EMAIL"' +
                    '</code></pre>\n',
                    'Но можно установить отдельный конфиг для конкретной директории, тогда все ее дочерние репозитории будут использовать данную конфигурацию.',
                    'В глобальном конфиге  ~/.gitconfig:\n' +
                    '<pre><code v-pre>' +
                    '[user]\n' +
                    '    name = John Doe\n' +
                    '    email = john@doe.tld\n' +
                    '\n' +
                    '[includeIf "gitdir:~/work/"]\n' +
                    '    path = ~/work/.gitconfig' +
                    '</code></pre>\n',
                    'Создать файл ~/work/.gitconfig\n' +
                    '<pre><code v-pre>' +
                    '[user]\n' +
                    '    email = john.doe@company.tld' +
                    '</code></pre>\n',
                ]
            }
        ]
    }, {
        header: 'Команды',
        items: ['Здесь будут полезные мне команды']
    }]
}