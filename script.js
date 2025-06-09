// Datos de los signos zodiacales
const zodiacData = {
    aries: {
        title: "Aries",
        symbol: "♈",
        dates: "Mar 21 - Abr 19",
        element: "Fuego",
        planet: "Marte",
        description: "Los Aries son conocidos por su energía, valentía y determinación. Son líderes naturales que disfrutan de los desafíos y nuevas aventuras. Su espíritu competitivo y su entusiasmo los llevan a ser pioneros en muchas áreas.",
        traits: ["Enérgico", "Valiente", "Impulsivo", "Apasionado", "Honesto", "Adventurero"],
        image: "https://cdn.pixabay.com/photo/2018/01/28/11/24/nature-3113318_1280.jpg"
    },
    taurus: {
        title: "Tauro",
        symbol: "♉",
        dates: "Abr 20 - May 20",
        element: "Tierra",
        planet: "Venus",
        description: "Los Tauro son personas prácticas, decididas y sensibles. Valoran la seguridad y la estabilidad, y tienen un fuerte sentido de la lealtad. Son conocidos por su paciencia y su amor por los placeres sensuales de la vida.",
        traits: ["Práctico", "Leal", "Sensible", "Persistente", "Amante del confort", "Determinado"],
        image: "https://cdn.pixabay.com/photo/2017/06/02/14/20/landscape-2366487_1280.jpg"
    },
    gemini: {
        title: "Géminis",
        symbol: "♊",
        dates: "May 21 - Jun 20",
        element: "Aire",
        planet: "Mercurio",
        description: "Los Géminis son adaptables, curiosos y comunicativos. Tienen mentes ágiles y disfrutan del intercambio de ideas. Su naturaleza dual a veces puede hacer que parezcan inconsistentes, pero también les da una gran capacidad para ver múltiples perspectivas.",
        traits: ["Comunicativo", "Curioso", "Adaptable", "Versátil", "Intelectual", "Expresivo"],
        image: "https://cdn.pixabay.com/photo/2017/09/01/20/23/balloon-2704947_1280.jpg"
    },
    cancer: {
        title: "Cáncer",
        symbol: "♋",
        dates: "Jun 21 - Jul 22",
        element: "Agua",
        planet: "Luna",
        description: "Los Cáncer son emocionales, intuitivos y protectores. Valoran profundamente su hogar y familia, y tienen una gran capacidad para cuidar de los demás. Su naturaleza sensible los hace empáticos, pero también vulnerables.",
        traits: ["Emocional", "Intuitivo", "Protector", "Empático", "Nostálgico", "Cariñoso"],
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg"
    },
    leo: {
        title: "Leo",
        symbol: "♌",
        dates: "Jul 23 - Ago 22",
        element: "Fuego",
        planet: "Sol",
        description: "Los Leo son carismáticos, creativos y seguros de sí mismos. Aman ser el centro de atención y tienen un gran corazón. Su generosidad y entusiasmo por la vida inspiran a quienes los rodean.",
        traits: ["Carismático", "Creativo", "Seguro", "Generoso", "Apasionado", "Leal"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    virgo: {
        title: "Virgo",
        symbol: "♍",
        dates: "Ago 23 - Sep 22",
        element: "Tierra",
        planet: "Mercurio",
        description: "Los Virgo son analíticos, prácticos y perfeccionistas. Tienen una mente aguda para los detalles y un fuerte sentido del servicio. Su modestia a veces oculta su gran sabiduría y capacidad para resolver problemas.",
        traits: ["Analítico", "Práctico", "Perfeccionista", "Modesto", "Organizado", "Servicial"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    libra: {
        title: "Libra",
        symbol: "♎",
        dates: "Sep 23 - Oct 22",
        element: "Aire",
        planet: "Venus",
        description: "Los Libra son diplomáticos, sociales y amantes de la armonía. Buscan el equilibrio en todas las áreas de su vida y tienen un fuerte sentido de justicia. Su encanto natural los hace excelentes mediadores.",
        traits: ["Diplomático", "Social", "Armonioso", "Justo", "Encantador", "Romántico"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    scorpio: {
        title: "Escorpio",
        symbol: "♏",
        dates: "Oct 23 - Nov 21",
        element: "Agua",
        planet: "Plutón",
        description: "Los Escorpio son intensos, apasionados y perceptivos. Tienen una gran fuerza de voluntad y capacidad para transformarse. Su naturaleza misteriosa y su profundidad emocional los hacen fascinantes.",
        traits: ["Intenso", "Apasionado", "Perceptivo", "Valiente", "Misterioso", "Determinado"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    sagittarius: {
        title: "Sagitario",
        symbol: "♐",
        dates: "Nov 22 - Dic 21",
        element: "Fuego",
        planet: "Júpiter",
        description: "Los Sagitario son aventureros, optimistas y amantes de la libertad. Buscan constantemente expandir sus horizontes a través del conocimiento y la experiencia. Su honestidad y sentido del humor los hacen compañeros encantadores.",
        traits: ["Aventurero", "Optimista", "Honesto", "Filósofo", "Extrovertido", "Entusiasta"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    capricorn: {
        title: "Capricornio",
        symbol: "♑",
        dates: "Dic 22 - Ene 19",
        element: "Tierra",
        planet: "Saturno",
        description: "Los Capricornio son disciplinados, responsables y ambiciosos. Tienen una gran capacidad para el trabajo duro y el logro de metas a largo plazo. Su sabiduría práctica y paciencia los llevan al éxito.",
        traits: ["Disciplinado", "Responsable", "Ambicioso", "Paciente", "Práctico", "Sabio"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    aquarius: {
        title: "Acuario",
        symbol: "♒",
        dates: "Ene 20 - Feb 18",
        element: "Aire",
        planet: "Urano",
        description: "Los Acuario son innovadores, humanitarios e independientes. Tienen una mente original y un fuerte deseo de contribuir al bienestar colectivo. Su naturaleza progresista a veces los hace parecer excéntricos.",
        traits: ["Innovador", "Humanitario", "Independiente", "Intelectual", "Amistoso", "Excéntrico"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    },
    pisces: {
        title: "Piscis",
        symbol: "♓",
        dates: "Feb 19 - Mar 20",
        element: "Agua",
        planet: "Neptuno",
        description: "Los Piscis son compasivos, artísticos e intuitivos. Tienen una profunda conexión con el mundo emocional y espiritual. Su sensibilidad y creatividad los hacen excelentes artistas y sanadores.",
        traits: ["Compasivo", "Artístico", "Intuitivo", "Sensible", "Soñador", "Empático"],
        image: "https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028036_1280.png"
    }
};

// Elementos del DOM
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const modalImage = document.getElementById('modal-image');
const signTitle = document.getElementById('sign-title');
const signDates = document.getElementById('sign-dates');
const signElement = document.getElementById('sign-element');
const signPlanet = document.getElementById('sign-planet');
const signDescription = document.getElementById('sign-description');
const signTraits = document.getElementById('sign-traits');

// Event listeners para los signos
document.querySelectorAll('.sign').forEach(sign => {
    sign.addEventListener('click', () => {
        const signName = sign.getAttribute('data-sign');
        const data = zodiacData[signName];
        
        // Actualizar el modal con los datos
        modalImage.style.backgroundImage = `url(${data.image})`;
        signTitle.textContent = `${data.title} ${data.symbol}`;
        signDates.textContent = data.dates;
        signElement.textContent = data.element;
        signPlanet.textContent = data.planet;
        signDescription.textContent = data.description;
        
        // Actualizar los rasgos
        signTraits.innerHTML = '';
        data.traits.forEach(trait => {
            const traitElement = document.createElement('span');
            traitElement.className = 'trait';
            traitElement.textContent = trait;
            signTraits.appendChild(traitElement);
        });
        
        // Mostrar el modal
        modal.classList.add('active');
    });
});

// Cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Cerrar al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Cerrar con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// Colocar los signos en un círculo perfecto
function positionSigns() {
    const wheel = document.querySelector('.zodiac-wheel');
    const containers = document.querySelectorAll('.sign-container');
    const centerX = wheel.offsetWidth / 2;
    const centerY = wheel.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    
    containers.forEach((container, index) => {
        // 30° de separación (360°/12 signos)
        const angle = (index * 30 - 90) * (Math.PI / 180); // -90 para empezar en la parte superior
        const x = centerX + radius * Math.cos(angle) - container.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - container.offsetHeight / 2;
        
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', positionSigns);
window.addEventListener('resize', positionSigns);