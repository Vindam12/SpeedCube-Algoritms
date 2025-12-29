
// ========== НАСТРОЙКИ ДЛЯ РАЗНЫХ МЕТОДОВ ==========

// По умолчанию CLL, но будет переопределяться в каждом HTML файле
const CURRENT_METHOD = window.CURRENT_METHOD || 'CLL';

// Проверка
if (!window.CURRENT_METHOD) {
    console.warn('⚠️ window.CURRENT_METHOD не установлен! Используется CLL по умолчанию.');
}

// Конфигурация для каждого метода
const METHODS_CONFIG = {
    'CLL': {
        totalCases: 40,
        caseNames: ["Sune", "Anti-Sune", "Pi", "U", "L", "T", "H"],
        caseImgPrefixes: ["S", "AS", "Pi", "U", "L", "T", "H"],
        casesPerGroup: [6, 6, 6, 6, 6, 6, 4],
        folder: "Картинки/CLL/",
        localStorageKey: 'cllRowStates'
    },
    'EG1': {
        totalCases: 40,
        caseNames: ["Sune", "Anti-Sune", "Pi", "U", "L", "T", "H"],
        caseImgPrefixes: ["S", "AS", "Pi", "U", "L", "T", "H"],
        casesPerGroup: [6, 6, 6, 6, 6, 6, 4],
        folder: "Картинки/CLL/",
        localStorageKey: 'eg1RowStates'
    },
    'EG2': {
        totalCases: 40,
        caseNames: ["Sune", "Anti-Sune", "Pi", "U", "L", "T", "H"],
        caseImgPrefixes: ["S", "AS", "Pi", "U", "L", "T", "H"],
        casesPerGroup: [6, 6, 6, 6, 6, 6, 4],
        folder: "Картинки/CLL/",
        localStorageKey: 'eg2RowStates'
    },
    'TCLL+': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL+/",
        localStorageKey: 'tcll+RowStates'
    },
    'TCLL-': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL-/",
        localStorageKey: 'tcll-RowStates'
    },
    'TEG2+': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL+/",
        localStorageKey: 'teg2+RowStates'
    },
    'TEG2-': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL-/",
        localStorageKey: 'teg2-RowStates'
    },
    'LEG1': {
        totalCases: 40,
        caseNames: ["Sune", "Anti-Sune", "Pi", "U", "L", "T", "H"],
        caseImgPrefixes: ["S", "AS", "Pi", "U", "L", "T", "H"],
        casesPerGroup: [6, 6, 6, 6, 6, 6, 4],
        folder: "Картинки/CLL/",
        localStorageKey: 'leg1RowStates'
    },
    'Oll': {
        totalCases: 7,
        caseNames: ["0 углов", "1 угол", "2 угла"],
        caseImgPrefixes: ["0C", "1C", "2C"],
        casesPerGroup: [2, 2, 3],
        folder: "Картинки/OLL/",
        localStorageKey: 'ollRowStates'
    },
    'Pbl': {
        totalCases: 9,
        caseNames: ["Собрано", "Полоска", "Диагональ"],
        caseImgPrefixes: ["S", "B", "D"],
        casesPerGroup: [3, 3, 3],
        folder: "Картинки/PBL/",
        localStorageKey: 'pblRowStates'
    },
    'TEG1- a': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL-/",
        localStorageKey: 'teg1-aRowStates'
    },
    'TEG1+ a': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL+/",
        localStorageKey: 'teg1+aRowStates'
    },
    'TEG1- b': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL-/",
        localStorageKey: 'teg1-bRowStates'
    },
    'TEG1+ b': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL+/",
        localStorageKey: 'teg1+bRowStates'
    },
    'TEG1- c': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL-/",
        localStorageKey: 'teg1-cRowStates'
    },
    'TEG1+ c': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL+/",
        localStorageKey: 'teg1+cRowStates'
    },
    'TEG1- d': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL-/",
        localStorageKey: 'teg1-dRowStates'
    },
    'TEG1+ d': {
        totalCases: 43,
        caseNames: ["Hammer", "Spaceship", "Stollery", "Pinwheel", "Two-Face", "Turtle", "Pinwheel Poser", "Gun"],
        caseImgPrefixes: ["H", "S", "Stoll", "P", "TF", "T", "PP", "G"],
        casesPerGroup: [6, 6, 6, 3, 4, 6, 6, 6],
        folder: "Картинки/TCLL+/",
        localStorageKey: 'teg1+dRowStates'
    },
    'REG1': {
        totalCases: 40,
        caseNames: ["Sune", "Anti-Sune", "Pi", "U", "L", "T", "H"],
        caseImgPrefixes: ["S", "AS", "Pi", "U", "L", "T", "H"],
        casesPerGroup: [6, 6, 6, 6, 6, 6, 4],
        folder: "Картинки/CLL/",
        localStorageKey: 'reg1RowStates'
    },
    'FEG1': {
        totalCases: 40,
        caseNames: ["Sune", "Anti-Sune", "Pi", "U", "L", "T", "H"],
        caseImgPrefixes: ["S", "AS", "Pi", "U", "L", "T", "H"],
        casesPerGroup: [6, 6, 6, 6, 6, 6, 4],
        folder: "Картинки/CLL/",
        localStorageKey: 'feg1RowStates'
    },
};

// Получаем конфигурацию текущего метода
const config = METHODS_CONFIG[CURRENT_METHOD];
if (!config) {
    console.error(`Метод "${CURRENT_METHOD}" не найден в конфигурации`);
}

// ========== ПЕРЕМЕННЫЕ ==========

const CasesNames = config.caseNames;
const CasesNamesImgs = config.caseImgPrefixes;
const casesPerGroup = config.casesPerGroup;
const IMAGES_FOLDER = config.folder;
const LOCAL_STORAGE_KEY = config.localStorageKey;
const TOTAL_CASES = config.totalCases;

// Состояния строк
let rowStates = {};

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С СОСТОЯНИЯМИ ==========

function initRowStates() {
    const savedRowStates = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (savedRowStates) {
        rowStates = JSON.parse(savedRowStates);
    } else {
        // Инициализируем все строки как не тронутые
        for (let group = 0; group < CasesNames.length; group++) {
            const groupImgPrefix = CasesNamesImgs[group];
            const casesInThisGroup = casesPerGroup[group];
            
            for (let caseInGroup = 1; caseInGroup <= casesInThisGroup; caseInGroup++) {
                const caseKey = groupImgPrefix + caseInGroup;
                rowStates[caseKey] = 0; // 0 = не тронутая
            }
        }
        saveRowStates();
    }
}

function saveRowStates() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rowStates));
    updateCounters();
}

// ========== СЧЁТЧИКИ ==========

function updateCounters() {
    let total = 0;
    let untouched = 0;
    let learning = 0;
    let learned = 0;
    
    for (const caseKey in rowStates) {
        total++;
        switch(rowStates[caseKey]) {
            case 0: untouched++; break;
            case 1: learning++; break;
            case 2: learned++; break;
        }
    }
    
    document.getElementById('total-count').textContent = total;
    document.getElementById('untouched-count').textContent = untouched;
    document.getElementById('learning-count').textContent = learning;
    document.getElementById('learned-count').textContent = learned;
}

// ========== ВНЕШНИЙ ВИД ==========

function updateRowAppearance(rowElements, state) {
    rowElements.forEach(element => {
        element.classList.remove('row-untouched', 'row-learning', 'row-learned');
        
        switch(state) {
            case 0:
                element.classList.add('row-untouched');
                element.style.backgroundColor = '';
                break;
            case 1:
                element.classList.add('row-learning');
                element.style.backgroundColor = 'rgb(255, 204, 0)';
                break;
            case 2:
                element.classList.add('row-learned');
                element.style.backgroundColor = 'rgb(0, 160, 0)';
                break;
        }
    });
}

function changeRowState(caseKey, rowElements, event) {
    if (event) event.stopPropagation();
    
    let currentState = rowStates[caseKey] || 0;
    currentState = (currentState + 1) % 3;
    rowStates[caseKey] = currentState;
    
    updateRowAppearance(rowElements, currentState);
    saveRowStates();
}

// ========== ПАРСЕР CSV (нужно будет добавить для каждого метода) ==========

// Ваш существующий парсер CLL (оставьте как есть)
// ========== CSV ДАННЫЕ ДЛЯ ВСЕХ МЕТОДОВ ==========

// CLL
const CLL_CSV = `S,,,,,,
,R U R' U R U2 R',(U') R' F R2 F' U' R' U' R2 U R' ,F R' F' R U2 R U2 R' ,R U' R' F R' F' R ,(U2) R U' R U' R' U R' U' F R' F' ,R' F2 R U2 R U' R' F
,(U') R' U2 R U R' U R ,(U') R' F R2 F' R U2 R' U' R2 ,R U' R2 U R U F R' F' R U R',(U2) R2 U R' U' R' F R F' R',(U2) R U' R U' R' U R' U' y R U' R' ,F R' F' R U R U2' R' F R' F' R
,R U R2 U' R2 U R,(U2) R U R' U R' F R F' R U2 R',(U2) R2 U R2 F' U' F R2 U' R2,(U) F U' F' R U' R' F,R U2 R' F R U2 R' U R U' R' F ,(U) R2 U' R2 F R' F' R2 U R2
,(U') R' U2 R U2 R U R U' R',,,,(U) R' F' R2 U R' F' R' F R2 U' R',
,R' F' R U2 R' F R U2 R' F R,,,,R U R' U' R' F R F' R U R' U R U2 R',
AS,,,,,,
,R' U' R U' R' U2 R,R U2 R' F R' F' R U' R U' R' ,(U2) F' R U R' U2 R' F2 R ,(U2) R' F R F' R U R',(U) R U R2 F' R F R U' R2 F R,(U2) R U2 R' U2 R' F R F' 
,(U) R U2 R' U' R U' R' ,(U2) R' U R U' R2 F R F' R U R' U' R,(U) R' F R F' R U2' R' U' R' F R F',(U) R F R' F' R U R U' R2,F R F' U R U' R U R' U R',(U') R U' R' F R F' U' R' U' R2 U R'
,(U2) R' F' R U' R' F2 R,(U') R U' R2 U R U F R2 F' R,(U2) R' F R2 F' U' R' U' R F R' F' R,,(U2) R' F2 R F' R' F2 R U' R' F R F' ,(U') R2 U R2' F' U F R2 U' R2'
,,(U2) R' F R' F' R U R U' R2' F R F' R,(U2) R2 U' R2 F R F' R2 U R2,,(U) R U R' U y' R U' R U R' U R' ,R U R' U' R' F R F' R U2 R' U' R U' R'
,,(U2) R U' R' U R U R2 F R F' U2' R U R',(U2) F U' R' F R F' R U2 R' U' F',,R2 F R U2 R U' R' U2 F' R,
,,(U) R' F R U' R' U F2 U' F2 U' R,R' U R2 U' R2 U' R F R' F' R,,(U2) R' U' R U' R' U2 R U F R' F' R U R U' R',
Pi,,,,,,
,R U' R2 U R2 U R2 U' R ,(U') R' U' R' F R F' R U' R' U2 R  ,(U2) R' F R F' R U' R' U' R U' R',(U') R U' R U' R' U R' F R2 F',R U2 R' U' R U R' U2 R' F R F' ,(U2) R' F2 R U R' F' R U2 R U' R' F
,R' U R2 U' R2 U' R2 U R' ,(U2) R U R' U R U' B U' B' R' ,R U' R' F R' F R U R' F R,(U) F R2 U' R2 U R2 U R2 F',(U) F' R U R' U2 R' F R U' R' F2 R,(U) F R' F' R U2 R U' R' U R U2 R'
,F R U R' U' R U R' U' F' ,(U) R' U2 R U R' F R' F' R U R,(U) R' F R' U R U' R2 F2 U2 F,(U') F R' F' R U' R U R' U R' F R F',(U') F R U' R' U' R U' R' F R' F' R2 U R' F',R U' R' F R' F' R U' R U' R' F R' F' R
,(U2) F U R U' R' U R U' R' F' ,(U2) R2 U' R2 F R2 F' R2 U R2,(U) F' R U' R' F2 U2 R' F R F',(U) F R' F' R U2 R U R' F R' F' R,,R' F2 R F' U2 R U' R' U' F
,R U2 R' U R U' R' U2 R U' R',R U' R' U2 R' F R F' U2 R U R' ,(U') F' U' F R2 U2 R' U' R2 U' R2,(U) F R' U R U' R U R' U' R F',,
,R U2' R2' U' R2 U' R2' U2' R,(U2) R U' R' U2 F R' F' R U2 R U R' ,,,,
,(U') F' R U2 R' U2 R' F2 R F',R' F R U2 F' R U R' U2 R' F' R ,,,,
,,(U2) R' F R U2 R U' R' F U2 R' F' R ,,,,
U,,,,,,
,F R U R' U' F',(U') R U R2' U' R U2 R' U2' R U' R,(U') F R U R' U2 F' R U' R' F ,F R' F' R U' R U' R' U2 R U' R' ,(U) R U' R2 F R F' R U R' U' R U R',(U) R' U R' F R F' R U2 R' U R 
,(U2) F U R U' R' F' ,R2 F2 R U R U2 R2 F' R U' R,R U2 R U' R' F R' F2 U' F,(U) x R U' R U' R' U R' F' R ,(U') R U2 R' U R' F2 R F' R' F2 R,(U') R2 U R' U' R' F R2 F' U' R'
,(U) R' F' U' F U R,(U2) R U R' U' R U R'2 F R F' R' F R F',F R U' R' U' F2 U' R U R' U F,(U2) R U R' U R U' R U' R' F R' F',(U') R U R2 U R U2 R' F R2 F',(U') R2 U R' U' R2 U' y R' F2 R
,(U2) R' U' R' F R F' U R,(U) R U' R' F' R U' R' F2 U' R U R',z' U2 R' U' R2 U' R' U' R U' R' ,(U2) F' R U R' U' R' F R2 U R' U R U2' R',(U2) R2 U' R' U R' F R F' R2 U' R',(U) R F' U' R' U' R2 U R' U' R' F R
,(U') R' U' F' U F R,(U) R' U' R2 U R' U2 R U2 R' U R',R2' F2 R U R U2 R2' F R F' R' F2 R2,(U') R U R' U' R' F R2 U' R' F' R' F R,(U') R U2 R' U' R U R' U2 F' U' F,(U) R' F R2 U' R' F R' F' R U R' F' R
,(U') R F R F' U' R',(U') R' U F' R U' R' F2 U2 R,F R U' R2 F R F' R U2 R' F',(U) R2 F R F' R' F2 R U R' F R2,(U) R2' U2' R U R' U F R F' R,(U2) F' R U R' U' R' F R2 U' R' F R' F' R
,R' U' F R' F' R U R ,(U') R2 F2 R U R' F U' R U R2,(U2) R2 U2 R F' U' R2 U' R2 U' F',(U') R' F' R U R U' R2 F R F R U' R',,
,F R F' R' U2 R F R' F',F2 R2 U' R' F R' F U' F,R’ U’ F2 U’ R U R’ U F2 R,,,
,(U2) F' R' F' R U F,R2 F2 R U R' F R2 U2 R' U' R,(U2) R U' R' F R' F2 U' F U R,,,
,F' U' R' F R F,(U') F R F' R U2 R' F2 R2 U R' U R' U' F,(U') F' R' F' R U2 F R' F R F',,,
,(U') F R2 U R2 U' R2 F',R' F R F' R' F R F' R U R' U' R U R',R U R' U' R' F R U2 R U' R' U2 F',,,
,,(U2) F U' R U R2 F R F' U F',(U) F R' F' R U2 R U' R' U' F' U' F,,,
,,,F R U2 R' F R' F' R2 U R' F',,,
L,,,,,,
,F R U' R' U' R U R' F',F R' F' R U R U' R',R U2 R2 F R F' R U2 R',(U) R' U R' U2 R U' R' U R U' R2,(U') R U' R' U R U' R' F R' F' R2 U R',R' U' R U2 R' F R' F' R U' R  
,(U) F' R U R' U' R' F R,(U2) L' U' L' U L F' L F,(U) R' F2 R2 U' R' F R' F2 R,(U) R2 U' R U2 R' U2 R U' R2,R U R' U' R' F R2 F' U' R' U' R,(U') R' F' R U R' U' R' F R2 U' R' U2 R
,(U') R U R U' R' F R' F',(U') R F' U' R' U' R F,(U') R U2 R' F R' F' R2 U2 R',(U2) R2 U R' U2 R U2 R' U R2,(U') R' U2 R' U' F R2 F' U R2,R U R2 F' R U R U' R2 F' R F
,F R U' R' F R' F' R U F',(U) F' R' F R F' R U R' U' F,(U2) R' U' R U R' F' R U R' U' R' F R2,(U2) R2 U R' U' R U R' U2 R U' R,(U') R U' R' F R' F' R2 U R' U' R' F R F',(U') F R F' R U R2 U' R' F R F'
,R' F R' F' U' R U R2,,(U2) R' F2 R F' R' F2 R2 U' R',R U' R U' R U2 R' U R' U R',R U R' U' R' F R2 U' R' U R U R' F',(U2) R' F R U' R' F R F' R U R2' F' R
,,,,(U2) R U R2 U' R2 U R' U2 R U2 R2,(U') F R2 F' U' R' U' R2 U R' U' R',(U2) R U R' U R' F R F' U2 R' F R F'
,,,,R2 U2 R' U2 R U' R2 U R2 U' R',(U) R U2 R2 F2 R U R' F2 R F',R U2 R' F' R U2 R' U R' F2 R
,,,,(U2) R U R2 U' R2 U R' U2 R' U2 R2,,
T,,,,,,
, R U R' U' R' F R F' ,(U2) R' F' R U R U' R' F,(U') R U F R' F' R U2 R U2 R2,(U') R' U R' U2 R U2 R' U R2 U' R',(U2) R U R' U2 R U R' U R' F R F',(U) R' U R U2 R2 F R F' R
,(U') R' U' R U F R F',F R F' R U R' U' R' ,(U) F U' R U2 R' U' F2 R U R',(U) R' U R U2' R2' F' R U' R' F2 R2,(U') F R F' R U R' U R' U' R U' R',R U2 R' U' R2 U' R' F R' F' 
,F' U' F U R U R',F R F' U' R' U' R,(U2) R U2 R2 F R F' R U' R' U R U2 R',(U') F R' F' R F R' F' R2 U' R' U R U' R',(U') F R U R' U' R U' R' U' R U R' F',(U') R' F R U2 R2 F R U' R
,(U) R' F' R' U F U F',(U) R U2 F R F' U2 R' , R2 U2 R' U2 R' F R F' U' R',R U R' U R U2 R2 F' R U' R' F2 R,(U2) R U' x' z' R' U R' U' R U' R,(U') R' F R' F' R2 U2 R' U' R
,(U2) F' L' F L' U' L U L,R' U' R U R F' U' F,(U2) R2 U R' F R' F' R U' R U R,(U2) R' U2 F2 R U R' F U' R,(U') F U' R' U F' R' F U' R,(U) R U R2' F R F' U R U R'
,(U2) F' R' U F' U' R F R,(U) R U R' U' F' U' F,(U') L U' R' U2 F R U2 L' U B',(U2) R' U R' F U' R U F2 R2,(U) R U2 R' U R U2 R' U R' F R F',
,,(U2) F U F' U' R' F' R,(U') R U' R' U' R2 F R F' R U' R2,,(U) R U R' U' R U' R' F R F' R U R2,
,,(U') R U2 F R' F' R U R U' R' U R',R' U' R' F R F' R U' R' U R U' R' U2 R,,,
,,(U) F U' R' F R F' R U R' F',F R U' R2' U R U F R' F' R U R' F,,,
,,R' U' R F R F' R' U R,(U) F R U' R' F R F' U' R' U' R2 U R' F',,,
H,,,,,,
,R2 U2 R U2 R2,x' U2 R' F2 R2 U2 R' U2,R U R' U R U R' F R' F' R ,(U) F R2 U' R2 U' R2 U R2 F',,
,R2 U2 R' U2 R2,(U/U') (R' F R F' R U R')2,(U2) R' F' R U' R' F' R F' R U R' ,R' U2 R y R' U R' U' R U' R,,
,R U' R' U' R U' R' U R U R',(U/U') (R U' R' F R' F' R)2,R U' R' U R U R' U2 F R' F' R,(U') F R' F' R U' R U' R' U R' F R F',,
,(U') R U R' U R U' R' U R U2 R',(U/U') R2 F' U2 F2 R2 F' R2,(U') R U R2 F R F' R U R' U R U R',(U) R U2 R2 F R F' U2 R' F R F',,
,x2 R2 U2 R' F2 R2,x' U2 R U2 R2 F2 R U2 ,(U2) R U' R' F R' F' R2 U R' U R U2 R',(U') F U2 R' U2 R' U2 R U2 F',,
,,F (R U R' U')3 F',(U) R U' R' F U2 R2 F R U' R,(U') F R U R' U' R F' R U R' U' R',,
,,F (U R U' R')3 F',,(U) R U' R' F R' F R U2 R U' R' F,,
,,,,(U) R' F R F' R U' R' U2 R' F R F',,
,,,,(U) F U R2 U R2 U F U2 R2,,`;

