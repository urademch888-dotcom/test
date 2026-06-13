// ================= БАЗА ДАНИХ (ТЕМ И ТЕСТИ) =================
const database = [
    {
        id: "phonetics",
        title: "Фонетика",
        description: "Звуки мови, голосні та приголосні, складоподіл та закономірності уподібнення.",
        conspect: `
            <h2>Фонетика української мови</h2>
            <p>Фонетика вивчає звуковий склад мови. В українській мові нараховується 38 звуків: 6 голосних і 32 приголосних.</p>
            <div class="rule-box">
                <h3>Уподібнення приголосних звуків</h3>
                <p>Дзвінкі приголосні в кінці слова і перед глухими в середині слова не оглушуються (крім слова <i>нігті, кігті, легкий, вогкий, дігтяр</i>).</p>
                <p>Глухі приголосні перед дзвінкими уподібнюються до парних дзвінких: <span class="highlight">просьба -> [про́з'ба]</span>.</p>
            </div>
            <h3>Приклади для запам'ятовування:</h3>
            <div class="example-box">
                • Футбол -> [фудбо́л]<br>
                • Великдень -> [великде́н']<br>
                • Якби -> [йаґби́]
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Знайдіть слово, у якому відбувається уподібнення приголосних:",
                options: ["Кігті", "Просьба", "Степ", "Вода"],
                answer: 1 // Індекс правильного варіанту
            },
            {
                type: "single",
                text: "Скільки голосних звуків в українській мові?",
                options: ["10", "33", "6", "38"],
                answer: 2
            },
            {
                type: "multiple",
                text: "Виберіть слова, де всі приголосні є дзвінкими (виберіть кілька):",
                options: ["Дніпро", "Лимон", "Береза", "Дуб"],
                answer: [1, 2] // Масив правильних індексів
            },
            {
                type: "matching",
                text: "Установіть відповідність між явищем та словом:",
                left: ["1. Оглушення", "2. Одзвінчення", "3. Спрощення"],
                right: ["А. Вогкий", "Б. Тісний", "В. Весілля", "Г. Боротьба"],
                answer: { 0: 0, 1: 3, 2: 1 } // Лівий індекс : Правильний Правий індекс
            }
        ]
    },
    {
        id: "orthoepy",
        title: "Орфоепія",
        description: "Правила літературної вимови та наголошування слів. Норми НМТ.",
        conspect: `
            <h2>Орфоепія. Наголос</h2>
            <p>Орфоепія вивчає правила правильної вимови звуків і наголошування слів.</p>
            <div class="rule-box">
                <h3>Складні випадки наголошування іменників</h3>
                <p>Завжди наголошуються на другому складі: <span class="highlight">фартýх, квартáл, експéрт</span>.</p>
                <p>Подвійний наголос мають слова: <i>алфавіт / алфавіт, помилка / помилка, весняний / весняний</i>.</p>
            </div>
            <div class="example-box">
                • Чорнослив, одинадцять, чотирнадцять (наголос на А).<br>
                • Обізочка, цінник, маркетинг (наголос на першому складі).
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "У якому слові наголос падає на другий склад?",
                options: ["Квартал", "Одинадцять", "Цінник", "Маркетинг"],
                answer: 0
            },
            {
                type: "single",
                text: "Позначте слово з правильним наголосом 'Фартýх':",
                options: ["Фáртух", "Фартýх", "Фартухí"],
                answer: 1
            }
        ]
    },
    {
        id: "orthography",
        title: "Орфографія",
        description: "Правопис префіксів, суфіксів, складних слів, н та нн.",
        conspect: `
            <h2>Орфографія</h2>
            <p>Орфографія — це система правил написання слів. У НМТ частіше всього перевіряють правопис префіксів, суфіксів, складних слів та букв <strong>н / нн</strong>.</p>
            <div class="rule-box">
                <h3>Префікси</h3>
                <p>Переважно пишемо разом: <strong>передбачити, підписати, беззахисний</strong>. Через дефіс — якщо префікс має значення «пів», «пів-», «полу-»: <strong>півострова, пів Києва</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Н і НН</h3>
                <p>У прикметниках та дієприкметниках на -нний, -анний, -єнний пишемо <strong>нн</strong> якщо є залежне слово або слово утворене від дієслова: <strong>письменний, незламний, сонячний</strong>.</p>
                <p>У словах з основою на -н- і без суфіксів може бути одна <strong>н</strong>: <strong>світлий, кам’яний</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Складні слова</h3>
                <p>Складні слова пишемо разом, якщо вони означають одне поняття: <strong>пісенно-танцювальний, мікроелектроніка</strong>. Через дефіс — якщо є рівноправні частини або є словосполучення зі значенням «пів», «під», «пере-»: <strong>україно-англійський, південно-західний</strong>.</p>
            </div>
            <div class="example-box">
                • безкорисний, підкоригувати, південь<br>
                • стомлений учень, незламна воля<br>
                • солоний, мідний, вогненний
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Як правильно писати слово з префіксом?",
                options: ["безкорисний", "без-корисний", "бе́зкорисний", "безко́рисний"],
                answer: 0
            },
            {
                type: "single",
                text: "Яке слово написано правильно?",
                options: ["передбачити", "перед-бачити", "пердбачити", "передбачити́"],
                answer: 0
            },
            {
                type: "single",
                text: "Підкресліть слово з подвійною Н:",
                options: ["сонячний", "кам'яний", "світлий", "золотий"],
                answer: 0
            },
            {
                type: "multiple",
                text: "Які слова пишуться разом (без дефіса)?",
                options: ["південно-західний", "мікроелектроніка", "україно-англійський", "пісенно-танцювальний"],
                answer: [1, 3]
            },
            {
                type: "single",
                text: "Як правильно: «стомлений учень» чи «стомлений учень»?",
                options: ["стомлений", "стомлений", "обидва варіанти правильні", "жоден"],
                answer: 2
            }
        ]
    },
    {
        id: "lexicology",
        title: "Лексикологія",
        description: "Синоніми, антоніми, омоніми, пароніми. Лексичні помилки.",
        conspect: `
            <h2>Лексикологія</h2>
            <p>Лексикологія вивчає словниковий склад мови: значення слів, їхні зв’язки та можливі помилки вживання.</p>
            <div class="rule-box">
                <h3>Синоніми</h3>
                <p>Слова, близькі за значенням: <strong>мудрий — розумний, гарний — прекрасний</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Антоніми</h3>
                <p>Слова з протилежним значенням: <strong>день — ніч, щедрий — скупий</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Омоніми та пароніми</h3>
                <p>Омоніми — слова, що однаково звучать, але мають різне значення: <strong>ключ (підземний) / ключ (від дверей)</strong>.<br>
                Паралельні слова з подібним звучанням, але різним значенням: <strong>довідка — відомість, ефектний — ефективний</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Чому важливо не плутати слова</h3>
                <p>У навчанні та в НМТ часто перевіряють уміння розрізняти близькі за звучанням слова. Наприклад, <strong>економний</strong> — бережливий, а <strong>економічний</strong> — пов’язаний з економікою; <strong>діловий</strong> — професійний, а <strong>дійсний</strong> — справжній.</p>
            </div>
            <div class="example-box">
                • вчитель — педагог<br>
                • слабкий — сильний<br>
                • економічний — економний
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Яке слово є антонімом до «мудрий»?",
                options: ["розумний", "простий", "глупий", "volução"],
                answer: 2
            },
            {
                type: "single",
                text: "Що таке омоніми?",
                options: [
                    "Слова однакового звучання з різним значенням",
                    "Слова близькі за значенням",
                    "Слова з протилежним значенням",
                    "Слова з подібним звучанням"
                ],
                answer: 0
            },
            {
                type: "single",
                text: "Яка пара є паронімами?",
                options: ["день — ніч", "довідка — відомість", "мудрий — розумний", "ключ — замок"],
                answer: 1
            },
            {
                type: "multiple",
                text: "Які слова є синонімами?",
                options: ["гарний — прекрасний", "щедрий — скупий", "вчитель — педагог", "день — ранок"],
                answer: [0, 2]
            },
            {
                type: "single",
                text: "«Економний» — це означає:",
                options: ["пов'язаний з економікою", "бережливий", "дорогий", "швидкий"],
                answer: 1
            }
        ]
    },
    {
        id: "phraseology",
        title: "Фразеологія",
        description: "Значення фразеологізмів, джерела їх походження та синонімія.",
        conspect: `
            <h2>Фразеологія</h2>
            <p>Фразеологізми — це стійкі поєднання слів із цілісним значенням. Вони не розкладаються на прості слова.</p>
            <div class="rule-box">
                <h3>Що варто знати</h3>
                <p>Фразеологізм має єдине значення: <strong>пасти задніх</strong> — відставати, <strong>пекти раків</strong> — мучитися, <strong>звести до ніг</strong> — перемогти.</p>
            </div>
            <div class="rule-box">
                <h3>Джерела походження</h3>
                <p>Багато фразеологізмів пов’язані з народними уявленнями, історією, працею, релігією та літературою: <strong>зав’язати вудочку</strong>, <strong>не в казці розповідати</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Як розуміти фразеологізми</h3>
                <p>Не варто перекладати їх буквально. У словниковому значенні важливо зрозуміти загальну ідею: <strong>зводити до розуму</strong> — «виховувати», <strong>піднімати на ноги</strong> — «допомагати встати», <strong>зарубати на носі</strong> — «запам’ятати назавжди».</p>
            </div>
            <div class="example-box">
                • бити байдики — бездіяти<br>
                • накивати п’ятами — тікати<br>
                • вилазити з шкіри — старатися дуже
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Що означає фразеологізм «бити байдики»?",
                options: ["працювати", "бездіяти", "святкувати", "відпочивати"],
                answer: 1
            },
            {
                type: "single",
                text: "Що означає «пасти задніх»?",
                options: ["керувати", "відставати", "допомагати", "перемагати"],
                answer: 1
            },
            {
                type: "single",
                text: "Яке джерело походження фразеологізму «пекти раків»?",
                options: ["релігія", "мучитися", "праця", "полювання"],
                answer: 1
            },
            {
                type: "single",
                text: "Що означає «зарубати на носі»?",
                options: ["забути", "запам'ятати назавжди", "написати", "поранитися"],
                answer: 1
            },
            {
                type: "single",
                text: "«Накивати п'ятами» — це:",
                options: ["співати", "тікати", "працювати", "відпочивати"],
                answer: 1
            }
        ]
    },
    {
        id: "morphology",
        title: "Морфологія",
        description: "Частини мови: самостійні, службові та вигук. Граматичні категорії.",
        conspect: `
            <h2>Морфологія</h2>
            <p>Морфологія вивчає частини мови, їхні граматичні ознаки та способи вживання в реченні.</p>
            <div class="rule-box">
                <h3>Самостійні частини мови</h3>
                <p>Іменник, прикметник, числівник, займенник, дієслово, прислівник, прийменник, сполучник, частка, вигук.</p>
            </div>
            <div class="rule-box">
                <h3>Граматичні категорії</h3>
                <p>Іменник має рід, число, відмінок; прикметник — рід, число, відмінок; дієслово — час, вид, спосіб, особу, число.</p>
            </div>
            <div class="rule-box">
                <h3>Чому це важливо</h3>
                <p>У морфології треба вміти не тільки називати частину мови, а й пояснювати її роль у реченні. Наприклад, дієслово може бути присудком, а прикметник — означенням, тому правильне визначення допомагає не помилятися у синтаксисі.</p>
            </div>
            <div class="example-box">
                • учень, книга, вітер — іменники<br>
                • синій, добрий — прикметники<br>
                • читати, писав, будемо вчити — дієслова
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Яка частина мови є службовою?",
                options: ["іменник", "прийменник", "дієслово", "прислівник"],
                answer: 1
            },
            {
                type: "single",
                text: "Яка граматична категорія НЕ належить до дієслова?",
                options: ["час", "рід", "вид", "особа"],
                answer: 1
            },
            {
                type: "single",
                text: "Слово «читати» — це частина мови:",
                options: ["іменник", "прикметник", "дієслово", "числівник"],
                answer: 2
            },
            {
                type: "multiple",
                text: "Які частини мови є самостійними?",
                options: ["прийменник", "іменник", "сполучник", "прикметник"],
                answer: [1, 3]
            },
            {
                type: "single",
                text: "Іменник має такі граматичні категорії:",
                options: ["час, вид, спосіб", "рід, число, відмінок", "особа, число, час", "наголос, тон, ритм"],
                answer: 1
            }
        ]
    },
    {
        id: "syntax",
        title: "Синтаксис",
        description: "Словосполучення і речення. Члени речення. Складні речення.",
        conspect: `
            <h2>Синтаксис</h2>
            <p>Синтаксис — це розділ мови, який вивчає будову словосполучень і речень.</p>
            <div class="rule-box">
                <h3>Словосполучення</h3>
                <p>Словосполучення — це два і більше пов’язаних слів, де одне слово залежить від іншого: <strong>гарна книга, швидко йти</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Речення</h3>
                <p>Речення має граматичну основу: підмет і присудок. За будовою бувають прості й складні: <strong>Вітер дме.</strong> / <strong>Вітер дме, і листя кружляє.</strong></p>
            </div>
            <div class="rule-box">
                <h3>Члени речення</h3>
                <p>Головні члени — підмет і присудок, другорядні — означення, додаток, обставина. Саме вони допомагають зрозуміти, як слово пов’язане з іншими словами і яку роль виконує в висловлюванні.</p>
            </div>
            <div class="example-box">
                • складне речення: Я прийшов, коли вже стемніло.<br>
                • головні члени речення: Учень читає текст.
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Головні члени речення — це:",
                options: ["означення і додаток", "підмет і присудок", "обставина і додаток", "вигук і звертання"],
                answer: 1
            },
            {
                type: "single",
                text: "Словосполучення — це:",
                options: ["одне слово", "два і більше пов'язаних слів", "речення з двох частин", "абзац тексту"],
                answer: 1
            },
            {
                type: "single",
                text: "Яке речення є складним?",
                options: ["Вітер дме.", "Вітер дме, і листя кружляє.", "Діти граються.", "Сонце світить яскраво."],
                answer: 1
            },
            {
                type: "single",
                text: "Додаток у реченні — це:",
                options: ["головний член", "другорядний член", "член речення, що означає ознаку", "частина мови"],
                answer: 1
            },
            {
                type: "single",
                text: "Обставина відповідає на питання:",
                options: ["хто? що?", "який?", "де? коли? як?", "кому? чому?"],
                answer: 2
            }
        ]
    },
    {
        id: "punctuation",
        title: "Пунктуація",
        description: "Розділові знаки у простих, ускладнених та складних реченнях.",
        conspect: `
            <h2>Пунктуація</h2>
            <p>Пунктуація допомагає правильно передати зміст речення, паузи, логічний наголос і структуру висловлювання.</p>
            <div class="rule-box">
                <h3>Основні знаки</h3>
                <p>Крапка, кома, тире, двокрапка, крапка з комою, лапки, три крапки — кожен знак має своє призначення.</p>
            </div>
            <div class="rule-box">
                <h3>Коли ставимо кому</h3>
                <p>Кома вживається між частинами складного речення, при однорідних членах, при звертаннях і вставних словах: <strong>Сонце світить, а небо ясно.</strong></p>
            </div>
            <div class="rule-box">
                <h3>Тире і двокрапка</h3>
                <p>Тире ставимо між підметом і присудком, якщо обидва виражені іменниками в називному відмінку: <strong>Мрія — це сила.</strong> Двокрапка вживається перед поясненням, переліком або цитатою: <strong>Мені було цікаво: як це працює.</strong></p>
            </div>
            <div class="example-box">
                • Діти, підніміть руки.<br>
                • Ми вивчали мову, літературу, історію.<br>
                • Я прийду: треба ще підготуватися.
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "Кома ставиться між частинами складного речення:",
                options: ["Сонце світить і небо ясно.", "Сонце світить, а небо ясно.", "Сонце світить небо ясно.", "Сонце, світить, небо, ясно."],
                answer: 1
            },
            {
                type: "single",
                text: "Тире ставиться між підметом і присудком, якщо обидва виражені:",
                options: ["дієсловами", "прикметниками", "іменниками в називному відмінку", "прислівниками"],
                answer: 2
            },
            {
                type: "single",
                text: "Двокрапка вживається перед:",
                options: ["запереченням", "поясненням або переліком", "звертанням", "вигуком"],
                answer: 1
            },
            {
                type: "single",
                text: "Кому при однорідних членах речення ставимо між:",
                options: ["останнім і передостаннім", "усіма членами крім з'єднаних сполучником", "першим і другим", "не ставимо"],
                answer: 1
            },
            {
                type: "single",
                text: "Який знак розділу ставиться при звертанні?",
                options: ["крапка", "крапка з комою", "кому", "тире"],
                answer: 2
            }
        ]
    },
    {
        id: "stylistics",
        title: "Стилистика",
        description: "Стилі мовлення, їхні ознаки, жанри реалізації та тропи.",
        conspect: `
            <h2>Стилистика</h2>
            <p>Стилистика вивчає, як мова змінюється залежно від ситуації, мети висловлювання та адресата.</p>
            <div class="rule-box">
                <h3>Стилі мовлення</h3>
                <p>Науковий, офіційно-діловий, публіцистичний, художній, розмовний — кожен має свої ознаки й словниковий запас.</p>
            </div>
            <div class="rule-box">
                <h3>Тропи та засоби виразності</h3>
                <p>Метафора, епітет, порівняння, гіпербола, алітерація — допомагають зробити текст образним і виразним.</p>
            </div>
            <div class="rule-box">
                <h3>Як розпізнати стиль</h3>
                <p>У художньому стилі домінують образи, емоції й деталі; у науковому — точність, терміни та логічність; у публіцистичному — переконання, загальнодоступна мова. Це допомагає розуміти, яку лексику й синтаксис обрати для різних ситуацій.</p>
            </div>
            <div class="example-box">
                • Науковий стиль: «Поняття «лексикологія» вивчає словниковий склад мови».<br>
                • Художній стиль: «Осінь сипле золоті листки на дорогу».<br>
                • Розмовний стиль: «Ну і вийшло у нас чудово!»
            </div>
        `,
        questions: [
            {
                type: "single",
                text: "«Осінь сипле золоті листки на дорогу» — це приклад якого стилю?",
                options: ["наукового", "публіцистичного", "художнього", "розмовного"],
                answer: 2
            },
            {
                type: "single",
                text: "Метафора — це засіб виразності, який:",
                options: ["порівнює два явища", "надає образності через переносне значення", "перебільшує", "підсилює звучання"],
                answer: 1
            },
            {
                type: "single",
                text: "Який стиль мовлення використовує терміни та логічність?",
                options: ["художній", "розмовний", "науковий", "публіцистичний"],
                answer: 2
            },
            {
                type: "single",
                text: "Гіпербола — це:",
                options: ["порівняння", "перебільшення", "алітерація", "епітет"],
                answer: 1
            },
            {
                type: "single",
                text: "У публіцистичному стилі домінують:",
                options: ["образи та емоції", "точність та терміни", "переконання та загальнодоступна мова", "прості речення"],
                answer: 2
            }
        ]
    }
];

