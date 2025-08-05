// // eslint.config.js
// import vue from 'eslint-plugin-vue';
// import js from '@eslint/js';
// import prettier from '@vue/eslint-config-prettier';

// export default [
//   js.configs.recommended,
//   ...vue.configs['flat/recommended'],
//   prettier,
//   {
//     files: ['**/*.vue', '**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//     },
//     rules: {
//       'vue/multi-word-component-names': 'off',
//       'vue/re': 'off',
//     },
//   },
// ];
// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,ts,vue}"],
    rules: {
      "no-console": "warn",
    },
  },
];
// eslint.config.js

// Импортируем необходимые плагины и конфигурации
// import js from "@eslint/js"; // Базовые правила ESLint
// import vue from "eslint-plugin-vue"; // Плагин для Vue
// import vueAccessibility from "eslint-plugin-vuejs-accessibility"; // Плагин доступности Vue
// import ts from "@typescript-eslint/eslint-plugin"; // Плагин для TypeScript
// import parserTs from "@typescript-eslint/parser"; // Парсер TypeScript
// import importPlugin from "eslint-plugin-import"; // Плагин для импортов
// import unicorn from "eslint-plugin-unicorn"; // Плагин Unicorn
// import prettier from "@vue/eslint-config-prettier"; // Конфиг Prettier для Vue (должен быть последним)

// // --- Настройка разрешения путей для import/eslint-import-resolver-typescript ---
// // Этот шаг обычно не явный в flat config, он полагается на существующий tsconfig.json
// // и настройки плагина eslint-import-resolver-typescript.
// // Для более сложных настроек может потребоваться кастомный processor или настройки в package.json.

// export default [
//   // 1. Базовые рекомендуемые правила JavaScript
//   js.configs.recommended,

//   // 2. Рекомендуемые правила для Vue 3 (SFC, Script Setup, Template)
//   // Используем 'flat/recommended', так как это flat конфигурация
//   ...vue.configs["flat/recommended"],

//   // 3. Рекомендуемые правила для TypeScript
//   ...ts.configs.recommended,
//   // Можно добавить 'recommended-requiring-type-checking' для более строгих проверок TS,
//   // но это требует корректной настройки tsconfig.json
//   // ...ts.configs["recommended-requiring-type-checking"],

//   // 4. Рекомендуемые правила для импортов (базовые)
//   // Используем 'recommended', т.к. flat-конфиг для import может быть не всегда доступен
//   // или специфичен. Правила импорта часто настраиваются отдельно.
//   // Если есть 'import/configs/flat', используйте его: ...importPlugin.configs.flat,
//   {
//     // Применяем правила плагина import к JS/TS файлам
//     files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
//     plugins: {
//       import: importPlugin,
//     },
//     rules: {
//       // --- Правила для Импортов (eslint-plugin-import) ---
//       "import/first": "error", // Импорты должны идти первыми
//       "import/no-duplicates": "error", // Запретить дубликаты импортов
//       "import/order": ["warn", { // Правила порядка импортов
//         groups: [
//           'builtin', // Встроенные модули (path, fs)
//           'external', // Внешние зависимости (react, lodash)
//           'internal', // Внутренние модули проекта (components, utils)
//           ['parent', 'sibling', 'index'], // Относительные пути (../, ./)
//         ],
//         'newlines-between': 'always', // Всегда пустая строка между группами
//         alphabetize: { order: 'asc', ignoreCase: true }, // Алфавитный порядок внутри групп
//       }],
//       "import/extensions": ["error", "never", { // Запрещаем расширения файлов в импортах
//         js: "never", jsx: "never", ts: "never", tsx: "never",
//       }],
//       // 'import/no-unresolved': 'error', // Обычно покрывается проверками TS и настройкой резолвера
//     },
//   },


//   // 5. Рекомендуемые правила доступности для Vue
//   ...vueAccessibility.configs["flat"],

//   // 6. Рекомендуемые правила Unicorn
//   ...unicorn.configs["flat"],

//   // 7. Конфигурация Prettier (должна быть ПОСЛЕДНЕЙ, чтобы переопределить правила форматирования ESLint)
//   prettier,

//   // 8. Общий объект конфигурации для Vue файлов (.vue) и JS/TS файлов
//   {
//     // Применяем к .vue, .js, .ts файлам
//     files: ["**/*.vue", "**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],

//     // Определение языка и парсера
//     languageOptions: {
//       // Используем парсер TypeScript для поддержки TS в <script> тегах Vue и в .ts файлах
//       parser: parserTs,
//       parserOptions: {
//         // Дополнительные опции парсера TS, если нужны
//         // Например, для поддержки specific TypeScript features
//         // experimentalDecorators: true,
//         // useDefineForClassFields: false, // Если используете декораторы Vue 2 или старые TS
//       },
//       // Определяем среду выполнения и глобальные переменные
//       ecmaVersion: "latest", // Поддержка последних стандартов ECMAScript
//       sourceType: "module",  // Позволяет использовать import/export
//       globals: {
//         // Глобальные переменные для браузера
//         window: "readonly",
//         document: "readonly",
//         navigator: "readonly",
//         // Глобальные переменные для Node.js (если проект серверный или использует Node API)
//         // process: "readonly",
//         // __dirname: "readonly",
//         // $fetch: "readonly", // Пример для Nuxt
//       },
//     },

