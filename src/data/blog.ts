export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateShort: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: Record<string, BlogPost> = {
  "beneficios-terapia-individual": {
    slug: "beneficios-terapia-individual",
    title: "Los beneficios de la terapia individual",
    excerpt: "Descubre cómo la terapia individual puede ayudarte a superar obstáculos emocionales, mejorar tu autoestima y alcanzar una vida más plena y satisfactoria.",
    date: "15 Enero 2025",
    dateShort: "15 Ene",
    readTime: "5 min",
    category: "Bienestar",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La terapia individual es un proceso de autoconocimiento y crecimiento que permite explorar aspectos profundos de nuestra personalidad, emociones y comportamientos. A diferencia de otros enfoques terapéuticos, se centra exclusivamente en ti y tus necesidades específicas.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Espacio tranquilo para reflexión" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">Un espacio seguro permite la introspección y el crecimiento personal</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Beneficios principales</h2>
      
      <p>Es un espacio confidencial donde, junto con un profesional de la psicología, exploras tus pensamientos, emociones y comportamientos. El objetivo no es solo aliviar el malestar, sino también desarrollar herramientas que te permitan enfrentar los desafíos de la vida de manera más efectiva.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Autoconocimiento</h3>
          <p class="text-sm text-stone/70">Aprendes a conocerte mejor, a entender por qué reaccionas de cierta manera y a identificar patrones de pensamiento que pueden estar limitándote.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Manejo del estrés</h3>
          <p class="text-sm text-stone/70">Desarrollas técnicas específicas para manejar la ansiedad y el estrés de manera efectiva, herramientas que puedes aplicar en tu día a día.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Mejora de relaciones</h3>
          <p class="text-sm text-stone/70">Aunque es una terapia individual, el trabajo personal impacta positivamente en todas tus relaciones interpersonales.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Toma de decisiones</h3>
          <p class="text-sm text-stone/70">Clarificas tus valores y objetivos, lo que facilita tomar decisiones más alineadas con lo que realmente deseas para tu vida.</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">El primer paso</h2>
      
      <p class="text-lg">Decidir iniciar terapia es ya un acto de valentía y autocuidado. Si estás considerando dar este paso, te invito a contactar para una primera consulta donde podamos conocernos y evaluar cómo puedo ayudarte.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Tienes alguna pregunta sobre la terapia?</p>
        <p class="text-stone/70 mb-4">Estoy aquí para resolver tus dudas. La primera consulta es una oportunidad para conocernos sin compromiso.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Reservar consulta <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "comunicacion-pareja": {
    slug: "comunicacion-pareja",
    title: "Mejorar la comunicación en pareja",
    excerpt: "La comunicación efectiva es el pilar de toda relación saludable. Aprende técnicas prácticas para fortalecer el vínculo con tu pareja.",
    date: "8 Enero 2025",
    dateShort: "8 Ene",
    readTime: "7 min",
    category: "Relaciones",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La comunicación es la base sobre la que se construye toda relación de pareja. Cuando falla, surgen malentendidos, resentimientos y distanciamiento. Cuando funciona, crea intimidad, confianza y conexión profunda.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80" alt="Pareja conversando" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La comunicación abierta es fundamental para una relación saludable</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Estrategias para mejorar</h2>
      
      <p>A menudo pensamos que comunicarnos es simplemente hablar, pero la comunicación efectiva implica mucho más: escuchar activamente, validar las emociones del otro, expresar nuestras necesidades de forma clara y respetuosa, y estar dispuestos a comprometernos.</p>
      
      <div class="space-y-8 my-8">
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">1</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Escucha activa</h3>
            <p class="text-stone/70">No se trata solo de oír las palabras, sino de entender el mensaje emocional detrás de ellas.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">2</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Mensajes "yo"</h3>
            <p class="text-stone/70">En lugar de decir "tú siempre..." o "tú nunca...", expresa cómo te sientes: "Yo me siento... cuando... porque...".</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">3</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Elegir el momento</h3>
            <p class="text-stone/70">No todas las conversaciones deben tener lugar en cualquier momento. Pide a tu pareja cuándo sería un buen momento para hablar.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">4</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Validar emociones</h3>
            <p class="text-stone/70">Aunque no estés de acuerdo con la postura de tu pareja, puedes validar sus sentimientos.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿Tu relación necesita un impulso?</p>
        <p class="text-stone/70 mb-4">La terapia de pareja puede ayudaros a reconectar y construir una comunicación más sana.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Saber más sobre terapia de pareja <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "gestion-ansiedad": {
    slug: "gestion-ansiedad",
    title: "Estrategias para gestionar la ansiedad",
    excerpt: "La ansiedad es una respuesta natural que podemos aprender a manejar. Técnicas basadas en evidencia científica para tu día a día.",
    date: "2 Enero 2025",
    dateShort: "2 Ene",
    readTime: "6 min",
    category: "Salud Mental",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La ansiedad es una emoción natural y necesaria. Nos alerta ante peligros potenciales y nos prepara para enfrentar desafíos. Sin embargo, cuando se vuelve excesiva o persistente, puede interferir significativamente con nuestra calidad de vida.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=1200&q=80" alt="Persona practicando mindfulness" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La respiración consciente es una herramienta poderosa contra la ansiedad</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Técnicas respaldadas por la ciencia</h2>
      
      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Respiración diafragmática</h3>
          <p class="text-sm text-stone/70">Respirar lenta y profundamente desde el diafragma activa el sistema nervioso parasimpático. Practica: 4 segundos inhalando, 4 manteniendo, 4 exhalando.</p>
        </div>
        
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Grounding o anclaje</h3>
          <p class="text-sm text-stone/70">Cuando la ansiedad te desconecta del presente, usa la técnica 5-4-3-2-1: identifica 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas.</p>
        </div>
        
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Reestructuración cognitiva</h3>
          <p class="text-sm text-stone/70">Cuestiona los pensamientos catastróficos. Pregúntate: ¿Cuál es la evidencia? ¿Qué le diría a un amigo? ¿Cuál es el escenario más realista?</p>
        </div>
      </div>
      
      <p class="text-lg mt-4">Recuerda: pedir ayuda no es un signo de debilidad, sino de inteligencia y autocuidado.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿La ansiedad te está limitando?</p>
        <p class="text-stone/70 mb-4">La terapia puede proporcionarte herramientas específicas para gestionar la ansiedad y recuperar tu calidad de vida.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Solicitar información <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "autoestima-saludable": {
    slug: "autoestima-saludable",
    title: "Construir una autoestima saludable",
    excerpt: "La autoestima es la base de nuestro bienestar emocional. Aprende a cultivar una imagen positiva de ti mismo con estrategias prácticas.",
    date: "28 Diciembre 2024",
    dateShort: "28 Dic",
    readTime: "6 min",
    category: "Crecimiento Personal",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La autoestima no es algo con lo que nacemos, sino una construcción que desarrollamos a lo largo de nuestra vida. Es la valoración que hacemos de nosotros mismos, y tiene un impacto profundo en todas las áreas de nuestra existencia.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Persona reflexionando" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La autoestima se cultiva con práctica y paciencia</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Qué es realmente la autoestima?</h2>
      
      <p>La autoestima saludable no significa pensar que somos perfectos o mejores que los demás. Significa tener una percepción realista y compasiva de nosotros mismos: reconocer nuestras fortalezas sin arrogancia y nuestras áreas de mejora sin autocrítica destructiva.</p>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Señales de autoestima baja</h2>
      
      <div class="bg-bg-muted border border-border-light rounded-2xl p-6 my-8">
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Autocrítica constante y diálogo interno negativo</span>
          </li>
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Dificultad para aceptar cumplidos o reconocimientos</span>
          </li>
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Miedo excesivo al fracaso o al rechazo</span>
          </li>
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Necesidad constante de aprobación externa</span>
          </li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Pasos para fortalecerla</h2>
      
      <div class="space-y-6 my-8">
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">1. Identifica tu diálogo interno</h3>
          <p class="text-stone/70 text-sm">Presta atención a cómo te hablas a ti mismo. ¿Serías tan crítico con un amigo?</p>
        </div>
        
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">2. Celebra tus logros</h3>
          <p class="text-stone/70 text-sm">No solo los grandes. Cada pequeño paso cuenta.</p>
        </div>
        
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">3. Aprende a decir no</h3>
          <p class="text-stone/70 text-sm">Poner límites es un acto de autoestima.</p>
        </div>
        
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">4. Rodéate de personas que te apoyan</h3>
          <p class="text-stone/70 text-sm">Las relaciones que te hacen sentir valioso son esenciales.</p>
        </div>
      </div>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Quieres trabajar en tu autoestima?</p>
        <p class="text-stone/70 mb-4">La terapia te proporciona un espacio seguro para explorar tu valor personal y construir una relación más sana contigo mismo.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Reservar consulta <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  }
};

export const blogPostsList = Object.values(blogPosts);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllPosts(): BlogPost[] {
  return blogPostsList;
}
