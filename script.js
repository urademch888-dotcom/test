/* ============================================================
   ezyUKr — Enhanced Application Logic
   ============================================================ */

const database = [
    {
        id: "phonetics",
        title: "Фонетика",
        description: "Звуки мови, голосні та приголосні, складоподіл та закономірності уподібнення.",
        difficulty: "medium",
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
            { type: "single", text: "Знайдіть слово, у якому відбувається уподібнення приголосних:", options: ["Кігті", "Просьба", "Степ", "Вода"], answer: 1 },
            { type: "single", text: "Скільки голосних звуків в українській мові?", options: ["10", "33", "6", "38"], answer: 2 },
            { type: "multiple", text: "Виберіть слова, де всі приголосні є дзвінкими:", options: ["Дніпро", "Лимон", "Береза", "Дуб"], answer: [1, 2] },
            { type: "matching", text: "Установіть відповідність між явищем та словом:", left: ["Оглушення", "Одзвінчення", "Спрощення"], right: ["Вогкий", "Тісний", "Весілля", "Боротьба"], answer: { 0: 0, 1: 3, 2: 1 } }
        ]
    },
    {
        id: "orthoepy",
        title: "Орфоепія",
        description: "Правила літературної вимови та наголошування слів. Норми НМТ.",
        difficulty: "hard",
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
            { type: "single", text: "У якому слові наголос падає на другий склад?", options: ["Квартал", "Одинадцять", "Цінник", "Маркетинг"], answer: 0 },
            { type: "single", text: "Позначте слово з правильним наголосом 'Фартýх':", options: ["Фáртух", "Фартýх", "Фартухí"], answer: 1 }
        ]
    },
    {
        id: "orthography",
        title: "Орфографія",
        description: "Правопис префіксів, суфіксів, складних слів, н та нн.",
        difficulty: "medium",
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
            </div>
            <div class="rule-box">
                <h3>Складні слова</h3>
                <p>Складні слова пишемо разом, якщо вони означають одне поняття: <strong>пісенно-танцювальний, мікроелектроніка</strong>.</p>
            </div>
            <div class="example-box">
                • безкорисний, підкоригувати, південь<br>
                • стомлений учень, незламна воля<br>
                • солоний, мідний, вогненний
            </div>
        `,
        questions: [
            { type: "single", text: "Як правильно писати слово з префіксом?", options: ["безкорисний", "без-корисний", "бе́зкорисний", "безко́рисний"], answer: 0 },
            { type: "single", text: "Яке слово написано правильно?", options: ["передбачити", "перед-бачити", "пердбачити", "передбачити́"], answer: 0 },
            { type: "single", text: "Підкресліть слово з подвійною Н:", options: ["сонячний", "кам'яний", "світлий", "золотий"], answer: 0 },
            { type: "multiple", text: "Які слова пишуться разом (без дефіса)?", options: ["південно-західний", "мікроелектроніка", "україно-англійський", "пісенно-танцювальний"], answer: [1, 3] },
            { type: "single", text: "Як правильно: «стомлений учень» чи «стомлений учень»?", options: ["стомлений", "стомлений", "обидва варіанти правильні", "жоден"], answer: 2 },
            { type: "single", text: "Букву и треба писати на місці пропуску в усіх словах рядка:", options: ["тривожний, абрикос, митушливий", "меридіан, теоретичний, дрижати", "смиренний, християнин, мителик", "химерний, завмирання, диригент"], answer: 3 },
            { type: "single", text: "НЕМАЄ орфографічних помилок у варіанті:", options: ["Росташований у Чорному Морі острів Зміїний належить Україні та має стратегічне значення.", "Житлові споруди на ньому утворюють селеще Біле Ізмаїльського району Одесської області.", "Назва острова пов'язана з тим, що тут водилося багато змій, яких у море виносило течією з гирла Дунаю.", "За давньо-грецькою лигендою, острів підняла з моря богиня Фетіда для свого сина Ахілла."], answer: 2 },
            { type: "single", text: "З подвоєним НН у тексті треба писати слово:", options: ["розбавленні", "бетонні", "обплетенні", "запаленні"], answer: 0 },
            { type: "single", text: "Правильно написано всі слова іншомовного походження в рядку:", options: ["Голландія, тона, метал", "Россіні, ванна, комісія", "колектив, нето, Яффа", "Руссо, філіпінка, сума", "Міссурі, інтелект, шассі"], answer: 0 },
            { type: "single", text: "Подвоєні літери треба писати на місці пропусків у всіх словах рядка:", options: ["мас..а, Гол..андія, барок..о", "Тал..ін.., ван..а, телеграм..а", "Ас..ирія, брут..о, бравіс..имо", "ір..еальний, Ахіл..ес, тон..а", "Жан..а, марок..анець, клас.."], answer: 2 }
        ]
    },
    {
        id: "lexicology",
        title: "Лексикологія",
        description: "Синоніми, антоніми, омоніми, пароніми. Лексичні помилки.",
        difficulty: "easy",
        conspect: `
            <h2>Лексикологія</h2>
            <p>Лексикологія вивчає словниковий склад мови: значення слів, їхні зв'язки та можливі помилки вживання.</p>
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
                <p>Омоніми — слова, що однаково звучать, але мають різне значення: <strong>ключ (підземний) / ключ (від дверей)</strong>.</p>
            </div>
            <div class="example-box">
                • вчитель — педагог<br>
                • слабкий — сильний<br>
                • економічний — економний
            </div>
        `,
        questions: [
            { type: "single", text: "Яке слово є антонімом до «мудрий»?", options: ["розумний", "простий", "глупий", "volução"], answer: 2 },
            { type: "single", text: "Що таке омоніми?", options: ["Слова однакового звучання з різним значенням", "Слова близькі за значенням", "Слова з протилежним значенням", "Слова з подібним звучанням"], answer: 0 },
            { type: "single", text: "Яка пара є паронімами?", options: ["день — ніч", "довідка — відомість", "мудрий — розумний", "ключ — замок"], answer: 1 },
            { type: "multiple", text: "Які слова є синонімами?", options: ["гарний — прекрасний", "щедрий — скупий", "вчитель — педагог", "день — ранок"], answer: [0, 2] },
            { type: "single", text: "«Економний» — це означає:", options: ["пов'язаний з економікою", "бережливий", "дорогий", "швидкий"], answer: 1 },
            { type: "single", text: "Лексична помилка є в реченні:", options: ["Гурт «Антитіла» запропонував глядачам нове відео на пісню «Фари» зі свого альбому «Сонце».", "Команда вирішила поєднати голлівудські блокбастери про супергероїв з українською дійсністю.", "Музиканти порушили важливу для оточуючого середовища тему – затори та ями на українських дорогах.", "За сюжетом, супергерой щоночі рятує місто, а, за законами жанру, йому протистоїть «блискучий» лиходій Джокер.", "Над втіленням ідеї цього відеокліпу команда творчо працювала три доби на чотирьох знімальних майданчиках Києва."], answer: 2 }
        ]
    },
    {
        id: "phraseology",
        title: "Фразеологія",
        description: "Значення фразеологізмів, джерела їх походження та синонімія.",
        difficulty: "medium",
        conspect: `
            <h2>Фразеологія</h2>
            <p>Фразеологізми — це стійкі поєднання слів із цілісним значенням. Вони не розкладаються на прості слова.</p>
            <div class="rule-box">
                <h3>Що варто знати</h3>
                <p>Фразеологізм має єдине значення: <strong>пасти задніх</strong> — відставати, <strong>пекти раків</strong> — мучитися, <strong>звести до ніг</strong> — перемогти.</p>
            </div>
            <div class="rule-box">
                <h3>Джерела походження</h3>
                <p>Багато фразеологізмів пов'язані з народними уявленнями, історією, працею, релігією та літературою.</p>
            </div>
            <div class="example-box">
                • бити байдики — бездіяти<br>
                • накивати п'ятами — тікати<br>
                • вилазити з шкіри — старатися дуже
            </div>
        `,
        questions: [
            { type: "single", text: "Що означає фразеологізм «бити байдики»?", options: ["працювати", "бездіяти", "святкувати", "відпочивати"], answer: 1 },
            { type: "single", text: "Що означає «пасти задніх»?", options: ["керувати", "відставати", "допомагати", "перемагати"], answer: 1 },
            { type: "single", text: "Яке джерело походження фразеологізму «пекти раків»?", options: ["релігія", "мучитися", "праця", "полювання"], answer: 1 },
            { type: "single", text: "Що означає «зарубати на носі»?", options: ["забути", "запам'ятати назавжди", "написати", "поранитися"], answer: 1 },
            { type: "single", text: "«Накивати п'ятами» — це:", options: ["співати", "тікати", "працювати", "відпочивати"], answer: 1 },
            { type: "matching", text: "Установіть відповідність між фразеологізмом і його значенням:", left: ["ніколи", "рано", "байдуже", "нічого"], right: ["ні світ ні зоря", "ні кілка ні дрючка", "ні вдень ні вночі", "ні гаряче ні зимно"], answer: { 0: 2, 1: 0, 2: 3, 3: 1 } },
            { type: "single", text: "Позначте рядок, у якому фразеологічний зворот має значення «надумане мірило упередженої людини, яка підганяє під нього факти дійсності»:", options: ["піррова перемога", "прокрустове ложе", "геростратова слава", "дамоклів меч", "Еолова арфа"], answer: 1 }
        ]
    },
    {
        id: "morphology",
        title: "Морфологія",
        description: "Частини мови: самостійні, службові та вигук. Граматичні категорії.",
        difficulty: "easy",
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
            <div class="example-box">
                • учень, книга, вітер — іменники<br>
                • синій, добрий — прикметники<br>
                • читати, писав, будемо вчити — дієслова
            </div>
        `,
        questions: [
            { type: "single", text: "Яка частина мови є службовою?", options: ["іменник", "прийменник", "дієслово", "прислівник"], answer: 1 },
            { type: "single", text: "Яка граматична категорія НЕ належить до дієслова?", options: ["час", "рід", "вид", "особа"], answer: 1 },
            { type: "single", text: "Слово «читати» — це частина мови:", options: ["іменник", "прикметник", "дієслово", "числівник"], answer: 2 },
            { type: "multiple", text: "Які частини мови є самостійними?", options: ["прийменник", "іменник", "сполучник", "прикметник"], answer: [1, 3] },
            { type: "single", text: "Іменник має такі граматичні категорії:", options: ["час, вид, спосіб", "рід, число, відмінок", "особа, число, час", "наголос, тон, ритм"], answer: 1 },
            { type: "single", text: "Суфікс -ЕВ- має прикметник, утворений від слова:", options: ["край", "груша", "кущ", "кварц", "вечір"], answer: 4 },
            { type: "single", text: "Суфікс -ОВ- має прикметник, утворений від іменника:", options: ["плащ", "читач", "ситець", "насіння"], answer: 0 },
            { type: "single", text: "Помилково утворено форму ступеня порівняння прикметника в реченні:", options: ["Люди прагнуть пізнати далекі світи, але той, що до нас ближчий від усіх, вивчили зовсім мало.", "Нині вивчено лише п'ять відсотків дна Світового океану, тому якнайцікавіші відкриття в дослідників ще попереду.", "Після відкриття 1875 року Маріанської западини, найбільш глибокого місця на планеті, там побувало лише три людини.", "На батискафі «Трієст» 1960 року Жак Пікар і Дон Волш сягнули найрекорднішої глибини – 10 916 метрів.", "Через 52 роки в Маріанську западину зануривсь один з найвідоміших режисерів – Джеймс Кемерон."], answer: 3 },
            { type: "single", text: "Укажіть правильний варіант послідовного заповнення пропусків: «Під час тренінгу ми навчимо вас __________ впливу на потенційного працедавця і розкриємо секрети того, як створити __________ резюме.»", options: ["дієвим прийомам, якісну", "дієвих прийомів, якісний", "дієвим прийомам, якісний", "дієвих прийомів, якісну", "дієвих прийомів, якісне"], answer: 2 },
            { type: "single", text: "НЕПРАВИЛЬНО вжито форму займенника в реченні:", options: ["Зустріти друзів їм сьогодні таки вдалося.", "Завдяки їм роботу завершили майже вчасно.", "Наше завдання – створити їм добрі умови.", "Батьки неабияк пишалися їми за цю перемогу.", "На перерві їм повідомили про вихідний день."], answer: 3 },
            { type: "single", text: "Правильною є форма займенника в словосполученні:", options: ["на тім березі ріки", "з твоєго району", "звернутися до їх", "всим підприємцям", "наший проєкт"], answer: 0 },
            { type: "single", text: "Неправильно утворено форму слова у варіанті:", options: ["пане Костянтине", "для всіх дослідників", "восьмидесяти років", "візьмімо участь"], answer: 2 },
            { type: "single", text: "Правильно написано всі займенники в рядку:", options: ["дехто, ніякий, скільки-небудь, абищо", "ніщо, будь-який, де-котрий, ніскільки", "будь-що, якийсь, аби-хто, що-небудь", "нічий, хто-небудь, де-який, будь-чий", "будь-хто, якийсь, ніякий, хто-зна-що"], answer: 0 },
            { type: "single", text: "Правильно утворено форму третьої особи множини від дієслова:", options: ["мріяти – мріять", "молоти – мелють", "солити – солють", "бігти – біжуть", "ловити – лювлють"], answer: 3 },
            { type: "single", text: "Правильно утворено форму наказового способу дієслів у рядку:", options: ["ходімте", "дозволимо", "не мовчімо", "пішли", "подякуємо"], answer: 0 },
            { type: "single", text: "Форму наказового способу дієслова вжито в реченні:", options: ["Пропонуємо простий рецепт картоплі по-селянськи: потрібні продукти завжди є в кожній оселі.", "Спробуйте приготувати цю апетитну страву вдома й насолоджуйтеся її смаком разом з рідними!", "Картоплю треба почистити, промити й добре просушити, потім нарізати на поздовжні шматки.", "Додаємо олію, сіль, перець, збір сушених італійських трав, усе добре перемішуємо, викладаємо на застелений папером лист.", "Випікати потрібно в духовій шафі хвилин 30–40 за температури 180–200 °С до золотистого кольору."], answer: 1 },
            { type: "single", text: "Визначте правильний варіант послідовного заповнення пропусків: «Усім охочим ________ завітати до Національного ________ історії України, щоб побачити роботи одного з ________ ювелірних майстрів помежів'я ХVII–ХVIII століть Івана ________.»", options: ["раджу, музея, найталановитих, Равича", "ражу, музея, найталановитіших, Равич", "радю, музею, самих талановитих, Равича", "ражу, музею, найбільш талановитих, Равич", "раджу, музею, найталановитіших, Равича"], answer: 4 },
            { type: "single", text: "Друзі, __________ до Гордія Юрійовича, щоб подякувати __________ за корисні поради.", options: ["пійдімо, його", "пішлімо, йому", "ходімте, його", "ходімо, йому", "пішліть, його"], answer: 3 },
            { type: "single", text: "Правильно утворено дієприкметник:", options: ["висохнути – висохший", "упіймати – упіймавший", "умитися – умившийся", "одягнути – одягнений", "посадити – посадений"], answer: 2 },
            { type: "single", text: "Правильно утворені всі форми дієприкметників у рядку:", options: ["накреслений, зшитий, роблячий, побачений", "лежачий, посивілий, зліплений, нафарбований", "зацікавлений, помолодівший, уславлений, змарнілий", "розвалений, посміхаючийся, палаючий, знайдений", "оформлений, випечений, потемніший, забутий"], answer: 2 },
            { type: "single", text: "Редагування НЕ ПОТРЕБУЄ словосполучення:", options: ["стомившийся за день", "початкуючі поети", "дозрівші яблука", "цілюща рослина"], answer: 3 }
        ]
    },
    {
        id: "syntax",
        title: "Синтаксис",
        description: "Словосполучення і речення. Члени речення. Складні речення.",
        difficulty: "hard",
        conspect: `
            <h2>Синтаксис</h2>
            <p>Синтаксис — це розділ мови, який вивчає будову словосполучень і речень.</p>
            <div class="rule-box">
                <h3>Словосполучення</h3>
                <p>Словосполучення — це два і більше пов'язаних слів, де одне слово залежить від іншого: <strong>гарна книга, швидко йти</strong>.</p>
            </div>
            <div class="rule-box">
                <h3>Речення</h3>
                <p>Речення має граматичну основу: підмет і присудок. За будовою бувають прості й складні.</p>
            </div>
            <div class="rule-box">
                <h3>Члени речення</h3>
                <p>Головні члени — підмет і присудок, другорядні — означення, додаток, обставина.</p>
            </div>
            <div class="example-box">
                • складне речення: Я прийшов, коли вже стемніло.<br>
                • головні члени речення: Учень читає текст.
            </div>
        `,
        questions: [
            { type: "single", text: "Головні члени речення — це:", options: ["означення і додаток", "підмет і присудок", "обставина і додаток", "вигук і звертання"], answer: 1 },
            { type: "single", text: "Словосполучення — це:", options: ["одне слово", "два і більше пов'язаних слів", "речення з двох частин", "абзац тексту"], answer: 1 },
            { type: "single", text: "Яке речення є складним?", options: ["Вітер дме.", "Вітер дме, і листя кружляє.", "Діти граються.", "Сонце світить яскраво."], answer: 1 },
            { type: "single", text: "Додаток у реченні — це:", options: ["головний член", "другорядний член", "член речення, що означає ознаку", "частина мови"], answer: 1 },
            { type: "single", text: "Обставина відповідає на питання:", options: ["хто? що?", "який?", "де? коли? як?", "кому? чому?"], answer: 2 },
            { type: "single", text: "Відокремленим означенням НЕ МОЖНА замінити підрядну частину в реченні:", options: ["Листя під кленом було схоже на гору печива, яке щедро посипали цукровою пудрою.", "Дітлахи з підстрибом побігли в кінець греблі, яку було обсаджено густими вербами.", "Гості захоплено роздивлялися стіл, який застелили майстерно вишитою скатертиною.", "Щука – річковий хижак, який полює на дрібну рибу в безмежних водних просторах."], answer: 3 },
            { type: "single", text: "Відокремлене означення вжито в реченні (розділові знаки пропущено):", options: ["Довгі вечірні тіні перекреслюють порослу споришем вулицю.", "Налякане голосами людей продиралося через хащі стадо зубрів.", "Дивиться хлопець на зіткані зі срібла вишняки й мало не зітхає.", "Люблю ходити по вкритій кришталевою росою ранковій траві."], answer: 3 },
            { type: "single", text: "Речення з однорідними членами можна утворити, якщо до частини «Я обожнюю теплі травневі вечори…» додати:", options: ["але недолюблюю холодні листопадові.", "зі щебетанням птахів у нашому саду.", "тоді так мріється про щось небуденне.", "напоєні пахощами яблуневого цвіту.", "хоча й червневі мають свої принади."], answer: 0 },
            { type: "matching", text: "До кожного типу складного речення (1–4) доберіть приклад (А–Д):", left: ["складносурядне", "складнопідрядне", "безсполучникове", "з різними видами зв'язку"], right: ["Є фізична активність, яка надзвичайно корисна для здоров'я, – заняття танцями.", "Як стверджують науковці, помірна танцювальна активність зменшує ризики появи серцево-судинних захворювань іноді навіть ефективніше, ніж звичайні прогулянки.", "Оскільки це один із найприємніших способів бути активним, не зважайте на манеру виконання ритмічних рухів: швидкий чи повільний, у парі чи сольний – будь-який танець корисний.", "Танцюючи регулярно, ви можете підтримувати оптимальну вагу, підвищувати витривалість організму, зміцнювати кістки та м'язи; водночас така активність має велике значення для психічного здоров'я."], answer: { 0: 0, 1: 2, 2: 3, 3: 1 } },
            { type: "matching", text: "Прочитайте речення (1–4) і з'ясуйте його тип (А–Д):", left: ["просте ускладнене", "складносурядне", "складнопідрядне", "складне з різними видами зв'язку"], right: ["Найцікавіше й найзагадковіше – зв'язок двох складних психічних явищ – мови та мислення.", "Науковці й досі сперечаються, що з-поміж них є первинним.", "Уважають, що від народження дитини мислення працює на формування мови, а приблизно з трьох років мова стає потужним двигуном розвитку мислення.", "Трирічний малюк не вміє скласти пірамідки чи пазла хоча б із трьох частин – це тривожний знак можливих проблем із мовленням у майбутньому."], answer: { 0: 0, 1: 2, 2: 3, 3: 1 } },
            { type: "single", text: "Відокремленим додатком ускладнено речення:", options: ["Напевно, це був інший світ – чудовий невідомий храм.", "Щасливий і веселий, я дивився на високе бездонне небо.", "Тихі конвалії, білі і ніжні, скоро розплющать срібні повіки.", "Там, замість житечка, у теплеє літечко враз терен зацвів.", "Вітру на морі не було, проте клекотав сильний прибій."], answer: 3 }
        ]
    },
    {
        id: "punctuation",
        title: "Пунктуація",
        description: "Розділові знаки у простих, ускладнених та складних реченнях.",
        difficulty: "medium",
        conspect: `
            <h2>Пунктуація</h2>
            <p>Пунктуація допомагає правильно передати зміст речення, паузи, логічний наголос і структуру висловлювання.</p>
            <div class="rule-box">
                <h3>Основні знаки</h3>
                <p>Крапка, кома, тире, двокрапка, крапка з комою, лапки, три крапки — кожен знак має своє призначення.</p>
            </div>
            <div class="rule-box">
                <h3>Коли ставимо кому</h3>
                <p>Кома вживається між частинами складного речення, при однорідних членах, при звертаннях і вставних словах.</p>
            </div>
            <div class="rule-box">
                <h3>Тире і двокрапка</h3>
                <p>Тире ставимо між підметом і присудком, якщо обидва виражені іменниками в називному відмінку: <strong>Мрія — це сила.</strong></p>
            </div>
            <div class="example-box">
                • Діти, підніміть руки.<br>
                • Ми вивчали мову, літературу, історію.<br>
                • Я прийду: треба ще підготуватися.
            </div>
        `,
        questions: [
            { type: "single", text: "Кома ставиться між частинами складного речення:", options: ["Сонце світить і небо ясно.", "Сонце світить, а небо ясно.", "Сонце світить небо ясно.", "Сонце, світить, небо, ясно."], answer: 1 },
            { type: "single", text: "Тире ставиться між підметом і присудком, якщо обидва виражені:", options: ["дієсловами", "прикметниками", "іменниками в називному відмінку", "прислівниками"], answer: 2 },
            { type: "single", text: "Двокрапка вживається перед:", options: ["запереченням", "поясненням або переліком", "звертанням", "вигуком"], answer: 1 },
            { type: "single", text: "Кому при однорідних членах речення ставимо між:", options: ["останнім і передостаннім", "усіма членами крім з'єднаних сполучником", "першим і другим", "не ставимо"], answer: 1 },
            { type: "single", text: "Який знак розділу ставиться при звертанні?", options: ["крапка", "крапка з комою", "кома", "тире"], answer: 2 },
            { type: "single", text: "НЕПРАВИЛЬНО обґрунтовано вживання розділових знаків у рядку (Архітектура Києва):", options: ["тире 1 – між підметом і присудком", "коми 2, 5 – між частинами складного речення, що поєднані підрядним зв'язком", "коми 3, 4 – при вставному слові", "кома 6 – при відокремленому означенні", "кома 7 – між частинами складного речення, що поєднані сурядним зв'язком"], answer: 1 }
        ]
    },
    {
        id: "stylistics",
        title: "Стилистика",
        description: "Стилі мовлення, їхні ознаки, жанри реалізації та тропи.",
        difficulty: "easy",
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
            <div class="example-box">
                • Науковий стиль: «Поняття «лексикологія» вивчає словниковий склад мови».<br>
                • Художній стиль: «Осінь сипле золоті листки на дорогу».<br>
                • Розмовний стиль: «Ну і вийшло у нас чудово!»
            </div>
        `,
        questions: [
            { type: "single", text: "«Осінь сипле золоті листки на дорогу» — це приклад якого стилю?", options: ["наукового", "публіцистичного", "художнього", "розмовного"], answer: 2 },
            { type: "single", text: "Метафора — це засіб виразності, який:", options: ["порівнює два явища", "надає образності через переносне значення", "перебільшує", "підсилює звучання"], answer: 1 },
            { type: "single", text: "Який стиль мовлення використовує терміни та логічність?", options: ["художній", "розмовний", "науковий", "публіцистичний"], answer: 2 },
            { type: "single", text: "Гіпербола — це:", options: ["порівняння", "перебільшення", "алітерація", "епітет"], answer: 1 },
            { type: "single", text: "У публіцистичному стилі домінують:", options: ["образи та емоції", "точність та терміни", "переконання та загальнодоступна мова", "прості речення"], answer: 2 }
        ]
    }
];

/* ============================================================
   STATE
   ============================================================ */
const STORAGE_KEY = "ezyukr_v2";
const THEME_KEY = "ezyukr_theme";
const STREAK_KEY = "ezyukr_streak";

function defaultState() {
    return {
        favorites: [],
        completedTests: {},
        totalTestsCount: 0,
        scoresSum: 0,
        xp: 0,
        dailyChallenge: { date: null, completed: false },
        dailyGoals: { date: null, testsCompleted: 0, questionsAnswered: 0, correctAnswers: 0, goalsClaimed: [] },
        activity: [],
        achievements: []
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultState();
        const parsed = JSON.parse(raw);
        return {
            favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
            completedTests: parsed.completedTests && typeof parsed.completedTests === "object" ? parsed.completedTests : {},
            totalTestsCount: Number(parsed.totalTestsCount) || 0,
            scoresSum: Number(parsed.scoresSum) || 0,
            xp: Number(parsed.xp) || 0,
            dailyChallenge: parsed.dailyChallenge && typeof parsed.dailyChallenge === "object" ? parsed.dailyChallenge : { date: null, completed: false },
            dailyGoals: parsed.dailyGoals && typeof parsed.dailyGoals === "object" ? parsed.dailyGoals : { date: null, testsCompleted: 0, questionsAnswered: 0, correctAnswers: 0, goalsClaimed: [] },
            activity: Array.isArray(parsed.activity) ? parsed.activity : [],
            achievements: Array.isArray(parsed.achievements) ? parsed.achievements : []
        };
    } catch { return defaultState(); }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

let quiz = {
    topicId: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    errors: [],
    timerInterval: null,
    elapsed: 0
};

/* ============================================================
   DOM REFS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ============================================================
   INIT
   ============================================================ */
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        initTheme();
        initStreak();
        renderHomeStats();
        renderHomeTopics();
        renderTopics();
        bindEvents();
    });
}

/* ============================================================
   EVENTS
   ============================================================ */
function bindEvents() {
    $("#btn-start").addEventListener("click", () => show("screen-topics"));
    $("#btn-start-secondary")?.addEventListener("click", () => show("screen-topics"));
    $("#btn-start-quick").addEventListener("click", () => show("screen-topics"));
    $("#btn-all-topics").addEventListener("click", () => show("screen-topics"));
    $("#nav-logo").addEventListener("click", () => show("screen-home"));
    $("#btn-back-home").addEventListener("click", () => show("screen-home"));
    $("#btn-back-topics-from-conspect").addEventListener("click", () => show("screen-topics"));
    $("#btn-quit-quiz").addEventListener("click", quitQuiz);
    $("#btn-back-results").addEventListener("click", () => show("screen-topics"));

    $("#btn-start-quiz-from-conspect").addEventListener("click", () => startQuiz(quiz.topicId));
    $("#btn-restart-quiz").addEventListener("click", () => startQuiz(quiz.topicId));
    $("#btn-submit-answer").addEventListener("click", submitAnswer);

    $("#search-input").addEventListener("input", onSearch);
    $("#search-clear").addEventListener("click", () => {
        $("#search-input").value = "";
        onSearch();
    });

    $("#favorites-nav").addEventListener("click", toggleFavModal);
    $("#btn-favorites-home").addEventListener("click", toggleFavModal);
    $("#btn-favorites-quick").addEventListener("click", toggleFavModal);
    $(".close-modal").addEventListener("click", toggleFavModal);
    $("#modal-favorites").addEventListener("click", (e) => { if (e.target === e.currentTarget) toggleFavModal(); });

    $("#btn-fav-toggle").addEventListener("click", handleFavToggle);
    $("#theme-toggle").addEventListener("click", toggleTheme);

    $("#btn-random-quiz").addEventListener("click", randomQuiz);
    $("#btn-daily-challenge").addEventListener("click", startDailyChallenge);

    $("#streak-btn").addEventListener("click", () => {
        const days = getStreak().days;
        alert(`Твоя серія: ${days} ${days === 1 ? "день" : days < 5 ? "дні" : "днів"} поспіль! 🔥`);
    });
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function show(id) {
    $$(".screen").forEach(s => s.classList.remove("active"));
    const screen = $(`#${id}`);
    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function quitQuiz() {
    if (quiz.timerInterval) clearInterval(quiz.timerInterval);
    show("screen-topics");
}

/* ============================================================
   HOME
   ============================================================ */
function renderHomeStats() {
    const totalTopics = database.filter(t => t.questions.length > 0).length;
    const passedTopics = Object.values(state.completedTests).filter(s => s >= 50).length;
    const progressPct = totalTopics > 0 ? Math.round((passedTopics / totalTopics) * 100) : 0;

    const testKeys = Object.keys(state.completedTests);
    const avg = testKeys.length > 0 ? Math.round(testKeys.reduce((a, k) => a + state.completedTests[k], 0) / testKeys.length) : 0;

    animateRing("ring-progress", progressPct);
    animateRing("ring-avg", avg);
    animateRing("ring-tests", Math.min(state.totalTestsCount, 100));

    $("#ring-value").textContent = `${progressPct}%`;
    $("#ring-avg").textContent = `${avg}%`;
    $("#ring-tests").textContent = state.totalTestsCount;

    const motBox = $("#motivation-box");
    const motText = motBox.querySelector(".motivation-text");
    if (progressPct >= 80) motText.textContent = "Дивовижні результати! Продовжуй вивчати мову! 🏆";
    else if (progressPct > 0) motText.textContent = "Чудовий темп! Продовжуй рух по модулях. 🚀";
    else motText.textContent = "Обирай тему та починай прокачувати знання! 💡";

    renderDailyChallenge();
    renderDailyGoals();
    renderRecommended();
    renderActivity();

    checkAchievements();
    renderAchievements();
    const achCount = $("#achievements-count");
    if (achCount) achCount.textContent = `${state.achievements.length} / ${ACHIEVEMENTS.length}`;
}

function animateRing(id, pct) {
    const ring = $(`#${id}`).closest(".stat-ring").querySelector(".ring-fill");
    const circumference = 100;
    const offset = circumference - (pct / 100) * circumference;
    setTimeout(() => { ring.style.strokeDasharray = `${circumference - offset}, ${circumference}`; }, 100);
}

function renderHomeTopics() {
    const container = $("#home-topics-scroll");
    container.innerHTML = "";
    database.forEach(topic => {
        const progress = state.completedTests[topic.id] || 0;
        const card = document.createElement("div");
        card.className = "topic-card-mini";
        card.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-mini-progress">
                <div class="topic-mini-progress-fill" style="width:${progress}%"></div>
            </div>
        `;
        card.addEventListener("click", () => openConspect(topic.id));
        container.appendChild(card);
    });
}

/* ============================================================
   TOPICS
   ============================================================ */
function renderTopics() {
    const container = $("#topics-container");
    container.innerHTML = "";
    database.forEach(topic => {
        const progress = state.completedTests[topic.id] || 0;
        const diffClass = topic.difficulty === "easy" ? "diff-easy" : topic.difficulty === "hard" ? "diff-hard" : "diff-medium";
        const diffLabel = topic.difficulty === "easy" ? "Легко" : topic.difficulty === "hard" ? "Складно" : "Середньо";

        const card = document.createElement("div");
        card.className = "topic-card";
        card.dataset.id = topic.id;
        card.innerHTML = `
            <div class="topic-card-header">
                <h3>${topic.title}</h3>
                <span class="topic-difficulty ${diffClass}">${diffLabel}</span>
            </div>
            <p>${topic.description}</p>
            <div class="topic-progress-section">
                <div class="topic-progress-header">
                    <span>Прогрес тесту</span>
                    <span>${progress}%</span>
                </div>
                <div class="topic-progress-track">
                    <div class="topic-progress-fill" style="width:${progress}%"></div>
                </div>
            </div>
            <div class="topic-actions">
                <button class="btn-secondary js-conspect">Конспект</button>
                <button class="btn-primary js-quiz" ${topic.questions.length === 0 ? "disabled" : ""}>Тест</button>
            </div>
        `;
        card.querySelector(".js-conspect").addEventListener("click", (e) => { e.stopPropagation(); openConspect(topic.id); });
        card.querySelector(".js-quiz").addEventListener("click", (e) => { e.stopPropagation(); startQuiz(topic.id); });
        container.appendChild(card);
    });
}

function onSearch() {
    const q = $("#search-input").value.toLowerCase().trim();
    const clearBtn = $("#search-clear");
    clearBtn.classList.toggle("visible", q.length > 0);

    $$(".topic-card").forEach(card => {
        const topic = database.find(t => t.id === card.dataset.id);
        const match = !q || topic.title.toLowerCase().includes(q) || topic.description.toLowerCase().includes(q);
        card.style.display = match ? "" : "none";
    });
}

/* ============================================================
   CONSPECT
   ============================================================ */
function openConspect(id) {
    const topic = database.find(t => t.id === id);
    if (!topic) return;
    quiz.topicId = id;
    $("#conspect-body").innerHTML = topic.conspect;

    const isFav = state.favorites.includes(id);
    const favBtn = $("#btn-fav-toggle");
    favBtn.classList.toggle("is-fav", isFav);

    show("screen-conspect");
}

function handleFavToggle() {
    const id = quiz.topicId;
    if (!id) return;
    const idx = state.favorites.indexOf(id);
    if (idx > -1) state.favorites.splice(idx, 1);
    else state.favorites.push(id);

    const favBtn = $("#btn-fav-toggle");
    favBtn.classList.toggle("is-fav", state.favorites.includes(id));
    saveState();
    updateStreak();
}

/* ============================================================
   QUIZ
   ============================================================ */
function startQuiz(id) {
    const topic = database.find(t => t.id === id);
    if (!topic || topic.questions.length === 0) return;

    quiz.topicId = id;
    let bank = JSON.parse(JSON.stringify(topic.questions));
    shuffleArray(bank);
    quiz.questions = bank.slice(0, Math.min(10, bank.length));
    quiz.currentIndex = 0;
    quiz.answers = [];
    quiz.errors = [];
    quiz.elapsed = 0;
    quiz.isDaily = false;

    if (quiz.timerInterval) clearInterval(quiz.timerInterval);
    quiz.timerInterval = setInterval(() => {
        quiz.elapsed++;
        const min = Math.floor(quiz.elapsed / 60);
        const sec = quiz.elapsed % 60;
        $("#quiz-timer").textContent = `${min}:${String(sec).padStart(2, "0")}`;
    }, 1000);

    $("#quiz-timer").textContent = "0:00";
    showQuestion();
    show("screen-quiz");
}

function randomQuiz() {
    const withQ = database.filter(t => t.questions.length > 0);
    const topic = withQ[Math.floor(Math.random() * withQ.length)];
    startQuiz(topic.id);
}

function showQuestion() {
    const q = quiz.questions[quiz.currentIndex];
    const total = quiz.questions.length;
    const counter = $("#quiz-question-counter");
    const progressFill = $("#quiz-progress-bar");
    const submitBtn = $("#btn-submit-answer");
    const container = $("#answers-container");

    counter.textContent = `${quiz.currentIndex + 1} / ${total}`;
    progressFill.style.width = `${(quiz.currentIndex / total) * 100}%`;
    submitBtn.disabled = true;
    submitBtn.textContent = quiz.currentIndex === total - 1 ? "Завершити" : "Далі";

    $("#question-text").textContent = q.text;
    container.innerHTML = "";

    if (q.type === "single" || q.type === "multiple") {
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
        q.left.forEach((leftText, leftIdx) => {
            const row = document.createElement("div");
            row.className = "matching-row";

            const left = document.createElement("div");
            left.className = "matching-left";
            left.textContent = leftText;

            const arrow = document.createElement("div");
            arrow.className = "matching-arrow";
            arrow.textContent = "→";

            const select = document.createElement("select");
            select.className = "matching-select";
            select.dataset.leftIndex = leftIdx;

            const ph = document.createElement("option");
            ph.textContent = "Оберіть...";
            ph.value = "";
            select.appendChild(ph);

            q.right.forEach((rightText, rightIdx) => {
                const opt = document.createElement("option");
                opt.value = rightIdx;
                opt.textContent = rightText;
                select.appendChild(opt);
            });

            select.addEventListener("change", () => {
                const selects = container.querySelectorAll(".matching-select");
                submitBtn.disabled = !Array.from(selects).every(s => s.value !== "");
            });

            row.appendChild(left);
            row.appendChild(arrow);
            row.appendChild(select);
            container.appendChild(row);
        });
    }
}

function submitAnswer() {
    const q = quiz.questions[quiz.currentIndex];
    const container = $("#answers-container");
    let isCorrect = false;
    let userText = "";
    let correctText = "";

    if (q.type === "single") {
        const sel = container.querySelector(".answer-option.selected");
        if (!sel) return;
        const idx = parseInt(sel.dataset.index);
        isCorrect = idx === q.answer;
        userText = q.options[idx];
        correctText = q.options[q.answer];
    } else if (q.type === "multiple") {
        const selected = Array.from(container.querySelectorAll(".answer-option.selected")).map(el => parseInt(el.dataset.index)).sort();
        const correct = [...q.answer].sort();
        isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
        userText = selected.map(i => q.options[i]).join(", ");
        correctText = correct.map(i => q.options[i]).join(", ");
    } else if (q.type === "matching") {
        const selects = container.querySelectorAll(".matching-select");
        isCorrect = true;
        selects.forEach(sel => {
            const l = parseInt(sel.dataset.leftIndex);
            const r = parseInt(sel.value);
            if (q.answer[l] !== r) isCorrect = false;
        });
        userText = "Твій варіант";
        correctText = "Правильна відповідність";
    }

    if (!isCorrect) {
        quiz.errors.push({ question: q.text, yourAnswer: userText, correctAnswer: correctText });
    }

    quiz.answers.push(isCorrect);
    quiz.currentIndex++;

    if (quiz.currentIndex < quiz.questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

/* ============================================================
   RESULTS
   ============================================================ */
function finishQuiz() {
    if (quiz.timerInterval) clearInterval(quiz.timerInterval);

    const total = quiz.questions.length;
    const correct = quiz.answers.filter(Boolean).length;
    const percent = Math.round((correct / total) * 100);

    let grade, color, motivation;
    if (percent >= 90) {
        grade = "Відмінно"; color = "var(--success)";
        motivation = "Неймовірний результат! Ти вже практично на вершині! ⚡";
    } else if (percent >= 75) {
        grade = "Добре"; color = "var(--accent)";
        motivation = "Чудова робота! Декілька штрихів — і буде ідеально. 👍";
    } else if (percent >= 50) {
        grade = "Задовільно"; color = "var(--warning)";
        motivation = "Стабільний фундамент є, але варто переглянути правила. 📚";
    } else {
        grade = "Повторити"; color = "var(--danger)";
        motivation = "Не хвилюйся! Помилки — найкращі вчителі. 🎯";
    }

    const xp = Math.round(percent * 1.5 + (percent === 100 ? 50 : 0));
    state.xp += xp;

    const badge = $("#result-grade-badge");
    badge.textContent = grade;
    badge.style.background = color;
    badge.style.color = "#fff";

    $("#result-score-text").textContent = `${correct} з ${total} правильних`;
    $("#result-motivation").textContent = motivation;

    const min = Math.floor(quiz.elapsed / 60);
    const sec = quiz.elapsed % 60;
    $("#rs-time").textContent = `${min}:${String(sec).padStart(2, "0")}`;
    $("#rs-accuracy").textContent = `${percent}%`;
    $("#rs-xp").textContent = `+${xp}`;

    const scoreRing = $("#score-ring-fill");
    const circumference = 2 * Math.PI * 52;
    scoreRing.style.stroke = color;
    setTimeout(() => { scoreRing.style.strokeDasharray = `${(percent / 100) * circumference} ${circumference}`; }, 100);

    const errorContainer = $("#error-review-container");
    const errorList = $("#error-list");
    errorList.innerHTML = "";
    if (quiz.errors.length > 0) {
        errorContainer.style.display = "block";
        quiz.errors.forEach(err => {
            const item = document.createElement("div");
            item.className = "error-item";
            item.innerHTML = `<strong>${err.question}</strong><br><small style="color:var(--danger)">Твоя: ${err.yourAnswer}</small><br><small style="color:var(--success)">Правильно: ${err.correctAnswer}</small>`;
            errorList.appendChild(item);
        });
    } else {
        errorContainer.style.display = "none";
    }

    saveTestProgress(quiz.topicId, percent);
    updateDailyGoalsAfterQuiz(percent, correct);

    if (quiz.isDaily) {
        completeDailyChallenge(xp);
    } else {
        const t = database.find(d => d.id === quiz.topicId);
        addActivity("test", `Тест «${t ? t.title : quiz.topicId}»: ${correct}/${total} (${percent}%)`);
    }

    show("screen-results");

    if (percent >= 75) spawnConfetti();
}

function saveTestProgress(id, score) {
    const old = state.completedTests[id] || 0;
    if (score > old) {
        state.completedTests[id] = score;
        state.scoresSum += (score - old);
    }
    state.totalTestsCount++;
    saveState();
    renderHomeStats();
    renderHomeTopics();
    renderTopics();
}

/* ============================================================
   FAVORITES MODAL
   ============================================================ */
function toggleFavModal() {
    const modal = $("#modal-favorites");
    modal.classList.toggle("active");
    if (modal.classList.contains("active")) renderFavList();
}

function renderFavList() {
    const list = $("#favorites-list");
    list.innerHTML = "";
    if (state.favorites.length === 0) {
        list.innerHTML = '<li class="fav-empty">Список обраного порожній</li>';
        return;
    }
    state.favorites.forEach(id => {
        const topic = database.find(t => t.id === id);
        if (!topic) return;
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="fav-item-title">${topic.title}</span>
            <button class="fav-item-btn" data-id="${topic.id}">Читати</button>
        `;
        li.querySelector(".fav-item-btn").addEventListener("click", () => {
            toggleFavModal();
            openConspect(topic.id);
        });
        list.appendChild(li);
    });
}

/* ============================================================
   THEME
   ============================================================ */
function initTheme() {
    const saved = localStorage.getItem(THEME_KEY) || "light";
    document.documentElement.setAttribute("data-theme", saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
}

/* ============================================================
   STREAK
   ============================================================ */
function getStreak() {
    try {
        const raw = localStorage.getItem(STREAK_KEY);
        if (!raw) return { days: 0, lastDate: null };
        return JSON.parse(raw);
    } catch { return { days: 0, lastDate: null }; }
}

function initStreak() {
    const streak = getStreak();
    const today = new Date().toDateString();

    if (streak.lastDate === today) {
        // Already active today
    } else if (streak.lastDate === new Date(Date.now() - 86400000).toDateString()) {
        // Continue streak
    } else if (streak.lastDate !== today) {
        streak.days = 0;
    }

    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    $("#streak-count").textContent = streak.days;
}

function updateStreak() {
    const streak = getStreak();
    const today = new Date().toDateString();

    if (streak.lastDate === today) return;

    if (streak.lastDate === new Date(Date.now() - 86400000).toDateString()) {
        streak.days++;
    } else {
        streak.days = 1;
    }

    streak.lastDate = today;
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    $("#streak-count").textContent = streak.days;
}

/* ============================================================
   CONFETTI
   ============================================================ */
function spawnConfetti() {
    const container = $("#confetti-container");
    container.innerHTML = "";
    const colors = ["#0071e3", "#30d158", "#ff9f0a", "#bf5af2", "#ff453a", "#5ac8fa"];

    for (let i = 0; i < 60; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = `${6 + Math.random() * 8}px`;
        piece.style.height = `${6 + Math.random() * 8}px`;
        piece.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        piece.style.animationDelay = `${Math.random() * 0.5}s`;
        container.appendChild(piece);
    }

    setTimeout(() => { container.innerHTML = ""; }, 4000);
}

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */
const ACHIEVEMENTS = [
    { id: "first_test", title: "Перший крок", desc: "Пройти перший тест", icon: "🎯", check: () => state.totalTestsCount >= 1 },
    { id: "streak_3", title: "Три дні поспіль", desc: "Серія 3 дні", icon: "🔥", check: () => getStreak().days >= 3 },
    { id: "streak_7", title: "Тиждень безперервно", desc: "Серія 7 днів", icon: "💪", check: () => getStreak().days >= 7 },
    { id: "perfect_score", title: "Ідеально!", desc: "100% на тесті", icon: "⭐", check: () => Object.values(state.completedTests).some(s => s === 100) },
    { id: "topics_3", title: "Енциклопедист", desc: "Вивчити 3 теми", icon: "📚", check: () => Object.values(state.completedTests).filter(s => s >= 50).length >= 3 },
    { id: "topics_all", title: "Мовознавець", desc: "Вивчити всі теми", icon: "🏆", check: () => Object.values(state.completedTests).filter(s => s >= 50).length >= database.length },
    { id: "xp_100", title: "Скарбничка", desc: "Набрати 100 XP", icon: "💎", check: () => state.xp >= 100 },
    { id: "xp_500", title: "Майстер", desc: "Набрати 500 XP", icon: "👑", check: () => state.xp >= 500 },
    { id: "daily_done", title: "Щоденний герой", desc: "Виконати щоденний виклик", icon: "⚡", check: () => state.dailyChallenge.completed },
    { id: "tests_10", title: "Досвідчений", desc: "Пройти 10 тестів", icon: "🧪", check: () => state.totalTestsCount >= 10 },
    { id: "favorites_3", title: "Колекціонер", desc: "Додати 3 теми в обране", icon: "❤️", check: () => state.favorites.length >= 3 },
    { id: "goals_all", title: "Перфекціоніст", desc: "Виконати всі щоденні цілі", icon: "🎯", check: () => { const goals = getDailyGoals(); return goals.every(g => state.dailyGoals.goalsClaimed.includes(g.id)); } }
];

function checkAchievements() {
    let newAchievements = [];
    ACHIEVEMENTS.forEach(a => {
        if (!state.achievements.includes(a.id) && a.check()) {
            state.achievements.push(a.id);
            newAchievements.push(a);
        }
    });
    if (newAchievements.length > 0) {
        saveState();
        newAchievements.forEach(a => addActivity("achievement", `Досягнення: ${a.icon} ${a.title}`));
    }
    return newAchievements;
}

function renderAchievements() {
    const container = $("#achievements-grid");
    if (!container) return;
    container.innerHTML = "";
    ACHIEVEMENTS.forEach(a => {
        const unlocked = state.achievements.includes(a.id);
        const card = document.createElement("div");
        card.className = "achievement-card" + (unlocked ? " unlocked" : "");
        card.innerHTML = `<div class="achievement-icon">${unlocked ? a.icon : "🔒"}</div><div class="achievement-title">${a.title}</div><div class="achievement-desc">${a.desc}</div>`;
        container.appendChild(card);
    });
}

/* ============================================================
   DAILY CHALLENGE
   ============================================================ */
function isDailyChallengeCompleted() {
    const today = new Date().toDateString();
    return state.dailyChallenge.date === today && state.dailyChallenge.completed;
}

function completeDailyChallenge(bonusXp) {
    const today = new Date().toDateString();
    state.dailyChallenge = { date: today, completed: true };
    state.xp += bonusXp;
    saveState();
    addActivity("daily", `Щоденний виклик виконано! +${bonusXp} XP`);
    renderHomeStats();
}

function startDailyChallenge() {
    if (isDailyChallengeCompleted()) return;
    const withQ = database.filter(t => t.questions.length > 0);
    const allQuestions = [];
    withQ.forEach(t => {
        t.questions.forEach(q => allQuestions.push({ ...q, topicId: t.id }));
    });
    shuffleArray(allQuestions);
    quiz.topicId = "daily";
    quiz.questions = allQuestions.slice(0, Math.min(5, allQuestions.length));
    quiz.currentIndex = 0;
    quiz.answers = [];
    quiz.errors = [];
    quiz.elapsed = 0;
    quiz.isDaily = true;

    if (quiz.timerInterval) clearInterval(quiz.timerInterval);
    quiz.timerInterval = setInterval(() => {
        quiz.elapsed++;
        const min = Math.floor(quiz.elapsed / 60);
        const sec = quiz.elapsed % 60;
        $("#quiz-timer").textContent = `${min}:${String(sec).padStart(2, "0")}`;
    }, 1000);

    $("#quiz-timer").textContent = "0:00";
    showQuestion();
    show("screen-quiz");
}

/* ============================================================
   DAILY GOALS
   ============================================================ */
function resetDailyGoalsIfNeeded() {
    const today = new Date().toDateString();
    if (state.dailyGoals.date !== today) {
        state.dailyGoals = { date: today, testsCompleted: 0, questionsAnswered: 0, correctAnswers: 0, goalsClaimed: [] };
        saveState();
    }
}

function getDailyGoals() {
    resetDailyGoalsIfNeeded();
    const dg = state.dailyGoals;
    return [
        { id: "test", text: "Пройти 1 тест", current: dg.testsCompleted, target: 1, xp: 20 },
        { id: "questions", text: "Відповісти на 10 питань", current: dg.questionsAnswered, target: 10, xp: 30 },
        { id: "accuracy", text: "Набрати 70%+ точність", current: dg.correctAnswers >= 3 ? 1 : 0, target: 1, xp: 25 }
    ];
}

function updateDailyGoalsAfterQuiz(percent, totalCorrect) {
    const today = new Date().toDateString();
    resetDailyGoalsIfNeeded();
    state.dailyGoals.testsCompleted++;
    state.dailyGoals.questionsAnswered += quiz.questions.length;
    state.dailyGoals.correctAnswers += totalCorrect;
    saveState();
}

function claimGoalXp(goalId) {
    if (state.dailyGoals.goalsClaimed.includes(goalId)) return;
    const goals = getDailyGoals();
    const goal = goals.find(g => g.id === goalId);
    if (!goal || goal.current < goal.target) return;
    state.dailyGoals.goalsClaimed.push(goalId);
    state.xp += goal.xp;
    saveState();
    addActivity("goal", `Щоденна ціль «${goal.text}» виконана! +${goal.xp} XP`);
    renderHomeStats();
}

/* ============================================================
   ACTIVITY
   ============================================================ */
function addActivity(type, text) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    state.activity.unshift({ type, text, time: timeStr, date: now.toDateString() });
    if (state.activity.length > 20) state.activity = state.activity.slice(0, 20);
    saveState();
}

function renderActivity() {
    const list = $("#activity-list");
    if (!list) return;
    if (state.activity.length === 0) {
        list.innerHTML = '<div class="activity-empty">Починай вчитися — і твоя активність з\'явиться тут!</div>';
        return;
    }
    list.innerHTML = "";
    state.activity.slice(0, 5).forEach(a => {
        const dotClass = a.type === "test" ? "green" : a.type === "goal" ? "orange" : "";
        const item = document.createElement("div");
        item.className = "activity-item";
        item.innerHTML = `<div class="activity-dot ${dotClass}"></div><span class="activity-text">${a.text}</span><span class="activity-time">${a.time}</span>`;
        list.appendChild(item);
    });
}

/* ============================================================
   RECOMMENDED
   ============================================================ */
function renderRecommended() {
    const container = $("#home-recommended-scroll");
    if (!container) return;
    container.innerHTML = "";

    const withQ = database.filter(t => t.questions.length > 0);
    const notStarted = withQ.filter(t => !state.completedTests[t.id]);
    const weakTopics = withQ.filter(t => {
        const s = state.completedTests[t.id];
        return s && s < 70;
    });

    const recommended = [];
    if (notStarted.length > 0) recommended.push({ topic: notStarted[0], tag: "Нова тема" });
    if (weakTopics.length > 0) recommended.push({ topic: weakTopics[0], tag: "Повторити" });
    if (recommended.length < 2) {
        const inProgress = withQ.filter(t => {
            const s = state.completedTests[t.id];
            return s && s >= 50 && s < 90;
        });
        if (inProgress.length > 0) recommended.push({ topic: inProgress[0], tag: "Продовжити" });
    }
    if (recommended.length < 2) {
        const random = withQ[Math.floor(Math.random() * withQ.length)];
        if (!recommended.find(r => r.topic.id === random.id)) {
            recommended.push({ topic: random, tag: "Спробувати" });
        }
    }

    recommended.forEach(r => {
        const card = document.createElement("div");
        card.className = "recommended-card";
        card.innerHTML = `<span class="recommended-tag">${r.tag}</span><h3>${r.topic.title}</h3><p>${r.topic.description}</p>`;
        card.addEventListener("click", () => openConspect(r.topic.id));
        container.appendChild(card);
    });
}

/* ============================================================
   RENDER HOME
   ============================================================ */
function renderDailyChallenge() {
    const card = $("#daily-challenge-card");
    const sub = $("#dc-sub");
    const btn = $("#btn-daily-challenge");
    if (!card) return;

    if (isDailyChallengeCompleted()) {
        card.classList.add("completed");
        sub.textContent = "Виконано сьогодні!";
        btn.textContent = "✓";
        btn.disabled = true;
    } else {
        card.classList.remove("completed");
        sub.textContent = "5 випадкових питань — +50 бонусних XP";
        btn.textContent = "Старт";
        btn.disabled = false;
    }
}

function renderDailyGoals() {
    const list = $("#dg-list");
    const xpEl = $("#dg-xp");
    if (!list) return;

    resetDailyGoalsIfNeeded();
    const goals = getDailyGoals();
    const unclaimed = goals.filter(g => g.current >= g.target && !state.dailyGoals.goalsClaimed.includes(g.id));
    const totalBonusXp = unclaimed.reduce((a, g) => a + g.xp, 0);

    if (xpEl) xpEl.textContent = totalBonusXp > 0 ? `+${totalBonusXp} XP` : "+0 XP";

    list.innerHTML = "";
    goals.forEach(g => {
        const done = g.current >= g.target;
        const claimed = state.dailyGoals.goalsClaimed.includes(g.id);
        const item = document.createElement("div");
        item.className = "dg-item" + (done ? " done" : "");
        const pct = Math.min(100, Math.round((g.current / g.target) * 100));
        item.innerHTML = `
            <div class="dg-check">${done && claimed ? "✓" : ""}</div>
            <span class="dg-text">${g.text}</span>
            <div class="dg-progress"><div class="dg-progress-fill" style="width:${pct}%"></div></div>
        `;
        if (done && !claimed) {
            item.style.cursor = "pointer";
            item.addEventListener("click", () => {
                claimGoalXp(g.id);
                renderDailyGoals();
            });
        }
        list.appendChild(item);
    });
}

/* ============================================================
   HELPERS
   ============================================================ */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

/* ============================================================
   EXPORTS (backward-compatible)
   ============================================================ */
function createDefaultProgressState() {
    return { favorites: [], completedTests: {}, totalTestsCount: 0, scoresSum: 0 };
}

function normalizeProgressState(savedState = {}) {
    const defaults = createDefaultProgressState();
    return {
        favorites: Array.isArray(savedState.favorites) ? savedState.favorites.slice() : defaults.favorites.slice(),
        completedTests: savedState.completedTests && typeof savedState.completedTests === "object"
            ? { ...savedState.completedTests }
            : { ...defaults.completedTests },
        totalTestsCount: Number.isFinite(savedState.totalTestsCount) && savedState.totalTestsCount >= 0
            ? savedState.totalTestsCount : defaults.totalTestsCount,
        scoresSum: Number.isFinite(savedState.scoresSum) && savedState.scoresSum >= 0
            ? savedState.scoresSum : defaults.scoresSum
    };
}

if (typeof module !== "undefined") {
    module.exports = { createDefaultProgressState, normalizeProgressState };
}