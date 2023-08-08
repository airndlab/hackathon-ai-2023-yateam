delete from practice;
INSERT INTO practice(created_date, author, category_id, name)
VALUES
(NOW(), '-', 1,'Генерация вопросов к интервью с заказчиком по развитию системы'),
(NOW(), '-', 1,'Генерация описаний интерфейсов'),
(NOW(), '-', 1,'Генерация основных идей по созданию приложения'),
(NOW(), '-', 1,'Генерация предложений по развитию системы'),
(NOW(), '-', 1,'Генерация программы испытаний по спецификации'),
(NOW(), '-', 1,'Генерация спецификаций'),
(NOW(), '-', 1,'Генерация текстов (для заголовков и информационных сообщений)'),
(NOW(), '-', 1,'Генерация технического задания'),
(NOW(), '-', 1,'Генерация функциональных требований'),
(NOW(), '-', 1,'Подготовка к обследованию'),
(NOW(), '-', 1,'Генерация метрик использования приложения'),
(NOW(), '-', 1,'Исследование рынка'),
(NOW(), '-', 1,'Генерация отзывов и обход возражений'),
(NOW(), '-', 1,'Анализ отзывов, аналогично Анализ поисковых запросов'),
(NOW(), '-', 1,'Генерация пользовательских историй'),
(NOW(), '-', 1,'Генерация подсказок для полей'),
(NOW(), '-', 1,'Процессы. Получение данных для IDEF диаграмм'),
(NOW(), '-', 1,'Процессы. Получение данных для BPMN диаграмм'),
(NOW(), '-', 1,'Процессы. Генерация матрицы управления рисками'),
(NOW(), '-', 1,'Составление структуры базы данных'),
(NOW(), '-', 2,'Авторизация на Spring Boot'),
(NOW(), '-', 2,'Выбор и подключение шаблонизатора'),
(NOW(), '-', 2,'Генерация макета страницы входа на Bootstrap 4'),
(NOW(), '-', 2,'Генерация метода для подсчета рейтинга'),
(NOW(), '-', 2,'Генерация метода поиска практик'),
(NOW(), '-', 2,'Генерация шаблона Thymeleaf'),
(NOW(), '-', 2,'Генерация парсера практик из telegram'),
(NOW(), '-', 2,'Создание CRUD-репозиториев и тестов'),
(NOW(), '-', 2,'Создание базового скрипта Flyway и доменов'),
(NOW(), '-', 3,'Генерация данных для автотестов (json для теста контроллера)'),
(NOW(), '-', 3,'Генерация тест-кейсов по спецификации'),
(NOW(), '-', 3,'Граничные условия для поля'),
(NOW(), '-', 3,'Заполнение БД тестовыми данными'),
(NOW(), '-', 3,'Создание CRUD-репозиториев и тестов'),
(NOW(), '-', 4,'Установка простых сервисов'),
(NOW(), '-', 4,'Написание jenkins pipeline'),
(NOW(), '-', 4,'Развертывание сервисов в docker container'),
(NOW(), '-', 4,'Генерация конфигов для nginx'),
(NOW(), '-', 5,'Формирование структуры команды разработки под задачу'),
(NOW(), '-', 5,'Формирование текстов писем и документов по назначению'),
(NOW(), '-', 5,'Отчетка. РП по описаниям, ПЗ'),
(NOW(), '-', 5,'Отчетка. Код программы для сдачи с комментами'),
(NOW(), '-', 5,'Отчетка. План подготовки персонала'),
(NOW(), '-', 5,'Отчетка. Программа ОЭ'),
(NOW(), '-', 5,'Отчетка. Описание БД'),
(NOW(), '-', 5,'Отчетка. Реферат'),
(NOW(), '-', 5,'Отчетка. Применение большого НПА (инструкция по делопроизводству)'),
(NOW(), '-', 5,'Сценарий для видеоинструкции'),
(NOW(), '-', 5,'Генерация FAQ'),
(NOW(), '-', 5,'Генерация текстов публикаций для социальных сетей'),
(NOW(), '-', 5,'Правила пользования приложением'),
(NOW(), '-', 5,'Подготовка персонала. Контрольное упражнение - тест'),
(NOW(), '-', 5,'Подготовка персонала. Вопросы для подготовки'),
(NOW(), '-', 1,'Генерация списка сущностей'),
(NOW(), '-', 1,'Генерация plantuml схемы сущностей'),
(NOW(), '-', 1,'Пользовательские истории'),
(NOW(), '-', 1,'Критерии приемки'),
(NOW(), '-', 2,'Генерация функциональности без учета стилизации'),
(NOW(), '-', 2,'Генерация готовых стилизованных компонентов'),
(NOW(), '-', 2,'Генерация и доработка анимаций.'),
(NOW(), '-', 2,'Изменение стилей отдельных элементов интерфейса без подробного описания'),
(NOW(), '-', 2,'Рефакторинг кода'),
(NOW(), '-', 2,'Перенос стилей в styled-компоненты'),
(NOW(), '-', 2,'Стилизация компонента по аналогии с другим'),
(NOW(), '-', 2,'Выявление потенциальных проблем перед реализацией компонента'),
(NOW(), '-', 2,'Создание Spring Boot проекта с помощью Spring Initializr'),
(NOW(), '-', 2,'Написание миграции по созданию сущностей в БД'),
(NOW(), '-', 2,'Генерация OpenAPI для RESTful API'),
(NOW(), '-', 2,'Генерация Controller`ов по OpenAPI'),
(NOW(), '-', 2,'Генерация классов от DTO до Controller'),
(NOW(), '-', 2,'Написание миграций для вставки данных'),
(NOW(), '-', 2,'Настройка Spring Boot Security'),
(NOW(), '-', 2,'Переход с Deprecated реализации'),
(NOW(), '-', 3,'Выявление в техническом задании недостающей информации («белых пятен»)'),
(NOW(), '-', 3,'Формирование теста критического пути'),
(NOW(), '-', 3,'Формирование чек-листа проверок для проведения тестирования'),
(NOW(), '-', 3,'Генерация тест-кейсов (проверка авторизации, добавление, удаление комментариев)'),
(NOW(), '-', 3,'Генерация тестовых данных (для проверки расчета рейтинга (балла) и количества голосов по практикам)'),
(NOW(), '-', 4,'Создание Dockerfile для Spring Boot приложения'),
(NOW(), '-', 4,'Создание пайплайна для GitHub Actions'),
(NOW(), '-', 5,'Формирование кода для PlantUML для формирования ER-диаграммы'),
(NOW(), '-', 5,'Формирование списка таблиц с их описанием для депонируемых материалов.'),
(NOW(), '-', 5,'Формирование описания таблиц с типами данным для полей и их описанием для формирования депонируемых материалов.'),
(NOW(), '-', 5,'Генерация примеров наполнения данными таблиц для формирования депонируемых материалов.'),
(NOW(), '-', 5,'Генерация тестового описания для реферата БД для депонируемых материалов.'),
(NOW(), '-', 5,'Генерация тестового описания для реферата ПКт для депонируемых материалов.'),
(NOW(), '-', 1,'Описание функциональности по словесному описанию задачи'),
(NOW(), '-', 1,'Составление плана разработки'),
(NOW(), '-', 1,'Описание БД'),
(NOW(), '-', 1,'Описание интерфейса'),
(NOW(), '-', 1,'Составление дорожной карты'),
(NOW(), '-', 1,'Дизайн. Подбор палитры цветов'),
(NOW(), '-', 1,'Дизайн. Формирование логотипа сервиса'),
(NOW(), '-', 2,'Генерация Docker-compose'),
(NOW(), '-', 2,'Получение рекомендации: какую react библиотеку лучше использовать'),
(NOW(), '-', 2,'Генерация запросов для создания таблиц БД'),
(NOW(), '-', 2,'Генерация application.yml'),
(NOW(), '-', 2,'Генерация скрипта для загрузки данных в БД'),
(NOW(), '-', 2,'Генерация скрипта для извлечения ссылок из google docs'),
(NOW(), '-', 2,'Генерация конфигурации для авторизации'),
(NOW(), '-', 2,'Генерация кода для интерфейса страницы авторизации'),
(NOW(), '-', 2,'Генерация JS кода для поведения элемента на странице'),
(NOW(), '-', 2,'Генерация React компонента по словесному описанию'),
(NOW(), '-', 2,'Генерация частей конфигурации для тайлвинда'),
(NOW(), '-', 2,'Оптимизация кода'),
(NOW(), '-', 2,'Генерация sql запроса на изменение типа данных'),
(NOW(), '-', 2,'Генерация кода для пагинации списка практик (серверная часть)'),
(NOW(), '-', 2,'Генерация кода для пагинации списка практик (клиентская часть)'),
(NOW(), '-', 2,'Генерация кода для поиска практик по критериям'),
(NOW(), '-', 2,'Генерация кода для сортировки списка практик'),
(NOW(), '-', 3,'Создание тест-кейсов на основании постановки'),
(NOW(), '-', 3,'Генерация кода тестов'),
(NOW(), '-', 4,'Описание terraform-конфигурации для создания виртуальной машины в Yandex Cloud'),
(NOW(), '-', 4,'Описание Dockerfile'),
(NOW(), '-', 4,'Описание Github Actions Workflow для сборки и доставки приложения'),
(NOW(), '-', 4,'Описание nginx-конфигурации для выведения странице об ошибке при недоступности приложения'),
(NOW(), '-', 4,'Параметризация GIthub Actions Workflow'),
(NOW(), '-', 5,'Создание руководства пользователя'),
(NOW(), '-', 5,'Составление плана обучения'),
(NOW(), '-', 1,'Генерация нефункциональных требований'),
(NOW(), '-', 1,'Генерация требований к интерфейсу'),
(NOW(), '-', 2,'Интеграция сторонних инструментов'),
(NOW(), '-', 2,'Правка кода'),
(NOW(), '-', 3,'Генерация unit-теста'),
(NOW(), '-', 3,'Генерация тестовых url запросов для Postman'),
(NOW(), '-', 4,'Развертывание в Yandex Compute Cloud'),
(NOW(), '-', 4,'Создание CI/CD для GitHub проекта'),
(NOW(), '-', 4,'Поиск решения проблем'),
(NOW(), '-', 5,'Генерация сценария для обучающего видеоролика');