// TCLL+
const TCLL_PLUS_CSV = `Hammer,,,,,,,
,R' F R F' R' F R F',y' R' U2 R U' F R' F',y' (U) R' U' R U' R2 F R F' R,(U2) R' F' R U2 R U R' F2,(U) R' U R U' R U' R2 F R2 F',y' (U') R' U' R' F R F' R U R' U' R,
,(U) R U2 R' U2 R2 U R2 U' R2,(U) F R' F' R U R U2 R' U R U' R',F R' F' R2 U' R' U2 R U R',y (U2) F R U R' U R' F R F2,(U2) R' U R' U2 F R F' R U’ R,(U) R U R' F R F' R U R' U R',
,y' (U) R2 U' R2 U R2 U2 R' U2 R,(U) F R' F' U' R U' R U2 R,R U2 F R F' U R' U R U' R',R U R' F R' F' R U F R' F' R ,(U) R' F' R U2 R U' R2 F2 R F2,(U) R U R' F R U R' y' R U' R',
,,(U) R' F R U' R2 U R2 U' R2 F,F2 R' F2 R2 U' R' U2 F,,y F' L' U' L U L F L2' U' L,y' (U2) R' U' F R' F' R2 U R' U' R,
,,,F R' F' R' U R2 U' R2,,(U) R2 U' R2 U2 R U R' F R2 F',(U') R U' R' U2 R' F R F' R U2 R',
,,,,,(U) F' U R' F2 R2 U R' U' R' F R ,,
,,,,,F R' F' R2 U2 R' U' F R' F' R ,,
,,,,,(U) F' U R U' R2 F2 R U' R' F R,,
Spaceship,,,,,,,
,y' (U2) R' U' R U R' U' R,(U) R' F R F' R' F R U R U' R' F',(U) R U' R' U R2 U' R' F R' F',(U) R U' R2 F R U R U' R' F',(U) R U2' R' U R' F R F' R U' R',(U2) R U' R' F R F' R U R2 U' R U' R',
,y' R U2 R' U2 R2 U' R,(U) y F R U' R' U' R U' R' U F' ,y' (U') R U2 R' F R F' R' U2 R',(U) R U' R' U2 R U' R' U' R' F R F',y (U) F2 R' F R U2 R U' R',(U2) R' U' R U' R' F R F' R' F R' F',
,(U2) R2 U R' U R' U2 R' U R',,,y R U R' U' R' F R2 U2 R' U F' ,,(U2) R' F2 R U' R' F2 R2 U R' F2,
,,,,y (U') R U' R' F U' R' F2 R2 U' R' F ,,(U) R' F' R U2 R' F' R2 U R' F2,
,,,,,,y (U2) R' F' R U F' R U2 R' U R U2 R' ,
Stollery,,,,,,,
,R U R' U F' R U' R' F2,(U2) R' F R U' F' R U2 R' F2,(U) F R' F' R U2 R U R2 F R F',R U R' F R' F' R U R U R',(U') R2 F R F' U R U' R U' R2,R' U' F R F' U R2 U' R',
,y' (U') R2 U' R2 U R' U2 R U2 R',y' (U2) R' F R2 F' R2 U' R U R',(U) R U' R' U' R U' R' U R' F R F',R U R' F R' F' U' R U R,R U' R2 F2 R F2 R' F2 R ,(U') R2 U' R' U2 R U R' U' F R F',
,(U2) R' U2 R U2 R' U R2 U' R2,y' (U2) R U' R' U F R F' R2,R U R' U F R F' R U R2,R U R' F R U R' U' R' F' R,y' (U') R' U2 R U R' U' R' F R F' R,y' F' U F U' R2 U' R2 U R' ,
,(U') R U R' U R2 U2 R' U' R U' R2,R U F R' F' U' R' U R U' R',y' (U2) R' U' R U R2 F R F' R U2 R' U R ,y (U2) F' R U R2 F' R2 U R' U R U2 R' ,y (U) R' U' R U2 R' F2 R' F R2,(U') R' U R2 U' R2' U' F R F',
,,y' R2' F' R U R U' R' F U' R,F R' F' R2 U2 R' U' R U R',,y (U2) R' F R U R U' R' F R' F R,,
Pinwheel,,,,,,,
,y' F' R U R U2 R2 F' U R F',y' R' U' R U R' U2 F R' F' R U R,F R F' U2 R U' R2 F R2 F',,,,
,y R U2 R' U2 R U2 R' F' R U R' F',R' F' U' F R2 U' R U2 R,(U2) R U' R2' y R U' R' U' R U' R',,,,
,R' U2 R U2 R' U2 R U' R U' R2,R U F R' F' R2 U' R2 U' R U2 R,y' (U) R' F2 R U' R' U2 R' F R2,,,,
,F' U R U' R2 F2 R y' R U R',R F R F' R2' U2 R U2 R,F U F2 R' F R2 U' R' F', ,,,
,F' U R U' R' U R' U' F2 U R,R' F R2 U' R' U R U' R' F R U R' F',y (U2) R2 U R' F R F' U2 R U' R2,,,,
Two-Face,,,,,,,
,y' (U/U') R2 U' R2 U R' U R U' R',y' (U) R' U2 R' F R F' R,R U' R' U F' R' F' R F,(U) R U R' U2 R' F R F' U R U2 R',,,
,(U/U') R U R' U' R2 U R2 U' R2,R' F2 R U' R U R' F2,y' R' F' U' F R U R' U' R,(U') R' U R F R' F' R U' R2,,,
,,,,(U') R' U R U' R U' F R F' R,,,
,,,,,,,
,,,,,,,
Turtle,,,,,,,
,R U' R' U R U' R',y R U' R' F2 R U R' F' R' F R,(U) F R' F' R U' R' F R F' R U' R',(U2) y' R' U' R U' F R2 F',(U2) R' F R F' U2 R U2 R',(U2) R U R2 F R F' U2 R U' R',
,y' R' U R' U2 R' U R' U R2,(U) F' R' F R2 U' R' F2 R U R',R' F R2 U R' F' R U' R' F',(U2) R' U R' F' U F U' R U2 R U2 R',R U F R F' U R',y' (U') R' U R U2 R' F R' F' R2,
,(U) R U' R' U R U R' U' R U' R',(U') R U R' F' R2 F' R2 F R2,R' F R F' R' U2 R' U2 R,,y' (U') R' U' R U2 F R' F',(U2) R' U F R F' R2 U2 R,
,,y' (U2) R' U2 R U R' F R' F' R2 U R' U' R,y (U') R U R' F' R U R2 F' R2 U R' ,,y' F R U R U' R F',(U2) F' R U2 R' F2 U2 R' F R,
,,y (U2) F U2 R U' R2 F R F2,,,y' F U' R' U R U R2 F',R U' R2' F R2 U' R' U' R U R' F',
,,y R' F' R U F' R U R2 F R F' R U R',,,y F U R U R' U F',,
,,(U') R' U2 F2 R U R U' R2 F U' F',,,,,
Pinwheel Poser,,,,,,,
,(U') R2 F R2 F' R' U' F R F',(U') R' F R2 F' R U R' U2 R',R U R' U2 R' F R F' R U' R',y (U2) F' R U R2 F' R,R U' R2 F R F',(U2) F' U R' F2 R F,
,y R U R' U' R U2 R' F' R U R' F',(U') R' F R F' R' F R2 U R' U' F',(U') R' U2 R2 U' F R F' U2 R,(U') F2 R U R' U2 F,y F U2 R' F R F2,(U') R F R2 F' U R',
,y' (U2) R2 U R' U R U2 R' U R U' R,y (U') R' F' R U R F' U' R' U' R2 U R',(U') R U' R2 F R2 F' U' R' U' R,y' (U') R2 F R F' U2 R,,(U2) y' R' U2 R F R2 F',
,(U2) R U R' F R U R' F U' R U R' U' F',,y F' R U R' U2 R2 F R U' R,(U2) R' F R F2 U' F,,,
,y F U' R2 U' R' F R' F2,,,,,,
Gun,,,,,,,
,R U' R' U2 R U2 R',y (U') F' R' F2 R F' R' F R2 U' R',R' F R F' U R U' R',R U' R' U R U2 R' F R' F' R,(U2) R U R' U R U R2 F R F',(U) R U2 R' F R F' R U R2,
,(U) R U2 R' F' R U' R' F2,(U2) R' F' R2 U R' F' R U2 R' F',(U) R U' R' F' U' F,y (U) F' R U R2 F' R2 U R' U' R' F R F' ,(U2) R' F' R2 U' R2 F R U' F',(U2) R F' U F R' U2 R',
,R U' R' U' R U' R' U2 R U' R',(U) F R' F' R2 U R' F R' F' R2 U R',y R' F' R U F' R U R' ,,y' R2' F R F' R U R' U R,y (U) F2 R' F R U' R U2 R' ,
,y' R' U R' U' R2 U R2,(U') F' U R U2 R' F U2 R' F R,,,(U2) R U' R' F R F' R U R' U2 R',y (U2) F R' F R F' U2 F',
,R2 U R2 U' R' U R',,,,(U2) R U' R2 F R2 U R' U' F',,
,R2 U' R2 U2 R2 U R' U R',,,,,,`;

// TCLL-
const TCLL_MINUS_CSV = `Hammer,,,,,,,
,(U') x U R' U' R U R' U' R x',y' (U') F R2 F' U R' U R,(U2) R U R' U2 F R' F' R2 U' R',(U') R U R' F R' F' R U' R U2 R',R' U2 R' U2 R U' R' F R F',R U' R U' R' F R' F' R U' R', 
,(U') F R' F' R F R' F' R,(U') R U2 R' y' U R' U R,R2 U' R' U2 R' U2 F R' F',(U) F R F' U2 F' U' F R2,(U') R' F R F' R2 U R2 U' R2,y' (U') R' U R U' R2 F R F' U R,
,,y (U2) F' L F L' U' R' F2 R U' R' F R,y' R2' F R F' R U2 R' U' R,,(U') F R U R' U' R' F' R2 U R',y' (U2) R2 F R F' R U R' U' R' F R F' R,
,,,(U') R' F R y' R U' R2 U R2,,y (U2) F U' R U2 R2 F' R U R U' R' ,(U) R U2 R2 F R F' U2 R U R',
,,,,,,,
Spaceship,,,,,,,
,R U R' U' R U R',y F U' R U R' U R U R' F',(U') R U R' F R' F' R U R' F R F',(U') R' F R F' U R U2 R2 F R F',y' (U) R' U R U R' F R' F' R U' R, y (U') R' F U' R' F R2 U' R' U2 R,
,,(U2) F R U R' U' R' F' R F R' F' R,(U') R' U2 R U2 R F R' F' R,y (U) R' F R2 U' R' U' R' F R F,(U) F2 R U' R' U2 R' F R,R U R' U' F R' F2 R U' R' F2 R,
,,y F U' R U R' U' F' R' F R,(U') F R U R' F R U' R2 F' R,y' (U) R2 U' R2 U R2 U2 F R2 F',y' (U) R2 U' R U R2 U' F R F',y' (U') R' F R' F' R U F R' F' R U R,
,,(U) R U2 R2 F R F' R U' R' U' R U R',(U2) R U R' U' F R' F R U R' F R,,(U') R' F R F' U' R' F R F' R U' R' ,R U R' U R2 U' R' F R' F' R U R',
,,(U) R2 U' R' U2 R' F R U R' U' R F',R U R' U R U' R' U' F R' F' R,,y (U') F2 R' F' R U' R U' R' F',,
,,R U' R' U F R F' R U R' U R',,,,,
,,(U2) R U R' U R' F R F' U2 R U R',,,,,
Stollery,,,,,,,
,(U) R2 U R2 U' R U2 R' U2 R,y' R2 F R' F' U' R U R',F R' F' U R2 U R2' U' R,(U2) R U' R' U' R' F R F' R U' R',y' R2 F' R U2 R U2 R' F R ,(U2) R U' R' U R U2 R2 F R F',
,y' (U2) R U2 R' U2 R U' R2 U R2,F2 R U2 R' F U R' F' R,(U2) R F' R U R' U' R' F R U R',R' F R U R U' R' F' R U' R',R2 U R' U R' U' F R' F' R2,y F' R' F2 R2 U' R' U R' F' R,
,(U2) F2 R U R' F U' R U' R',y' R' U F' R U R' U' R' F R2,,,(U2) R' F2 R F2 R' F2 R2 U R',(U) R2 U' R' F R' F' U' R U' R' ,
,(U) R2 U R' U R U2 R2 U' R U' R',(U2) R U R' U2 R' U' F R F' U R,,,y' R' F R' F' R U R U' R' U2 R ,(U') F R' F' R U' R U' R' U R U R' ,
Pinwheel,,,,,,,
,R2 U R' U R' U2 R U2 R' U2 R,R' U2 R' U2 R2 F R' F' R',y' R2 F' R U2 R U R' F2 R,,,,
,F U' F' R U' R2 F2 R U' F ,y' R' U' R' F R F' U2 R U' R' U R,R U' F R2 U' F R F2 R',,,,
,F R' U2 R2 U F R2 U R2 U2 R',R U R' U2 R' U' R F' U F R,(U2) F R' F' R2 U R2 U2 R U R' U R,,,,
,F' R U2 R2 F2 R U R' F' R F',R' U2 R' U R2 F' U F R,R U' F R2 U' F L U2 L',,,,
,y F R U' R' F R U2 R' U2 R U2 R' ,R U R' U' R U R2 U' F R' F' R U R,,,,,
,F R U2' R' F' U' R U R' U' F,,,,,,
Two-Face,,,,,,,
,R2 U R' U R U2 R' U2 R',(U2) R2 U' R' F R' F' R U2 R',(U/U') F' R' F R F U' R U R',(U) R' F R F' R U2 R' U' R U R',,,
,R2 U R2 U' R2 U R U' R',y (U') R U2 R' U R' F' R F2,y (U/U') R' F R U' F R U R' F',(U2) F' U' F R2 U' R2 U' R2 U R2,,,
,,y2 L U2 L F´ L´ F L´,y (U/U') R' U R U' R' F' U F R,,,,
,,R2 U R2 U F' U' F U' R,,,,,
,,y (U2) F U2 F R' F' R F',,,,,
Turtle,,,,,,,
,y (U') L' U L U' L' U L,R U2 R' U R' U' F R F' U R,y' (U2) R' U' R U R' U R' F R F' R,(U) R U R' U y L' U2 L,(U') R U2 R' U2 F R' F' R,R U' R' U2 R U R2 F R F',
,y' (U') R' U R U' R' U R,y' (U) R' U R U' R2' F R F' R U' R' U2 R,(U) F R F' R U R2 U' R U R',y' (U) F R F' U R' U2 R,R U' F R' F' U' R',y' (U) R' F R' F' R2 U R' U R,
,y' (U2) R' U R2 U2 R U2 R',,R' F' R F R' F' R2 U R2 F' R,(U) R U R' U' R U2 R' U' R' F R F' ,,R2 U R2 U' R F R F',
,,,y' (U') R U2 R F R' F' R U2 R',,,,
,,,,,,,
Pinwheel Poser,,,,,,,
,y (U') R U' R' U F R U2 R' F2,R U2 R U' R' F R2 F' R,y' (U') R' U2' F R' F' R2,(U) F R' F' R2 U R',(U) R U R' F R' F' R U2 R U' R',F' R' F2 R U' F,
,(U) R2 F U' R U F2 U R',(U) F U R U' R2 F' R F R' F' R,y' (U') x' R' F R2 U' R' U,,,y (U) F U' R U2 R' F',
,(U') F R' F' U R F R2 F' R2,,y (U') R' F R2 U' R' F,,,,
,(U) R2 U' R U' R' U2 R U' R' U R',,(U') F' U2 R U' R' F2,,,,
,(U') F' U2 F2 R F' R U R2,,,,,,
Gun,,,,,,,
,(U) R U2 R' U2 R U R',(U2) F R U2 R' F R U' R2 F R,(U) R U R' U' F R' F' R,(U2) F R' F' R2 U' R' U' R U' R',y' (U') R' F R' F' R U2 R,R2 U R' F R F' R' U' R,
,(U) R U' R U R2 U' R2 ,y' (U) R' U2 F R F' R U R2 U' R,(U) R2' F R F' U' R' U R',y' (U') R' U' R U' R' F R' F' R2,F2 R U' R' U R' F2 R,R U' R' U2 F R F' R U R2,
,y (U) R' U R U2 R' U2 R ,R F2 R F2 R' F2 R U' R',,(U) R U2 R U' R' F R' F' R U R',,,
,y (U) R2 U' R2 U R U' R' ,,,,,,`;

