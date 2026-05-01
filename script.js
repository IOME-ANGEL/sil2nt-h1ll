// ===== OSINT FRAMEWORK DATA =====
const osintFramework = {
    // Категории и инструменты
    categories: {
        username: {
            name: "Username Search",
            icon: "👤",
            color: "#8b2bff",
            tools: [
                {
                    id: "sherlock",
                    name: "Sherlock",
                    icon: "🕵️",
                    description: "Поиск аккаунтов по имени пользователя в 300+ социальных сетях. Автоматизированный инструмент для OSINT-разведки.",
                    usage: "# Установка\npip3 install sherlock-project\n\n# Использование\nsherlock username\n\n# С сохранением результатов\nsherlock username --output results.txt",
                    protection: [
                        "Используйте разные имена пользователей на разных платформах",
                        "Регулярно проверяйте, что можно найти по вашему username",
                        "Настройте приватность в социальных сетях",
                        "Рассмотрите возможность использования псевдонимов"
                    ],
                    links: [
                        { name: "GitHub", url: "https://github.com/sherlock-project/sherlock", icon: "fab fa-github" },
                        { name: "Документация", url: "https://github.com/sherlock-project/sherlock/wiki", icon: "fas fa-book" }
                    ],
                    type: "tool"
                },
                {
                    id: "whatsmyname",
                    name: "WhatsMyName",
                    icon: "📝",
                    description: "Веб-версия поиска по username с большей базой сайтов. Не требует установки.",
                    usage: "https://whatsmyname.app/\n\nПросто введите username в поисковую строку на сайте",
                    protection: [
                        "Проверьте свое имя пользователя на этом сервисе",
                        "Удалите неиспользуемые аккаунты",
                        "Измените username на важных платформах, если он слишком уникален"
                    ],
                    links: [
                        { name: "Сайт", url: "https://whatsmyname.app/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "maigret",
                    name: "Maigret",
                    icon: "🌐",
                    description: "Альтернатива Sherlock с поддержкой большего количества сайтов и возможностью кастомных проверок.",
                    usage: "# Установка\npip3 install maigret\n\n# Использование\nmaigret username\n\n# С конкретными сайтами\nmaigret username --site twitter --site github",
                    protection: [
                        "Используйте инструменты как этот для самопроверки",
                        "Создавайте отдельные email для регистрации на разных сайтах",
                        "Минимизируйте личную информацию в публичных профилях"
                    ],
                    links: [
                        { name: "GitHub", url: "https://github.com/soxoj/maigret", icon: "fab fa-github" }
                    ],
                    type: "tool"
                },
                {
                    id: "namechk",
                    name: "Namechk",
                    icon: "✅",
                    description: "Проверка доступности имени пользователя на популярных платформах.",
                    usage: "https://namechk.com/\n\n1. Введите username\n2. Посмотрите результаты\n3. Используйте для брендинга",
                    protection: [
                        "Зарегистрируйте свой username на всех основных платформах",
                        "Используйте унифицированный бренд",
                        "Мониторьте использование вашего бренда"
                    ],
                    links: [
                        { name: "Сайт", url: "https://namechk.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        },
        
        email: {
            name: "Email Investigation",
            icon: "📧",
            color: "#00f3ff",
            tools: [
                {
                    id: "hunter",
                    name: "Hunter.io",
                    icon: "🎯",
                    description: "Поиск email адресов, связанных с доменом. Поиск по имени и фамилии.",
                    usage: "https://hunter.io/\n\n1. Введите домен компании\n2. Получите список email-адресов\n3. Используйте верификатор email",
                    protection: [
                        "Используйте общие корпоративные email (info@, support@)",
                        "Настройте catch-all на домене",
                        "Обучайте сотрудников фишинговой безопасности"
                    ],
                    links: [
                        { name: "Сайт", url: "https://hunter.io/", icon: "fas fa-external-link-alt" },
                        { name: "API", url: "https://hunter.io/api-documentation", icon: "fas fa-code" }
                    ],
                    type: "web"
                },
                {
                    id: "haveibeenpwned",
                    name: "Have I Been Pwned",
                    icon: "🔓",
                    description: "Проверка email на участие в утечках данных. База из миллиардов учетных записей.",
                    usage: "https://haveibeenpwned.com/\n\n1. Введите email или телефон\n2. Проверьте результаты\n3. Подпишитесь на уведомления о новых утечках",
                    protection: [
                        "Регулярно проверяйте свои email на этом сайте",
                        "Используйте уникальные пароли для каждого сервиса",
                        "Включите двухфакторную аутентификацию везде"
                    ],
                    links: [
                        { name: "Сайт", url: "https://haveibeenpwned.com/", icon: "fas fa-external-link-alt" },
                        { name: "API", url: "https://haveibeenpwned.com/API/v3", icon: "fas fa-code" }
                    ],
                    type: "web"
                },
                {
                    id: "dehashed",
                    name: "DeHashed",
                    icon: "🔎",
                    description: "Поиск по утечкам данных с возможностью фильтрации по email, username, имени.",
                    usage: "https://dehashed.com/\n\n1. Введите email или логин\n2. Используйте расширенный поиск\n3. Экспортируйте результаты",
                    protection: [
                        "Используйте временные email для регистрации",
                        "Регулярно меняйте пароли",
                        "Мониторьте утечки данных"
                    ],
                    links: [
                        { name: "Сайт", url: "https://dehashed.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "emailrep",
                    name: "EmailRep",
                    icon: "📊",
                    description: "Анализ репутации email адреса по множеству параметров.",
                    usage: "https://emailrep.io/\n\n1. Введите email\n2. Получите отчет о репутации\n3. Используйте API для автоматизации",
                    protection: [
                        "Используйте профессиональные email",
                        "Избегайте спам-сигнатур",
                        "Подтверждайте email через DKIM/SPF"
                    ],
                    links: [
                        { name: "Сайт", url: "https://emailrep.io/", icon: "fas fa-external-link-alt" },
                        { name: "API", url: "https://emailrep.io/key", icon: "fas fa-code" }
                    ],
                    type: "web"
                }
            ]
        },
        
        domain: {
            name: "Domain Analysis",
            icon: "🌍",
            color: "#39ff14",
            tools: [
                {
                    id: "whois",
                    name: "WHOIS Lookup",
                    icon: "📋",
                    description: "Получение регистрационной информации о домене: владелец, даты, контакты.",
                    usage: "# Онлайн-сервисы:\nhttps://who.is/\nhttps://www.whois.com/\n\n# Командная строка:\nwhois example.com",
                    protection: [
                        "Используйте WHOIS privacy/guards при регистрации домена",
                        "Предоставляйте корпоративные, а не личные данные",
                        "Регулярно обновляйте контактную информацию"
                    ],
                    links: [
                        { name: "WHOIS", url: "https://who.is/", icon: "fas fa-external-link-alt" },
                        { name: "ICANN Lookup", url: "https://lookup.icann.org/", icon: "fas fa-search" }
                    ],
                    type: "web"
                },
                {
                    id: "shodan",
                    name: "Shodan",
                    icon: "🔍",
                    description: "Поисковая система для интернета вещей. Поиск открытых портов, сервисов, веб-камер.",
                    usage: "https://www.shodan.io/\n\nПоисковые запросы:\ncity:Moscow port:22\napache country:RU\nnet:192.168.1.0/24",
                    protection: [
                        "Закрывайте ненужные порты",
                        "Обновляйте ПО и firmware",
                        "Используйте брандмауэры и VPN",
                        "Регулярно проверяйте свой IP в Shodan"
                    ],
                    links: [
                        { name: "Сайт", url: "https://www.shodan.io/", icon: "fas fa-external-link-alt" },
                        { name: "Explorer", url: "https://explore.shodan.io/", icon: "fas fa-globe" }
                    ],
                    type: "web"
                },
                {
                    id: "builtwith",
                    name: "BuiltWith",
                    icon: "🏗️",
                    description: "Анализ технологического стека сайта: CMS, фреймворки, серверы, трекеры.",
                    usage: "https://builtwith.com/\n\n1. Введите домен\n2. Изучите технологический стек\n3. Проверьте историю изменений",
                    protection: [
                        "Минимизируйте использование внешних трекеров",
                        "Регулярно обновляйте CMS и плагины",
                        "Используйте security headers",
                        "Скрывайте версии ПО"
                    ],
                    links: [
                        { name: "Сайт", url: "https://builtwith.com/", icon: "fas fa-external-link-alt" },
                        { name: "Расширение", url: "https://builtwith.com/extension", icon: "fas fa-puzzle-piece" }
                    ],
                    type: "web"
                },
                {
                    id: "securityheaders",
                    name: "Security Headers",
                    icon: "🛡️",
                    description: "Проверка заголовков безопасности сайта. Анализ настроек CSP, HSTS и др.",
                    usage: "https://securityheaders.com/\n\n1. Введите URL\n2. Получите оценку безопасности\n3. Используйте рекомендации",
                    protection: [
                        "Настройте правильные security headers",
                        "Используйте Content Security Policy",
                        "Включите HSTS",
                        "Настройте XSS protection"
                    ],
                    links: [
                        { name: "Сайт", url: "https://securityheaders.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "dnsdumpster",
                    name: "DNSDumpster",
                    icon: "🗺️",
                    description: "Карта DNS записей домена. Поиск поддоменов, серверов, инфраструктуры.",
                    usage: "https://dnsdumpster.com/\n\n1. Введите домен\n2. Изучите карту инфраструктуры\n3. Экспортируйте результаты",
                    protection: [
                        "Используйте split-horizon DNS",
                        "Скрывайте внутренние сервера",
                        "Регулярно проводите аудит DNS",
                        "Удаляйте неиспользуемые записи"
                    ],
                    links: [
                        { name: "Сайт", url: "https://dnsdumpster.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        },
        
        image: {
            name: "Image Analysis",
            icon: "🖼️",
            color: "#ff2b8b",
            tools: [
                {
                    id: "reverseimage",
                    name: "Reverse Image Search",
                    icon: "🔎",
                    description: "Поиск исходного изображения или его копий в интернете. Анализ EXIF данных.",
                    usage: "Google Images: https://images.google.com/\n\n1. Загрузите изображение\n2. Изучите результаты поиска\n3. Проверьте похожие изображения",
                    protection: [
                        "Удаляйте EXIF данные перед публикацией фото",
                        "Используйте водяные знаки для важных изображений",
                        "Проверяйте, где еще используются ваши фото"
                    ],
                    links: [
                        { name: "Google Images", url: "https://images.google.com/", icon: "fab fa-google" },
                        { name: "TinEye", url: "https://tineye.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "exifdata",
                    name: "EXIF Data Viewer",
                    icon: "📊",
                    description: "Просмотр метаданных изображений: GPS координаты, дата съемки, камера, настройки.",
                    usage: "https://exifdata.com/\n\n1. Загрузите изображение\n2. Изучите метаданные\n3. Проверьте наличие GPS координат",
                    protection: [
                        "Всегда отключайте геотеги перед съемкой",
                        "Используйте инструменты для очистки EXIF",
                        "Не публикуйте оригиналы фотографий с метаданными"
                    ],
                    links: [
                        { name: "EXIF Data", url: "https://exifdata.com/", icon: "fas fa-external-link-alt" },
                        { name: "Jeffrey's Viewer", url: "https://exif.regex.info/", icon: "fas fa-camera" }
                    ],
                    type: "web"
                },
                {
                    id: "fotoforensics",
                    name: "FotoForensics",
                    icon: "🔬",
                    description: "Анализ изображений на предмет модификаций. Использует ELA (Error Level Analysis).",
                    usage: "https://fotoforensics.com/\n\n1. Загрузите изображение\n2. Используйте ELA анализ\n3. Проверьте метаданные",
                    protection: [
                        "Используйте профессиональные редакторы для ретуши",
                        "Избегайте повторного сжатия изображений",
                        "Проверяйте изображения перед публикацией"
                    ],
                    links: [
                        { name: "Сайт", url: "https://fotoforensics.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "exiftool",
                    name: "ExifTool",
                    icon: "🔧",
                    description: "Мощный инструмент командной строки для работы с метаданными изображений.",
                    usage: "# Установка\napt-get install libimage-exiftool-perl\n\n# Чтение метаданных\nexiftool image.jpg\n\n# Удаление метаданных\nexiftool -all= image.jpg",
                    protection: [
                        "Регулярно очищайте метаданные",
                        "Используйте автоматические скрипты для пакетной обработки",
                        "Храните оригиналы с метаданными отдельно"
                    ],
                    links: [
                        { name: "Сайт", url: "https://exiftool.org/", icon: "fas fa-external-link-alt" },
                        { name: "GitHub", url: "https://github.com/exiftool/exiftool", icon: "fab fa-github" }
                    ],
                    type: "tool"
                }
            ]
        },
        
        social: {
            name: "Social Media Intelligence",
            icon: "📱",
            color: "#ff6b35",
            tools: [
                {
                    id: "socialbearing",
                    name: "Social Bearing",
                    icon: "🧭",
                    description: "Агрегатор поиска по социальным сетям. Поиск по username, хештегам, локациям.",
                    usage: "https://socialbearing.com/\n\n1. Введите запрос\n2. Фильтруйте по платформам\n3. Анализируйте активность",
                    protection: [
                        "Ограничивайте публичную информацию",
                        "Используйте приватные аккаунты",
                        "Контролируйте геотеги"
                    ],
                    links: [
                        { name: "Сайт", url: "https://socialbearing.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "tinfoleak",
                    name: "Tinfoleak",
                    icon: "🐦",
                    description: "Сбор разведывательной информации из Twitter. Анализ активности, связей, метаданных.",
                    usage: "# Установка\npip3 install tinfoleak\n\n# Использование\ntinfoleak username\n\n# Расширенный анализ\ntinfoleak username --deep",
                    protection: [
                        "Ограничивайте публичные твиты",
                        "Отключайте геолокацию",
                        "Используйте защищенные твиты"
                    ],
                    links: [
                        { name: "GitHub", url: "https://github.com/vaguileradiaz/tinfoleak", icon: "fab fa-github" }
                    ],
                    type: "tool"
                },
                {
                    id: "socialsearcher",
                    name: "Social Searcher",
                    icon: "🔍",
                    description: "Поиск по социальным сетям в реальном времени. Мониторинг упоминаний.",
                    usage: "https://www.social-searcher.com/\n\n1. Введите запрос\n2. Настройте фильтры\n3. Получите уведомления",
                    protection: [
                        "Мониторьте упоминания о себе",
                        "Настройте оповещения",
                        "Управляйте цифровым следом"
                    ],
                    links: [
                        { name: "Сайт", url: "https://www.social-searcher.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        },
        
        network: {
            name: "Network Intelligence",
            icon: "🌐",
            color: "#00c8ff",
            tools: [
                {
                    id: "censys",
                    name: "Censys",
                    icon: "🔭",
                    description: "Поиск и анализ устройств в интернете. Альтернатива Shodan с дополнительными возможностями.",
                    usage: "https://censys.io/\n\n1. Зарегистрируйтесь для API ключа\n2. Используйте поисковые запросы\n3. Экспортируйте данные",
                    protection: [
                        "Используйте брандмауэры",
                        "Обновляйте сетевые устройства",
                        "Мониторьте публичную инфраструктуру"
                    ],
                    links: [
                        { name: "Сайт", url: "https://censys.io/", icon: "fas fa-external-link-alt" },
                        { name: "API", url: "https://censys.io/api", icon: "fas fa-code" }
                    ],
                    type: "web"
                },
                {
                    id: "zoomeye",
                    name: "ZoomEye",
                    icon: "👁️",
                    description: "Китайский аналог Shodan. Специализируется на азиатском регионе.",
                    usage: "https://www.zoomeye.org/\n\n1. Используйте поиск по устройствам\n2. Фильтруйте по стране/сервису\n3. Анализируйте результаты",
                    protection: [
                        "Проверяйте свои IP в ZoomEye",
                        "Закрывайте ненужные сервисы",
                        "Используйте геофильтрацию"
                    ],
                    links: [
                        { name: "Сайт", url: "https://www.zoomeye.org/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "bgpview",
                    name: "BGPView",
                    icon: "🗺️",
                    description: "Анализ BGP маршрутизации. Поиск AS номеров, префиксов, пиринга.",
                    usage: "https://bgpview.io/\n\n1. Введите IP или ASN\n2. Изучите маршрутизацию\n3. Проверьте соседей",
                    protection: [
                        "Настройте правильные BGP фильтры",
                        "Мониторьте маршрутизацию",
                        "Используйте RPKI"
                    ],
                    links: [
                        { name: "Сайт", url: "https://bgpview.io/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        },
        
        metadata: {
            name: "Metadata Analysis",
            icon: "📄",
            color: "#ffd700",
            tools: [
                {
                    id: "metagoofil",
                    name: "Metagoofil",
                    icon: "📊",
                    description: "Извлечение метаданных из публичных документов (PDF, DOC, PPT).",
                    usage: "# Установка\ngit clone https://github.com/laramies/metagoofil\n\n# Использование\npython metagoofil.py -d example.com -t pdf,doc -o results",
                    protection: [
                        "Очищайте метаданные в документах",
                        "Используйте специальные инструменты",
                        "Проверяйте документы перед публикацией"
                    ],
                    links: [
                        { name: "GitHub", url: "https://github.com/laramies/metagoofil", icon: "fab fa-github" }
                    ],
                    type: "tool"
                },
                {
                    id: "foca",
                    name: "FOCA",
                    icon: "📁",
                    description: "Анализ метаданных в документах и поиск скрытой информации.",
                    usage: "https://github.com/ElevenPaths/FOCA\n\n1. Установите .NET версию\n2. Сканируйте документы\n3. Анализируйте результаты",
                    protection: [
                        "Регулярно очищайте метаданные",
                        "Используйте стандартные процедуры",
                        "Обучайте сотрудников"
                    ],
                    links: [
                        { name: "GitHub", url: "https://github.com/ElevenPaths/FOCA", icon: "fab fa-github" }
                    ],
                    type: "tool"
                }
            ]
        },
        
        geolocation: {
            name: "Geolocation & Maps",
            icon: "📍",
            color: "#ff4444",
            tools: [
                {
                    id: "googleearth",
                    name: "Google Earth",
                    icon: "🌎",
                    description: "Просмотр спутниковых снимков и 3D моделей местности.",
                    usage: "https://earth.google.com/\n\n1. Изучите местность\n2. Используйте исторические снимки\n3. Создавайте проекты",
                    protection: [
                        "Проверяйте, что видно со спутника",
                        "Используйте растительность для маскировки",
                        "Учитывайте временные метки"
                    ],
                    links: [
                        { name: "Сайт", url: "https://earth.google.com/", icon: "fab fa-google" }
                    ],
                    type: "web"
                },
                {
                    id: "wikimapia",
                    name: "Wikimapia",
                    icon: "🗺️",
                    description: "Карта с пользовательскими аннотациями объектов по всему миру.",
                    usage: "https://wikimapia.org/\n\n1. Найдите местоположение\n2. Изучите описания объектов\n3. Используйте для планирования",
                    protection: [
                        "Проверяйте информацию о ваших объектах",
                        "Исправляйте неточности",
                        "Учитывайте публичность данных"
                    ],
                    links: [
                        { name: "Сайт", url: "https://wikimapia.org/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        },
        
        privacy: {
            name: "Privacy & Protection",
            icon: "🛡️",
            color: "#00ffaa",
            tools: [
                {
                    id: "panopticlick",
                    name: "Panopticlick",
                    icon: "👁️",
                    description: "Проверка уникальности браузера и защиты от fingerprinting.",
                    usage: "https://panopticlick.eff.org/\n\n1. Откройте сайт\n2. Нажмите 'Test Me'\n3. Получите рекомендации",
                    protection: [
                        "Используйте приватные режимы",
                        "Установите анти-fingerprinting расширения",
                        "Регулярно очищайте cookies"
                    ],
                    links: [
                        { name: "Сайт", url: "https://panopticlick.eff.org/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                },
                {
                    id: "privacytools",
                    name: "PrivacyTools",
                    icon: "🔒",
                    description: "Рекомендации по защите приватности: VPN, мессенджеры, поисковики.",
                    usage: "https://www.privacytools.io/\n\n1. Изучите рекомендации\n2. Выберите инструменты\n3. Внедрите защиту",
                    protection: [
                        "Используйте рекомендованные сервисы",
                        "Регулярно обновляйте настройки",
                        "Обучайтесь цифровой гигиене"
                    ],
                    links: [
                        { name: "Сайт", url: "https://www.privacytools.io/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        },
        
        monitoring: {
            name: "Monitoring & Alerts",
            icon: "📊",
            color: "#aa00ff",
            tools: [
                {
                    id: "googlealerts",
                    name: "Google Alerts",
                    icon: "🔔",
                    description: "Мониторинг упоминаний в интернете по ключевым словам.",
                    usage: "https://www.google.com/alerts\n\n1. Настройте запросы\n2. Укажите частоту\n3. Получайте уведомления",
                    protection: [
                        "Мониторьте упоминания о себе",
                        "Настройте конкурентную разведку",
                        "Используйте для репутации"
                    ],
                    links: [
                        { name: "Сайт", url: "https://www.google.com/alerts", icon: "fab fa-google" }
                    ],
                    type: "web"
                },
                {
                    id: "mention",
                    name: "Mention",
                    icon: "📈",
                    description: "Профессиональный мониторинг бренда и упоминаний в соцсетях.",
                    usage: "https://mention.com/\n\n1. Настройте отслеживание\n2. Анализируйте отчеты\n3. Реагируйте на упоминания",
                    protection: [
                        "Используйте для управления репутацией",
                        "Быстро реагируйте на негатив",
                        "Анализируйте тенденции"
                    ],
                    links: [
                        { name: "Сайт", url: "https://mention.com/", icon: "fas fa-external-link-alt" }
                    ],
                    type: "web"
                }
            ]
        }
    },

    cases: {
        1: {
            title: "Поиск цифрового следа",
            difficulty: "beginner",
            description: "Найдите всю доступную информацию о человеке по username 'cyber_test_2024'",
            steps: [
                "Используйте Sherlock для поиска по username",
                "Проверьте результаты в WhatsMyName",
                "Проанализируйте найденные профили",
                "Составьте отчет с найденной информацией"
            ],
            tools: ["sherlock", "whatsmyname", "maigret"],
            time: "30 минут",
            solution: "Пользователь найден на GitHub, Twitter и Reddit. Фотография профиля ведет к Flickr аккаунту с EXIF данными."
        },
        
        2: {
            title: "Анализ домена компании",
            difficulty: "medium",
            description: "Проведите полную разведку домена example-security.ru",
            steps: [
                "Выполните WHOIS запрос",
                "Проанализируйте технологический стек через BuiltWith",
                "Найдите поддомены через DNSDumpster",
                "Проверьте безопасность через Security Headers",
                "Изучите компанию через открытые реестры"
            ],
            tools: ["whois", "builtwith", "dnsdumpster", "securityheaders"],
            time: "45 минут",
            solution: "Домен зарегистрирован через privacy guard. Использует WordPress с устаревшими плагинами. Найден поддомен dev.example-security.ru с тестовой средой."
        },
        
        3: {
            title: "Полный цикл OSINT",
            difficulty: "hard",
            description: "От разведки до отчета по компании 'CyberSec Test Corp'",
            steps: [
                "Соберите информацию о сотрудниках через LinkedIn и Hunter.io",
                "Найдите корпоративные email и проверьте утечки",
                "Проанализируйте технологический стек и инфраструктуру",
                "Проверьте метаданные в публичных документах",
                "Составьте профессиональный отчет с рекомендациями"
            ],
            tools: ["hunter", "haveibeenpwned", "builtwith", "metagoofil", "censys"],
            time: "90 минут",
            solution: "Найдено 15 сотрудников, 3 корпоративных email. Один email участвовал в утечке 2022 года. Сайт использует устаревший jQuery. Обнаружены открытые порты на корпоративном сервере."
        },
        
        4: {
            title: "Анализ изображений и метаданных",
            difficulty: "medium",
            description: "Расследование происхождения фотографии из социальной сети",
            steps: [
                "Загрузите изображение в Google Images и TinEye",
                "Извлеките EXIF данные",
                "Проверьте модификации через FotoForensics",
                "Найдите оригинальное местоположение",
                "Определите автора фотографии"
            ],
            tools: ["reverseimage", "exifdata", "fotoforensics", "exiftool"],
            time: "40 минут",
            solution: "Изображение было сделано на iPhone 12 в Москве. Оригинал найден на Flickr. Геотеги указывают на конкретный адрес."
        },
        
        5: {
            title: "Мониторинг цифрового следа",
            difficulty: "beginner",
            description: "Настройка системы мониторинга упоминаний персонального бренда",
            steps: [
                "Настройте Google Alerts для вашего имени",
                "Используйте Social Searcher для соцсетей",
                "Проверьте утечки данных через Have I Been Pwned",
                "Настройте регулярные проверки",
                "Создайте план реагирования"
            ],
            tools: ["googlealerts", "socialsearcher", "haveibeenpwned", "panopticlick"],
            time: "35 минут",
            solution: "Система настроена. Обнаружено 3 упоминания в блогах. Email не был скомпрометирован. Браузер имеет средний уровень защиты."
        }
    }
};

// ===== ОСНОВНАЯ ЛОГИКА ПРИЛОЖЕНИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация переменных
    const currentCategoryElement = document.getElementById('currentCategory');
    const frameworkMap = document.getElementById('frameworkMap');
    const toolDetails = document.getElementById('toolDetails');
    const toolSearch = document.getElementById('toolSearch');
    const closeDetails = document.getElementById('closeDetails');
    const toggleView = document.getElementById('toggleView');
    const caseButtons = document.querySelectorAll('.case-button');
    const caseModal = document.getElementById('caseModal');
    const closeModal = document.getElementById('closeModal');
    const modalContent = document.getElementById('modalContent');
    const exportBtn = document.getElementById('exportBtn');
    
    let currentCategory = 'username';
    let selectedTool = null;
    let isMapView = true;
    
    // ===== ИНИЦИАЛИЗАЦИЯ КАРТЫ =====
    function initializeFramework() {
        renderCategoryNavigation();
        renderFrameworkMap();
        setupEventListeners();
        updateBreadcrumb();
    }
    
    // Рендер навигации по категориям
    function renderCategoryNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Убираем активный класс у всех ссылок
                navLinks.forEach(l => l.classList.remove('active'));
                // Добавляем активный класс текущей
                this.classList.add('active');
                
                // Получаем категорию из href
                const category = this.getAttribute('href').substring(1);
                if (osintFramework.categories[category]) {
                    switchCategory(category);
                }
            });
        });
    }
    
    // Переключение категории
    function switchCategory(category) {
        currentCategory = category;
        const categoryData = osintFramework.categories[category];
        
        // Обновляем заголовок
        currentCategoryElement.textContent = categoryData.name;
        
        if (isMapView) {
            renderFrameworkMap();
        } else {
            renderListView();
        }
        updateBreadcrumb();
        
        // Сбрасываем выбранный инструмент
        selectedTool = null;
        updateToolDetails();
    }
    
    // Рендер интерактивной карты
    function renderFrameworkMap() {
        const categoryData = osintFramework.categories[currentCategory];
        const mapContainer = frameworkMap.querySelector('.map-container');
        
        // Очищаем контейнер
        mapContainer.innerHTML = '';
        
        // Создаем центральный узел
        const centralNode = document.createElement('div');
        centralNode.className = 'map-node central';
        centralNode.dataset.category = 'root';
        centralNode.innerHTML = `
            <div class="node-content">
                <div class="node-icon">${categoryData.icon}</div>
                <h3 class="node-title">${categoryData.name}</h3>
                <p class="node-desc">${categoryData.tools.length} инструментов доступно</p>
            </div>
            <div class="node-connections"></div>
        `;
        
        mapContainer.appendChild(centralNode);
        
        // Позиционируем инструменты вокруг центрального узла
        const centerX = 50; // Процент от ширины
        const centerY = 50; // Процент от высоты
        const radius = 35;  // Радиус круга
        const angleStep = (2 * Math.PI) / categoryData.tools.length;
        
        categoryData.tools.forEach((tool, index) => {
            const angle = index * angleStep;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            const toolNode = document.createElement('div');
            toolNode.className = 'map-node tool-node';
            toolNode.dataset.toolId = tool.id;
            toolNode.style.left = `${x}%`;
            toolNode.style.top = `${y}%`;
            toolNode.style.borderColor = categoryData.color;
            toolNode.style.transform = 'translate(-50%, -50%)';
            
            toolNode.innerHTML = `
                <div class="node-content">
                    <div class="node-icon">${tool.icon}</div>
                    <h4 class="node-title">${tool.name}</h4>
                    <p class="node-desc">${tool.type === 'tool' ? 'CLI Tool' : 'Web Service'}</p>
                </div>
            `;
            
            // Добавляем обработчик клика
            toolNode.addEventListener('click', function() {
                selectTool(tool.id);
            });
            
            // Добавляем соединение с центральным узлом
            const connection = document.createElement('div');
            connection.className = 'connection-line';
            connection.style.position = 'absolute';
            connection.style.top = '50%';
            connection.style.left = '50%';
            connection.style.width = `${radius}%`;
            connection.style.height = '2px';
            connection.style.background = `linear-gradient(90deg, ${categoryData.color}, transparent)`;
            connection.style.transformOrigin = '0 0';
            connection.style.transform = `rotate(${angle}rad)`;
            connection.style.zIndex = '1';
            
            mapContainer.appendChild(connection);
            mapContainer.appendChild(toolNode);
        });
        
        // Анимация появления
        setTimeout(() => {
            document.querySelectorAll('.map-node').forEach((node, index) => {
                setTimeout(() => {
                    node.style.opacity = '1';
                    node.style.transform = node.classList.contains('central') 
                        ? 'translate(-50%, -50%)' 
                        : 'translate(-50%, -50%) scale(1)';
                }, index * 100);
            });
            
            document.querySelectorAll('.connection-line').forEach((line, index) => {
                setTimeout(() => {
                    line.style.width = `${radius}%`;
                }, index * 100 + 50);
            });
        }, 100);
    }
    // Рендер списка инструментов (альтернатива карте)
    function renderListView() {
        const categoryData = osintFramework.categories[currentCategory];
        const mapContainer = frameworkMap.querySelector('.map-container');
        
        mapContainer.innerHTML = '';
        
        // Создаем заголовок для списка
        const listHeader = document.createElement('div');
        listHeader.className = 'list-header';
        listHeader.innerHTML = `
            <h3><i class="fas fa-list"></i> ${categoryData.name}</h3>
            <p class="list-subtitle">${categoryData.tools.length} инструментов</p>
        `;
        mapContainer.appendChild(listHeader);
        
        // Создаем список инструментов
        const toolsList = document.createElement('div');
        toolsList.className = 'tools-list-container';
        
        categoryData.tools.forEach((tool, index) => {
            const toolItem = document.createElement('div');
            toolItem.className = 'tool-list-item';
            toolItem.dataset.toolId = tool.id;
            toolItem.style.animationDelay = `${index * 0.1}s`;
            
            toolItem.innerHTML = `
                <div class="tool-list-icon" style="background: ${categoryData.color}20; border-color: ${categoryData.color}">
                    <span class="tool-icon">${tool.icon}</span>
                </div>
                <div class="tool-list-info">
                    <div class="tool-list-header">
                        <h4 class="tool-list-name">${tool.name}</h4>
                        <span class="tool-list-type ${tool.type}">${tool.type === 'tool' ? 'CLI Tool' : 'Web Service'}</span>
                    </div>
                    <p class="tool-list-desc">${tool.description}</p>
                    <div class="tool-list-actions">
                        <button class="tool-list-select" data-tool-id="${tool.id}">
                            <i class="fas fa-info-circle"></i> Подробнее
                        </button>
                        ${tool.links.map(link => `
                            <a href="${link.url}" class="tool-list-link" target="_blank">
                                <i class="${link.icon}"></i> ${link.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Обработчик выбора инструмента
            const selectBtn = toolItem.querySelector('.tool-list-select');
            selectBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                selectTool(tool.id);
            });
            
            // Обработчик клика по всей карточке
            toolItem.addEventListener('click', function() {
                selectTool(tool.id);
            });
            
            toolsList.appendChild(toolItem);
        });
        
        mapContainer.appendChild(toolsList);
    }
    // Выбор инструмента
    function selectTool(toolId) {
        const categoryData = osintFramework.categories[currentCategory];
        selectedTool = categoryData.tools.find(tool => tool.id === toolId);
        
        // Подсвечиваем выбранный узел
        document.querySelectorAll('.tool-node').forEach(node => {
            node.classList.remove('selected');
            if (node.dataset.toolId === toolId) {
                node.classList.add('selected');
                node.style.boxShadow = `0 0 20px ${categoryData.color}`;
                node.style.transform = 'translate(-50%, -50%) scale(1.1)';
            } else {
                node.style.boxShadow = 'none';
                node.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
        
        updateToolDetails();
    }
    
    // Обновление деталей инструмента
    function updateToolDetails() {
        if (!selectedTool) {
            // Показываем заглушку, если инструмент не выбран
            document.getElementById('detailIcon').textContent = '🔍';
            document.getElementById('detailName').textContent = 'Выберите инструмент';
            document.getElementById('detailCategory').textContent = '-';
            document.getElementById('detailDescription').textContent = 'Выберите инструмент на карте для просмотра подробной информации о его назначении, использовании и методах защиты.';
            document.getElementById('detailUsage').innerHTML = '<code># Инструкция появится здесь</code>';
            
            const protectionList = document.getElementById('detailProtection');
            protectionList.innerHTML = '<li>Выберите инструмент для просмотра рекомендаций по защите</li>';
            
            const toolLinks = document.getElementById('detailLinks');
            toolLinks.innerHTML = `
                <a href="#" class="resource-link disabled" target="_blank"><i class="fas fa-link"></i> Официальный сайт</a>
                <a href="#" class="resource-link disabled" target="_blank"><i class="fab fa-github"></i> GitHub</a>
            `;
            
            return;
        }
        
        const categoryData = osintFramework.categories[currentCategory];
        
        // Обновляем информацию
        document.getElementById('detailIcon').textContent = selectedTool.icon;
        document.getElementById('detailName').textContent = selectedTool.name;
        document.getElementById('detailCategory').textContent = categoryData.name;
        document.getElementById('detailDescription').textContent = selectedTool.description;
        
        // Форматируем использование
        const usageElement = document.getElementById('detailUsage');
        const formattedUsage = selectedTool.usage.split('\n').map(line => {
            if (line.startsWith('#')) {
                return `<code class="comment">${line}</code>`;
            } else if (line.startsWith('http')) {
                return `<code class="link">${line}</code>`;
            } else {
                return `<code>${line}</code>`;
            }
        }).join('\n');
        
        usageElement.innerHTML = formattedUsage;
        
        // Обновляем защиту
        const protectionList = document.getElementById('detailProtection');
        protectionList.innerHTML = selectedTool.protection
            .map(item => `<li>${item}</li>`)
            .join('');
        
        // Обновляем ссылки
        const toolLinks = document.getElementById('detailLinks');
        toolLinks.innerHTML = selectedTool.links
            .map(link => `
                <a href="${link.url}" class="resource-link" target="_blank">
                    <i class="${link.icon}"></i> ${link.name}
                </a>
            `)
            .join('');
        
        // Показываем панель деталей (на мобильных)
        if (window.innerWidth <= 900) {
            toolDetails.style.display = 'flex';
        }
    }
    
    // Обновление хлебных крошек
    function updateBreadcrumb() {
        const categoryData = osintFramework.categories[currentCategory];
        if (categoryData && currentCategoryElement) {
            currentCategoryElement.textContent = categoryData.name;
        }
    }
    
    // ===== ПОИСК ИНСТРУМЕНТОВ =====
    function setupSearch() {
        // Поиск инструментов
    if (toolSearch) {
        toolSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm.length < 2) {
                // Если поиск очищен, показываем текущую категорию
                if (isMapView) {
                    renderFrameworkMap();
                } else {
                    renderListView();
                }
                return;
            }
            
            // Ищем инструменты во всех категориях
            const allTools = [];
            Object.values(osintFramework.categories).forEach(category => {
                category.tools.forEach(tool => {
                    if (tool.name.toLowerCase().includes(searchTerm) || 
                        tool.description.toLowerCase().includes(searchTerm)) {
                        allTools.push({
                            ...tool,
                            category: category.name,
                            categoryColor: category.color,
                            categoryIcon: category.icon
                        });
                    }
                });
            });
            
            // Обновляем отображение с результатами поиска
            if (isMapView) {
                renderSearchResults(allTools);
            } else {
                renderSearchResultsList(allTools);
            }
        });
    }
    }
    
    // Рендер результатов поиска
    function renderSearchResults(tools) {
        const mapContainer = frameworkMap.querySelector('.map-container');
        mapContainer.innerHTML = '';
        
        if (tools.length === 0) {
            mapContainer.innerHTML = `
                <div class="no-results">
                    <div class="node-icon">🔍</div>
                    <h3 class="node-title">Ничего не найдено</h3>
                    <p class="node-desc">Попробуйте другой запрос</p>
                </div>
            `;
            return;
        }
        
        // Центральный узел для поиска
        const centralNode = document.createElement('div');
        centralNode.className = 'map-node central';
        centralNode.innerHTML = `
            <div class="node-content">
                <div class="node-icon">🔍</div>
                <h3 class="node-title">Результаты поиска</h3>
                <p class="node-desc">${tools.length} инструментов найдено</p>
            </div>
        `;
        
        mapContainer.appendChild(centralNode);
        
        // Располагаем инструменты по кругу
        const centerX = 50;
        const centerY = 50;
        const radius = Math.min(40, 20 + tools.length * 3);
        const angleStep = (2 * Math.PI) / tools.length;
        
        tools.forEach((tool, index) => {
            const angle = index * angleStep;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            const toolNode = document.createElement('div');
            toolNode.className = 'map-node tool-node';
            toolNode.dataset.toolId = tool.id;
            toolNode.style.left = `${x}%`;
            toolNode.style.top = `${y}%`;
            toolNode.style.borderColor = tool.categoryColor;
            toolNode.style.transform = 'translate(-50%, -50%)';
            
            toolNode.innerHTML = `
                <div class="node-content">
                    <div class="node-icon">${tool.icon}</div>
                    <h4 class="node-title">${tool.name}</h4>
                    <p class="node-desc">${tool.category}</p>
                </div>
            `;
            
            toolNode.addEventListener('click', function() {
                // Находим категорию инструмента и переключаемся на нее
                const categoryKey = Object.keys(osintFramework.categories).find(key => 
                    osintFramework.categories[key].tools.some(t => t.id === tool.id)
                );
                
                if (categoryKey) {
                    // Переключаем навигацию
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${categoryKey}`) {
                            link.classList.add('active');
                        }
                    });
                    
                    switchCategory(categoryKey);
                    setTimeout(() => selectTool(tool.id), 100);
                }
            });
            
            mapContainer.appendChild(toolNode);
        });
    }
        // Функция для отображения результатов поиска в виде списка
    function renderSearchResultsList(tools) {
        const mapContainer = frameworkMap.querySelector('.map-container');
        mapContainer.innerHTML = '';
        
        if (tools.length === 0) {
            mapContainer.innerHTML = `
                <div class="no-results">
                    <div class="node-icon">🔍</div>
                    <h3 class="node-title">Ничего не найдено</h3>
                    <p class="node-desc">Попробуйте другой запрос</p>
                </div>
            `;
            return;
        }
        
        // Заголовок поиска
        const listHeader = document.createElement('div');
        listHeader.className = 'list-header';
        listHeader.innerHTML = `
            <h3><i class="fas fa-search"></i> Результаты поиска</h3>
            <p class="list-subtitle">${tools.length} инструментов найдено</p>
        `;
        mapContainer.appendChild(listHeader);
        
        // Список найденных инструментов
        const toolsList = document.createElement('div');
        toolsList.className = 'tools-list-container';
        
        tools.forEach((tool, index) => {
            const toolItem = document.createElement('div');
            toolItem.className = 'tool-list-item';
            toolItem.dataset.toolId = tool.id;
            toolItem.style.animationDelay = `${index * 0.1}s`;
            
            toolItem.innerHTML = `
                <div class="tool-list-icon" style="background: ${tool.categoryColor}20; border-color: ${tool.categoryColor}">
                    <span class="tool-icon">${tool.icon}</span>
                </div>
                <div class="tool-list-info">
                    <div class="tool-list-header">
                        <h4 class="tool-list-name">${tool.name}</h4>
                        <span class="tool-list-category">${tool.category}</span>
                    </div>
                    <p class="tool-list-desc">${tool.description}</p>
                    <div class="tool-list-actions">
                        <button class="tool-list-select" data-tool-id="${tool.id}">
                            <i class="fas fa-info-circle"></i> Подробнее
                        </button>
                        ${tool.links.map(link => `
                            <a href="${link.url}" class="tool-list-link" target="_blank">
                                <i class="${link.icon}"></i> ${link.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Обработчик выбора инструмента
            const selectBtn = toolItem.querySelector('.tool-list-select');
            selectBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                // Находим категорию инструмента
                const categoryKey = Object.keys(osintFramework.categories).find(key => 
                    osintFramework.categories[key].tools.some(t => t.id === tool.id)
                );
                
                if (categoryKey) {
                    // Переключаем категорию
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${categoryKey}`) {
                            link.classList.add('active');
                        }
                    });
                    
                    switchCategory(categoryKey);
                    setTimeout(() => selectTool(tool.id), 100);
                    toolSearch.value = '';
                }
            });
            
            toolsList.appendChild(toolItem);
        });
        
        mapContainer.appendChild(toolsList);
    }
    // ===== ПРАКТИЧЕСКИЕ КЕЙСЫ =====
    function setupCases() {
        caseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const caseId = this.dataset.case;
                openCaseModal(caseId);
            });
        });
        
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                caseModal.style.display = 'none';
            });
        }
        
        // Закрытие модального окна по клику вне его
        caseModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }
    
    // Открытие модального окна кейса
    function openCaseModal(caseId) {
        const caseData = osintFramework.cases[caseId];
        if (!caseData) return;
        
        modalContent.innerHTML = `
            <div class="case-modal-header">
                <div class="case-difficulty ${caseData.difficulty}">${getDifficultyText(caseData.difficulty)}</div>
                <div class="case-time"><i class="far fa-clock"></i> ${caseData.time}</div>
            </div>
            
            <h3>${caseData.title}</h3>
            <p class="case-description">${caseData.description}</p>
            
            <div class="case-tools-used">
                <h4><i class="fas fa-tools"></i> Инструменты для кейса:</h4>
                <div class="tools-list">
                    ${caseData.tools.map(toolId => {
                        // Находим информацию об инструменте
                        let toolInfo = null;
                        Object.values(osintFramework.categories).forEach(category => {
                            const tool = category.tools.find(t => t.id === toolId);
                            if (tool) toolInfo = { ...tool, category: category.name };
                        });
                        
                        return toolInfo ? `
                            <div class="case-tool" data-tool-id="${toolId}">
                                <div class="tool-icon-small">${toolInfo.icon}</div>
                                <span>${toolInfo.name}</span>
                            </div>
                        ` : '';
                    }).join('')}
                </div>
            </div>
            
            <div class="case-steps">
                <h4><i class="fas fa-list-ol"></i> Шаги выполнения:</h4>
                <ol>
                    ${caseData.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="case-solution">
                <h4><i class="fas fa-lightbulb"></i> Пример решения:</h4>
                <p>${caseData.solution}</p>
            </div>
            
            <div class="case-actions">
                <button class="cyber-button" id="startCase">
                    <i class="fas fa-play"></i> Начать выполнение
                </button>
                <button class="cyber-button secondary" id="saveCase">
                    <i class="far fa-save"></i> Сохранить кейс
                </button>
            </div>
        `;
        
        // Добавляем обработчики для инструментов в кейсе
        modalContent.querySelectorAll('.case-tool').forEach(toolElement => {
            toolElement.addEventListener('click', function() {
                const toolId = this.dataset.toolId;
                
                // Находим категорию инструмента
                let categoryKey = null;
                Object.keys(osintFramework.categories).forEach(key => {
                    const category = osintFramework.categories[key];
                    if (category.tools.some(t => t.id === toolId)) {
                        categoryKey = key;
                    }
                });
                
                if (categoryKey) {
                    // Закрываем модальное окно
                    caseModal.style.display = 'none';
                    
                    // Переключаем категорию и выбираем инструмент
                    setTimeout(() => {
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${categoryKey}`) {
                                link.classList.add('active');
                            }
                        });
                        
                        switchCategory(categoryKey);
                        setTimeout(() => selectTool(toolId), 100);
                    }, 300);
                }
            });
        });
        
        // Обработчики кнопок в модальном окне
        setTimeout(() => {
            document.getElementById('startCase')?.addEventListener('click', function() {
                alert('Кейс начат! Откройте инструменты и приступайте к выполнению.');
                caseModal.style.display = 'none';
            });
            
            document.getElementById('saveCase')?.addEventListener('click', function() {
                alert('Кейс сохранен в вашем профиле.');
            });
        }, 100);
        
        caseModal.style.display = 'flex';
    }
    
    function getDifficultyText(difficulty) {
        const difficulties = {
            beginner: 'ЛЕГКИЙ',
            medium: 'СРЕДНИЙ',
            hard: 'СЛОЖНЫЙ'
        };
        return difficulties[difficulty] || difficulty.toUpperCase();
    }
    
    // ===== ЭКСПОРТ КАРТЫ =====
    function setupExport() {
        if (!exportBtn) return;
        
        exportBtn.addEventListener('click', function() {
            const exportData = {
                timestamp: new Date().toISOString(),
                project: "SIL2NT H1LL OSINT Framework",
                categories: Object.keys(osintFramework.categories).length,
                tools: Object.values(osintFramework.categories).reduce((sum, cat) => sum + cat.tools.length, 0),
                selectedCategory: currentCategory,
                selectedTool: selectedTool?.name || null,
                frameworkVersion: "1.0"
            };
            
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `silent-hill-osint-export-${new Date().getTime()}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            // Визуальная обратная связь
            const originalText = exportBtn.innerHTML;
            exportBtn.innerHTML = '<i class="fas fa-check"></i> Экспортировано!';
            exportBtn.style.background = 'rgba(57, 255, 20, 0.2)';
            exportBtn.style.borderColor = 'var(--neon-green)';
            
            setTimeout(() => {
                exportBtn.innerHTML = originalText;
                exportBtn.style.background = '';
                exportBtn.style.borderColor = '';
            }, 2000);
        });
    }
    
    // ===== НАСТРОЙКА ВСЕХ ОБРАБОТЧИКОВ СОБЫТИЙ =====
    function setupEventListeners() {
        // Закрытие деталей инструмента
        if (closeDetails) {
            closeDetails.addEventListener('click', function() {
                toolDetails.style.display = 'none';
                selectedTool = null;
                
                // Сбрасываем выделение на карте
                document.querySelectorAll('.tool-node').forEach(node => {
                    node.classList.remove('selected');
                    node.style.boxShadow = 'none';
                    node.style.transform = 'translate(-50%, -50%) scale(1)';
                });
            });
        }
        
        // Переключение вида (карта/список)
        if (toggleView) {
            toggleView.addEventListener('click', function() {
                isMapView = !isMapView;
                
                const mapContainer = document.querySelector('.framework-map');
                
                if (isMapView) {
                    this.innerHTML = '<i class="fas fa-sitemap"></i> Карта';
                    renderFrameworkMap();
                } else {
                    this.innerHTML = '<i class="fas fa-list"></i> Список';
                    renderListView();
                }
                
                // Сбрасываем выбранный инструмент при смене вида
                selectedTool = null;
                updateToolDetails();
            });
        }
        
        // Поиск
        setupSearch();
        
        // Кейсы
        setupCases();
        
        // Экспорт
        setupExport();
        
        // Адаптивность - скрытие деталей на мобильных
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900 && toolDetails.style.display === 'none' && selectedTool) {
                toolDetails.style.display = 'flex';
            }
        });
        
        // Открытие инструмента по нажатию Enter в поиске
        if (toolSearch) {
            toolSearch.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && this.value.trim().length >= 2) {
                    const searchTerm = this.value.toLowerCase().trim();
                    
                    // Ищем первый подходящий инструмент
                    let foundTool = null;
                    let foundCategory = null;
                    
                    Object.entries(osintFramework.categories).forEach(([categoryKey, category]) => {
                        const tool = category.tools.find(t => 
                            t.name.toLowerCase().includes(searchTerm) || 
                            t.description.toLowerCase().includes(searchTerm)
                        );
                        
                        if (tool && !foundTool) {
                            foundTool = tool;
                            foundCategory = categoryKey;
                        }
                    });
                    
                    if (foundTool && foundCategory) {
                        // Переключаем категорию
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${foundCategory}`) {
                                link.classList.add('active');
                            }
                        });
                        
                        switchCategory(foundCategory);
                        setTimeout(() => selectTool(foundTool.id), 100);
                        this.value = '';
                    }
                }
            });
        }
    }
    
    // ===== ИНИЦИАЛИЗАЦИЯ =====
    initializeFramework();
    
    // Добавляем CSS для комментариев в коде
    const style = document.createElement('style');
    style.textContent = `
        .code-block .comment { color: #6c6c80; }
        .code-block .link { color: #00f3ff; text-decoration: underline; }
        .no-results { text-align: center; padding: 4rem; color: var(--text-secondary); }
        .connection-line { transition: width 0.5s ease; }
        .tool-node.selected { z-index: 20 !important; }
        .case-modal-header { display: flex; justify-content: space-between; margin-bottom: 1.5rem; }
        .tools-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
        .case-tool { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(139, 43, 255, 0.1); border-radius: 5px; cursor: pointer; transition: all 0.3s ease; }
        .case-tool:hover { background: rgba(139, 43, 255, 0.3); transform: translateY(-2px); }
        .tool-icon-small { font-size: 1.2rem; }
        .case-steps ol { margin-left: 1.5rem; margin-top: 1rem; }
        .case-steps li { margin-bottom: 0.8rem; color: var(--text-secondary); }
        .case-solution { background: rgba(0, 243, 255, 0.1); border: 1px solid var(--neon-blue); border-radius: 5px; padding: 1.5rem; margin-top: 1.5rem; }
        .case-actions { display: flex; gap: 1rem; margin-top: 2rem; }
        .cyber-button.secondary { background: rgba(255, 255, 255, 0.1); border-color: var(--text-secondary); }
    `;
    document.head.appendChild(style);
    
    console.log('SIL2NT H1LL OSINT Framework загружен');
    console.log(`Доступно категорий: ${Object.keys(osintFramework.categories).length}`);
    console.log(`Всего инструментов: ${Object.values(osintFramework.categories).reduce((sum, cat) => sum + cat.tools.length, 0)}`);
});