// ================= СТАН ЗАСТОСУНКУ (STATE) =================
function createDefaultProgressState() {
    return {
        favorites: [],
        completedTests: {},
        totalTestsCount: 0,
        scoresSum: 0
    };
}

function normalizeProgressState(savedState = {}) {
    const defaults = createDefaultProgressState();

    return {
        favorites: Array.isArray(savedState.favorites) ? savedState.favorites.slice() : defaults.favorites.slice(),
        completedTests: savedState.completedTests && typeof savedState.completedTests === 'object'
            ? { ...savedState.completedTests }
            : { ...defaults.completedTests },
        totalTestsCount: Number.isFinite(savedState.totalTestsCount) && savedState.totalTestsCount >= 0 ? savedState.totalTestsCount : defaults.totalTestsCount,
        scoresSum: Number.isFinite(savedState.scoresSum) && savedState.scoresSum >= 0 ? savedState.scoresSum : defaults.scoresSum
    };
}

let userProgress = createDefaultProgressState();

let currentQuiz = {
    topicId: null,
    questions: [],
    currentIndex: 0,
    answers: [], // масив відповідей користувача
    errors: []   // збережені помилки для екрана результатів
};

// ================= ІНІЦІАЛІЗАЦІЯ ТА НАВІГАЦІЯ =================
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        loadProgress();
        initTheme();
        renderStats();
        renderTopics();
        setupEventListeners();
    });
}