//     // Используем процессор для обработки .vue файлов (разделяет template, script, style)
//     processor: vue.processors.vue,

//     // --- Переопределение и добавление правил ---
//     rules: {
//       // --- Базовые правила ESLint ---
//       "no-console": "warn", // Предупреждать о console.log
//       "no-debugger": "warn", // Предупреждать о debugger
//       "no-unused-vars": "off", // Отключаем базовое правило, используем TS-версию

//       // --- Правила TypeScript ---
//       "@typescript-eslint/no-unused-vars": ["warn", { // Правило TS для неиспользуемых переменных
//         args: 'after-used',
//         ignoreRestSiblings: true,
//         argsIgnorePattern: '^_', // Игнорировать аргументы, начинающиеся с _
//         varsIgnorePattern: '^_', // Игнорировать переменные, начинающиеся с _
//       }],
//       "@typescript-eslint/no-explicit-any": "warn", // Предупреждать об использовании 'any'
//       "@typescript-eslint/explicit-function-return-type": ["warn", { // Требовать типы возвращаемых значений
//         allowExpressions: true,
//         allowHigherOrderFunctions: true,
//         allowDirectlyAnnotatedFunctions: true,
//       }],
//       "@typescript-eslint/no-floating-promises": "error", // Ошибка, если Promise не обработан
//       // '@typescript-eslint/no-unsafe-argument': 'warn', // Можно добавить для большей строгости

//       // --- Правила Vue ---
//       "vue/multi-word-component-names": "off", // Отключено по вашему запросу
//       // "vue/re": "off", // <--- Эта строка была в вашем запросе, но "vue/re" не является стандартным правилом ESLint-Vue. Возможно, опечатка? Закомментировано.
//       "vue/script-setup-uses-vars": "error", // Переменные из <script setup> должны использоваться
//       "vue/no-v-html": "off", // Отключено (можно оставить 'error', если v-html нежелателен)
//       "vue/require-default-prop": "warn", // Предупреждение для пропсов без default
//       "vue/require-explicit-ref": "warn", // Рекомендация использовать .value для ref
//       "vue/attribute-hyphenation": ["error", { // Требуем kebab-case для атрибутов в шаблонах
//         ignore: [], // Здесь можно указать исключения
//       }],
//       "vue/component-api-style": ["error", ["composition"]], // Принудительное использование Composition API
//       "vue/padding-line-between-blocks": ["warn", "always"], // Пустая строка между блоками в SFC

//       // --- Правила Unicorn ---
//       "unicorn/filename-case": ["error", { // Правила именования файлов
//         cases: {
//           pascalCase: true, // Компоненты Vue
//           camelCase: true,  // JS/TS файлы, утилиты
//           kebabCase: true,  // CSS, конфиги
//         },
//       }],
//       "unicorn/prevent-abbreviations": ["warn", { // Запрет сокращений (настраиваемо)
//         replacements: {
//           props: false, // Разрешить 'props'
//           prop: false,  // Разрешить 'prop'
//           // Добавьте другие нужные исключения
//         },
//         ignore: ['prev', 'next', 'num'], // Игнорировать эти сокращения
//       }],
//       "unicorn/no-null": "off", // Отключить запрет null
//       "unicorn/no-array-reduce": "off", // Отключить запрет reduce
//       "unicorn/no-process-exit": "off", // Отключить запрет process.exit
//       "unicorn/prefer-module": "off", // Отключить требование ES Modules, если используете CommonJS
//       "unicorn/no-keyword-prefix": "off", // Отключить запрет префиксов вроде _private

//       // --- Правила Доступности ---
//       "vuejs-accessibility/label-has-for": "warn", // Предупреждение, если label не связан с элементом
//     },
//   },

//   // 9. Отдельная конфигурация для файлов *только* JS/TS (если нужно)
//   // Эта конфигурация будет применена *в дополнение* к предыдущей для файлов *.js/*.ts/*.jsx/*.tsx
//   {
//     files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
//     // Здесь можно переопределить languageOptions или rules, если они должны отличаться от .vue файлов
//     // Например, если не нужны Vue-специфичные правила или globals
//     // languageOptions: {
//     //   globals: { ... }, // Другие globals, если нужны
//     // },
//     rules: {
//        // Правила, специфичные только для JS/TS файлов
//        // Пример: "@typescript-eslint/no-var-requires": "off", // Если разрешены require в TS
//     }
//   }
// ];
// eslint.config.js