// EG1
const EG1_CSV = `Sune,,,,,,,
,(U') F' L U2 F2 R U' ,R U R' F2 U F R U R' ,(U2) F R' F' R U R' F' R2 U R' ,F' U R U' R' U F R U R' ,(U) R U' R' U R U' R' U F R U' R',R' F R2 U' R' U R U' R' F ,
,(U2) R U R' U F R U' R2 F' R ,(U) F R' F' R F R U' R' U R' F' R,(U') R' F R U2 R U' R2 F2 R F',(U') R U' R' F U' R' F R2 U R' F',(U') R2' F U' R U' R U' B2,,
,y' (U') R' F R2 F' R2 U2 R,(U2) F R2 U' R2 F U' F2 U' R,,(U) F' R' F R2 U R' U' F R' F' R,(U) R U' R' U R U' R' U' R' F' R F,,
,(U') F' R B2 U2 R F' (z'),(U2) F' R' F R U' R U R' U' F R' F' R,,(U2) F U' R U2 R' F2 R' F R,(U') R' F' R F U R' F' R U R' F' R,,
,(U) R U' R2 F' R F U R' F R,(U2) R2 U' R2 F R2 U' R2 U' F2 U' R,,R U R' F' U R U2 R' U2 R U R',(U2) R U2 R' U R' F' R F R' F R,,
,,(U2) R2 U R2 F' R2 U R2 U' F2 U' R,,,R U R' F R U' R' U R' F2 R,,
,,(U2) x R U' R U x' R' U2 R U' R2 F R2,,,,,
Anti-Sune,,,,,,, 
,(U') B U' R2 F2 U' F ,(U) R U' R' F' U' F2 R U' R' ,F' R U R' U' R U R2 F' R ,R U' R' F' U' R U R' U' F ,(U') R U R' F' U' R U R' U' R U R',(U2) R U' R2 F R U' R' F R F' ,
,(U) R' F R2 U R' F' U' R U' R' ,R' F R U' R U R' F' R' F R F',(U2) F U R U' R' U' R U2 R' F' R U R' F',(U') R' F R F' U R U' R2 F' R F,(U) F' R' F R U R U R' U' R U R',(U) F R' F2 R2 U R' U2 R' F' R,
,R' F' R U' F' R' F R2 U R' ,R U' F2 R U2 R U' B/F,(U') R2 U F' R F' U R2 U R2,(U) F R U' R2' F' R U F' R U R',(U2) R U F' R U R2 U' R U R',,
,(U') F' U2 F2 R U2 R' F,F R U' R' U R' F' R U F' R U R',,(U') R U R' F R U' R' U2 R' F R,R' F2 R U' R U R' F' R U' R',,
,,,,,,,
Pi,,,,,,,
,(U2) F2 R U R' U2 R U R' U' F ,(U') R U' R2 F R2 U' R',(U') F R' F U' F2 R U R ,(U') R U' R' U R U' R' F R U' R',(U) F U' R U2 R' F' R U R' F',F R U' R' F R U2 R' U F' ,
,(U2) R2 B2 R' U R' U' R U2 R U' R2,(U') R U R2 F' R2 U R' ,,(U') R' F R U' R' F R F' R' F R ,(U') R U R' U R U' R2' F' R F R' F' R,(U') R' F R F' R' F R2 U R' U' R U' R',
,y2 (U) R U' R2 F R2 U' R B2 R2,(U') R' F R2 U' R2 F R,,(U') F' R U R' U' R U R' F' R U R',R U' R2 F R U R U' R' U' R' F R F' ,(U') R' F' R U' R' F R2 U R' F' R U R',
,(U) F U' R' F R U' F2 R U R',(U') R' F' R2 U R2 F' R,,(U') F R' F' R U R' F' R F R' F' R,F R U' R' U' F' R U R2' F' R,(U') F R' F' R U R U R' U' R' F' R2 U R',
,,,,,(U2) F' R' F R F' R' F2 R U' F,(U2) F' R' F R U F R' F' R2 U R',
,,,,,,(U) F' U R' F2 R F R' F' R F,
,,,,,,R F' R U' R' F R2 U2 R' U' R',
,,,,,,(U2) R' U2 R U2 F2 U' F2 R U R,
,,,,,,R U R' F' U' F R' F' R2 U R',
U,,,,,,,
,R U R' U R U' R2 F' R2 U R',(U') y R' U R' U' R U' R' U' F2 R2 ,(U) F' U2 R U2 R' U2 F ,(U2) R' F R F' R' F R2 U' R' ,(U2) R' F R F' U R U' R' F R U' R',(U') R' F R U' R' F R U' R U R' F',
,R U' R2 F R2 U R' U' R U' R',F R2 B R2' F U F2 R2,(U') R U' R2 F2 R F' U R U R',R U' R' F R U' R2 F R ,(U') R U' R' U R U' R' U' F R U' R',(U') R' F R2 U' R' y' U R U R',
,R U R2' F' R2 U' R' U' R U' R',R U R' F' U' R U R' U' F R' F' R,(U) F U2 R' F2 R U2 F',,(U') R U' R' U R U' R' U R' F' R F,(U) F' U R U2 R' F U2 F,
,B' R2 F' R2 B' U' R2,(U') x U' R' U R U' F R U R U',(U) R U R' U F R U R' U R U' R2 F2 R,,(U2) F' U' F U R' F R2 U' R',R U' R' F U' R' F R F' R' F R,
,R U R' U R U R2 F R2 U' R' ,(U2) F' R' F R U R U R' U' F R' F' R,F R U2 R' F2 R U2 R' F',,(U2) R' F R U' R U R' F' U R U' R',(U') R' F R U' R' F R U F' R' F R,
,,(U2) F' R' F R F' U F R U R',(U') R' F R2 U2 R' F U' R' F' R,,z' y (U) R U' R' U2 R U' R2 U',(U2) R U R' F' R U2 R' U2 F R' F' R,
L,,,,,,,
,R U' R' U R U' R2 F' R F ,(U) R' F R U' R' F R2 U R' F',R' U R2 U' R2 U' F R2 U' R' ,R' F R2 U R' F' R U2 R' ,(U) R U R' F' R U R' U' F R' F' R ,(U) R' U2 F R U2 R U' R2 F,
,(U) R U R' F' R U2 R' U2 R U R' ,(U2) R' F R F' R' F R U R U2 R',(U2) F' R' F R2 U R' U F' U R' F R F,R U2 R' F R U' R2 F' R,(U2) F' R' F R U' R U R' U' R U R',(U') F R U' R' U R' F' R U R' F' R,
,(U) F R U' R' F' R U R' F' R U R',x U' R' U R U R' U' R U R' U' R ,,(U) R' F2 R F' R' F R2 U R',(U) L' U L y' R U2 R U' R2,(U') F' U2 F' R U2 R' U' F,
,,(U2) F R' F' R U2 R U' R2' F' R2 U R',,(U) R U' R2 F' R F R' F2 R,R U' R2' F R U' R' F R2 F' U' R' U' R,(U) R' F' R F U' R' F' R U R' F' R ,
,,F' R' F R F R' F' R F R' F' R,,,R U R' F' U R U R' U' R U R',R' F' R U F' R' F R U' R U R',
,,R' F' R F R' F2 R U2 R' F' R ,,,y2 x (U2) U R2 U R' U2 R U R',,
,,(U') F2 R U' R' F2 R U' R' U' F,,,,,
T,,,,,,,
,(U) F R U' R2 F' R U R' F' R,(U) F' R' F R2 U R' U' R U R',(U2) R U' R2 F R U R U2 R',(U') R U' R' F' U' F R' F' R F,R' F' R2 U R' F' R U R' ,(U') R U' R' U2 F R U2 R' F ,
,R U' R2 F R2 U R' U2 R' F R F' ,(U2) R U' R' U2 R U2 R' F R U' R',R' F R2 U' R' U' R' F2 R ,(U2) R' F R F' U R U' R' U' R' F' R F,(U2) R U R2 F' R F R' F' R,(U') R' F R U2 F' R' F2 R F',
,R U R' U R U R2 F R U' R' F R F',(U') R U2 R' F R U' R' F' R U R',,R2 B2 U' R' U' R U' R' U R',R U2 R2' F R2 U' R' F' R U R',(U') R' F R2 U R' F' U2' R' F R F',
,R' F R U2 R' F2 R F' R' F R ,(U') R U R' F' U2 R U R' U' R U R',,(U') R' U F R2 U' R2 U' F U' R,,(U) R' U' R U F2 U' F2 R U R,
,,,,(U') R2 B2 U' R' U2 R' U2 R',,(U2) R U R' U F R U' R' F' R U R',
,,,,R U' R' U' R' F2 U' F R F' U R,,(U) z2 y R U' R' U R' F R F' R,
H,,,,,,,
,R' F R2 U' R2 U' F U R ,F' U R U' R2 F2 R U' F,R' U' R' F2 U F' R F' ,R U R' F' R U R' U' R U R' ,,,
,R' F R2 U' R' F R U R' F',(U/U') F' R' F R2 U2 R' F' U2 F,(U) R' F R F' U2 F R U2 R' F,(U) R' F R F' R' F R U' R' F R F',,,
,R U' R2 F R F' R' F' R F,F U' R' F R2 U2 R' U F',,(U2) R' F' R F R' F' R U R' F' R,,,
,(U/U') R U R' F R U' R' U' R U' R' F,,,,,,
,(U/U') F' R' F R F R' F' R2 U R',,,,,,
,(U/U') F R U' R' F' R U R2' F' R,,,,,,`;

// EG2
const EG2_CSV = `Sune,,,,,,
,(U') F U' R2 U' R' U2 R U' R2 F',R U R' U R U2 R B2 R2,R U' R' F R' F' R' F2 R2,(U) F R2 F' R2 F' R U' R ,R' U R' F R2 U' F R' F',R2 B2 R' U' R' F R' F' R
,(U') R' F R2 F' R U2 R' U' F2 R2 ,(U') R' U2 R U R' U R' F2 R2,(U2) R' U F U R U' R2 F R2,(U2) R' F' U R' F R2 U R' U2 R ,(U2) R' F R' F2 R U R U R' U R,(U) R' U F R U R' F' R U R' U' R
,,(U') R2 F2 R U2 R U R' U R,(U') R' U2 R U R' U2 R' F2 R F' R,F R' F' R U2 R U2 R B2 R2,F' R' U R' U2 F R' U R',R' F U R' F R2 U R' U' R
,,,,R' F R U2 R' U' F R U2 R' F R,(U2) R' U2 R U' R' F U R U R' U' R,(U) R' U R' U' F U R2 U R' U' R
,,,,,,(U2) R' U F R' F R2 U R' F' R
,,,,,,R U' R' F R2 F2 R U' R
,,,,,,F2 R F2 R U' R' F2 R F'
,,,,,,(U2) R2 F U' R U R' U' R' F
Anti-Sune,,,,,,
,(U2) R' U R U' R2 F R F' R U R' U' R' F2 R2,R' U' R U' R' U2 R' F2 R2,(U2) R' F R F' R U R B2 R2 ,R' U2 R U' R2 F' R U' F R ,(U2) F R F' U R2 F' R U' R,(U2) R2 F2 R F R F' R U R' 
,(U') R2 U R U2 R' F R2 F' R' F2 R2,,(U') F' U' R' U R' U2 F R2,(U') R' U R' F R2 F R2 F',R2 B2 R2 F' R U R' U2 R' F2 R ,
,(U2) F R2 U2 R' U R' U2 R U' F',,(U) R F R' F' R U R U' B2 R2,,R' U' R U' R' U' R' F2 R F' R,
,(U2) F U2 R U' R2 U R U2 R F',,,,(U) R' F R U' R' F' U' R U R' F2 R,
,(U2) F R U R U2 F' R' U2 F2 R,,,,,
,(U2) R2 U2 R2 F' R U R' U2 R U' F',,,,,
,(U2) R' U2 R2 U' R' U R' F R F R2,,,,,
Pi,,,,,,
,F U' R U2 R U' R' U R' F',R' U2 R2 U' R' F2 R2 F' ,(U2) R' F' U R' F R2 U2 R' U R,(U) R' F U' R U R' F2 U2 R,(U) R' U' R' F2 R2 U R' F2 R,(U) R' U2 R U' R2 F2 R F R
,F R U2 R' U2 R' U R U2 F',,R' F R U R' U' R U2 R' U' F R,,(U') R' F' R' F2 R2 U R' U2 R,(U) R' U2 R' F2 R2 U R' F R
,,,,,(U') R' F' R U' R2 F2 R U2 R,
,,,,,,
U,,,,,,
,F U' R U2 R U' R' U2 R' U' F',F R U R' U' F R2 B2,(U') R' U' R U R' F2 R U' R' U R,R2 F2 R U R U2 R2 F R F' R ,(U') R2 B2 R' U R' U' R' F R F' ,(U') R2 B2 R2 F R F' R U R' U' R'
,(U) R2 U2 R U R' U F' R U' R,R' U' F R' F' R U R' F2 R2,(U) R U R' U' R B2 R' U R U' R' ,(U2) R' U R' F' R U' R U R' F2 R,(U') R U' R' U2 R B R' U2 R U' R',(U') R' F R U2 R' U' R U2 R' F R
,R' U R' F U' R U' R U2 R2,,(U) R' F' U' R U2 R' U F R,,(U') R' F R' F' R F' R U2 R' U R,
,,,R' U' R' F2 R2 U2 R' F R,,,
,,,R' U' R U R2 F2 R2 U' R' F R,,,
,,,(U) x R U' R U' R' U R' F' R' F2 R2,,,
L,,,,,,
,R' U' R' F' R U' R U' R' F R,(U) R2 B2 R' U R U' R' F R' F',R' U' F2 R U2 R' U2 F R,(U2) R' U' R U R' F' R U R' U' R' F' R2,F R' F' R U R U' R B2 R2,(U') R U R U' R' F R' F' R2 B2 R2
,F U2 R' U R U2 R F',(U) F' R F' U' R2 F R U2 R',,R U2 R2 F R F' R U2 R B2 R2 ,,(U) F' R U R' U' R' F R' F2 R2
,R2 B2 R2 F R' F' R U R U' R' ,R' U' F R U2 R' U' R U' R' F2 R,,,,R' F' R U R' U2 R U2 R' F2 R
,F U' R U R U' R' U R F',,,,,
,(U2) F R2 U' R U R2 U F',,,,,
T,,,,,,
,F R F' R U R' U' R B2 R2 ,R U R' U' R' F R F' R2 B2 R2,(U2) R' U R' F U' R U R2 ,(U) R2 F2 R U' F R' F' R U R ,(U2) R' F2 R U' R' U R' F R U' R,(U2) R' U2 R' F2 R F2 R
,(U) R U2 F R F' U2 R B2 R2,(U2) x U' R' F R' F' R U R' U2 R2,(U) R' U R' F R2 U2 R' U' R,(U') R2 B2 R2 F R U R' U' F' ,(U) R' U R U2 R2 F R F' R' F2 R2,R' F' U R U2 R' F' U R
,,F U' R2 U' R' U R2 F',(U) R' U R U2 R2' F' R U' R,(U') R2 F2 R U' R' F R F' U R,(U') R' F R' F' R2 U2 R' U' R' F2 R2,(U2) R U2 R F2 R' U2 R'
,,R' U2 R U' R' F R' F' R U' R' F2 R2,,,R' U2 R U' R' F R' F R F' R,(U2) R' U' F R U2 R' U' F R
,,,,,,(U) R' U F' R U2 R' U F' R
,,,,,,(U') R' F U' R U2 R' F U' R
,,,,,,x R U2 R B2 R' U2 R'
H,,,,,,
,(U/U') R2 F U2 F2 R2 F' R2,R2 U2 R U2 B2 R2 ,R' U' R U2 R2 F' R U' F R,R U2 B2 R' U R U' B R' ,,
,(U/U') x' R2 U' R2 U2 F2 U R2,R2 U2 R' U2 F2 R2,(U) R' U' F R U' R U R' U2 R' F,R' U' R U' R U' R' F U2 R' U' R ,,
,,R2 F2 U2 R U2 R2,R U R' U2 R2 F U' F U' R',R' U2 F2 R U' R' U F' R,,
,,R2 F2 U2 R' U2 R2,R' U' R' F R2 U2 R' U' F R,,,`;

