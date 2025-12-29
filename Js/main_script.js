const quizData = {
    "🗃️ \n Base de donnée": [
        { q: "Quelle est la capitale de la France ?", options: ["Lyon", "Marseille", "Paris"], answer: 2 },
        { q: "Quel fleuve traverse l'Égypte ?", options: ["Le Nil", "L'Amazone", "Le Rhin"], answer: 0 }
    ],
    "🌐 \n Html": [
        { q: "Que signifie HTML ?", options: ["HyperText Markup Language", "High Tech Multi Language", "Home Tool Money Line"], answer: 0 },
        { q: "Comment créer un lien hypertexte ?", options: ["<link>", "<a>", "<href>"], answer: 1 },
        { q: "Quel attribut est utilisé pour spécifier l'URL d'un lien ?", options: ["src", "href", "link"], answer: 1 },
        { q: "Quel élément HTML est utilisé pour insérer une image ?", options: ["<img>", "<image>", "<picture>"], answer: 0 },
        { q: "Quel attribut est utilisé pour définir le texte alternatif d'une image ?", options: ["src", "title", "alt"], answer: 2 }
        
    ],
    "👨‍💻 \n Java Scipt": [
        { q: "En quelle année est né JavaScript ?", options: ["1990", "1995", "2005"], answer: 1 },
        { q: "Comment déclare-t-on une variable en JavaScript ?", options: ["var", "let", "const", "Toutes les réponses sont correctes"], answer: 3 },
        { q: "Quelle méthode est utilisée pour afficher un message dans la console ?", options: ["console.log()", "print()", "alert()"], answer: 0 },
        { q: "Comment créer une fonction en JavaScript ?", options: ["function maFonction() {}", "def maFonction() {}", "func maFonction() {}"], answer: 0 },
        { q: "Quel opérateur est utilisé pour l'égalité stricte ?", options: ["==", "===", "="], answer: 1 }
    ],
    "🎨 \n CSS": [
        { q: "Que signifie CSS ?", options: ["Cascading Style Sheet", "Creative Solutions Strategy", "Central Security System"], answer: 0 },
        { q: "Comment séléctionner un élément avec un id identifiant ?", options: [".identifiant", "#identifiant", "identifiant"], answer: 1 },
        { q: "Quelle propriété est utilisée pour changer la couleur de fond ?", options: ["color", "background-color", "font-color"], answer: 1 },
        { q: "Comment centrer un texte horizontalement ?", options: ["text-align: center;", "align: center;", "center-text;"], answer: 0 },
        { q: "Quelle propriété est utilisée pour définir l'espacement entre les lettres ?", options: ["letter-spacing", "word-spacing", "text-spacing"], answer: 0 }

    ],
    "☕ \n Java": [
        { q: "Java est un langage ___", options: ["compilé", "interprété", "compilé et interprété"], answer: 2 },
        { q: "Comment faire un commentaire sur une ligne ?", options: ["//", "%", "/*"], answer: 0 },
        { q: "Quelle est la méthode principale pour exécuter un programme Java ?", options: ["main()", "start()", "run()"], answer: 0 },
        { q: "Quel mot-clé est utilisé pour hériter d'une classe ?", options: ["implements", "extends", "inherits"], answer: 1 },
        { q: "Quelle bibliothèque est utilisée pour les entrées/sorties en Java ?", options: ["java.io", "java.util", "java.net"], answer: 0 }
    ],
    "🤖 \n AI": [
        { q: "Que signifie IA ?", options: ["Intelligence Artificielle", "Interface Avancée", "Internet Automatisé"], answer: 0 },
        { q: "Quel est un exemple populaire de framework d'IA ?", options: ["TensorFlow", "React", "Django"], answer: 0 },
        { q: "Quel type d'algorithme est couramment utilisé pour la reconnaissance d'images ?", options: ["Réseaux de neurones convolutifs", "Arbres de décision", "K-means"], answer: 0 },
        { q: "Quel est le terme pour l'apprentissage à partir de données étiquetées ?", options: ["Apprentissage supervisé", "Apprentissage non supervisé", "Apprentissage par renforcement"], answer: 0 },
        { q: "Quel langage de programmation est largement utilisé en IA ?", options: ["Python", "HTML", "CSS"], answer: 0 }
    ],
    "💰📈 \n Economie numérique": [
        { q: "Qu'est-ce que l'économie numérique ?", options: ["L'économie basée sur les ressources naturelles", "L'économie basée sur les technologies numériques", "L'économie basée sur le commerce traditionnel"], answer: 1 },
        { q: "Quel est un exemple de plateforme d'économie numérique ?", options: ["Amazon", "Walmart", "IKEA"], answer: 0 },
        { q: "Quel terme décrit les transactions en ligne entre entreprises et consommateurs ?", options: ["E-commerce", "Commerce de détail", "Marketing digital"], answer: 0 },
        { q: "Quel est l'impact de l'économie numérique sur l'emploi ?", options: ["Création de nouveaux emplois", "Destruction d'emplois traditionnels", "Les deux"], answer: 2 },
        { q: "Quel est un défi majeur de l'économie numérique ?", options: ["Sécurité des données", "Transport des marchandises", "Gestion des stocks"], answer: 0 }
    ],
    "📊 \n Statistiques Inférentielles": [
        { q: "Qu'est-ce que la statistique inférentielle ?", options: ["L'analyse des données collectées", "La prise de décisions basées sur des échantillons", "La collecte de données"], answer: 1 },
        { q: "Quel est un exemple de test statistique inférentiel ?", options: ["Test t de Student", "Moyenne arithmétique", "Médiane"], answer: 0 },
        { q: "Quel terme décrit la probabilité de rejeter une hypothèse nulle vraie ?", options: ["Erreur de type I", "Erreur de type II", "Puissance du test"], answer: 0 },
        { q: "Quel est le but principal de l'inférence statistique ?", options: ["Estimer les paramètres de la population", "Collecter des données", "Présenter des données"], answer: 0 },
        { q: "Quel est un concept clé en statistique inférentielle ?", options: ["Intervalle de confiance", "Moyenne mobile", "Histogramme"], answer: 0 }
    ]
};