// Импортируем необходимые плагины и конфигурации
// import js from "@eslint/js"; // Базовые правила ESLint
// import vue from "eslint-plugin-vue"; // Плагин для Vue
// import vueAccessibility from "eslint-plugin-vuejs-accessibility"; // Плагин доступности Vue
// import ts from "@typescript-eslint/eslint-plugin"; // Плагин для TypeScript
// import parserTs from "@typescript-eslint/parser"; // Парсер TypeScript
// import importPlugin from "eslint-plugin-import"; // Плагин для импортов
// import unicorn from "eslint-plugin-unicorn"; // Плагин Unicorn
// import prettier from "@vue/eslint-config-prettier"; // Конфиг Prettier для Vue

// // --- Важно для поддержки путей TS ---
// // Убедитесь, что у вас установлен 'eslint-import-resolver-typescript'
// // и ваш tsconfig.json корректно настроен.
// // ESLint будет использовать его автоматически при наличии плагина import.

// export default [
//   // 1. Базовые рекомендуемые правила JavaScript
//   js.configs.recommended,

//   // 2. Рекомендуемые правила для Vue 3 (SFC, Script Setup, Template)
//   ...vue.configs["flat/recommended"],

//   // 3. Рекомендуемые правила для TypeScript
//   ...ts.configs.recommended,
//   // Можно добавить 'recommended-requiring-type-checking' для более строгих проверок TS
//   // ...ts.configs["recommended-requiring-type-checking"],

//   // 4. Правила для импортов (базовые)
//   // Применяем к JS/TS файлам
//   {
//     files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
//     plugins: {
//       import: importPlugin,
//     },
//     rules: {
//       "import/first": "error",
//       "import/no-duplicates": "error",
//       "import/order": ["warn", {
//         groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
//         'newlines-between': 'always',
//         alphabetize: { order: 'asc', ignoreCase: true },
//       }],
//       "import/extensions": ["error", "never", {
//         js: "never", jsx: "never", ts: "never", tsx: "never",
//       }],
//     },
//   },

//   // 5. Рекомендуемые правила доступности для Vue
//   ...vueAccessibility.configs["flat"],

//   // 6. Рекомендуемые правила Unicorn
//   ...unicorn.configs["flat"],

//   // 7. Конфигурация Prettier (должна быть ПОСЛЕДНЕЙ)
//   prettier,

//   // 8. Основная конфигурация для Vue и JS/TS файлов
//   {
//     files: ["**/*.vue", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
//     languageOptions: {
//       parser: parserTs,
//       parserOptions: {
//         // Настройки парсера TS (если нужны, например, для декораторов)
//         // useDefineForClassFields: false, // Например, если используете декораторы Vue 3
//       },
//       ecmaVersion: "latest",
//       sourceType: "module",
//       globals: {
//         // Глобальные переменные браузера
//         window: "readonly",
//         document: "readonly",
//         navigator: "readonly",
//         // Добавьте другие, если нужно (например, `$fetch` в Nuxt)
//       },
//     },
//     processor: vue.processors.vue, // Обработка .vue файлов
//     rules: {
//       // --- Переопределенные/добавленные правила ---
//       "no-console": "warn",
//       "no-debugger": "warn",
//       "no-unused-vars": "off", // Используем TS-версию

//       "@typescript-eslint/no-unused-vars": ["warn", {
//         args: 'after-used',
//         ignoreRestSiblings: true,
//         argsIgnorePattern: '^_',
//         varsIgnorePattern: '^_',
//       }],
//       "@typescript-eslint/no-explicit-any": "warn",
//       "@typescript-eslint/explicit-function-return-type": ["warn", {
//         allowExpressions: true,
//         allowHigherOrderFunctions: true,
//         allowDirectlyAnnotatedFunctions: true,
//       }],
//       "@typescript-eslint/no-floating-promises": "error",

//       "vue/multi-word-component-names": "off", // Отключено по запросу
//       // "vue/re": "off", // Это правило не существует, предполагаю, что была опечатка
//       "vue/script-setup-uses-vars": "error",
//       "vue/no-v-html": "off", // Отключено
//       "vue/require-default-prop": "warn",
//       "vue/require-explicit-ref": "warn",
//       "vue/attribute-hyphenation": ["error", { ignore: [] }],
//       "vue/component-api-style": ["error", ["composition"]],
//       "vue/padding-line-between-blocks": ["warn", "always"],

//       "unicorn/filename-case": ["error", {
//         cases: { pascalCase: true, camelCase: true, kebabCase: true },
//       }],
//       "unicorn/prevent-abbreviations": ["warn", {
//         replacements: { props: false, prop: false },
//         ignore: ['prev', 'next', 'num'],
//       }],
//       "unicorn/no-null": "off",
//       "unicorn/no-array-reduce": "off",
//       "unicorn/no-process-exit": "off",
//       "unicorn/prefer-module": "off",
//       "unicorn/no-keyword-prefix": "off",

//       "vuejs-accessibility/label-has-for": "warn",
//     },
//   },
// ];