function setupEventListeners() {
    // Навігація
    document.getElementById("btn-start").addEventListener("click", () => switchScreen("screen-topics"));
    document.getElementById("btn-start-secondary").addEventListener("click", () => switchScreen("screen-topics"));
    document.getElementById("nav-logo").addEventListener("click", () => switchScreen("screen-home"));
    
    document.querySelectorAll(".btn-back").forEach(btn => {
        btn.addEventListener("click", () => switchScreen("screen-topics"));
    });

    // Пошук
    document.getElementById("search-input").addEventListener("input", (e) => filterTopics(e.target.value));

    // Обране
    document.getElementById("favorites-nav").addEventListener("click", toggleFavoritesModal);
    document.getElementById("btn-favorites-home").addEventListener("click", toggleFavoritesModal);
    document.querySelector(".close-modal").addEventListener("click", toggleFavoritesModal);
    document.getElementById("btn-fav-toggle").addEventListener("click", handleToggleFavoritePage);

    // Тема
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

    // Тести та Дії
    document.getElementById("btn-submit-answer").addEventListener("click", submitAnswer);
    document.getElementById("btn-start-quiz-from-conspect").addEventListener("click", () => startQuiz(currentQuiz.topicId));
    document.getElementById("btn-restart-quiz").addEventListener("click", () => startQuiz(currentQuiz.topicId));
}

function switchScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    window.scrollTo(0, 0);
}

// ================= РОБОТА З ТЕМАМИ (РЕНДЕРИНГ І ПОШУК) =================
function renderTopics() {
    const container = document.getElementById("topics-container");
    container.innerHTML = "";

    database.forEach(topic => {
        const progress = userProgress.completedTests[topic.id] || 0;
        const card = document.createElement("div");
        card.className = "topic-card";
        card.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-progress-wrapper">
                <div class="progress-text">
                    <span>Тест</span>
                    <span>${progress}%</span>
                </div>
                <div class="progress-track">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
            </div>
            <div class="topic-actions">
                <button class="btn-secondary" onclick="openConspect('${topic.id}')">Конспект</button>
                <button class="btn-primary" onclick="startQuiz('${topic.id}')" ${topic.questions.length === 0 ? 'disabled' : ''}>Тест</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterTopics(query) {
    const cards = document.querySelectorAll(".topic-card");
    database.forEach((topic, index) => {
        const matches = topic.title.toLowerCase().includes(query.toLowerCase()) || 
                        topic.description.toLowerCase().includes(query.toLowerCase());
        cards[index].style.display = matches ? "flex" : "none";
    });
}

// ================= СТОРІНКА КОНСПЕКТУ =================
function openConspect(topicId) {
    const topic = database.find(t => t.id === topicId);
    if (!topic) return;

    currentQuiz.topicId = topicId;
    document.getElementById("conspect-body").innerHTML = topic.conspect;
    
    // Оновлення зірочки Обраного
    const isFav = userProgress.favorites.includes(topicId);
    document.getElementById("btn-fav-toggle").textContent = isFav ? "⭐ Усунути" : "⭐ В обране";

    switchScreen("screen-conspect");
}

// ================= СИСТЕМА ТЕСТУВАННЯ =================
function startQuiz(topicId) {
    const topic = database.find(t => t.id === topicId);
    if (!topic || topic.questions.length === 0) return;

    currentQuiz.topicId = topicId;
    // Глибоке копіювання банку запитань для перемішування
    let bank = JSON.parse(JSON.stringify(topic.questions));
    shuffleArray(bank);

    // Обираємо максимум 10 питань
    currentQuiz.questions = bank.slice(0, 10);
    currentQuiz.currentIndex = 0;
    currentQuiz.answers = [];
    currentQuiz.errors = [];

    document.getElementById("quiz-topic-title").textContent = topic.title;
    
    showQuestion();
    switchScreen("screen-quiz");
}

function showQuestion() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    const container = document.getElementById("answers-container");
    const counter = document.getElementById("quiz-question-counter");
    const progressFill = document.getElementById("quiz-progress-bar");
    const submitBtn = document.getElementById("btn-submit-answer");

    // Оновлення метаданих
    counter.textContent = `${currentQuiz.currentIndex + 1}/${currentQuiz.questions.length}`;
    progressFill.style.width = `${((currentQuiz.currentIndex) / currentQuiz.questions.length) * 100}%`;
    submitBtn.disabled = true;

    document.getElementById("question-text").textContent = q.text;
    container.innerHTML = "";

    // Рендеринг інтерфейсу відповідей залежно від типу НМТ
    if (q.type === "single" || q.type === "multiple") {
        // Перемішуємо індекси відповідей, щоб зберегти правильність зв'язків
        let indices = q.options.map((_, i) => i);
        shuffleArray(indices);

        indices.forEach(idx => {
            const opt = document.createElement("div");
            opt.className = "answer-option";
            opt.textContent = q.options[idx];
            opt.dataset.index = idx;

            opt.addEventListener("click", () => {
                if (q.type === "single") {
                    container.querySelectorAll(".answer-option").forEach(el => el.classList.remove("selected"));
                    opt.classList.add("selected");
                } else {
                    opt.classList.toggle("selected");
                }
                submitBtn.disabled = container.querySelectorAll(".answer-option.selected").length === 0;
            });
            container.appendChild(opt);
        });
    } else if (q.type === "matching") {
        // Створення блоків встановлення відповідності
        q.left.forEach((leftText, leftIdx) => {
            const row = document.createElement("div");
            row.className = "matching-row";

            const leftDiv = document.createElement("div");
            leftDiv.className = "matching-left";
            leftDiv.textContent = leftText;

            const separator = document.createElement("div");
            separator.textContent = "➔";

            const select = document.createElement("document-select");
            const selectEl = document.createElement("select");
            selectEl.className = "matching-select";
            selectEl.dataset.leftIndex = leftIdx;

            const placeholder = document.createElement("option");
            placeholder.textContent = "Оберіть...";
            placeholder.value = "";
            selectEl.appendChild(placeholder);

            q.right.forEach((rightText, rightIdx) => {
                const opt = document.createElement("option");
                opt.value = rightIdx;
                opt.textContent = rightText;
                selectEl.appendChild(opt);
            });

            selectEl.addEventListener("change", () => {
                const selects = container.querySelectorAll(".matching-select");
                let allSelected = true;
                selects.forEach(sel => { if(sel.value === "") allSelected = false; });
                submitBtn.disabled = !allSelected;
            });

            row.appendChild(leftDiv);
            row.appendChild(separator);
            row.appendChild(selectEl);
            container.appendChild(row);
        });
    }
}

function submitAnswer() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    const container = document.getElementById("answers-container");
    let isCorrect = false;
    let userAnsText = "";
    let correctAnsText = "";

    if (q.type === "single") {
        const sel = container.querySelector(".answer-option.selected");
        const ansIdx = parseInt(sel.dataset.index);
        isCorrect = (ansIdx === q.answer);
        userAnsText = q.options[ansIdx];
        correctAnsText = q.options[q.answer];
    } else if (q.type === "multiple") {
        const selectedEls = container.querySelectorAll(".answer-option.selected");
        const ansIndices = Array.from(selectedEls).map(el => parseInt(el.dataset.index)).sort();
        const correctIndices = [...q.answer].sort();
        isCorrect = JSON.stringify(ansIndices) === JSON.stringify(correctIndices);
        userAnsText = ansIndices.map(i => q.options[i]).join(", ");
        correctAnsText = correctIndices.map(i => q.options[i]).join(", ");
    } else if (q.type === "matching") {
        const selects = container.querySelectorAll(".matching-select");
        isCorrect = true;
        let userMatch = {};
        selects.forEach(sel => {
            const lIdx = parseInt(sel.dataset.leftIndex);
            const rIdx = parseInt(sel.value);
            userMatch[lIdx] = rIdx;
            if (q.answer[lIdx] !== rIdx) isCorrect = false;
        });
        userAnsText = "Твій варіант комбінації";
        correctAnsText = "Еталонна відповідність згідно з умовою";
    }

    if (!isCorrect) {
        currentQuiz.errors.push({
            question: q.text,
            yourAnswer: userAnsText,
            correctAnswer: correctAnsText
        });
    }

    currentQuiz.answers.push(isCorrect);
    currentQuiz.currentIndex++;

    if (currentQuiz.currentIndex < currentQuiz.questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

// ================= РЕЗУЛЬТАТИ ТЕСТУ ТА ОЦІНКА =================
function finishQuiz() {
    const total = currentQuiz.questions.length;
    const correct = currentQuiz.answers.filter(Boolean).length;
    const percent = Math.round((correct / total) * 100);

    // Розрахунок оцінки та мотивації
    let grade = "";
    let motivation = "";
    const badge = document.getElementById("result-grade-badge");

    if (percent >= 90) {
        grade = "Відмінно";
        badge.style.background = "var(--success)";
        motivation = "⚡ Неймовірний результат! Ти вже практично на вершині НМТ!";
    } else if (percent >= 75) {
        grade = "Добре";
        badge.style.background = "var(--primary)";
        motivation = "👍 Чудова робота! Декілька штрихів — і буде ідеально.";
    } else if (percent >= 50) {
        grade = "Задовільно";
        badge.style.background = "var(--warning)";
        motivation = "📚 Стабільний фундамент є, але варто ще раз переглянути правила.";
    } else {
        grade = "Потрібно повторити тему";
        badge.style.background = "var(--accent)";
        motivation = "🎯 Не хвилюйся! Помилки — це найкращі вчителі. Прочитай конспект і спробуй ще.";
    }

    badge.textContent = grade;
    document.getElementById("result-score-percent").textContent = `${percent}%`;
    document.getElementById("result-score-text").textContent = `Правильних відповідей: ${correct} з ${total}`;
    document.getElementById("result-motivation").textContent = motivation;

    // Рендеринг аналізу помилок
    const errorContainer = document.getElementById("error-review-container");
    const errorList = document.getElementById("error-list");
    errorList.innerHTML = "";

    if (currentQuiz.errors.length > 0) {
        errorContainer.style.display = "block";
        currentQuiz.errors.forEach(err => {
            const item = document.createElement("div");
            item.className = "error-item";
            item.innerHTML = `
                <strong>Питання:</strong> ${err.question}<br>
                <small style="color: var(--accent)">Ваша відповідь: ${err.yourAnswer}</small><br>
                <small style="color: var(--success)">Правильно: ${err.correctAnswer}</small>
            `;
            errorList.appendChild(item);
        });
    } else {
        errorContainer.style.display = "none";
    }

    // Збереження прогресу
    saveTestProgress(currentQuiz.topicId, percent);
    switchScreen("screen-results");
}

// ================= СИСТЕМА ЗБЕРЕЖЕННЯ (LOCALSTORAGE) =================
function saveTestProgress(topicId, score) {
    const oldScore = userProgress.completedTests[topicId] || 0;
    
    if (score > oldScore) {
        userProgress.completedTests[topicId] = score;
        // Оновлюємо статистику лише якщо результат покращено
        userProgress.scoresSum += (score - oldScore);
    }
    
    userProgress.totalTestsCount++;
    localStorage.setItem("ezyukr_progress", JSON.stringify(userProgress));
    
    renderStats();
    renderTopics();
}

function loadProgress() {
    const data = typeof localStorage !== "undefined" ? localStorage.getItem("ezyukr_progress") : null;

    if (!data) {
        userProgress = createDefaultProgressState();
        return;
    }

    try {
        userProgress = normalizeProgressState(JSON.parse(data));
    } catch (error) {
        console.warn("Не вдалося прочитати прогрес з localStorage", error);
        userProgress = createDefaultProgressState();
    }
}

function renderStats() {
    // Рахуємо загальний прогрес як відсоток тем, що складені на 50%+
    const totalTopics = database.filter(t => t.questions.length > 0).length;
    const passedTopics = Object.values(userProgress.completedTests).filter(score => score >= 50).length;
    const totalProgressPercent = totalTopics > 0 ? Math.round((passedTopics / totalTopics) * 100) : 0;

    // Рахуємо середній відсоток успішності складених тестів
    const passedTestKeys = Object.keys(userProgress.completedTests);
    let avg = 0;
    if (passedTestKeys.length > 0) {
        let sum = passedTestKeys.reduce((acc, key) => acc + userProgress.completedTests[key], 0);
        avg = Math.round(sum / passedTestKeys.length);
    }

    document.getElementById("stat-total-progress").textContent = `${totalProgressPercent}%`;
    document.getElementById("stat-tests-passed").textContent = userProgress.totalTestsCount;
    document.getElementById("stat-avg-score").textContent = `${avg}%`;

    // Інтерактивне вітальне повідомлення
    const motBox = document.getElementById("motivation-box");
    if (totalProgressPercent >= 80) motBox.textContent = "🏆 Ти демонструєш дивовижні результати. НМТ під контролем!";
    else if (totalProgressPercent > 0) motBox.textContent = "🚀 Чудовий темп! Продовжуй рух по модулях.";
}

// ================= ОБРАНЕ (FAVORITES) =================
function handleToggleFavoritePage() {
    const topicId = currentQuiz.topicId;
    const idx = userProgress.favorites.indexOf(topicId);
    if (idx > -1) {
        userProgress.favorites.splice(idx, 1);
        this.textContent = "⭐ В обране";
    } else {
        userProgress.favorites.push(topicId);
        this.textContent = "⭐ Усунути";
    }
    localStorage.setItem("ezyukr_progress", JSON.stringify(userProgress));
}

function toggleFavoritesModal() {
    const modal = document.getElementById("modal-favorites");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
        renderFavoritesList();
    }
}

function renderFavoritesList() {
    const list = document.getElementById("favorites-list");
    list.innerHTML = "";
    if (userProgress.favorites.length === 0) {
        list.innerHTML = "<li style='color:var(--text-muted)'>Список обраного поки порожній.</li>";
        return;
    }
    userProgress.favorites.forEach(id => {
        const topic = database.find(t => t.id === id);
        if(topic) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${topic.title}</span>
                <button class="btn-secondary" style="padding:5px 10px; font-size:0.85rem;" onclick="closeModalAndOpenConspect('${topic.id}')">Читати</button>
            `;
            list.appendChild(li);
        }
    });
}

function closeModalAndOpenConspect(id) {
    toggleFavoritesModal();
    openConspect(id);
}

// ================= НАЛАШТУВАННЯ ТЕМИ ТА ХЕЛПЕРИ =================
function initTheme() {
    const savedTheme = localStorage.getItem("ezyukr_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ezyukr_theme", next);
}

// Алгоритм випадкового перемішування Фішера — Єйтса
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

if (typeof module !== "undefined") {
    module.exports = {
        createDefaultProgressState,
        normalizeProgressState
    };
}