// TEG2+
const TEG2_PLUS_CSV = `Hammer,,,,,,
,y' (U') R' U' R' F R F' R U R' U' R' F2 R2,(U) y2 x' R2 U R' U R' F2 R F R',(U2) R' F' R U2 R U R B2,(U) y2 x' R U' R U2 R2 F R F' R',y (U2) R' F' U R' F R2 U' R' U' R,y' (U) R' U' R U' R2 F' R U' R
,R' U' R' F2 R' U R' F2,(U) R2 F U' F R' U2 R U R',(U) y' z F' U R U R' F' R2 U R',(U2) F' R U2 F' U R F',(U) F2 R2 U' F' U2 R U R' U2 F2,(U') x' R U' R U' R2 F' R U' R'
,R U' F R U2 F2 U F' U2 R,R2 U2 F R U2 F2 U2 F R2 F',R F2 R U' R2 F' U R F,(U2) F' R' U2 F U2 R2 U' R F',(U') R U' R2 U2 F2 R F' R F',x R' U R U' R' U R U R2 U2
,(U2) R' U R' U2 R' F R F R2,(U') R' F U' F R2 F' R2 U2 R' F,R' F2 R2 U' F' R U' R' F U2 F2,(U) F' U2 R2 F' R2 F' R' U2 R',R' F2 U2 R U' R U2 F' U R2,x R2 U R' U R U2 R U'
,R F' R' F2 U' F2 U' R2 U' R,,(U2) R2 F' R F' R2 U R' U2 R2,F R' F' R' U R2 U' F2 R2,(U) R2 F' R F R2 U' F' U2 R2 F2,(U') R2 U' R' U2 F2 R2 U' F'
,R' U' R' U2 F2 R U2 F2 U' R' F2,,R U' R2 U R' F R U' F R' F',y' (U2) R' F R2 U' F U R',(U') R' F' R U' F' R2 F2 U2 R,F' R2 F2 U' R U R' U' R
,(U') y F R2 U' R2 U' R U R' F',,(U) R' U R' U' R' F R U' F R',(U2) y' x R' U R2 F' R U R',y' R' U2 R U' F R' F R2 B2,
,(U) y2 x' R U' R' F R F' R U R' U' R U2 R2,,,y' (U) F R' F' R2 F U' R U R2,(U') R U' R2 F2 R' F2 U2 F R F',
,y' (U2) R' U' F R' F' R2 U R' U' R' F2 R2,,,(U) R U' R' F2 R F' R U B2,(U) F R' F' U' R U' R U2 R' F2 R2,
,(U) R2 F' U R U' R2 F' R U R2,,,(U') R U' R2 F U2 R' U' R U2 F',,
,F2 R U' R F2 R U R,,,,,
Spaceship,,,,,,
,(U) x U2 R' F U2 R' F R2 U,(U) R' U' R U R' U' R' F2 R2,y' z F' U R U R' F' R F R' F' R,(U2) x' R U' R' F' R2 U R' U F' R',y' z F' R U F' R2 U R',R2 F U2 F R' U R' U2 R
,(U') y2 x U' R2 F' R F U' R B R',(U) R2 F2 U R U' R' U2 R',(U') R2 F2 R F R F' U2 R U2 R',(U) R2 F2 U2 R' U' F2 R F R' F2,y' (U2) R' U' R U R2 F2 R F' R,(U) R U' R F2 R U2 R' U2 R
,(U) R' U' F2 R2 F' R U2 R' F,R2 F2 R' U' R2 U2 R' U2 R,(U) F U2 R2 F2 R F R F' R,(U) R2 F' R2 F' R' U2 R' U R,R' F U R' U2 F R',(U) R' U R' U F U2 R' U' R
,(U) R' U' F2 R' U R' F2 R U' R',(U) R F' R U' R2 F2 U2 F2 R,(U2) F2 R' U R' U' F U2 R U2 R',(U2) F' R2 F2 U2 R U' F R' F',R' F U R U2 F' R2 U2 R,(U') F R U' R U R2 U' F U' F
,F' U R F' U' R2 F R U' R',(U) R2 F2 R' U' R' U R U' R',F U' R U R2 U2 F',R' U' R' F U2 R' U' F2 R F',R' U R' F2 R2 F' R' F R F',x z2 R' U R2 U' R2 F R F
,(U) R' U' R2 F2 R2 F R U2 R' F,,F U' R U' F U2 R2,(U2) F' R U' R2 U' R' F2 U2 R' F R,(U2) F R' U R' U' F R2 U' R U R',(U2) F R' U2 R U' R2 F R F R'
,R U R2 U' R' F' R2 U2 R' F R2,,,,R' F U R U2 F' R2 U2 R,R' U' R' U2 R' F R U' R U R2
,F' R' U R' U' F R U R' U' R,,,,,
,R' F2 U' R' F R' F' R U2 R' F,,,,,
Stollery,,,,,,
,(U') R' U' R F' R2 U2 R' F R2,(U) F' U' R2 F2 U' R' U R' U' R,(U') F' U' R F' U' R2 F,(U2) F' R F' U' R' U' R' F2,R U R' U2 R2 F2 R U2 R U2 R,(U2) F' R' F R U R2 F' R2 F' R2
,R2 F U2 F R' U' F R F',(U2) F U2 R F' U F' R2 U' R,(U2) F' R2 F R2 F' R2 U' F,(U) R2 F U' F R U R' U' R2,R U R' U2 R F2 R' U2 R' F2,R U R' F' U' R2 F' R2 F' R2
,(U') R' U' R F' R2 U2 R' F R2,(U') F' U2 F' R2 F2 U' R U' R',R2 U F R U' R U R2 F,,F2 U2 F U2 R' U R' U2 F,(U) R2 F' R U F' R U' F' R'
,R U' F' R' F2 U' F2 R2 U' R,R2 U2 R F' R' U2 F2 R2 U' R,(U) F' R' U R2 U' R2 U' R' F2,,(U) F R2 F R2 U' R U R2 F R,R' U' F2 R2 U R' F' R F'
,y (U2) R2 F R U R U' R' F U' R,R U R' U F' R U' R B2,y z2 F R2 U' R' F R' F',,R U2 R F' R U R U' R' F' R2,R' U' R2 U' R2 F2 R F' R F'
,(U2) F' R2 U' F R' F' R U' R' F R2,(U2) R' U2 R U2 R' U R2 U' B2 R2,(U2) y' z2 R' F' R2 U R' U' R' F R ,,,F U R' U' R' F2 R2 U2 R' F R2
,(U2) R U' F' R U R' U2 R B2,(U') x U R U2 R' U2 R U' R2 U',R' F2 R2 F' U R U2 R2 F R,,,(U) z2 R U2 R U' R2 U R' U R
,R2 F U' R' U' R F R',,R F2 U' R' F U' R',,,(U20 F' R' F R U' R2 F U2 F R2
,,,,,,(U) R2 F2 R F' U2 R' U2 R U' F
,,,,,,R' U' R2 U' R2 F2 R F' R F'
Pinwheel,,,,,,
,F R' F2 R' F2 R U2 R U' R,F' U R' U R' F R' U' R2 U' R',y' (U) R' F2 R U' R' U2 R' F' R2,,,
,F R F2 R U2 R' F2 R' U R,z' U2 R' F R' U' F R U' R U',(U2) R2 U R' U' F2 R U' R2 U R,,,
,F U' R' F U' R U2 R' F U' R2,y R2 U' R' U F' U' R2 U' R' U2 R2,(U') R' U F2 R2 U R' F' R U F',,,
,F2 U2 R F' U' R2 F U' R2 U R',y R U R' F R' F' U R' F U' R2,(U') F R' U' R U R' F2 R2 U2 R,,,
,y2 x R U R U' R' F' R F' R U R',y' z U R U' R' F' R U R' F' R2 U R',(U2) R2 U R' U' F2 R2 U R U2 R',,,
,F R' F' U R U2 R' F' U R U' R,x2 R U R' U R2 F' R U R' F',(U2) R U F' U2 R U' R F',,,
,F2 R' U' R U2 R' F2 R F' U2 R2,F' R' F U2 R2 U R' U2 R U2 F',,,,
,,F' R U2 R2 F' U' R' U2 R U2 F',,,,
,,R' F' R U R' F' R U F' R2 F2 R,,,,
Two-Face,,,,,,
,(U/U') R' U R' U2 F R' F R2 F',(U) R F2 R2 U' R' F R2 U' R',(U/U') F' U' F' R2 F2 R U' R',(U) F U' F' R2' F' R2 F' R',,
,(U/U') F' R2 U2 R' U F' U2 F R' F,(U2) R U' F2 R2 U' R' F R,(U/U') R F' U F' R' U2 R',F R U2 F' U F' R2 U2 R,,
,R U F' R2 U2 R U' R U R2 F',(U) R' F2 U' R' F U2 R' U' F,(U/U') F' U2 F' R' U R' F,(U') R U R' U' R2 F2 U R2 U' R2,,
,z F' R U R2 U' R U' R2 F,(U2) x' R F' U2 R' F R F' R',(U/U') F2 R' U' R' F2 R U2 R' F,(U') F2 U' R' F R U' R2 F2 U' R2,,
,R U' R2 U2 F R' U' R U R2 F',y' (U') R' U2 R' F R F' R' F2 R2,y' (U/U')  R' U2 R' F' R U' R,F' R' U' R' U2 R' F U2 R U2 R2,,
,,(U) x' R F' R' F2 R2 U2 R' U2 R',(U/U') x' R U' R U' R' U2 R',y (U) R2 F2 R U2 R' F R F' R,,
,,(U') R' F R U' R U2 R' U' R2 F2,R2 F2 R U2 R' U2 R U' R U R',(U') R' U R' U' F U' F R2 F' R,,
,,,,(U) R' U R' F2 R2 F' U R U' R',,
Turtle,,,,,,
,(U) F' R' F R' F U2 F R2,(U) F2 R F' U F' R U' R2,(U') F' R' U' R' U2 R' F R2,(U') R U2 F' U' R2 F2 R2 F' R2,(U') R F2 R' F U' R2 F U2 R,R2 U2 R' U2 F' R F' R2' U' R2
,F' U R' F U R' U2 F R2,(U) R2 U2 R' F U' F R' F,(U') F' U R2 U' R' U' R2 F R2,(U') R' F2 R F' R2 F2 U2 R,(U') F' R' F' R2 F' U' R2 F,R2 U' F U2 F R' U' F R
,(U) F' R' F R' F R2 U2 F' R2,(U) F R U F2 R2 U' R' F R2,R' U' R2 U2 R' U F2 R F' R,y' (U') R' U R U2 R' F R' F R2,(U') R F' U R U2 R2 U F R,F2 R' U R U2 F' R U2 R2
,(U2) F' U' R' F' R' F2 U2 F R2 F',R U' R2 U' R' U R' F2 R2,(U) y' z F' R' U R2 U R2 F' R2 U R',R U' R2 U' R' U2 R' F2 R F' R,(U') R F' U R' U2 R2 U' F R,(U2) R2 U2 R U2 F' R F' R2 U' R2
,(U') R U R' F' R2 F' U2 R2 F R2,R U' R' F2 R' F' R U R2 F2,y' (U') R' U' R U2 F R' F R2 B2,F' R' U2 R' U2 R' F2 R U' R,R2 F R U' R' U R F R' F,(U') R' U F R F' U' R' F2 R2 F'
,R' U F2 R2 U2 R' F R U' F2,x R U2 R' U2 R U' R2 U' R',(U) R U R2 U2 R U' R' F2 R F' R,, y' (U') F' R U2 F U' R U2 R,(U') F' U' R U' R2 U R' U' F
,(U') R U R' F' R2 F' R2 F' R2,R' U' R' U2 R' U' F2 R2 F',,,y2 R U2 R U' F R2 U R',y (U') R' F2 U' R U2 R' F R
,y (U') R' U R U' F R U' R2 F',(U') R U' R' U R U' R B2 R2,,,(U2) R U R F' U R U' R F',(U') F' U R U' R' F R2 F' R2 F' R2
,y' (U2) F R2 U R' U2 F R' F2,(U') R2 U R U' R' U2 R B2 R2,,,R' F R2 U R' F' R U' R' F R2 B2,(U) R2 U R' U' F U' F U' R'
,z2 R U R' U' R U' R' F R2 U R' F',y2 x' R U' R' F R U' R U2 R2,,,F R' F' R U2 F' R U' R B2,x U' R' U R B' R2 U' R2 U' R2
,,y (U') R2 F2 R U' R U R' U' R,,,,R U' R2 F R U2 R' U R U2 R F'
,,R U' R' U R U' R B2 R2,,,,R' F R2 F' U' R2 F R U2 R' U' R
,,(U) R U R2 U2 R U2 R' F2 R2,,,,
,,(U) R U' R' F2 R U2 R B2 R',,,,
Pinwheel-Poser,,,,,,
,R U2 F2 R U R U2 R' F R2,R U' R2 F2 R2 F' U F',R U2 F' U F' R2,(U2) F' U R' F2 R F' R2 F2,(U') F' R U2 F' R' U' R U2 R U' F',R2 F2 R'/R3 U' R2 F R F'
,(U2) F2 U' R U R2 U R' F R2,(U) R' U R' U F2 R2 F',(U) F2 R' U R' U2 F,(U) R U' F2 R2 U2 R' F2 R,(U') F U' F R' U' F U2 R' F R,(U) R2 F2 R2 U R U' R2 F R F'
,R U' R2 F R U' F R2 F' R F',R U' F2 R U' R' F R U R,R' U2 F U2 R2 U' F' R2,(U) R U R2 F2 R' F2 U2 R,(U2) R2 F2 R2 F' U2 F R U2 R',(U2) R2 F2 R2 U2 R U' R2 F R F'
,(U') R' U' R' U2 R' F R' F R2 F',R U' B2 R2 F R F',(U) F2 R' U R U2 F' U2 R2,(U2) y' z' U' R U' R2 U R' F2 R2,R2 F' R F' R U R' U' R2 U' R2,(U') R2 F2 R2 U' R U' R2 F R F'
,F' R U' F2 R2 U' R' F R U R',(U2) R U' R2 U2 R U' R' F2 R2 F',x' R F2 U' R U' R2,(U) R U' R2 U' R2 B2 R2 U R' U2 R,(U2) y z2 R2 F2 R U2 R U R2 U',R' F' R2 U F' U2 R U' F'
,R U2 F2 R U R U2 R' F R2,R U' F2 R U' R' F R U R,y (U) R2 F' R F' U2 R,,U R2 U2 R' U R2 U' B R',R2 U R' U' F' R F' R' U' R2
,,(U') R' F' R U R2 F' R2 F' R',R F R' F R2 U' R' F R2 U R',,R' U F2 R2 F' R U' R2 F R,y (U2) F' R U R2 F' R' F2 R2
,,(U2) R U R2 U2 R' U' R' F2 R2 F',,,(U2) F' U R' F2 R2 U' R2 U R' F,y' (U') R2 F R F' U2 R' F2 R2
,,,,,(U) F U2 R2 F U' F2 R2 F',R' F' R2 U F' U2 R U' F'
,,,,,(U2) F2 R2 F U2 F R U2 R',
Gun,,,,,,
,(U) R F2 U R U2 R' F U' R',(U) R2 F2 U R2 U' R' U R',R U R2 F2 U R' F U' R,F' R' U2 F2 R F2 U2 R' U' R,R F' U' F' R2 U' F,(U') R2 F' U R U' F' R2 U2 R'
,x R B R' U2 R U2 R' U2 R U2 R2,x U2 R' U2 R' U' R U' R',(U) F' U2 R F' U R U2 R2 F,(U) R' F' R2 U' F2 R U' R' F R2,R2 F' R F' R2 U' R2,(U') R2 F' U R U R2 U2 F R
,(U) R2 F' R U2 R2 F U R2 U R',x U' R' U R' U' R2 U' R2,(U') R U R F' R2 F' R' U' R,R F R U' R2 F' R2 U R' F R2,(U) R U' F2 R' U' R' F,(U') R2 F' R2 F' R' U R' U2 R
,y (U) F R U' R2 F' R' F2 R,(U) R2 F2 R' U' R' U2 R U2 R',R' F2 R2 U' R2 U R' F U' R,R F R' F' R F' R' F' R2 U' R,y (U) F U' R2 F' R' F' R,R2 F R2 F' U' R' F2 R2 U' F'
,(U2) R' F' R2 U2 R' F2 R U' R B2,R2 F2 R' U2 R' F' R U' R' F2,(U) F' R2 F R U2 R' U2 R' F R2,(U2) y2 x' R F' R U R' U2 R U2 R2,R' F R F' U R U' R B2 R2,R' U R2 F R U2 R' U' R U' F
,,(U) R U2 R' F' R U' R B2,(U2) x' R F R' F R U' R U' R2,(U) R U2 R' F R F' R U B2 R2,R' F R F R' F' R U R2 F2,(U') x2 y' R' U' F R U' R2 F' R
,,,y (U) R2 F' R F' R U R' U R,(U') R U' R2 U R2 F' R U' F R,F' U F R2 U R2 U' F2 R2,(U') F' U R' U' R2 U' R2 U' R' F
,,,(U) F R F' R2 U2 R' U2 R' U' F2 R2,F' R2 U' R' F' R U' R' F R2,,(U') R2 F' U R U' R2 U2 R2 F R`;

// TEG2-
const TEG2_MINUS_CSV = `Hammer,,,,,,
,F2 R U' R F2 R U R,(U') R' F R F' R2 U R2 U' F2 R2,(U2) F R' U R' F U' R' F R2 F',R U2 F U' F U' R' F,F' U' R2 F2 U2 F R F' R,(U2) R2 U' R' U R U2 R2 F2 R2 F'
,(U) R2 F' R' F' R U2 R U' R,(U) R F2 R2 U2 F' R' F2 R,R2 U R2 F R' F U2 R' U2 R2,(U) R F' U2 R U' F' R,R2 F2 U2 R F U2 R' U' R' F2,F U' F U' R' U R' F R
,(U) R2 F' U R U' R2 F' R U R2,(U') R2 F U' F2 R2 F' U2 R',R2 F R2 F R2 U' F R U' R',(U2) R' U' R F R' U' F U' R2 F R,(U) R' F2 U R' F U' R2 U2 R',(U2) R2 U' R' U R' F2 R2 U2 F'
,(U2) F2 R U R' U R F' U' R2 F,y' (U2) R2 F' R U' R U2 R' F' R,R2 U R2 F R' F U2 R U2 R2,(U2) R2 F2 U2 R' U2 R' U' F R2 F' R',R' F U R' U2 R U' R U2 R2 F2,(U2) x y2 R U R' F R2 U R' U R'
,y' (U2) F R U' R' U R2 U R2 F',R U' F U' F U2 R' F2 R U' R',y' (U2) R' F' R U2 R' U F2 R,R2 F U' F U' R' U R U2 R',(U) x' R F U' R U' R2 F R U R',y R' U R' F R2 U R' U R
,y2 x' R U R U' R' F R' F' R U R U2 R2,,(U2) F' R2 U' R' U2 R U R2 U2 F,,(U) F R' U R' F R2 U' R' F R2 F',(U2) R2 U' R' U R' F2 R2 U2 F'
,y' (U2)  R' U R U' R' F R' F' R U R' F2 R2,,(U2) F' R2 U' R' U2 R U' F' U2 R2,,(U') F U R U' R2 U' F U2 R' F,(U') x U R' U' R' U2 R2 U R' U' R
,(U) y2 x' R U F' R U R2 F' R U R U2 R2,,R U F' U F' U R U' R2,,R2 F U' R U' R U2 R' U R' U' F,
,x U2 R U R B U2 B U',,,,,
Spaceship,,,,,,
,(U) R2 F U' F2 R F' U2 R',(U) F' R F' U' R2 U2 F,R2 F' R2 U R U R2 U' F,(U2) F R' F R U2 R2 F2 U' R',R2 F2 R2 F' U2 R' F2 R2 U' R' F2,(U2) F U' F U' R' U2 R U' R' F
,y' (U') F R2 U R' F' U R' U' R,R U R' U2 R' U' R U R' F2 R2,(U2) R2 F R2 U' R U R2 U' F,(U) R2 U' F U2 R' U R' U2 F2 R,(U2) F2 R U R' F' R' U R' F,(U) R' U2 R U' R F' R2 U2 F R2
,y (U) F2 R F' U2 R U' R2 F', (U2) R2 F R U' R F' U R2 F2,R2 F' R U R' F' U' R2 F' U2 R',R' U2 R2 F2 R2 F' U R' F R,R U R U' F2 R2 F' U' R' F2 R,R' U R U2 F' R U R' U2 R2 U R'
,(U) R' F R2 F2 R U' R U2 F',R U R' U' R U R B2 R2,R2 F' R U' R U R U R' U' F,y' R' U R U R2 F' R U' F R,R2 F2 U2 R U R' F U2 R2 F R,R' U R U2 F' R U R U2 R2 U' R'
,,R2 U R' U2 R2 U' R2 U F2 R2,R' F R' F2 U' R U2 R2 U R,(U2) R U2 R2 U R' U' F2 R F' R,F U2 R' U R' U2 F R2 U' R',F2 R2 U R U2 R' U F' R U R'
,,R U2 R U R' U' F2 R2,R2 F' R U2 R U R F,(U2) R' U2 R2 U' R' U' F2 R F' R,(U2) F R' U' F U2 R' F,
,,y2 x' R U R' F' R U R U2 R2,R2 F' R2 U R U R2 U' F,R2 F2 R U2 R' U R' U F R F',F2 U' R' F R' F2 R U R',
,,,R2 U R2 U' R' F2 R2 U' R' F R,(U) R' F U' R2 U' R' U2 R U' R2 F2,x' R F R' F' R2 U2 R' U R',
,,,R' F R' F2 R U R' U2 R2 U' R',,y (U2) R U' F' U R2 F' R,
,,,R' U R' U' F U2 R' U' F R F',,,
Stollery,,,,,,
,F2 R' U2 R' F U R' F' R,R' U2 R' F U' F U2 R2 F' R,F R2 F2 R2 U' R2 U' F R F' R,F R' U R U2 R' F' R2 U R2 U' R,x U R U R' U R2 B' R U' R2 U R,F' U R2 F R2 F' R2 F
,(U) F2 R U2 R' F' R2 F' R' F',(U) R U2 R' U2 R2 F' R F' U' R2,R U2 R' F U' F R2 F2 R,R U R2 U' F U' F U R' F',(U2) R U R U' F2 R' U R' F',F' U' R2 F' R2 U2 F' R2 F
,(U2) R' U R U' F' U' F' R2,(U2) F2 R' U R' F U' R U' R',(U2) R2 U R2 U' F2 R U2 R' U2 R,R2 U2 R' U2 F U' F U2 R',(U) R U R2 F R' F R2 U2 F',(U) R U F' R U' F2 R U2 F2
,F2 U' R' U2 R' U' R' F R2,(U') x R U' R2 U R U' R U' R2 U,R2 U2 R' F2 U' F2 U2 R U' R2 F,F' R' U' R F' R' U2 R' F,(U2) F' R' U2 R U2 R F' U' R2 F2,(U2) x R U2 R' U2 R U2 B R'
,F2 R2 U' R' U' R2 F R U R,(U') x R2 U R U2 R' U2 R U' R2 U,R U' F' U R U' R' U R U' R2 F,R U R2 U' F U2 R' U' F R,(U') F' U2 R U' R' U2 F U2 R2 F2,F' R2 U' R' U R' F' U' R2
,F' U R' U R F' R' U' R' F2,R F' U R U' R2 F R F' R' F,(U2) F R' F' U' R U2 R' U2 F2 R2 F',R2 U' R' U R F' R2 F R2 F' R2,R' U2 R' U2 R' F2 R2 U2 R U' R',(U') F2 R' F U' R2 U2 R' F U2 R
,y' R' U F' R U R' U' R' F' R2,(U') R' U R U' R U R2 U' F2 R2 F',,(U') x R U2 R' U R U' R' F R',R' F' R2 U' R' U R2 F' R2 F',y' (U) F R U' R U R2' F'
,R' U' R F2 R' U2 R' F,(U) R2 F2 R U2 R U' R2 U R2 U' R,,,(U2) R F' U2 F' R2 U' R' F' R,U F U2 R' U' R U2 R' F R2 U' R'
,(U2) R2 F' R U R' F R F' U R2 F,(U) F' R U2 R' F' R U' R B2 R',,,,U2 R U R' F' U' R U R B2 R'
,R U R' F' R U2 R' U' R2 B2 R',,,,,F2 R U R U' R' U2 R U R2 F
,,,,,,F' R2 U' R' U R' F' U' R2
Pinwheel,,,,,,
,R2 F2 R U2 R' U R' F U R U' F',(U/U') R' U' F U' R U' R' F2 U2 R2 F,y (U2) F' U' R' F' R U' R2 F2 R,,,
,R' U R' U2 R' F2 R F2 R F',(U/U') R' U' F U2 F2 R' F' R U' R2 F,R' F2 R' F2 U2 R U R U2 R',,,
,R U2 R' U2 R' U' F2 R' U2 R' F,F U' F R U2 R F' U2 R2 F,R' U2 F2 R F2 R U R U2 R',,,
,U' R' U R' U2 R' F2 R F2 R F',F' U' R U' F2 R U' R' F R,(U') F R' U R' U2 F U' R',,,
,R2 F2 U' F R F' U2 R U' R2 U R2,x R' U2 R B2 R2 U2 R' U R' U' R,(U) R U2 F2 R U' R' F R2 U R,,,
,F R2 F R2 U' R' F R2 U' R' F',y F' R' U R U R' U' R U R2 F' R,(U) R' F' R' F2 U R' U2 F R2 F',,,
,R' U R' U' F R U2 R' U' F R F',y' x R' F' R F' R2 U R' F' R U,R F2 R U' R' U R2 U2 R' F',,,
,R F2 R' F R' F' U' R' F2 R U R',(U/U') F' U' R U' F2 R U' R' F R,R' U2 R2 F2 R U' R' U R F',,,
,x R U2 R' U2 R U R' U' R B2 U R2,F U2 F R U R2 U' R2 U2 R' F,y (U') R2 F R U2 R U R' F2 R,,,
,F2 R2 U' R' U' R2 F R2 U' R' U2 R,R' U' R U' R2 F U' F U2 R2 F' R,R2 U' R' U R F' U R U' R2 U R',,,
,,,(U) F U' R' F R U' R2 F2 U' R,,,
,,,R' U R2 U2 R' U2 F' U2 R U' R,,,
Two-Face,,,,,,
,F2 R U' R' U R2 F2 R U2 R,(U2) x R2 B R' U2 R' U R U' R' U,R' U R' F U R' U R' U' R,F U2 R' U' F R2 U2 R' F,,
,F U' F U2 R' F R' F2 R,(U2) R' F' R U2 R U2 F' U' R2 U' F,R U R' U' R2 F' R F' U' R2,(U) R' U' F U2 R' U' F R2 U2 R',,
,F' U' R' F R2 F' U' R2 U2 F,R' F' U2 R2 U' R' U' F R2,y L' F U' F L U2 L,F' R2 U' R2 U R2 F' R' U R' F',,
,(U) F2 R U' R2 U R' F R U' R,y' (U2) R' U R U2 R2 B2 R U2 R,R U2 F R U' F U' R' F,(U2) R2 F' R U R' F R U R2 F,,
,(U2) F2 R U' R' U R2 F2 R U2 R,(U) F' U R2 F R' U' R F,R F' U2 R' U' R2 F' U' R2,(U2) R' U R' U' F2 R2 F' R U2 R',,
,(U') F2 R U' R2 U R' F R U' R,R U2 R2 F U R' U' F R2,R2 F2 U R2 U' R2 U R U' R',(U) R' F' U R' F R2 U' R2 U R',,
,R U R2 U' F2 R U2 R U2 R F',R' U2 R2 U2 F U R' U' F R2,R U' R2 U' R2 U2 R' U' F2 R2 F',(U') R' F R' U2 R U' R2 U' F2 R,,
,R U2 R2 F U' F U2 R' F R U2 R',F2 R2 U' R' U2 F2 U' R' F2 U' F,y2 x' R U2 R U R' U R',,,
,(U') y2 z F' R2 U R' U R2 U' R' F,F' R' U' R2 U' R2 U' R' U' F,y R' U R' F R U2 R,,,
,(U') F R U R2 U' F R' U2 R' F,y (U) R' F U2 R U' R' F R,(U2) R U R' F' R U R B2 R',,,
,F R2 U' R' U R F' U2 R2 U R',R' U' F2 R F' U R' F' R2 F',R U' R' U R' U2 R U2 R' F2 R2,,,
,,,(U2) R U2 R F U' F R',,,
Turtle,,,,,,
,R' U2 F U' F R' U2 R U2 R' F,F' R F' U F' R U2 R2,R' F U2 R U2 R F' R2 F2,x' R F' R' F2 R U' R U' R2,(U') F' R2 F' R F' R2 U' R,(U') F2 R' U' R' U2 R' F R
,x U' R B2 R' U' B' R2 U2 R',(U) F' U' R2 F2 U R U R2,F2 R U' R2 F R' F2 R U R,(U') R2 U R2 U' F2 R2 U2 R U2 R',(U2) R' U' R F U' F U' R2 F R,R2 U2 R' U' R2 F R' F R2
,x U' R' U R2 B U' B U' R',R2 F' R U R2 F2 U' R' F',(U) R F2 R2 U' R' F U2 R U2 R,(U') R F' U2 R U' R F' R U R',(U2) F U R' U R' U' F R2 U' R',(U2) R2 U2 R U' R2 F R' F R2
,(U2) R U R' F2 R' U R' U F,y' (U') R' U R U' R' U R' F2 R2 ,R U' F R' F' U' R B2 R2,R U' R' U2 R F' U F' R2,(U') F R' U F R U2 R U R2 F,R U2 R' U2 F' R2 F R2 F' R2 F
,R2 F U' R2 U2 F' R' U2 R' U' R2,(U2) R2 F2 R U2 R' U2 R2 U' R',,U F2 R F2 R2 U R' U2 R' F R,y x' R U' R2 F' U R' U2 R',R2 U2 R' U2 F' R F' U' R' U R'
,(U) y2 x U' R2 F' R U2 F' R U2,R2 F2 R'/R3 U R' U' R U R',,F R U' R' F' R2 U R2 U' F2 R,F' R U' R' F' U' F R2 F2 R,R U2 B R' U2 R U' R'
,R U R' F R2 F2 R U' F R F',(U2) F2 R' U R' F' R U R' F,,F' U2 R' F2 R2 U' R B2,R' F R' F U2 F R2 U' R2 U' R2,(U') R' U R' U' R' F R U' F R'
,(U) R' U' R2 F U' R U R' U2 R' F,(U) R2 F2 R U' R U R2 U R',,,,(U2) R' U R' F2 R2 F' U2 R U2 R'
,(U2) R F R' F R' U2 R' F2,(U') R' U R U2 R' U2 R2 F2 R2 F',,,,R' F' R U2 R U R B2
,(U2) R' U2 F U' F R2 F2 R F',R2 F' R U R2 F2 U' R' F',,,,
,F' R U2 R' F R F' R U F2 R,,,,,
,(U) F' U2 R' F R2 U' R B2,,,,,
,F' R' F' R2 U' F2 R U' R' F R,,,,,
Pinwheel-Poser,,,,,,
,(U2) R2 U' R' F2 R F' R2 U R' F,(U2) F U' F U' R2 F2 R,(U2) F2 R2 F R' F2 R U' F,x U' R' U2 R B' U' R2 U2,(U2) R2 F U' F U2 R',R2 F' U' F U2 R B2 R2
,R2 F U R2 U2 F2 U' F U2 R,(U2) F U' F R2 F2 R2 U R',(U2) R' F2 R U2 F2 U' R2 F2 R,F' R U' F2 R2 U' R' U' F,(U) F2 R2 F' R' F' R2 U R',y2 x' R2 U' R' F U2 R U2 R2
,(U') R' F U' R' F U2 R' F U' R2,(U') F R2 F2 U' R U' R,(U2) R2 F2 R2 F' R' F2 R U' F,y' (U) F R2 F' R' U2 R' F2 R2,R2 F' R2 U2 R2 U' F U2 R',U F R' F' R2 U R B2 R2
,R' U R2 U' F R2 U' R U R2 F2,y (U') R' F U2 R2 U' R' F,(U2) R' F2 R' F2 U2 R2 U' R',(U) z' U R2 U' R' U2 R' F2 R2,(U) x R2 U2 R2 U R' U' R2 B R',(U) F R' F' R2 U R' U' R2 F2 R2
,(U2) R2 U R' F' R F' R U' R2 F,(U) R F' R U2 R U' R' U2 R B2,y R F' U R2 F' R U2 R U R',(U') R U2 R' F R' U R' U' F R2,y' (U') R' U2 F R' F R2,(U') F2 R U' R' F2 R F' U R F'
,F R U R' U2 F U' R2 F2 R,F U' F R' U R U2 R2 F' R,(U2) R' U2 F2 R F2 R2 U' R',(U') R F R' U R' F R U' R' F R2,(U2) x' R2 U R' F U2 R',
,,,(U') R F R' F R2 U' R' F2 R F',F' R' F2 R U' F' R2 B2,(U') F' U2 R U' R B2,
,,,,(U2) F' U R2 F2 U2 F R2 F',R2 F2 R2 U' F R' F' R2 U R',
Gun,,,,,,
,F' R' F R2 F' U' R2 U F,(U) R U' R U R2 U' F2 R2,(U') R2 F2 U' R' F U2 R2 F R,R2 U R2 F R' F R2,(U) F2 R' U' R' U R' F2 R,F R' F2 U' F R U R' F2 R2
,R F' R2 F R2 U' F' R2 F,F2 R' U R' F R U2 R',R2 F U' F R' U' R U' R',R' F' R' F' R2 F' U' R2,R U R2 F' R' F2 R2 U' R,(U') F' R U' R' F U2 F' R2 B2
,R U' R2 U' F' R2 U2 R' F R2,y x R' U2 R U R' U R' U2,(U') R2 F2 U' R' F R2 F' R2 U2 R',(U) R U R' U' F R' F' R' F2 R2,(U) R' F' R U F2 U' R2 F2 R,(U) R U R' U' F R2 F2 R U' R
,(U) x R2 U2 R' U2 R U2 R' U2 R B' R',(U) x R2 U R2 U R U' R U,(U') R' U R' U' F2 R F' R2 U2 R',F2 R2 U' R' F R F' R' F' R,(U) F2 U R U' R' U' R2 F2 R,y' (U') R' F R' F' R U2 R' F2 R2
,(U2) F' U R' U' R U2 R' F R2 U' R,(U2) R U2 R U R' U R' U2 F2 R2,y' (U') R' U' R U' R' F R' F R2,R2 U R2 F R U2 R2 F' R2,(U2) x R U F' R' F R2 U R',(U) R2 U R2 U' F2 R U' R' U R
,(U') F' U R' F R2 F' U' R2 F,R U' R' U2 F' R U' R B2,x' R2 U R' F R' F' R U' R',F2 R2 U' R2 F' R' F R2,(U) R' U R' F U' F R' F' R U2 R',(U) R2 U R2 U' F2 R2 U R U' R'
,F' R' F R2 U R B2 R',,(U') R' F R' F2 U' R U' R2 U' R',,R U R2 U R2 F R U' F R',(U) R2 F2 U R' F R F' R' U' R
,,,(U2) R' U R' F U' F2 R F' U R' F,,(U) R' F' R U R2 F2 U R',F' U R U' R2 U' R2 U R' F' R2 F'
,,,(U') R F U2 R' U' F R2 U' R' F,,,
,,,R' U R' U' F U2 R' U R' U2 R,,,
,,,(U') R' F' U R U' R2 F' R U R2 F,,,`;