// 2. VARIABLES D'ÉTAT
let totalXP = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;

// 3. ÉLÉMENTS HTML
const menuEl = document.getElementById('menu');
const questionAreaEl = document.getElementById('question-area');
const subjectListEl = document.getElementById('subject-list');
const optionsListEl = document.getElementById('options-list');
const scoreDisplay = document.getElementById('total-xp');

// 4. FONCTIONS
function initMenu() {
    subjectListEl.innerHTML = '';
    Object.keys(quizData).forEach(subject => {
        const btn = document.createElement('button');
        btn.className = 'subject-btn';
        btn.innerText = subject;
        btn.onclick = () => startQuiz(subject);
        subjectListEl.appendChild(btn);
    });
}

function startQuiz(subject) {
    currentQuestions = quizData[subject];
    currentQuestionIndex = 0;
    document.getElementById('current-subject').innerText = subject;
    menuEl.classList.add('hidden');
    questionAreaEl.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const data = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('feedback').innerText = '';
    optionsListEl.innerHTML = '';

    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsListEl.appendChild(btn);
    });
}

function checkAnswer(choice) {
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback');
    
    // Désactiver les boutons pour éviter le double-clic
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    if (choice === correctAnswer) {
        totalXP += 50;
        scoreDisplay.innerText = totalXP;
        feedback.innerText = "✨ Correct ! +50 XP";
        feedback.style.color = "#4A6644";
    } else {
        feedback.innerText = "❌ Mauvaise réponse";
        feedback.style.color = "#C66F80";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            finishSubject();
        }
    }, 1500);
}

function finishSubject() {
    alert(`Matière terminée ! Score actuel : ${totalXP} XP`);
    questionAreaEl.classList.add('hidden');
    menuEl.classList.remove('hidden');
}

// Lancement au chargement
initMenu();