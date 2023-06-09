-- Аналитика
INSERT INTO practice(created_date, author, category_id, name, link, description)
VALUES (NOW(), 'ЯКоманда', 1, 'Исследование рынка',
        'https://docs.google.com/document/d/1yZLQFPJgdin2W0Ok-JRDV5xFFqMt4RRu',
        'Описание практики:
Использование ChatGPT для получения списка конкурентов и киллер-фичей перед стартом разработки продукта на уже существующем рынке для того чтобы быстро оценить дальнейшее направление исследования. Оценка размера команды

Шаги достижения результата:
Сформулировать для ChatGPT тип разрабатываемого приложения
Запросить списки компаний и киллер-фичи
Запросить размер команды и ее стоимость

Плюсы, минусы, важные особенности:
плюсы
От сети можно добиться списка конкретных лидеров рынка. По крайней мере Greenhouse попал
Оценка команды валидна, но только от части.
минусы
Сеть избегает любой конкретики. Например, при просьбе оценить стоимости компаний она выдала стандартный для себя длиннопост о том что «конфиденциальная информация  бла-бла, но вы можете поискать ее сами». Хотя для публичных компаний эта информация не является конфиденциальной
Не способна отвечать на многоплановые вопросы (в примере ниже, выдала список квалификаций, но совершенно забыла про их квалификацию)
Ответы нестабильны. В первый заход в список компаний попал еще taleo, а во втором его уже не было. Тоже самое с составом команды.
Вывод: не сильно отличается от ок, гугл, какой топ 10 продуктов talent acquisition в 2023.'),
       (NOW(), 'ЯКоманда', 1, 'Дополнение требований',
        'https://docs.google.com/document/d/1fNSViO2kD9y92wv6Zd__fS2XoNDE0wQt',
        'Описание практики:
    Использование ChatGPT для получения валидации полноты требований по сущности.

    Шаги достижения результата
    Дать ChatGPT список существующих требований и попросить заполнить пропуски.

    Результаты
    Плюсы: -
    Минусы:
    Потребовалась повторная генерация, чтобы ответ был хоть как-то релевантен.
    Сеть предложила требования по процессу, хотя про него ничего не знала, опираясь на название сущности.

    Вывод: сеть пытается фантазировать, а не сверяться с типичным перечнем операций'),
       (NOW(), 'ЯКоманда', 1, 'Написание персоны',
        'https://docs.google.com/document/d/121a7vdtMwC5lbYtSL2al9capyYCpg1Vf',
        'Описание практики:
    Использование ChatGPT для наполнения персоны деталями.

    Шаги достижения результата
    Дать ChatGPT контекст персоны и ее функцию
    Попросить наполнить содержимым

    Результаты
    Плюсы:
    Какую-то информацию можно добыть. Добыть ее другими способами сложно. Впрочем, проверить ответы сети тоже очень сложно.

    Минусы:
    Отвечает не вполне в плане заданного
    Не понимает суть персоны и упирается в «личные данные» и «пол не важен для этой профессии»
    Вместо ценностей «маркетинговый булшит»

    Вывод: в целом задача достигнута на 30%.'),
       (NOW(), 'ЯКоманда', 1, 'Генерация State Machine схемы',
        'https://docs.google.com/document/d/18qyzOcwG22wWh4_oPxP00EEHpI4Y0NBh',
        'Описание практики:
    Использование ChatGPT для генерации State Machine на plantuml.

    Шаги достижения результата
    Описать статусы и желаемые переходы ChatGPT
    Сгенерировать схему
    Валидировать схему на онлайн plantuml сервере, пока не исчезнут синтаксические ошибки, сверяясь с документацией.
    Просить ее поправить

    Результаты
    Плюсы:
    Вау эффект и умиление)

    Минусы:
    Вообще не понимает синтаксиса и того, что делает

    Вывод: быстрее самому написать, особенно если правки надо вносить в большую схему.'),
       (NOW(), 'ЯКоманда', 1, 'Написание пользовательских историй',
        'https://docs.google.com/document/d/1CG7qtoiWBjtLXWkG2KswmHcpX0GiT40J/edit',
        'Описание практики:
    Использование ChatGPT для пользовательских историй

    Шаги достижения результата
    Дать ChatGPT контекст приложения
    Попросить сформировать историии
    Вычитывать их и вносить корректировки.

    Результаты
    Плюсы:
    Много текста за один присест
    Прощает опечатки и маленькие ошибки формулирования запроса (story=>rule)

    Минусы:
    Состав сторей меняется в том числе по ее желанию, это сильно затрудняет вычитку
    На третьей итерации вычитки уже очень тяжело сравнить было/стало и не теряться

    Вывод: Лучше останавливаться на второй итерации и дальше доводить самому.'),

-- Разработка
       (NOW(), 'ЯКоманда', 2, 'Написание тестов на react компонент',
        'https://docs.google.com/document/d/1lQNXHTaFqlOYE190Icp1LKc6V8jIvVfw/edit?usp=sharing&ouid=109169721317780382179&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для написания jest тестов на react компонент.

    Шаги достижения результата:
    1. Сформулировать для ChatGPT задачу.
    2. Передать код react компонента.
    4. Получить код теста.
    5. Провести несколько итераций вопрос-ответ с целью поправить тест.
    6. Запушить полученный тест.


    Плюсы, минусы, важные особенности:
    Плюсы:
    Быстрый старт не с 0
    Дает рабочие подсказки по описанию ошибок.
    Минусы:
    Вероятность получить рабочий код из коробки крайне мала - код может использовать не существующие функции, менять сигнатуру компонента. Нужно задавать уточняющие вопросы.'),
       (NOW(), 'ЯКоманда', 2, 'Выявление проблем в java классе',
        'https://docs.google.com/document/d/1ANcdDmVlUs9hFvmrgxz_dFz5gZW0AfD8/edit?usp=sharing&ouid=109169721317780382179&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для подготовки java кода к ревью.

    Шаги достижения результата:
    1. Сформулировать для ChatGPT задачу.
    2. Передать код java класса.
    4. Получить список проблем.
    5. Провести несколько итераций вопрос-ответ с целью устранить все проблемы.
    6. Запушить поправленный класс.


    Плюсы:
    Дает верные советы, помогает улучшить код.
    Минусы:
    Попадаются фактически неверные пункты, поэтому использовать как единственный источник истины нельзя.'),
       (NOW(), 'ЯКоманда', 2, 'Создание доступных react-компонентов',
        'https://docs.google.com/document/d/1eKI70K0jXS6Rr1ciXpT_7M1O_sjcJo5a9UQPSXsSDoA/edit?usp=sharing',
        'Описание практики:
    Использование ChatGPT для повышения доступности приложения

    Шаги достижения результата:
    1.Сформулировать для ChatGPT задачу, содержащую код текущего компонента
    2.Получить обновленный код компонента и другие рекомендации
    3.Применить полученные рекомендации, если они актуальны

    Плюсы, минусы, важные особенности:
     +Даёт применимые на практике рекомендации.'),
       (NOW(), 'ЯКоманда', 2, 'Выявление потенциальных проблем перед отправкой задачи на следующие этапы',
        'https://docs.google.com/document/d/1a1tSptd6a2pxRzyiUKq-4h_pj4Npcog7kn-IBH_i8y4/edit?usp=sharing',
        'Описание практики:
    Использование ChatGPT для составления чек-листа для оптимального проектирования решения до реализации и для самопроверки после реализации задачи в целях сокращения времени разработки, а также минимизации проблем на последующих этапах жизненного цикла задачи

    Шаги достижения результата:
    1. Сформулировать для ChatGPT запрос, содержащий формулировку задачи.
    2. Получить чек-лист для проверки задачи.
    3. При необходимости уточнить запрос или самостоятельно дополнить список.
    4. Если список составляется до реализации задачи - учесть приведённые в чек-листе моменты при проектировании, а после реализации проверить задачу в соответствии с полученным чек-листом.

    Плюсы, минусы, важные особенности:
     +В случае с небольшими задачами с четкими требованиями составляет достаточно конкретные и актуальные списки.'),
       (NOW(), 'ЯКоманда', 2, 'Написание SQL запроса',
        'https://docs.google.com/document/d/1L_7hOs1rjgzDO0Cohf9rgVD7jlThdv2d/edit?usp=sharing&ouid=109169721317780382179&rtpof=true&sd=true',
        'Описание практики:
    Написание sql запроса с помощью chatgpt.

    Шаги достижения результата:
    1. Сформулировать для ChatGPT задачу для запроса.
    2. Получить код запроса.
    3. Провести несколько итераций вопрос-ответ с целью поправить запрос.
    4. Доправить и запушить полученный запрос.

    Плюсы, минусы, важные особенности:
    Плюсы:
    По правильно сформулированному запросу выдает рабочий sql.
    Минусы:
    Допускает ошибки.
    Не очень понятно, что влияет на точность ответов.'),

-- Тестирование
       (NOW(), 'ЯКоманда', 3, 'Составление автотестов по проверке заполнения полей',
        'https://docs.google.com/document/d/1epLZu69NtGV4zpJuDcvdJ_Lz6y2zJLbbsYoOzac8Yw0/edit?usp=share_link',
        'Описание практики:
    Использование ChatGPT для составления автотестов по проверке заполнения полей с учетом требований и необходимых тестовых данных.

    Шаги достижения результата:
    1. Сбор данных: Определить требования, которые будут проверяться автотестами, язык программирования, библиотеку/и.

    2. Подготовка запроса: Сформулировать запрос для ChatGPT, с указанием ЯП, библиотек, требований, чтобы получить автотесты для проверки заполнения полей.
    Например: “Автотестирование ПО. Язык программирования Java, библиотека TestNG. Параметризация данных. Составь автотест по проверке длины поля со следующим требованием: минимальная длина 1 символ, максимальная длина 100 символов. Проверять допустимую и недопустимую длину,  с учетом граничных значений. Дополнительная информация: в значениях использовать только допустимые символы: цифры, буквы русского и английского языка, спецсимволы, БЕЗ пробелов в начале и в конце."

    3. Использование ChatGPT: Воспользоваться ChatGPT для отправки подготовленного запроса и получения автотестов.

    4. Анализ и корректировка: Проверить полученные автотесты на соответствие требованиям и, при необходимости, внести корректировки или задать более точные запросы для ChatGPT.

    5. Использование результата: Добавить полученные автотесты (с доработкой) в проект по автотестированию.

    Плюсы, минусы, важные особенности:
    + Сокращение времени на написание автотестов. При правильно составленном запросе - получение готового автотеста, требующего небольшой доработки для включения в проект по автотестированию.

    - Тестовые данные, предлагаемые в  автотестах, не всегда соответствуют техникам тест-дизайна.

    - При одновременном запросе нескольких автотестов (по разным требованиям) при формировании тестовых данных для одного теста могут не учитываться  остальные требования к тестовым данным.

    - Требуется проверка достоверности кода, тестовых данных.'),
       (NOW(), 'ЯКоманда', 3, 'Составление тест-кейсов по документации с требованиями',
        'https://docs.google.com/document/d/1doKOWfzbWTo0ySvkj7O3VjHkCbD1QbygDPktzB_5WEU/edit?usp=share_link',
        'Описание практики:
    Использование ChatGPT для составления тест-кейсов по документации с требованиями.

    Шаги достижения результата:
    1. Подготовка запроса: Сформулировать запрос для ChatGPT, чтобы получить тест-кейсы, и предоставить документацию с требованиями. Например: “Тестирование ПО. Напиши тест-кейсы к документации: [Документация]".

    2. Использование ChatGPT: Воспользоваться ChatGPT для отправки подготовленного запроса и получения составленных тест-кейсов.

    3.  Анализ и корректировка: Проверить полученные тест-кейсы на соответствие требованиям и, при необходимости, внести корректировки или задать более точные запросы для ChatGPT.

    4.  Использование результата: Использовать полученные тест-кейсы при тестировании ПО (с доработкой при необходимости).

    Плюсы, минусы, важные особенности:
    1. + Сокращение времени на составление тестовой документации.
    2. + Предложенные тест-кейсы могут  покрывать бОльшую часть требований, указанных в документации.
    3. - Тестовые случаи могут быть без учета техник-тест-дизайна.
    4. - Полученные тест-кейсы могут не соответствовать формату (больше походить на проверки чек-листа, а не на тест-кейсы).
    5. - Требуется проверка корректности полученных тест-кейсов.'),
       (NOW(), 'ЯКоманда', 3, 'Составление SQL-запроса',
        'https://docs.google.com/document/d/1wbUge5NSdHKzEvejkWsvJGent6nRE2IMFBPUZXXXIKE/edit?usp=share_link',
        'Описание практики:
    Использование ChatGPT для получения SQL-запроса.

    Шаги достижения результата:
    1. Подготовка запроса: Сформулировать запрос для ChatGPT с указанием таблиц и столбцов таблиц, условий, чтобы получить SQL-запрос.

    2. Использование ChatGPT: Воспользоваться ChatGPT для отправки подготовленного запроса и получения SQL-запроса.

    3. Анализ и корректировка: Проверить полученную информацию и, при необходимости, внести корректировки или задать более точные запросы для ChatGPT.

    4. Использование результата: Использовать полученный SQL-запрос для получения нужной информации из БД.

    Плюсы, минусы, важные особенности:
    + Получение  работоспособного SQL-запроса, соответствующего требованиям.
    - Подробное описание запроса к ChatGPT (описание таблиц, условий).'),
       (NOW(), 'ЯКоманда', 3,
        'Получение недостающей информации (“белых пятен”) в документации для проведения тестирования',
        'https://docs.google.com/document/d/15GWOz3bwU0tNrtP4EYNDNN-svXx08nroUJq6FS4cqaE/edit?usp=share_link',
        'Описание практики:
    Использование ChatGPT для получения недостающей информации (“белых пятен”) в документации для уточнения с аналитиком и проведения тестирования.

    Шаги достижения результата:
    1. Подготовка запроса: Сформулировать запрос для ChatGPT, чтобы получить недостающую информацию, и предоставить документацию с требованиями.
    Например: “Тестирование ПО.  Какой информации не хватает в следующей документации для проведения полного качественного тестирования? [Документация]".

    2. Использование ChatGPT: Воспользоваться ChatGPT для отправки подготовленного запроса и получения недостающей информации.

    3. Анализ и корректировка: Проверить полученную информацию и, при необходимости, внести корректировки или задать более точные запросы для ChatGPT.

    4. Использование результата: Использовать полученную информацию для обсуждения с аналитиком, разработчиком, для формирования чек-листа.

    Плюсы, минусы, важные особенности:
    1. + Получение достаточного перечня “белых пятен”, что позволяет предусмотреть дополнительные проверки и повысить  качество тестирования.
    2. Требуется анализ полученной информации на целесообразность тех или иных проверок.'),
       (NOW(), 'ЯКоманда', 3, 'Определение локаторов веб-элементов сайта',
        'https://docs.google.com/document/d/1GyjdaAukMfnDQpqiVhyIdb78IqhuzhoSBIRQHqEQxSg',
        'Описание практики:
    Использование ChatGPT для определения локаторов веб-элементов сайта.

    Шаги достижения результата:
    1. Подготовка запроса: Сформулировать запрос для ChatGPT со ссылкой на сайт, чтобы получить локаторы веб-элементов сайта.
    2. Использование ChatGPT: Воспользоваться ChatGPT для отправки подготовленного запроса и получения локаторов веб-элементов.
    3. Анализ и корректировка: Проверить полученные локаторы на достоверность, при необходимости, задать более точные запросы для ChatGPT.
    4. Использование результата: Использовать правильные локаторы в автотестах (ЕСЛИ получится получить правильные локаторы)

    Выводы (плюсы, минусы, важные особенности):
    1. - Выдает недостоверный результат, локаторы несуществующих веб-элементов. Например,  при ссылке на сайт, требующий авторизации, придумывает веб-элементы, при этом на первый взгляд выглядит правдоподобно.
    2. -  Требуется тотальная проверка корректности полученных локаторов. Увы, после получения ответа выискивать среди горы недостоверных локаторов правильный - неэффективно.'),
       (NOW(), 'ЯКоманда', 3, 'Генерация документации к автотестам',
        'https://docs.google.com/document/d/1VoPDX7AIdfbadil-FsQrgQxGlVsHhp06pQ-s5WlWOvw/edit?usp=share_link',
        'Описание практики:
    Использование ChatGPT для генерации документации к автотестам.

    Шаги достижения результата:
    1. Подготовка запроса: Сформулировать запрос для ChatGPT с предоставлением кода автотеста.
    2. Использование ChatGPT: Воспользоваться ChatGPT для отправки подготовленного запроса и получения документации к автотестам.
    3. Анализ и корректировка: Проверить полученную документацию на соответствие автотестам и, при необходимости, внести корректировки или задать более точные запросы для ChatGPT.
    4. Использование результата: Использовать полученную информацию при составлении документации к автотестам.

    Плюсы, минусы, важные особенности:
    1. + Получение заготовки для документации к автотестам.
    2. - Ограничение на получение информации (приходится запрос делать по 1-2-м автотестам).
    3. - Необходимость проверки достоверности полученной информации. '),

-- DevOps
       (NOW(), 'ЯКоманда', 4, 'Генерация утилитных скриптов',
        'https://docs.google.com/document/d/1VzLCDLxvw-QzWMW5_pBUB6vXrsNhCd5N/edit?usp=sharing&ouid=109169721317780382179&rtpof=true&sd=true',
        'Описание практики:
    Генерация скриптов, необходимых для повседневной работы.
    Шаги достижения результата:
    1. Сформулировать для ChatGPT задачу.
    2. Получить bash скрипт.
    Плюсы, минусы, важные особенности:
    Плюсы:
    Дает готовые к использованию скрипты.'),
       (NOW(), 'ЯКоманда', 4, 'Тестирование Ansible ролей из Galaxy',
        'https://docs.google.com/document/d/1B4s7FWRu4UBuIvXJujlwt5izagBgKWkGHw6vaYmNMxY/edit?usp=share_link',
        'Описание практики:
    Генерация тестов для Ansible ролей из Galaxy с помощью chatgpt.

    Шаги достижения результата:
    1. Сформулировать для ChatGPT задачу.
    2. Получить ansible скрипт.

    Плюсы, минусы, важные особенности:
    Плюсы:
    Дает готовые к использованию скрипты.
    Минусы:
    Тесты слишком абстрактные, возможно, нужны корректировки.'),
       (NOW(), 'ЯКоманда', 4, 'Переписать Dockerfile на Alpine',
        'https://docs.google.com/document/d/1-QOnRgyliPHy8KLf94eo7aTVO28wg-al',
        'Описание практики:
    Переписывание Dockerfile на образ Alpine, который меньше всех по размеру

    Шаги достижения результата:
    Попросить ChatGPT переписать Dockerfile с одной ОС на Alpine - предоставить Dockerfile
    Получить Dockerfile на alpine

    Результаты
    + Переписывает и отмечает разницу между ОС

    Вывод: Может допустить ошибку с зависимостями - требует проверки.'),

-- Документирование
       (NOW(), 'ЯКоманда', 5, 'Разъяснение/описание метода/класса для комментирования кода',
        'https://docs.google.com/document/d/1jiFePM-weZvCo9r2IgdjaIBtwyXXTGoi/edit?usp=share_link&ouid=108755626385252470687&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для получения, дополненного пояснениями кода.

    Шаги достижения результата:
    1. Сформулировать для ChatGPT язык исходников.
    2. Останавливаем пример его возможностей.
    3. Передать код.
    4. Получить готовый результат.
    5. Проанализировать.
    6. Обновить исходник.
    7. По окончании - проверить, собрать, протестировать сохранить в гит.

    Плюсы, минусы, важные особенности:
    Плюсы:
    - Оперативно документированный код
    Минусы:
    - Для документирования больших объемов кода потребуется разбивать на части, так как есть ограничение на размер пересылаемых частей.
    - Сливаем свои исходники'),
       (NOW(), 'ЯКоманда', 5, 'Генерация примеров таблиц БД для ДМ',
        'https://docs.google.com/document/d/1msQ2YxVT8qhnpLcm6WMyN4w3FL2-nl51/edit?usp=share_link&ouid=108755626385252470687&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для генерации примеров таблиц БД для ДМ.

    Шаги достижения результата:
    1. Сформулировать для ChatGPT задачу.
    2. Передать структуру таблицы.
    4. Получить результат.
    5. Подкорректировать, послав уточнение .
    6. при необходимости повторить п.4-5.
    7. Результат вставить в документ, подправить стиль таблицы.

    Плюсы, минусы, важные особенности:
    Плюсы:
    - Можно достичь результата, приближенного к реальности
    Минусы:
    - Каждую более-менее сложную таблицу требуется уточнять дополнительными запросами. Если не знаем, как примерно должны выглядеть данные, то уточнить мы не сможем.
    - Сливаем структуру БД'),
       (NOW(), 'ЯКоманда', 5, 'Формирование списка контрольных вопросов по результатам обучения',
        'https://docs.google.com/document/d/13Zz0Rqw9aNmaKxNk4IgOTOq04Evi1gbf/edit?usp=share_link&ouid=108755626385252470687&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для формирования списка контрольных вопросов по результатам обучения.

    Шаги достижения результата:
    1.  Сформулировать для ChatGPT задачу.
    2.  Подготовить материалы для передачи в ChatGPT.
    3.  Передать материалы в ChatGPT.
    4.  Получить результат.
    5.  Подкорректировать, послав уточнение.
    6.  При необходимости повторить п.5-6.
    7.  При возможности использования материалов, вставить в документ.

    Плюсы, минусы, важные особенности:
    Плюсы:
    ●  Можно достичь результата при минимальных входных материалах
    ●  Можно корректировать результаты уточняющими запросами.
    Минусы:
    ●  Невозможно использовать материалы больше нескольких страниц, теряет контекст, переходит на английский, выдает ошибки.
    ●  Сливаем материалы по ГК.'),
       (NOW(), 'ЯКоманда', 5, 'Правим реферат для ДМ по БД',
        'https://docs.google.com/document/d/1hHgratjIw61GGENzXo0tDm73b1eiy2wF/edit?usp=sharing&ouid=108755626385252470687&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для правки реферата для депонируемых материалов (ДМ) по БД из старого формата к новому.

    Шаги достижения результата:
    1.  Сформулировать для ChatGPT задачу.
    2.  Подготовить материалы для передачи в ChatGPT.
    3.  Передать материалы в ChatGPT.
    4.  Получить результат.
    5.  Подкорректировать, послав уточнение.
    6.  При необходимости повторить п.5-6.
    7.  При возможности использования материалов, вставить в документ.

    Плюсы, минусы, важные особенности:
    Плюсы:
    ●  Можно достичь результата при минимальных входных материалах
    ●  Можно корректировать результаты уточняющими запросами.
    Минусы:
    ●  Сложно добиться нормального вида и смысла, быстрее самому написать.
    ●  Сливаем материалы по ГК.'),
       (NOW(), 'ЯКоманда', 5, 'Генерация кода для PlantUML для формирования ER-диаграммы',
        'https://docs.google.com/document/d/1xMnBhS6NUtMAfCtucD37ELkNnXSOWhia/edit?usp=share_link&ouid=108755626385252470687&rtpof=true&sd=true',
        'Описание практики:
    Использование ChatGPT для генерации кода для PlantUML для формирования ER-диаграммы.

    Шаги достижения результата:
    1.  Сформулировать для ChatGPT задачу.
    2.  Подготовить материалы для передачи в ChatGPT.
    3.  Передать материалы в ChatGPT.
    4.  Получить результат.
    5.  Вставить код в редактор PlantUML, посмотреть результат.
    6.  Подкорректировать, послав уточнение в ChatGPT.
    7.  При необходимости повторить п.3-6.
    8.  При возможности использования материалов, вставить в документ.

    Плюсы, минусы, важные особенности:
    Плюсы:
    ●  Можно достичь результата при минимальных входных материалах
    ●  Можно достаточно быстро получить ER-диаграмму и дальнейшая проверка её тоже будет упрощена, так как она в текстовом виде.
    ●  Я забыл прислать названия таблиц, прислал только структуры полей. Он по префиксу полей и по наполнению придумал адекватные названия таблиц, которые были очень похожи на реальные.
    ●  Можно корректировать результаты уточняющими запросами.
    Минусы:
    ●  Требуются небольшие правки при небольших БД.
    ●  Скорее всего будет терять контекст при больших объемах БД.
    ●  Для адекватных диаграмм, проще получить рыбу и допилить самому.
    ●  Пытается улучшить структуру, но говорит об этом.
    ●  Сливаем материалы по ГК.');