// LEG1
const LEG1_CSV = `Sune,,,,,,,
,(U2) R' F R2 F' R2 U2 R,(U') R U R2 F' U F2 R2 F',(U2) F R' F' R2 U2 R U' R2,(U) R2 U' R2 F' R U2 R' U2 R' F,(U2) F2 R F' U R' F U' R2,(U') R U2 R U' R2 F R2 F',
,(U2) R' F U2 R2' F R',R U' R' U R U2 R' U R2 U' R2,(U) R F R' F' R U' R' U R U' R' ,,R U2 R' U F R F' R2 U' R,(U2) R2' U' R U' F R' F' R2,
,(U2) R U' R U' R' F R' F' R2 U' R2,(U') R2 U' R2 U R' U2 R U R' U' R,,,,,
,(U2) R' F U2 R2 B U',,,,,,
,,,,,,,
Anti-Sune,,,,,,,
,(U2) x' R U' R2 U R2 B2 R',(U) R2 U R2 U' R U2 R' U' R U R',(U') F R2 F' R2 U R' U2 R',(U') F' R U2 R U2 R' F R2 U R2,F' U2 R U R' U' R' F2 R2 F' R',(U2) R2 U R' U2 R2 F R F',
,(U) R2 U R2 F R F' R U R' U R',(U) R U' R' U' F R F' R' F R F',(U2) F' U F R2 U2 R' U R2,(U') F R' F' R U2 R2 U' R2 F R2 F',(U2) R2 U R2 U2 R' F R F' R U' R',(U') R U R' U' R U R' F R F' R',
,(U2) R' U2 R2 F R2 F' R,R' U R U' R' U2 R U' R2 U R2,(U') R2 F R F' U R' U R2,, F2 R U' R2 U' R2 U' R' F R',,
,(U2) R F' R2 U2 F' R,,,,(U) F' R2 U F' R2 U' R U2 F',,
,(U) R' F R2 F' R' U R' U R,,,,R' U2 R U' F' U' F R2 U R',,
Pi,,,,,,, 
,(U2) F R F' R' F R2 F' R' U2 R,(U') R U R' U' R U2 R U' R2,(U2) R F' U R' F2 U R F,(U') R2 U R' F R F' U R',(U) R U' R' F R F' R2 U2 R,(U) R U R' U R2 U' R2 F R2 F',
,(U2) R' F' R2 F' R2 U2 F R,(U') R2 U R' U2 R' U R U' R',(U2) R F' U R2 U' R' F' U' R2 F' R',(U') R' F R' F' U R' U2 R' ,R2 U R' U R' U' R U2 R2 F R F' ,(U2) R' U2 R2 F R' F' R U R',
,(U') R F R' F' U R U' R2 F R F',(U) R2' U' R U2 R U' R' U R,(U2) F U' R' U' R' F R2 U' R2 U' F,(U) R F' U F U' R U2 R ,(U') R F R' F R U R' U2 F ,(U') R' U R F' U' F R2 U2 R',
,(U2) R2 B2 R' U' R2 F R2 U' R',(U') R U' R' U2 R2 U' R U2 R ,(U') R U R' U' R B2 R' U R' F' R2 U R',R F R' F' R U' R2 F R F' ,(U2) F R2 F' R2 U R2 U' R U' R' ,F' U' F R2 U R2 U2 R U2 R,
,,(U) R' U R U2 R2 U R' U2 R' ,(U2) R F' U2 F R U2 R' F R F',,,,
,,(U2) R' U2 R' U R2 U2 R U R' ,,,,,
,,(U2) R U2 R U' R2 U2 R' U' R ,,,,,
U,,,,,,,
,R' U R' U' R U' R' U' R2,(U2) R2 U R2 F' R2 F' R2 F R2 ,(U) R U R' F R2 F' R U' R' ,(U') R2 U R' U R' F R F' R U R2,(U') R2 U R' U2 R' F' U' F,(U) R2 U' R U2 R F R F',
,(U') R2 U' R' U' R U' R' U R',(U') R F R' F' R U' R' F' U' F,R U' F R' F' R U R U2 R2,(U') F' U' F R2 U' R' U R U' R',R F R' F' U' R U' R' U R U' R' ,(U') F R' F' U R2 U R' U R',
,R U' R U R' U R U R2 ,(U) R2 B2 R' U' R2 F R U R U2 R',R2 F R U R' U' R2 U2 R2 F,,(U') R U' R' U' F R F' U R U' R',(U2) F R F' U R2 U R' U2 R',
,R U' R' U' R2 U' R' U R U' R',F2 R U R U' R2 F U' R F',R2 U2 R' U' R' F R F' U R',,,R' U F R2 F' R U2 R,
,(U) R U2 R U2 R U R2,,(U') R' U' R B' R2' F U' F R,,,(U2) R2 F R2 F' U2 R2 U R2 U2 R',
,(U2) R' U' R U2 R2 U R' U R',,,,,,
L,,,,,,,
,R2 U R' U' F R2 F' U R',(U2) R U' R' U' R2 U' R2 F R F',R' U R' U R2 U' R U2 R',(U') R' U R' U' R U R' F R2 F' R,F' U F R U2 R U' R2,(U) R U' R U' R2 U' F R F',
,(U2) R2 F R F' R U R2 U R2,(U) R2 U R2 U F R F' R U R2,(U') R U2 R' U R2 U' R U' R,R' F U2 R2 F R U2 R U2 R2,(U2) R U' R U R' U2 F R F' R,R U' R' D' R U R2 F' R,
,(U') R U2 F R' F' R U2 R U R2,(U2) F R' F' R2 U' R' U' R2 U' R2,(U2) R2 U R2 U F' R U' R' F2,,,(U2) R' U2 R' F R2 F' U' R,
,(U) y2 F R U' R U R2 F' R U R' F',,R' U2 R U' R2 U R' U R',,,,
,(U) R U' R' U R U2 R2 F R2 F' R',,,,,,
T,,,,,,,
,(U) F R' F' R2 U R2 U R U R',(U) R U' F R2 F' U R U' R2,(U2) R U2 R' U R' U' R U2 R U R' ,(U) F R F' R' F R2 F' U R' U R,R2 U' R' F R' F' R U' R U' R2,(U') R' F R2 F' R' U2 F R F',
,R2 U R2 U R U R2 F R F',R2 U' R' U2 R' F R F' U2 R',(U2) R U2 R' U2 R U2 R U' R2,(U2) R2 U' F2 R U2 R' U2 R' F2,(U2) R U R' U' R U R2 F' U F,R2 U' R2 U' F R F' R' U' R,
,(U') R2 U' R' F R' F' U' R2 U' R2,R2 U' R2 U' R' F R' F' R2,(U2) R2 U R' U2 R' U2 R U2 R',(U2) R F' R2' U2' F R U R' F R,(U2) R' U2 R' U' R U R' F R' F',R2 U' F U2 R U2 R U2 F R,
,,R U' R' U' R' F R F' R2 U' R2,(U2) R' U R U2 R2 U R2 U' R U' R',(U') R' F R F' R F R' F' R U' R2,(U2) F2 R2 F R2 U R2 U' F2 R,(U2) R2 F R U R' F U' R U2 R2 F,
,,(U) R' U R' U' R2 U R' F R' F',,,R' U2 R' U2 F R2 F' R2 U' R,,
,,R U R' F2 R U' R2 U2 R' U' F,,,,,
,,(U) y' F R U' R F R2 U' R' U R' F',,,,,
H,,,,,,,
,x R U2 R U' R' U F' R,R2 U R' U R U' R U R' U R2 ,(U') F' R' U' F2 R U' F R',R U' F R' F' R U' R2,,,
,R F2 R F' R' F U' F,R2 U' R U' R' U R' U' R U' R2 ,F R' F' R U2 R' F' U2 F R',R U2 R U' F R F' R,,,
,,R F R' F2 U2 F R U2 R',(U') F' R' U2 F2 R2 F' R' U' F2 R2,(U2) F' U' F R2 U' R2' F R F',,,
,,,(U') R2 B2 R' U R' F' R U R' U' R U R',,,,`;

// PBL
const Pbl_CSV = `Solved,,,,,,
,R R',(U) R' F R F' R U2 R' U R U2 R',R U R U' R' F R' F' R U R' U' R' F R F'
,R2 U2 R2 U2 R2 U2,(U) F R U' R' F R F' R U R2 F',R U2 R' U2 R' F R F' R U' R' F R' F' R
,R U' R' U' R U2 R' U R U R' U2,(U) R U2 R' U' R U2 R' F R' F' R,F R' F' R U R U' R' F R F' U' R' U' R
,R2 U2 F2 R2 U2 R2 F2 U2,(U) R U R' F' R U R' U' R' F R2 U' R',F R U' R' U' R U R' F' R U R' U' R' F R F'
,R F R2 U2 R2 F R2 U2 R,(U) R U R' U' R' F R2 U' R' U' R U R' F',R F' U' R' U' R F R' F' R U R U' R' F
,F2 R2 U2 R2 F' R2 U2 R2 F,(U2) R' F R' F2 R U' R' F2 R2,R' U R' F2 R F' U R' F2 R F' R
,R U R' U R' U' R2 U' R' U R' U R U2,(U') R2 F2 R U R' F2 R F' R,R U' R' U' F2 U' R U R' U F2
,F' R' U R U2 F U R' U' R2,(U') R U' R' F R' F2 R U' R' F2 R,F' R U R' U' R' F R U2 R U R' U' R' F R F'
,,(U') R2 U' R' F R' F2 R U' R' F2,
,,F R2 U' R' F R' F' R U R' F',
Bar,,,,,,
,R2 F2 U' R2 U R2 U' R2 U R2,y2 R2 U' R2 U2 F2 U' R2,y R2 U R2 U' R2 U R2 U' R2
,y R2 U' R' U R' F2 R F' R' F2 ,R2 U' B2 U2 R2 U' R2,y2 R U' R' U' R' F2 U' R U R
,F R' F' R U2 R U R2' F R U' R' F R F',y F2 U' R2 U2' B2 U' R2',y R U' R' U R' U2 R U' R U R'
,y' R2 U R2 U' R2 U R2 U' F2 R2,y2 (U2) R' F R F' R U R2 F R2 U' R' U R U' R' F,x L' U R' F2 R F' R
,y R' U R' U' R' F R2 U' R' U' R U R' F' R2,,y' F' R F' R2 F U' R
,R U' R' U' F R2 U' R' U R' F' R,,y R U' R' U' R' F2 R U R U R'
,y2 F2 R U' R' F2 R2 U' R' F R',,R' F U' R2 U F' R
,y2 R2 B2 (U' R2 U R2)2,,R U' F U2 F' U R'
,F R2 U' R' U R' F' R F R' F',,R U' R' U' R' F2 R U R U R'
,R2 U R' U2 R' U R' F' R2 U R',,R U' R' U' R' F2 U' R U R
,R' U2 R' U R2 U2 R' F R2 U' R',,
Diag,,,,,,
,F U' R U R U' R' U R' F' R2 U' R U R2,(U2) R' U R' F2 R F' R,R2 F2 R2
,F' R U R' U' R' U2 R U' R' F R U' F R F',R' F R' F2 R U' R,R2 B2 R2
,F R' U2 R' U' R' F U2 R U' R,R U' R F2 R' U R',x R2 U2 R2 x'
,F R2 U2 R' U R U2 R2 F R F' R' F',,F' R F R F2 R' F' R' F
,(R U' R' U') F2 (U' R U R') U R2 B2,,
,R F' U R U' R2 U' R' F' U F2,,
,R U' R U R' F2 R' U' R' U F2/D R2,,`;

// OLL
const Oll_CSV = `0C,,,,,,
,R2 U2 R U2 R2,R U' R2 U R2 U R2 U' R
,R2 U2 R' U2 R2,F (R U R' U')2 F'
1C,,,,,,
,R U2 R' U' R U' R', R U R' U R U2' R'
,(U) L' U' L U' L' U2 L,(U) L' U2 L U L' U L
2C,,,,,,
,F R' F' R U R U' R',R U R' U' R' F R F',F R U R' U' F'
,F R U' R' U' R U R' F',(U2) L' U' L U L F' L' F,(U2) F' L' U' L U F
`;

// TEG1+ a
 const TEG1_PLUS_A_CSV = `Hammer,,,,,,
,F2 R U' R' U2 F,y' (U) F R2 F' U R2 U R2,(U') R U R' U' R U R2 F' R F,(U) F R U' R2 F R F U F',(U2) R' F R2 U' R' U F' R U R',(U) R U' R' U2 R U' R2 F' R2 U R'
,F U2 R' F' R F2,(U) R U2 R' U y' R2 U R2,(U') z y R B R2 F' R2 U R',y' R2 U' R' F R F' R U2 R2,(U) R U R' F R U' R' F R U' R' F' ,(U2) R' F R2 U' R2 F' R U2 R' F' R
,y' R2 F R' F' U2 R,,,,(U) z y' R U2 R2 U R2 U' R U' R',
,,,,,,
,,,,,,
Spaceship,,,,,,
,(U2) F U R' F' R2 U R' F,F R U' R2 F R2 U' R' F,(U2) F R U2 R' F R U' R' F,(U') R' F R F' U R' F' R2 U R',F' U F R U R2 F' R F,(U') F2 R U' R' F U2 F R' F' R
,(U2) R2 U' R' F U2 R' F,F R' F' R2 U R2 F' R F,,(U') R' F R U' R' F R2 U' R' U F',(U) F R' F' R F R' F' R F R U' R',
,,(U2) y' R' U' R2 U2 R' U R' U' R,,F' U R' F' R F R' F' R2 U R',,
,,,,,,
,,,,,,
Stollery,,,,,,
,(U2) F R U2 R' F U' R' F R,y' (U') R' U' R U' R2 U R' U2 R',(U') R U' R' U R' F' R F R' F' R,(U) R' F' R2 U R' F R U2 R' F',(U') R U' R' U2 F R U' R' F' R U R',(U') R2 U R2 U' R2 U2 F R U2 R' F
,,(U') R U' R2 U' R U F' R2 U R',R U' R' F R U' R' U R' F' R,F' U F R U R' F R U' R',,
,,,,,,
,,,,,,
Pinwheel,,,,,,
,F U' R' F R U' R U2 R' F',y' R' U2 R' U R' U2 R',(U') F R U' R' U' R' F R2 U' R' F,,,
,y' R2 U R2 U F R' F' R U2 R U R',,,,,
,,,,,,
,,,, ,,
,,,,,,
Two-Face,,,,,,
,(U) F R U' R2 F R2 U' R' U' R' F R F,F U R U R' F R U' R' F,(U) R U' R' U R' F' R2 U R',(U') R U R' U2 y' R2 U R2,,
,y' (U) F' R U' R' F2 R F' U' F R2,(U') R U' R' U2 R U' R2 F' R F R' F' R,,y' (U') F R F' U2 R2 U R2,,
,,,,,,
,,,,,,
,,,,,,
Turtle,,,,,,
,F R' F R2 U' R' U F,y' (U2) R2 U R' U R' U2 R U R',F R' F' R F R' F2 R F,y' (U2) R2 U R2 U' F R' F' R,y (U) R2 U R' U R' U2 F R' F' R,(U) F R U' R2 F R U' R' F R
,,,(U2) F R U' R' U' R' F R U' R' F R,y' (U') R2 U R2 U F' U2 F,(U') F R U' R' U R' F R2 U' R' F,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
Pinwheel Poser,,,,,,
,(U') R U' R' U R U R' F R U' R2 F' R,y' (U) R' U R' U' R U2 R' U2 R',(U2) y' R F R' F' R U R' U' R U R',(U) R' F' R F U' R' F R U' R' F R,R U R' U' R U R' U R' F' R F,y' (U2) R' U R' U2 R' F R' F' R2
,,,(U') F U R U R' y' R2 U R',y (U) R U R F' R2 U R' U2 R',F R U' R' U R U' R' F R U' R' F,(U') R U R2 F R U' R' F R2 U' R' F'
,,,,y' (U) R' U R2 U R' F R F' R,,
,,,,,,
Gun,,,,,,
,F R U2 R' F U2 R' F2 R,(y') R2 U R2 U' R U R',(U') R U' R' U F' R U R' U' R U R',x' U' R U' R2 F R2 F' U2 x,(U2) R' F' R F R' F R U' R' F R,y' (U') R' F R' F' R U R' U R2
,,,(U2) R U R2 F R U' R' F R U' F',(U') z' x' U2 R' F R2 U2 R' U,,(U) R' F R2 U' R' U2 F' R U R2 F R`;

// TEG1- a
 const TEG1_MINUS_A_CSV = `Hammer,,,,,,,
,F' U2 R U R' F2,y' R' F R F' U R2 U' R2,(U) R' F' R U R' F' R2 U R' F',(U') F' R' F R2 U' R' F' U' F,(U2) R U' R2 F R U' F R' F' R,(U2) R U' R2 F R2 U R' U2 R U R', 
,F2 R' F R U2 F',(U') R' F2 R U' y' R2 U' R2,,(U2) R U R' F' R' F R F' R' F R F',(U) F U' R U R2 F' R U R' F' R,(U') R' F R U2 R' F R2 U R2 F' R,
,,y' (U') F' U2 F U' R2 U' R2,,(U2) F' U R2 U F U' F2 R F2,,,
,,,,,,,
,,,,,,,
Spaceship,,,,,,,
,(U) F' U' R U R2 F' R F',(U') F' R U R2 F' R2 U R' F',(U) F' R' F2 R F' R' F R F',R U' R' U R U' R2 F R U' F,(U') F U' F' R' F' R2 U R' F',R' F R F' U2 F' R U R' F2,
,(U) x R2 F R F' U2 R U',y' (U) R U R2 U2 R U' R U R',,R U' R' F U' R U R2 F' R,(U) R U R' F' R' y R U R2 F' R,,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Stollery,,,,,,,
,(U') F' R' F2 R F' U R U' R',y' (U2) R U2 R U' R2 U R' U R,(U2) F' R U2 R' F' U2 R2 U R2 U' R2,y' (U) R2 U' R2 U' R2 F R F' R,R U' R' F U2 F' R' F R2 U R',(U2) R' F R U' R U R' F' R U R',
,,y' (U2) R U R' U R2 U' R U2 R,,(U) F R U2 R' F' R U' R2 F R,,,
,,,,,,,
,,,,,,,
Pinwheel,,,,,,,
,F R U2 R' U R' F' R U F',y' R U2 R U' R U2 R,(U) F' R' F R U R U' R2 F R F',,,,
,,,(U) F' R U R2 F' R U R U R' F',,,,
,,,,,,,
,,,,,,,
,,,,,,,
Two-Face,,,,,,,
,(U) F' R' F R2 U' R2 F R U R U' R' F',y' (U2) R2 U' R U' R' F R F' R,(U) R' F R U' R U R2 F' R,y' (U) F' U' F U2 R2 U' R2,,,
,,,R U' R2 F R U' R U R',,,,
,,,,,,,
,,,,,,,
,,,,,,,
Turtle,,,,,,,
,F' R U2 F' R U R2,y' (U2) R2 U' R U' R U2 R' U' R,F' R U R' F' R U2 R' F',y' (U) R2 U' R2 U' F R2 F',y' (U') R' F R F' U2 R U' R U' R2,(U') F' R' F R2 U' R' U R U' R' ,
,,,,y (U2) L2 U' L2 U F' R U R',,,
,,,,,,,
,,,,,,,
,,,,,,,
Pinwheel Poser,,,,,,,
,(U') R' F R2 U R' F' R U' R' U' R U R',y' (U') R U2 R U2 R' U R U' R,R' F' R U R' F' R U' R U R' F',(U') R U R' F' U R U' R' U R U' R',y' (U2) R U' R2 F R' F' U' R',(U) F R U R2 F' R U R' F' R2 U' R',
,,,,,y' (U) R U' R' U R U' R' F R F' R',,
,,,,,,,
,,,,,,,
,,,,,,,
Gun,,,,,,,
,(U2) F' R' F2 R F' U2 R U2 R',y' (U2) R2 U' R2 U R' U' R,(U') R U' R' U R U' R' F U' R U R',R U R' F' R U' R' U R U' R',(U) F' R U R' F' R U' R' U' F',y' (U') R2 U' R2 U2 F R' F',
,,,(U') R' F R U' F R' F' R U R' F' R,,,,`;

 // TEG1+ b
 const TEG1_PLUS_B_CSV = `Hammer,,,,,,
,R' U F' U' F2 R U' R',(U2) R' U' R' F R2 U2 R' F,(U2) R' F'R' F2 R2 U R' U' R U R',(U) R' U F U' R' F R2 U R' F',(U2) F R U2 F' U R2 F' R,(U') R' U R' F' R F U R' F R
,,,(U) y' z F' U' R2 U2 R' U' R2,,,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
Spaceship,,,,,,
,R' U R U R' U' R U R2 F' R2 U R',y (U) R2 U R2 F' R U R' F',R' U F2 U F2 R' F R,R' U R' F R F' U' R' F' R F,R' F' R' F2 R F R' F' R2 U R',(U) R' U' F R U2 R' F
,,,(U2) F R F' R2 F' R2 U R' F' R U R',,,
,,,,,,
,,,,,,
,,,,,,
Stollery,,,,,,
,(U2) R2 F2 R U2 R U R' U2 R U R',(U') R' U R' F' R F R' F2 R,(U2) R' F' U R' F R2 U R' U' R U R',(U) R2 F2 R F' U F,F R F' U2 R' U' R' F' R F R' F' R,(U2) R' U' F U2 R' F2 R F'
,,,,(U') R2 F2 R F' R' F R F,(U') R U' R' U R' F' R F R' F' R' F2 R2,
,,,,(U2) R2 F2 R U F R' F' R,,
,,,,,,
Pinwheel,,,,,,
,R' F' U R' F R2 U R' U' F R' F' R,y R2 B2 R' U R' F' R U' R' F R' F' R,(U) R' U F R U' R' U R U' R' F,,,
,y' R' U2 R' U R' U2 R F2 R2,R' F' R' F2 R U' F R' F' R2 U R',,,,
,,,,,,
,,,, ,,
,,,,,,
Two-Face,,,,,,
,R2 F2 U' R U R,R' U F U2 F' R' F2 R F',(U) R' U R' F R F' R' F' R F,(U') R' U F2 U F' R U R' F',,
,,(U2) F R F' U R2 F' R F' R' F' R ,,(U') R' U R U2 R' F' R U R' U' R U R',,
,,(U) R' F R U2 R' F' R' F' R F' ,,,,
,,,,,,
,,,,,,
Turtle,,,,,,
,(U') R' U R' F R2 U' R',R' F' R' F2 R2 U R' U' F R' F' R,R' U F R U' R2 F R,R' U2 R U R' U' R U' R' F R U' R',(U') R' U2 R U' R' F R U' R',y' z F' U2 R2 U R' U R'
,,,,,,R' U F U' R' F R F' R' F R
,,,,,,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
Pinwheel Poser,,,,,,
,(U') R2 F2 U R' U2 R U' R,(U2) R' U R U' R' F R U' R2 F' R,(U') F R F' U R2 F' R2 U R',(U) R' U R U' R' y' R2 U R' U2 R',(U') R' U R' F R U' R' F R F',(U2) R' U2 R U' R2 F' R F
,,,(U2) R' U R' F R U' R' F R2 F' U' R' U' R,(U2) y' z F' U R' U2 R' U R2,,(U) R' U F' U' R U R' U' F
,,,,,,
,,,,,,
Gun,,,,,,
,(U') R' U R' F R U R U2 R',(U) R2 F2 U' F R F' U R,R' U2 R U' R' U R' F' R F,R' U R' F2 R F' U R U R',(U') z' y F' U' R2 U2 R' U R U2 R2,y' z F' U' R U' R U R2 U' R
,,,(U') R' U' R U2 R' F R U' R',y' (U') R' F R' F' R U R' U F2 R2,z' y U R U' R2 F' R2 U R' U2 R',(U') F R F' U R' F' U' R U R' U' R U R'
,,,,(U') R' U R' F R2 U2 R' F R' F' R,(U2) F R F' U R' F' R U' R U R2 U' R2,
,,,,(U2) R' F R U' R2 F2 R ,,`;

// TEG1- b
 const TEG1_MINUS_B_CSV = `Hammer,,,,,,,
,R2 F2 U R U' R2 U R,(U2) L U R U' R2 F2 R F',y' (U') F U R2 U2 R U R2,(U') L U' F' U R U' R2 F' R F,y' F R U R' U2 R U2 R U' R2,(U) L U' R U R' F' U' R U' R', 
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Spaceship,,,,,,,
,y' (U) F R U R U' F R F' R,y' (U2) F U' R U R' F R F' R',y' (U') F U' R2 U' R2 F R' F',(U') L U' R U' R' F U R U R' F',(U') L F R U2 R' F' R U R2 F' R,(U2) R B U' R' U2 R U',
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Stollery,,,,,,,
,(U) y R2 B2 R2 F R2 U' R' F R' F',(U2) L U' R U R' F' R U2 R',(U') L U F' U2 R U2 R' F,y' (U2) F R U' R U R2 U' R2 U R2 U' R2,y' F2 R2 F' R U' R',(U') L F U' R U' R2 F' R U R' F' R,
,,,,,,,
,,,,,,,
,,,,,,,
Pinwheel,,,,,,,
,y' R U2 R U' R U2 R' F2 R2,L F R U2 R' U F' R U R2 F' R,(U') L U' F' R' F R U' R' F R F',,,,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Two-Face,,,,,,,
,L2 F2 U L' U' L',(U') L U' F' U2 F R U2 R' F,(U) L U R U' R' F R U R' F',(U) L U' R' F2 R F R' F' R U R' F' R,,,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Turtle,,,,,,,
,(U) L U' R U' R2 F R,y' (U2) R' U2 R F R' F R2 F',L U' F' R' F R2 U' R',L U2 R' F' R U R' F R F' R' F R,(U) L U2 R' F R F' R' F R,y' F U2 R2 U' R U' R,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Pinwheel Poser,,,,,,,
,(U2) L U2 R U' R' F' U' F2,(U2) L U' R' F R F' R' F R2 U R',(U) L U' R U' R' U R U' R' F,(U2) F U' R U2 R U' R2,y' F U2 F R F' R2 U' R,(U2) L U2 R' F R2 U R' F',
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Gun,,,,,,,
,(U') L U' R U' R' U' R' F2 R,(U) L2 F2 U F' L' F U' L',(U2) L U2 R' F R U' R U R' F',(U) L U' R U' R2 F' R U2 R U' R' F,y' (U2) F U R' U R' U' R2 U R',L F' R' F R2 U2 R',`;

// TEG1+ c
 const TEG1_PLUS_C_CSV = `Hammer,,,,,,
,(U) F' U2 R' F' R U' R U' R' F,(U') F R' F' R U R' F' R U2 R U2 R',F' R' F' R U R' F R,R U R' U R U' R' U R U' R' F',y' (U) R' U2 F R' F' R U R' F R F',y' (U) R' U' R2 U R' U' R2
,,,,y' (U) F R' F' R U R2 U' R2 ,(U2) R U R' F' U R U' R' F R' F' R,
,,,,,y2 (U2) R F U2 R' F R' F' R,
,,,,,,
,,,,,,
Spaceship,,,,,,
,(U2) F R U R' F U' F2,F' R' F R F' R U R' U' R' F R,(U2) F' R' F2 R2 F' U' R' U' R2 U R',(U) F U' F' R U' R2 F R,y' F R F' U' R' F R' F' R,y' (U2) R' F R' F' R2 U' R'
,F' U R U' R2 U R U F R',y' (U) R' U R' U R2 U R2 U' R,y R' F R' F' R U R U' R' U R U2 R' ,R U' R' F R' F' R U' R U R' F',(U') F' R' F' R U R' F' R U R' F R,(U2) y' x' R' F' R2 U' R' U R'
,y' (U2) R F R F' U' R2,(U') R U R' U' R' F R F' R U R' F' ,,,,
,,,,,,
,,,,,,
Stollery,,,,,,
,y' (U2) R' U R U' R' F R' F' R2 U2 R',R' F' R U R U' R2 F R,F' R' F R,R U2 R' U2 F' R U' R' F,y' (U) R' U2 F' R U' R' F U' F,(U') F' U' R' F R U2 R' F R U2 R' F R
,y' (U) R' F R2 F' R' U2 R' U' R,(U) x U' R2 F R F' R U,(U2) R U R' F',F' R U R' U' R' F R F' R' F R,(U) R U R' F' R U R' U' R' F R F',y' F R F' U R' U R U' R U' R' F R' F' 
,,(U') R U R2 F' R U R U' R',(U') F' U R U' R' F,,,
,,,(U') F R' F' R U F',,,
Pinwheel,,,,,,
,R U R' F' R U' R' F R' F' R,R U R2 F' R U2 R U2 R',(U2) R U R' F' R U R' U R U2 R',,,
,F R' F' R F' R U' R' F,R' F2 R U2 R U' R2 F R,,,,
,,,,,,
,,,, ,,
,,,,,,
Two-Face,,,,,,
,F R' F' R U R F' U' R' U' R,(U2) R' F2 R F' R' F2 R F',y' R U R U' R2,(U) F2 R U R' U R' F' R2 U' R' F,,
,F R' F' R U R U' R' U R U R' F',F' U' R U' R' F R'F2 R,y' (U) R' U R U R',,,
,,,y' (U) R2 U' R U R,,,
,,,,,,
,,,,,,
Turtle,,,,,,
,(U) F2 U' F R' F R F,(U') F' R' F R2 U' R' F R' F' R,(U2) R' F R2 F' U' R' U' R2 U2 R' F',(U') R' F2 R U2 R U' R' U R U' R' F,(U') F' R' F' R U2 R U' R' F,(U') R U R' U R U' R' F'
,y' (U) R2 U' R F' U F R,,F' U R U R' U R U2 R2 F2 R,,,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
Pinwheel Poser,,,,,,
,y' (U2) R' F R' F' R U' R' F R F',y' (U2) R2 U R' U2 R U' R,F' R' F R2 U2 R' U' R U' R',(U) F' U' R' F R U' R' F2 R,R U2 R' U' R U R' U' F',y' R' U R U R2 F R F' R U R'
,,,,,(U') R U R U' R2 U' R2 U R2 F',(U2) F R' F' R U2 R U' R' U R U' R' F'
,,,,,(U) R U R U' R2 U R2 U R2 F',
,,,,,,
Gun,,,,,,
,(U2) F' R' F2 R F' R U R',(U2) R' F' R U2 R' F' R U' R U' R2 F R,(U') F' R' F R U' R' F R F' R U R',y' R2 F2 R F R U' R2 F2 R,(U2) F' U' R' F2 R,(U) F' R U2 R' F' R U2 R'
,,(U2) F' R' F R F' R U R' U2 R' F2 R,y' (U2) R2 U2 F R F' U R2,,(U2) R U2 R' U' F',(U) R U R' F' R U2 R' U' R U' R'`;

// TEG1- c
 const TEG1_MINUS_C_CSV = `Hammer,,,,,,,
,(U') F U2 R U R' U R' F R F',(U) F' R U R' U' R U R' U2 R' F2 R,F R U R' U' R U' R',(U') F R U' R2 F' R U R U' R' F,y' (U2) F' U' F2 R F' R U R',y' (U') R U R2 U' R U R2, 
,,,,y' (U2) R2 U' F R' F' R U2 R2,,,
,,,,,,,
,,,,,,,
,,,,,,,
Spaceship,,,,,,,
,(U) x U' R' U' R U' B U2,y' (U2) R U' R U' R2 U' R2 U R',(U) F R U2 R2 U R U F R2 F' R,(U2) F' U F R' F R2 U' R',F R U R' U' R U R' U' R U' R',y' (U') R U R2 F R F' R,
,y' (U) R' F' U' F R' U R2,(U') F R U' R' F R' F' R U R U' R',,,y' (U') R2 U R2 U' R' F R F',,
,(U') F U' R' F R2 F' U' R' U' R,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Stollery,,,,,,,
,(y') R U2 R2 F R F' R U R' U' R,F R2 U' R' F R' F',F R U R' F R' F' R2 U2 R',R' F' R F R' F' R U R U' R' F,(U) F R' F' R U R U' R' F R U' R',(U) F R U' R',
,,(U') x U' R' F R' F' R2 U,F R U R' F R U2 R2 F R,,,(U') R' F' R F,
,,(U) R U R' U' R' F R2 U' R',(U2) F U R U' R' U2 R U' R' U2 R U' R',F U2 R U R' U F' U' F,,(U2) F U' R' F R F',
,,(U2) R' F' R2 U R' U' R' F R,F U' R2 F' R U R' U' R' F R2,(U') y' R' U2 R U F R' F' R2 U R2,,(U2) F' R U R' U' F,
,,,,,,,
Pinwheel,,,,,,,
,F' R U R' F R' F R F',R U2 R' U2 R' F R2 U' R',F R U' R2 U' R U' R' U2 R,,,,
,R' F' R F R' F R F' R U R',R' F' R2 U R' U2 R' F2 R,(U2) R' F' R F R' F' R U' R' F2 R,,,,
,,,F R' U R2 U R2 U' R2 U R',,,,
,,,,,,,
,,,,,,,
Two-Face,,,,,,,
,(U) R' U F' U' R F2 R F',(U2) R U2 R' F R U2 R' F,y' (U) R U' R' U' R,y' (U') R U' R2 F2 R F' R' F2 R2,,,
,,F U R' F R F' R U2 R',y' (U) R2 U R' U' R',,,,
,,,y' R' U' R' U R2,,,,
,,,,,,,
,,,,,,,
Turtle,,,,,,,
,y' (U') R2 U R' F R' F' R'/R3,(U) F R U' R2 F R F' R U R',(U) F U' R' F' R U' R' F2 R2 U2 R',(U) R U2 R' U2 R' F R U' R' F R F',(U) F R U R' U2 R' F R F',(U) R' F' R U' R' F R F,
,(U') F2 U F' R U' R' F',,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Pinwheel Poser,,,,,,,
,y (U2) L F' R U R' U R U' R' F,y' (U2) R2 U' R U2 R' U R',(U2) F R U R' U R U' R' U2 R U' R',(U') F U R U' R' U R U2 R',F U' R U R' U R U' R' U R U' R',(U2) F R U R' U' R U R' U2 R' F R F',
,,,R' F2 R U R' F' R U F,,,y' (U2) R U' R' U' R2 U' R' F R' F' R,
,,,,,,,
,,,,,,,
,,,,,,,
Gun,,,,,,,
,F R U2 R' F R' F' R,F R U' R' F R' F' R U2 R U2 R',y' (U2) R2 U' F R' F' U2 R2,F U R U2 R',(U) F R' F2 R F R' F2 R,F U' R U R2 F R F' U R U' R',
,,R U R' U2 R U R' U R' F R2 U' R',(U') F R U' R' U R U' R' F R' F' R,R' F2 R U F,,,`;

 // TEG1+ d
 const TEG1_PLUS_D_CSV = `Hammer,,,,,,
,y' (U) R' U' R2 U R' U' F2 R2,(U2) R U R2 F' R' U F R' F R2,(U2) R' U R' U R2 U2 F',y2 z F' R' U' R U R' U R' F2 R2,(U) R F R' F2 U R' F' R,(U) y2 x U' F' R U R' U R U' R' 
,,(U') y2 F U R' F R2 U2 R' U2 R',,,,(U) F' R' F' R' F2 R U2 R
,,,,,,R2 F' R' F' U2 R
,,,,,,
,,,,,,
Spaceship,,,,,,
,y (U2) R' F' R2 U R' U R',(U) R F R' F' R U' R' U F',y (U2) R' F' R2 U' R' F R U2 R2,y' R2 U' R2 U R' U F R' F R2,(U) y2 z F' R' U2 R U2 R2 F' R U' R,x2 (U') F U' R U' R' U R
,,(U2) y' x U' R' U R U' R2 F R2,,,(U) R2 U R2 F' U F' R U R2 F' R,(U') z U R' U R' F' R U
,,,,,,(U') y F R' F2 R F U' R'
,,,,,,
,,,,,,
Stollery,,,,,,
,(U2) F R F' R U R2 F R2 B2,y R U2 R' F R U' R' U R',(U) R2 U' R' U2 R' U' R' F',F' R' F U R' F2 R F' R,(U2) R U R' F R2 B2,F' R' F2 R' F2 R U' R
,,,,,F' R' F R' F2 R2,
,,,,,,
,,,,,,
Pinwheel,,,,,,
,R2 F2 R U2 R' U R' U2 R',R' F R2 U' R' F U' R U2 R' F' R',y F R' F' R U R' F' R F U R',,,
,,,,,,
,,,,,,
,,,, ,,
,,,,,,
Two-Face,,,,,,
,y (U) R' F R U R U2 R2,y' (U) R2 U' R U2 R' F2 R F' R,y F R U' R' F' R U R' U R',y (U')  R' F R2 U2 R' F R' ,,
,y' (U) R2 U' R U R' F2 R2,,,y' (U') R' U R2 F2 R' U R',,
,y' R U R U' F2 R2,,,,,
,,,,,,
,,,,,,
Turtle,,,,,,
,R' F R' F' U R' U' R' F',y (U') R U2 R' F R' U' R2 U,(U2) F R F' R2 U R2 U F',y F R' F2 R2 U R' U' R',y (U') R' F' R F R' F' R U2 R',(U2) R2 U' R' U2 R2 U' F'
,y2 z F' U2 R' F R U' F R' F' ,,,,,
,y z U' R' F R F R' F' R2 U R' U' ,,,,,
,,,,,,
,,,,,,
,,,,,,
,,,,,,
Pinwheel Poser,,,,,,
,(U') F' U' R2 F2 R U2 R,(U) F' U2 R2 F' R F' U R,(U2) R' U R2 F R' F' U2 F',y (U2) F' R U R' U' R U R' U R',R2 U R' U2 R' U F',y (U2) F R U' R2 F' R U2 R'
,,,,,,
,,,,,,
,,,,,,
Gun,,,,,,
,y R' F2 R U R U R' U R',(U) R F R' U R F' U2 R2,y (U') F R U' R' U R' F' R U2 R',(U) F' R U2 R' F' R U2 R B2 R2,y (U') R2 U2 R' U R U2 R2 U F'`;

// TEG1- d
 const TEG1_MINUS_D_CSV = `Hammer,,,,,,,,y' (U') R U R2 U' R U F2 R2,(U2) y2 x' R' F' R2 U R F' U' R U' R2,y2 (U2) R U' R U' R2 U2 F,F R U R' U' R U' R B2 R2,(U') y2 x' R' U' R U2 F' R U R' ,(U2) R2 F U F U2 R', 
,,y' F' U' R U' R2 F2 R U2 R,,,(U') y' F' R' F R2 U' F R F' ,,
,,,,,,,
,,,,,,,
,,,,,,,
Spaceship,,,,,,,
,y' (U) R U R2 F' R U' R,y (U) F R U' R' F R2 U' R2,y' (U) R U R2 F R F' R' F2 R2,F R U' R U2 R' U2 F2 R2,y x' U' F' U2 R' F U' R U R2,y z' F' R U' R U R' U' ,
,,,,,,y' F' R U2 R' F' U R,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Stollery,,,,,,,
,(U') x' U' R' F R' F' R2 U' R2 U2,(U) y x R' F2 R U' R' F R F' R,(U) y2 x' U R U2 R U2 R' F R' ,(U) F R U' R B2 R2,x U' R U' R U' R' U R U2,z2 R U R' F' R U R' U' R' F R F' ,
,,(U') R2 F' R' F' U' R' U R' ,,,x U' R U' R2 U R U' R' U,(U) z U R U R' U R U R' F,
,,,,,,,
,,,,,,,
Pinwheel,,,,,,,
,y' R' F R F' U R U' R2 F' R U' F R,y' R U' R2 F R F' U R' F2 R F R,x R2 F R U2 R' F R U' R' F U,,,,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Two-Face,,,,,,,
,y' (U) R U' R' U' R' F2 R2,(U) y' z' F' R U2 R' F' R U' R U,y' F' R' F R F R' F' R U' R,y' (U) R U' R2 F2 R F' R,,,
,y' R' U' R' U F2 R2,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Turtle,,,,,,,
,y' z' U R U' R' F' R U R2 F' R U,y x' R' F2 R U' R F R2 F',(U2) y x' U' F' R' F R F' U R' F2 R2,y' F' R' F R2 U2 R' U R,y' (U) R U R' F R U R' U2 R,(U2) y2 R2 U R' U2 R2 U' F,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Pinwheel Poser,,,,,,,
,y' (U2) R' U R' U2 R U' F2 R2,(U') y2 x' U F2 R2 U R' U F' R' ,y2 R2 U' R U2 R U' F,(U2) y' F R' F' R U R' F' R U' R,(U2) y' R U' R2 F R2 U' F R' F' ,(U) y2 x' U R' F' R2 U R U2 R2,
,,,,,,,
,,,,,,,
,,,,,,,
,,,,,,,
Gun,,,,,,,
,(U2) y' R U' R2 F U' R U R2,y' R' U' R' F R F' R' U F2 R2,F U R U2 R B2 R2,y2 x U F2 R F' R U R2 F' R,(U2) y' R U' R' U R' F2 R F2 R,(U) y' R U R' U R U2 F R' F' R2 B2 R2,
,,,z' y U' R U R' U R U R',,,,`;

// FEG1
const FEG1_CSV = `Sune,,,,,,,
,(U) B' R U2 B2 L U' ,L U L' B2 U B L U L' , B L' B' L U L' B' L2 U L' ,B' U L U' L' U B L U L' ,(U') L U' L' U L U' L' U B L U' L',L' B L2 U' L' U L U' L' B ,
, L U L' U B L U' L2 B' L ,(U') B L' B' L B L U' L' U L' B' L,(U) L' B L U2 L U' L2 B2 L B',(U) L U' L' B U' L' B L2 U L' B',(U) R2' B U' L U' L U' F2,,
,y' (U) L' B L2 B' L2 U2 L, B L2 U' L2 B U' B2 U' L,,(U') B' L' B L2 U L' U' B L' B' L,(U') L U' L' U L U' L' U' L' B' L B,,
,(U) B' L F2 U2 L B' (z'), B' L' B L U' L U L' U' B L' B' L,, B U' L U2 L' B2 L' B L,(U) L' B' L B U L' B' L U L' B' L,,
,(U') L U' L2 B' L B U L' B L, L2 U' L2 B L2 U' L2 U' B2 U' L,,L U L' B' U L U2 L' U2 L U L', L U2 L' U L' B' L B L' B L,,
,, L2 U L2 B' L2 U L2 U' B2 U' L,,,L U L' B L U' L' U L' B2 L,,
,, x L U' L U x' L' U2 L U' L2 B L2,,,,,
Anti-Sune,,,,,,, 
,(U) F U' L2 B2 U' B ,(U') L U' L' B' U' B2 L U' L' ,B' L U L' U' L U L2 B' L ,L U' L' B' U' L U L' U' B ,(U) L U L' B' U' L U L' U' L U L', L U' L2 B L U' L' B L B' ,
,(U') L' B L2 U L' B' U' L U' L' ,L' B L U' L U L' B' L' B L B', B U L U' L' U' L U2 L' B' L U L' B',(U) L' B L B' U L U' L2 B' L B,(U') B' L' B L U L U L' U' L U L',(U') B L' B2 L2 U L' U2 L' B' L,
,L' B' L U' B' L' B L2 U L' ,L U' B2 L U2 L U' B/F,(U) L2 U B' L B' U L2 U L2,(U') B L U' R2' B' L U B' L U L', L U B' L U L2 U' L U L',,
,(U) B' U2 B2 L U2 L' B,B L U' L' U L' B' L U B' L U L',,(U) L U L' B L U' L' U2 L' B L,L' B2 L U' L U L' B' L U' L',,
,,,,,,,
Pi,,,,,,,
, B2 L U L' U2 L U L' U' B ,(U) L U' L2 B L2 U' L',(U) B L' B U' B2 L U L ,(U) L U' L' U L U' L' B L U' L',(U') B U' L U2 L' B' L U L' B',B L U' L' B L U2 L' U B' ,
, L2 F2 L' U L' U' L U2 L U' L2,(U) L U L2 B' L2 U L' ,,(U) L' B L U' L' B L B' L' B L ,(U) L U L' U L U' R2' B' L B L' B' L,(U) L' B L B' L' B L2 U L' U' L U' L',
,y2 (U') L U' L2 B L2 U' L F2 L2,(U) L' B L2 U' L2 B L,,(U) B' L U L' U' L U L' B' L U L',L U' L2 B L U L U' L' U' L' B L B' ,(U) L' B' L U' L' B L2 U L' B' L U L',
,(U') B U' L' B L U' B2 L U L',(U) L' B' L2 U L2 B' L,,(U) B L' B' L U L' B' L B L' B' L,B L U' L' U' B' L U R2' B' L,(U) B L' B' L U L U L' U' L' B' L2 U L',
,,,,, B' L' B L B' L' B2 L U' B, B' L' B L U B L' B' L2 U L',
,,,,,,(U') B' U L' B2 L B L' B' L B,
,,,,,,L B' L U' L' B L2 U2 L' U' L',
,,,,,, L' U2 L U2 B2 U' B2 L U L,
,,,,,,L U L' B' U' B L' B' L2 U L',
U,,,,,,,
,L U L' U L U' L2 B' L2 U L',(U) y L' U L' U' L U' L' U' B2 L2 ,(U') B' U2 L U2 L' U2 B , L' B L B' L' B L2 U' L' , L' B L B' U L U' L' B L U' L',(U) L' B L U' L' B L U' L U L' B',
,L U' L2 B L2 U L' U' L U' L',B L2 F R2' B U B2 L2,(U) L U' L2 B2 L B' U L U L',L U' L' B L U' L2 B L ,(U) L U' L' U L U' L' U' B L U' L',(U) L' B L2 U' L' y' U L U L',
,L U R2' B' L2 U' L' U' L U' L',L U L' B' U' L U L' U' B L' B' L,(U') B U2 L' B2 L U2 B',,(U) L U' L' U L U' L' U L' B' L B,(U') B' U L U2 L' B U2 B,
,F' L2 B' L2 F' U' L2,(U) x U' L' U L U' B L U L U',(U') L U L' U B L U L' U L U' L2 B2 L,, B' U' B U L' B L2 U' L',L U' L' B U' L' B L B' L' B L,
,L U L' U L U L2 B L2 U' L' , B' L' B L U L U L' U' B L' B' L,B L U2 L' B2 L U2 L' B',, L' B L U' L U L' B' U L U' L',(U) L' B L U' L' B L U B' L' B L,
,, B' L' B L B' U B L U L',(U) L' B L2 U2 L' B U' L' B' L,,z' y (U') L U' L' U2 L U' L2 U', L U L' B' L U2 L' U2 B L' B' L,
L,,,,,,,
,L U' L' U L U' L2 B' L B ,(U') L' B L U' L' B L2 U L' B',L' U L2 U' L2 U' B L2 U' L' ,L' B L2 U L' B' L U2 L' ,(U') L U L' B' L U L' U' B L' B' L ,(U') L' U2 B L U2 L U' L2 B,
,(U') L U L' B' L U2 L' U2 L U L' , L' B L B' L' B L U L U2 L', B' L' B L2 U L' U B' U L' B L B,L U2 L' B L U' L2 B' L, B' L' B L U' L U L' U' L U L',(U) B L U' L' U L' B' L U L' B' L,
,(U') B L U' L' B' L U L' B' L U L',x U' L' U L U L' U' L U L' U' L ,,(U') L' B2 L B' L' B L2 U L',(U') R' U R y' L U2 L U' L2,(U) B' U2 B' L U2 L' U' B,
,, B L' B' L U2 L U' R2' B' L2 U L',,(U') L U' L2 B' L B L' B2 L,L U' R2' B L U' L' B L2 B' U' L' U' L,(U') L' B' L B U' L' B' L U L' B' L ,
,,B' L' B L B L' B' L B L' B' L,,,L U L' B' U L U L' U' L U L',L' B' L U B' L' B L U' L U L',
,,L' B' L B L' B2 L U2 L' B' L ,,,y2 x  U L2 U L' U2 L U L',,
,,(U) B2 L U' L' B2 L U' L' U' B,,,,,
T,,,,,,,
,(U') B L U' L2 B' L U L' B' L,(U') B' L' B L2 U L' U' L U L', L U' L2 B L U L U2 L',(U) L U' L' B' U' B L' B' L B,L' B' L2 U L' B' L U L' ,(U) L U' L' U2 B L U2 L' B ,
,L U' L2 B L2 U L' U2 L' B L B' , L U' L' U2 L U2 L' B L U' L',L' B L2 U' L' U' L' B2 L , L' B L B' U L U' L' U' L' B' L B, L U L2 B' L B L' B' L,(U) L' B L U2 B' L' B2 L B',
,L U L' U L U L2 B L U' L' B L B',(U) L U2 L' B L U' L' B' L U L',,L2 F2 U' L' U' L U' L' U L',L U2 R2' B L2 U' L' B' L U L',(U) L' B L2 U L' B' U2' L' B L B',
,L' B L U2 L' B2 L B' L' B L ,(U) L U L' B' U2 L U L' U' L U L',,(U) L' U B L2 U' L2 U' B U' L,,(U') L' U' L U B2 U' B2 L U L,
,,,,(U) L2 F2 U' L' U2 L' U2 L',, L U L' U B L U' L' B' L U L',
,,,,L U' L' U' L' B2 U' B L B' U L,,(U') z2 y L U' L' U L' B L B' L,
H,,,,,,,
,L' B L2 U' L2 U' B U L ,B' U L U' L2 B2 L U' B,L' U' L' B2 U B' L B' ,L U L' B' L U L' U' L U L' ,,,
,L' B L2 U' L' B L U L' B',(U/U') B' L' B L2 U2 L' B' U2 B,(U') L' B L B' U2 B L U2 L' B,(U') L' B L B' L' B L U' L' B L B',,,
,L U' L2 B L B' L' B' L B,B U' L' B L2 U2 L' U B',, L' B' L B L' B' L U L' B' L,,,
,(U/U') L U L' B L U' L' U' L U' L' B,,,,,,
,(U/U') B' L' B L B L' B' L2 U L',,,,,,
,(U/U') B L U' L' B' L U R2' B' L,,,,,,`

// REG1
const REG1_CSV = `Sune,,,,,,,
, L' B L2 B' L2 U2 L,(U) L U L2 B' U B2 L2 B', B L' B' L2 U2 L U' L2,(U') L2 U' L2 B' L U2 L' U2 L' B, B2 L B' U L' B U' L2,(U) L U2 L U' L2 B L2 B',
, L' B U2 R2' B L',L U' L' U L U2 L' U L2 U' L2,(U') L B L' B' L U' L' U L U' L' ,,L U2 L' U B L B' L2 U' L, R2' U' L U' B L' B' L2,
, L U' L U' L' B L' B' L2 U' L2,(U) L2 U' L2 U L' U2 L U L' U' L,,,,,
, L' B U2 L2 F U',,,,,,
,,,,,,,
Anti-Sune,,,,,,,
, x' L U' L2 U L2 F2 L',(U') L2 U L2 U' L U2 L' U' L U L',(U) B L2 B' L2 U L' U2 L',(U) B' L U2 L U2 L' B L2 U L2,B' U2 L U L' U' L' B2 L2 B' L', L2 U L' U2 L2 B L B',
,(U') L2 U L2 B L B' L U L' U L',(U') L U' L' U' B L B' L' B L B', B' U B L2 U2 L' U L2,(U) B L' B' L U2 L2 U' L2 B L2 B', L2 U L2 U2 L' B L B' L U' L',(U) L U L' U' L U L' B L B' L',
, L' U2 L2 B L2 B' L,L' U L U' L' U2 L U' L2 U L2,(U) L2 B L B' U L' U L2,, B2 L U' L2 U' L2 U' L' B L',,
, L B' L2 U2 B' L,,,,(U') B' L2 U B' L2 U' L U2 B',,
,(U') L' B L2 B' L' U L' U L,,,,L' U2 L U' B' U' B L2 U L',,
Pi,,,,,,, 
, B L B' L' B L2 B' L' U2 L,(U) L U L' U' L U2 L U' L2, L B' U L' B2 U L B,(U) L2 U L' B L B' U L',(U') L U' L' B L B' L2 U2 L,(U') L U L' U L2 U' L2 B L2 B',
, L' B' L2 B' L2 U2 B L,(U) L2 U L' U2 L' U L U' L', L B' U L2 U' L' B' U' L2 B' L',(U) L' B L' B' U L' U2 L' ,L2 U L' U L' U' L U2 L2 B L B' , L' U2 L2 B L' B' L U L',
,(U) L B L' B' U L U' L2 B L B',(U') R2' U' L U2 L U' L' U L, B U' L' U' L' B L2 U' L2 U' B,(U') L B' U B U' L U2 L ,(U) L B L' B L U L' U2 B ,(U) L' U L B' U' B L2 U2 L',
, L2 F2 L' U' L2 B L2 U' L',(U) L U' L' U2 L2 U' L U2 L ,(U) L U L' U' L F2 L' U L' B' L2 U L',L B L' B' L U' L2 B L B' , B L2 B' L2 U L2 U' L U' L' ,B' U' B L2 U L2 U2 L U2 L,
,,(U') L' U L U2 L2 U L' U2 L' , L B' U2 B L U2 L' B L B',,,,
,, L' U2 L' U L2 U2 L U L' ,,,,,
,, L U2 L U' L2 U2 L' U' L ,,,,,
U,,,,,,,
,L' U L' U' L U' L' U' L2, L2 U L2 B' L2 B' L2 B L2 ,(U') L U L' B L2 B' L U' L' ,(U) L2 U L' U L' B L B' L U L2,(U) L2 U L' U2 L' B' U' B,(U') L2 U' L U2 L B L B',
,(U) L2 U' L' U' L U' L' U L',(U) L B L' B' L U' L' B' U' B,L U' B L' B' L U L U2 L2,(U) B' U' B L2 U' L' U L U' L',L B L' B' U' L U' L' U L U' L' ,(U) B L' B' U L2 U L' U L',
,L U' L U L' U L U L2 ,(U') L2 F2 L' U' L2 B L U L U2 L',L2 B L U L' U' L2 U2 L2 B,,(U) L U' L' U' B L B' U L U' L', B L B' U L2 U L' U2 L',
,L U' L' U' L2 U' L' U L U' L',B2 L U L U' L2 B U' L B',L2 U2 L' U' L' B L B' U L',,,L' U B L2 B' L U2 L,
,(U') L U2 L U2 L U L2,,(U) L' U' L F' R2' B U' B L,,, L2 B L2 B' U2 L2 U L2 U2 L',
, L' U' L U2 L2 U L' U L',,,,,,
L,,,,,,,
,L2 U L' U' B L2 B' U L', L U' L' U' L2 U' L2 B L B',L' U L' U L2 U' L U2 L',(U) L' U L' U' L U L' B L2 B' L,B' U B L U2 L U' L2,(U') L U' L U' L2 U' B L B',
, L2 B L B' L U L2 U L2,(U') L2 U L2 U B L B' L U L2,(U) L U2 L' U L2 U' L U' L,L' B U2 L2 B L U2 L U2 L2, L U' L U L' U2 B L B' L,L U' L' D' L U L2 B' L,
,(U) L U2 B L' B' L U2 L U L2, B L' B' L2 U' L' U' L2 U' L2, L2 U L2 U B' L U' L' B2,,, L' U2 L' B L2 B' U' L,
,(U') y2 B L U' L U L2 B' L U L' B',,L' U2 L U' L2 U L' U L',,,,
,(U') L U' L' U L U2 L2 B L2 B' L',,,,,,
T,,,,,,,
,(U') B L' B' L2 U L2 U L U L',(U') L U' B L2 B' U L U' L2, L U2 L' U L' U' L U2 L U L' ,(U') B L B' L' B L2 B' U L' U L,L2 U' L' B L' B' L U' L U' L2,(U) L' B L2 B' L' U2 B L B',
,L2 U L2 U L U L2 B L B',L2 U' L' U2 L' B L B' U2 L', L U2 L' U2 L U2 L U' L2, L2 U' B2 L U2 L' U2 L' B2, L U L' U' L U L2 B' U B,L2 U' L2 U' B L B' L' U' L,
,(U) L2 U' L' B L' B' U' L2 U' L2,L2 U' L2 U' L' B L' B' L2, L2 U L' U2 L' U2 L U2 L', L B' R2' U2' B L U L' B L, L' U2 L' U' L U L' B L' B',L2 U' B U2 L U2 L U2 B L,
,,L U' L' U' L' B L B' L2 U' L2, L' U L U2 L2 U L2 U' L U' L',(U) L' B L B' L B L' B' L U' L2, B2 L2 B L2 U L2 U' B2 L, L2 B L U L' B U' L U2 L2 B,
,,(U') L' U L' U' L2 U L' B L' B',,,L' U2 L' U2 B L2 B' L2 U' L,,
,,L U L' B2 L U' L2 U2 L' U' B,,,,,
,,(U') y' B L U' L B L2 U' L' U L' B',,,,,
H,,,,,,,
,x L U2 L U' L' U B' L,L2 U L' U L U' L U L' U L2 ,(U) B' L' U' B2 L U' B L',L U' B L' B' L U' L2,,,
,L B2 L B' L' B U' B,L2 U' L U' L' U L' U' L U' L2 ,B L' B' L U2 L' B' U2 B L',L U2 L U' B L B' L,,,
,,L B L' B2 U2 B L U2 L',(U) B' L' U2 B2 L2 B' L' U' B2 L2, B' U' B L2 U' R2' B L B',,,
,,,(U) L2 F2 L' U L' B' L U L' U' L U L',,,,`;

// EG2
// const EG2_CSV = ``;


// ========== УНИВЕРСАЛЬНЫЙ ПАРСЕР ==========

function parseAlgCsv(csvString, methodName) {
    const rows = csvString.split('\n');
    const algorithms = {};
    
    // Определяем структуру групп для каждого метода
    const groupStructures = {
        'CLL': {
            'S': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            'AS': ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'],
            'Pi': ['Pi1', 'Pi2', 'Pi3', 'Pi4', 'Pi5', 'Pi6'],
            'U': ['U1', 'U2', 'U3', 'U4', 'U5', 'U6'],
            'L': ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
            'T': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            'H': ['H1', 'H2', 'H3', 'H4']
        },
         'EG1': {
            'Sune': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            'Anti-Sune': ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'],
            'Pi': ['Pi1', 'Pi2', 'Pi3', 'Pi4', 'Pi5', 'Pi6'],
            'U': ['U1', 'U2', 'U3', 'U4', 'U5', 'U6'],
            'L': ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
            'T': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            'H': ['H1', 'H2', 'H3', 'H4']
        },
         'EG2': {
            'Sune': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            'Anti-Sune': ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'],
            'Pi': ['Pi1', 'Pi2', 'Pi3', 'Pi4', 'Pi5', 'Pi6'],
            'U': ['U1', 'U2', 'U3', 'U4', 'U5', 'U6'],
            'L': ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
            'T': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            'H': ['H1', 'H2', 'H3', 'H4']
        },
        'TCLL+': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
         'TCLL-': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        'TEG2+': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
         'TEG2-': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        'LEG1': {
            'Sune': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            'Anti-Sune': ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'],
            'Pi': ['Pi1', 'Pi2', 'Pi3', 'Pi4', 'Pi5', 'Pi6'],
            'U': ['U1', 'U2', 'U3', 'U4', 'U5', 'U6'],
            'L': ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
            'T': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            'H': ['H1', 'H2', 'H3', 'H4']
        },
        'Pbl': {
            "Solved": ['S1', 'S2', 'S3'],
            "Bar": ['B1', 'B2', 'B3'],
            "Diag": ['D1', 'D2', 'D3']
        },
        'Oll': {
            "0C": ['0C1', '0C2'],
            "1C": ['1C1', '1C2'],
            "2C": ['2C1', '2C2', '2C3']
        },
        'TEG1+ a': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
         'TEG1- a': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        'TEG1+ b': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
         'TEG1- b': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        'TEG1+ c': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
         'TEG1- c': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        'TEG1+ d': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
         'TEG1- d': {
            'Hammer': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Spaceship': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        'Stollery': ['Stoll1', 'Stoll2', 'Stoll3', 'Stoll4', 'Stoll5', 'Stoll6'],
        'Pinwheel': ['P1', 'P2', 'P3'],
        'Two-Face': ['TF1', 'TF2', 'TF3', 'TF4'],
        'Turtle': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        'Pinwheel Poser': ['PP1', 'PP2', 'PP3', 'PP4', 'PP5', 'PP6'],
        'Gun': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        'REG1': {
            'Sune': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            'Anti-Sune': ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'],
            'Pi': ['Pi1', 'Pi2', 'Pi3', 'Pi4', 'Pi5', 'Pi6'],
            'U': ['U1', 'U2', 'U3', 'U4', 'U5', 'U6'],
            'L': ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
            'T': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            'H': ['H1', 'H2', 'H3', 'H4']
        },
        'FEG1': {
            'Sune': ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            'Anti-Sune': ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'],
            'Pi': ['Pi1', 'Pi2', 'Pi3', 'Pi4', 'Pi5', 'Pi6'],
            'U': ['U1', 'U2', 'U3', 'U4', 'U5', 'U6'],
            'L': ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
            'T': ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            'H': ['H1', 'H2', 'H3', 'H4']
        },
    };
    
    const groupCaseNames = groupStructures[methodName];
    if (!groupCaseNames) {
        console.error(`Структура для метода "${methodName}" не найдена`);
        return {};
    }
    
    // Инициализируем пустые массивы
    for (const group in groupCaseNames) {
        for (const caseName of groupCaseNames[group]) {
            algorithms[caseName] = [];
        }
    }
    
    let currentGroup = '';
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i].trim();
        if (!row) continue;
        
        const columns = row.split(',');
        
        // Заголовок группы
        if (columns.length >= 7 && columns[0] && !columns[1]) {
            currentGroup = columns[0].trim();
            continue;
        }
        
        if (currentGroup && groupCaseNames[currentGroup]) {
            const caseNamesForGroup = groupCaseNames[currentGroup];
            
            for (let j = 1; j < columns.length; j++) {
                const alg = columns[j].trim();
                if (alg && j - 1 < caseNamesForGroup.length) {
                    const caseName = caseNamesForGroup[j - 1];
                    algorithms[caseName].push(alg);
                }
            }
        }
    }
    
    return algorithms;
}

// ========== КЭШ ДЛЯ ПАРСИНГА ==========

const algorithmsCache = {};

function getAlgorithmsForCase(caseKey) {
    // Если ещё не парсили для этого метода, парсим
    if (!algorithmsCache[CURRENT_METHOD]) {
        let csvData;
        switch(CURRENT_METHOD) {
            case 'CLL':
                csvData = CLL_CSV;
                break;
            case 'EG1':
                csvData = EG1_CSV;
                break;
            case 'EG2':
                csvData = EG2_CSV;
                break;
            case 'TCLL+':
                 csvData = TCLL_PLUS_CSV;
                break;
            case 'TCLL-':
                 csvData = TCLL_MINUS_CSV;
                break;
            case 'TEG2+':
                 csvData = TEG2_PLUS_CSV;
                break;
            case 'TEG2-':
                 csvData = TEG2_MINUS_CSV;
                 break;
            case 'LEG1':
                 csvData = LEG1_CSV;
                 break;
            case 'Pbl':
                 csvData = Pbl_CSV;
                 break;
            case 'Oll':
                 csvData = Oll_CSV;
                 break;
            case 'TEG1- a':
                 csvData = TEG1_MINUS_A_CSV;
                break;
            case 'TEG1+ a':
                 csvData = TEG1_PLUS_A_CSV;
                 break;
             case 'TEG1- b':
                 csvData = TEG1_MINUS_B_CSV;
                break;
            case 'TEG1+ b':
                 csvData = TEG1_PLUS_B_CSV;
                 break;
            case 'TEG1- c':
                 csvData = TEG1_MINUS_C_CSV;
                break;
            case 'TEG1+ c':
                 csvData = TEG1_PLUS_C_CSV;
                 break;
             case 'TEG1- d':
                 csvData = TEG1_MINUS_D_CSV;
                break;
            case 'TEG1+ d':
                 csvData = TEG1_PLUS_D_CSV;
                 break;
            case 'REG1':
                csvData = REG1_CSV;
                break;
            case 'FEG1':
                csvData = FEG1_CSV;
                break;
            default:
                console.error(`CSV для метода "${CURRENT_METHOD}" не найден`);
                return [];
        }
        
        algorithmsCache[CURRENT_METHOD] = parseAlgCsv(csvData, CURRENT_METHOD);
    }
    
    // Возвращаем алгоритмы для конкретного случая
    return algorithmsCache[CURRENT_METHOD][caseKey] || [];
}

// ========== ДЛЯ ОБРАТНОЙ СОВМЕСТИМОСТИ ==========

// Оставляем старый парсер (если он используется где-то ещё в коде)
function parseCllCsv(csvString) {
    return parseAlgCsv(csvString, 'CLL');
}

// Парсим CLL (для обратной совместимости)
const cllAlgorithms = parseCllCsv(CLL_CSV);



// Функция для получения алгоритмов (пока только для CLL)


// ========== СОЗДАНИЕ СЕТКИ ==========

function updateGridRows() {
    const gridElement = document.getElementById('grid');
    if (gridElement) {
        gridElement.style.gridTemplateRows = `repeat(${TOTAL_CASES}, 150px)`;
    }
}

function createGrid() {
    initRowStates();
    updateGridRows();
    
    const grid = document.getElementById('grid');
    if (!grid) {
        console.error('Элемент с id="grid" не найден');
        return;
    }
    
    const rowElementsMap = {};
    
    for (let group = 0; group < CasesNames.length; group++) {
        const casesInThisGroup = casesPerGroup[group];
        const groupName = CasesNames[group];
        const groupImgPrefix = CasesNamesImgs[group];
        
        for (let caseInGroup = 1; caseInGroup <= casesInThisGroup; caseInGroup++) {
            const fullCaseName = groupName + caseInGroup;
            const imgFileName = groupImgPrefix + caseInGroup + ".png";
            const caseKey = groupImgPrefix + caseInGroup;
            
            const currentRowElements = [];
            
            // Имя кейса
            let caseElement = document.createElement('p');
            caseElement.textContent = fullCaseName;
            currentRowElements.push(caseElement);
            grid.append(caseElement);
            
            // Картинка
            let img = document.createElement('img');
            img.src = IMAGES_FOLDER + imgFileName;
            img.alt = fullCaseName + " case";
            currentRowElements.push(img);
            grid.append(img);
            
            // Контейнер для алгоритмов
            let algoritmDiv = document.createElement('div');
            algoritmDiv.className = "flexbox";
            currentRowElements.push(algoritmDiv);
            
            // Алгоритмы
            const caseAlgorithms = getAlgorithmsForCase(caseKey);
            
            for (let algNum = 0; algNum < 4; algNum++) {
                let algoritm = document.createElement('p');
                
                if (algNum < caseAlgorithms.length) {
                    algoritm.textContent = caseAlgorithms[algNum];
                } else {
                    algoritm.textContent = "";
                }
                
                algoritmDiv.append(algoritm);
            }
            
            grid.append(algoritmDiv);
            rowElementsMap[caseKey] = currentRowElements;
            
            // Обработчики кликов
            currentRowElements.forEach(element => {
                element.style.cursor = 'pointer';
                const clickHandler = function(event) {
                    changeRowState(caseKey, currentRowElements, event);
                };
                element._rowClickHandler = clickHandler;
                element.addEventListener('click', clickHandler);
            });
            
            // Восстанавливаем состояние
            if (rowStates[caseKey] !== undefined) {
                updateRowAppearance(currentRowElements, rowStates[caseKey]);
            }
        }
    }
    
    return rowElementsMap;
}

// ========== КНОПКА СБРОСА ==========

function addResetButton() {
    const grid = document.getElementById('grid');
    if (!grid) return;
    
    const resetButton = document.createElement('button');
    resetButton.textContent = `Сбросить прогресс ${CURRENT_METHOD}`;
    resetButton.style.cssText = `
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    resetButton.classList.add("resetButtoner");

    resetButton.addEventListener('click', function() {
        if (confirm(`Сбросить весь прогресс для ${CURRENT_METHOD}?`)) {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            location.reload();
        }
    });
    
    grid.parentNode.insertBefore(resetButton, grid);
}

// ========== ИНФОРМАЦИЯ ==========

function addInfoText() {
    const infoText = document.createElement('div');
    infoText.innerHTML = `
        <div style="text-align: center; font-size: 14px; color: #aaa; margin: 10px auto; max-width: 800px;">
            <p> При нажатии на случай, фон и фаза случая изменяется</p>
            <p style="font-size: 30px; margin: 5px 0;">
                Метод: <strong>${CURRENT_METHOD}</strong> | Ситуаций: <strong>${TOTAL_CASES}</strong>
            </p>
        </div>
    `;
    
    const resetButton = document.querySelector('.resetButtoner');
    if (resetButton) {
        resetButton.parentNode.insertBefore(infoText, resetButton.nextSibling);
    }
}

// ========== ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ==========

document.addEventListener('DOMContentLoaded', function() {
    // Создаем сетку
    createGrid();
    
    // Обновляем счётчики
    updateCounters();
    
    // Добавляем кнопку сброса
    addResetButton();
    
    // Добавляем информацию
    addInfoText();
    
    // Обновляем заголовок
    document.title = `SpeedCube - ${CURRENT_METHOD} Algorithms`;
});


// Выбор Тренинг/Алгоритмы

const SelectDiv = document.createElement('div');
const trainer = document.createElement('div');
const trainerScramble = document.createElement('div');

SelectDiv.id = "SelectDiv";
trainer.id = "trainer";
trainerScramble.id = "trainScram";

const AfterWhat = document.getElementById('counters');
const body = document.querySelectorAll("body");


AfterWhat.insertAdjacentElement('afterend', SelectDiv)
body[0].append(trainerScramble);
body[0].append(trainer);

SelectDiv.innerHTML = `
<div style="text-align: center;" class="hidden">
    <h1 style="display: inline-block; margin-left: 30px; margin-right: 30px;" id="algH1" class="underline">Алгоритмы</h1>
    <h1 style="display: inline-block; margin-left: 30px; margin-right: 30px;" id="treiH1">Тренировка</h1>
</div>
`  

// Генерация скрамбла

let scramble = "R U2 R' U' R U' R'";

function genScramble() {
    let min = Math.ceil(1);
    let max = Math.floor(TOTAL_CASES);
    let caseNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return caseNumber;
}

// тренировка

trainerScramble.innerHTML = `
<h1 style="color: white;
    border: solid white 5px; text-align: center;" class="hidden">${scramble}</h1>
`

trainer.innerHTML = `
<div id="trainerDiv" class="hidden">
    <h1 style="font-size: 100px; padding: 200px;" id="timer">0.00</h1>
    <div id="solves" class="hidden">
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
        <p>2.04</p>
        <p>1.54</p>
        <p>4.26</p>
        <p>3.87</p>
        <p>1.08</p>
        <p>1.93</p>
    </div>
    <div id="means" class="hidden">
        <h1 style=" color: rgb(128, 128, 128);">Сброс</h1>
        <h1>Текущее</h1>
        <h1>Лучшее</h1>
        <h1>Время</h1>
        <h1>0.2</h1>
        <h1>0.2</h1>
        <h1>ao5</h1>
        <h1>0.23</h1>
        <h1>0.23</h1>
        <h1>ao12</h1>
        <h1>0.28</h1>
        <h1>0.28</h1>
        <h1>Среднее</h1>
        <h1>0.3</h1>
    </div>
</div>
`



let buttonCliked = 1;

gridR = document.getElementById("grid");
treiH1 = document.getElementById("treiH1");
algH1 = document.getElementById("algH1");
gridR.classList.add("dispGrid");

treiH1.addEventListener('click', function() { 
    if (buttonCliked === 1) {
        treiH1.classList.add("underline");
        algH1.classList.remove("underline");
        gridR.classList.add("hidden")
        gridR.classList.remove("dispGrid")
        buttonCliked = 2;
    }
 }); 

 algH1.addEventListener('click', function() { 
    if (buttonCliked === 2) {
        treiH1.classList.remove("underline");
        algH1.classList.add("underline");
        gridR.classList.remove("hidden")
        gridR.classList.add("dispGrid")
        buttonCliked = 1;
    }
 });

 
 const footer = document.createElement("div");
 body[0].append(footer);
 footer.innerHTML = `
 <div class="footer">
            <hr>
            <h1>Site by Vindam</h1>
            <br>
            <h1>Algorithms are taken from <a class="link"href=https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0owTThtSG9Bd0o1RGNfU2R4ODFTenU3eERvQXxBQ3Jtc0tuRFF5clRYU3k4MUp4S3VET3hjaEptVkxjSGdLS1F3U0RMWGJ0cUhoWFlyWXFLbGtWeDZGTGVjX2Y4ZVRDLWU2dUd3c19ZVnliTDlPcGtDbXFrbVlaMXNpRHBiM0QxUzBpZEdxX3JyekE4WTVXLVpOaw&q=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1OFXakCV85Mp2zsQBXMxiMX9a506JeAcLnUXZr8FgXAY&v=q8ddewPrlhA>here</a> </h1>
        </div>
        `

console.log("window.CURRENT_METHOD");