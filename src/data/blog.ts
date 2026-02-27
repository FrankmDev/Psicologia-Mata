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
    title: "¿Por qué la terapia individual funciona?",
    excerpt: "No se trata de tener a alguien que te diga qué hacer. Se trata de tener un espacio donde puedas ser tú mismo, sin filtros, sin prisas.",
    date: "15 Enero 2025",
    dateShort: "15 Ene",
    readTime: "5 min",
    category: "Bienestar",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La gente suele pensar que ir a terapia es para cuando "estás mal". Pero la verdad es que la terapia es para cualquiera que quiera entenderse mejor, sentirse mejor, o simplemente tener un espacio donde no tener que cuidar lo que dice.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Espacio tranquilo para reflexión" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">A veces necesitamos simplemente un lugar donde poder ser nosotros mismos</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Lo que realmente pasa en terapia</h2>
      
      <p>No es magia. No te voy a decir qué tienes que hacer con tu vida. Lo que hacemos es sentarnos a hablar, a entender por qué sientes lo que sientes, y a encontrar formas de que te sientas mejor.</p>
      
      <p class="mt-4">Es un espacio donde puedes traer todo: lo que te da vergüenza, lo que no entiendes, lo que te duele. Sin juzgarte, sin prisas.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Entenderte mejor</h3>
          <p class="text-sm text-stone/70">A veces hacemos cosas y no sabemos por qué. La terapia ayuda a conectar esos puntos, a entender los patrones que repetimos sin darnos cuenta.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Manejar la ansiedad</h3>
          <p class="text-sm text-stone/70">La ansiedad no desaparece mágicamente, pero aprendes a llevarla mejor. Técnicas concretas que puedes usar cuando todo se vuelve demasiado.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Mejores relaciones</h3>
          <p class="text-sm text-stone/70">Cuando entiendes cómo funcionas tú, entiendes mejor a los demás. Y eso cambia todo: pareja, familia, amigos, trabajo.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Decidir con claridad</h3>
          <p class="text-sm text-stone/70">Cuando sabes quién eres y qué quieres, las decisiones dejan de ser tan difíciles. Dejas de hacer caso al "deberías" y escuchas lo que tú necesitas.</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">El primer paso es el más difícil</h2>
      
      <p class="text-lg">Reconocer que necesitas ayuda no es debilidad. Es inteligencia. Es cuidarte. Si estás pensando en dar este paso, ya has dado el más importante: el de admitir que mereces sentirte mejor.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Tienes dudas sobre la terapia?</p>
        <p class="text-stone/70 mb-4">Pregunta lo que necesites. La primera consulta es simplemente una conversación para ver si encajamos.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Hablamos <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "comunicacion-pareja": {
    slug: "comunicacion-pareja",
    title: "Cuando hablar no sirve de nada",
    excerpt: "Hablan, hablan, pero no se entienden. Si esto te suena familiar, no estás solo. La comunicación en pareja puede mejorar, pero no de la forma que piensas.",
    date: "8 Enero 2025",
    dateShort: "8 Ene",
    readTime: "7 min",
    category: "Relaciones",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">"Hablamos pero no nos entendemos". Lo escucho constantemente en consulta. Y la verdad es que hablar no siempre es comunicar. A veces hablamos más para defendernos que para entendernos.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80" alt="Pareja conversando" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La comunicación real implica escuchar, no solo hablar</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Por qué no nos entendemos</h2>
      
      <p>A menudo lo que hacemos es monólogo disfrazado de diálogo. Uno habla, el otro espera su turno para rebatir. Ninguno escucha de verdad. Y al final, ambos se sienten más solos que al principio.</p>
      
      <div class="space-y-8 my-8">
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">1</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Escuchar de verdad</h3>
            <p class="text-stone/70">No es solo oír palabras. Es intentar entender qué siente la otra persona, aunque no estés de acuerdo. Es ponerse en su lugar antes de responder.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">2</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Hablar de ti, no del otro</h3>
            <p class="text-stone/70">"Tú siempre..." "Tú nunca..." eso solo hace que el otro se defienda. Prueba con "Yo me siento... cuando...". Verás la diferencia.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">3</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Elegir el momento</h3>
            <p class="text-stone/70">No todas las conversaciones son para cualquier momento. A veces es mejor decir "¿Podemos hablar de esto más tarde?" que soltarlo todo en medio de una discusión.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">4</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Validar antes de opinar</h3>
            <p class="text-stone/70">No tienes que estar de acuerdo para entender. Un "entiendo que te sientas así" abre más puertas que todo un discurso sobre por qué no debería sentirse así.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿Sientes que vuestra comunicación se ha roto?</p>
        <p class="text-stone/70 mb-4">La terapia de pareja no es para cuando todo está perdido. Es para cuando queréis intentarlo de verdad.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Saber más <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "gestion-ansiedad": {
    slug: "gestion-ansiedad",
    title: "Cuando el pecho se aprieta",
    excerpt: "La ansiedad no es debilidad. Es tu cuerpo intentando protegerte de algo que percibe como peligroso. Aquí te cuento cómo puedes ayudarte a ti mismo.",
    date: "2 Enero 2025",
    dateShort: "2 Ene",
    readTime: "6 min",
    category: "Salud Mental",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La ansiedad no es un defecto. Es una respuesta natural que se ha vuelto demasiado sensible. Tu cerebro está intentando protegerte, pero está detectando peligros donde no los hay. Entender esto ya es el primer paso.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=1200&q=80" alt="Persona practicando mindfulness" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La respiración es tu aliada más poderosa contra la ansiedad</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Técnicas que funcionan de verdad</h2>
      
      <p>No son milagros, pero funcionan si las practicas. La clave está en usarlas cuando la ansiedad está aún baja, no esperar a que sea una tormenta.</p>
      
      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Respirar bien</h3>
          <p class="text-sm text-stone/70">Inhala 4 segundos, mantén 4, exhala 4. Repite varias veces. Activa tu sistema nervioso parasimpático y el cuerpo empieza a calmarse.</p>
        </div>
        
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">5-4-3-2-1</h3>
          <p class="text-sm text-stone/70">Cuando sientes que te desconectas: 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas. Te devuelve al presente.</p>
        </div>
        
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Cuestionar los "y si..."</h3>
          <p class="text-sm text-stone/70">Tu mente te dice lo peor que puede pasar. Pregúntale: ¿Cuál es la evidencia? ¿Qué le diría a un amigo en mi situación?</p>
        </div>
      </div>
      
      <p class="text-lg mt-4">Pedir ayuda no es rendirse. Es inteligente. Es cuidarte. Si la ansiedad está limitando tu vida, mereces apoyo profesional.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿La ansiedad te está controlando?</p>
        <p class="text-stone/70 mb-4">No tienes que pasar por esto solo. La terapia puede darte herramientas específicas para recuperar tu vida.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Hablamos <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "autoestima-saludable": {
    slug: "autoestima-saludable",
    title: "¿Por qué es tan difícil querernos?",
    excerpt: "No nacemos odiándonos. Aprendemos a hacerlo. Y lo bueno es que lo que se aprende, se puede desaprender. Aquí te cuento cómo empezar.",
    date: "28 Diciembre 2024",
    dateShort: "28 Dic",
    readTime: "6 min",
    category: "Crecimiento Personal",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La autoestima no es sentirse el mejor del mundo. Es simplemente aceptarte como eres: con tus fallos, con tus aciertos, con tu historia. Es dejar de ser tu peor crítico.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Persona reflexionando" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">Quererse no es egoísmo, es necesario</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Cómo nos hablamos a nosotros mismos</h2>
      
      <p>Fíjate en tu diálogo interno. ¿Serías tan duro con un amigo como lo eres contigo? Probablemente no. Esa voz crítica que llevas dentro no es la verdad, es solo un hábito que puedes cambiar.</p>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Señales de que tu autoestima necesita cuidado</h2>
      
      <div class="bg-bg-muted border border-border-light rounded-2xl p-6 my-8">
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Te criticas constantemente, incluso por cosas pequeñas</span>
          </li>
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>No puedes aceptar un cumplido sin rebajarlo</span>
          </li>
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Tienes miedo de intentar cosas nuevas por si fracasas</span>
          </li>
          <li class="flex items-start gap-3 text-text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
            <span>Necesitas la aprobación de otros para sentirte bien</span>
          </li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Pequeños pasos para sentirte mejor contigo</h2>
      
      <div class="space-y-6 my-8">
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">1. Presta atención a tu diálogo interno</h3>
          <p class="text-stone/70 text-sm">Cuando te catches siendo duro contigo, pregúntate: "¿Le diría esto a alguien a quien quiero?" Si la respuesta es no, cambia el mensaje.</p>
        </div>
        
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">2. Celebra lo pequeño</h3>
          <p class="text-stone/70 text-sm">No esperes a lograr algo grande para sentirte bien. Levantarte un día difícil ya es mérito. Dímelo a ti mismo.</p>
        </div>
        
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">3. Aprende a decir no</h3>
          <p class="text-stone/70 text-sm">Poner límites no es ser egoísta. Es respetarte. Y cuando te respetas tú, otros te respetan más.</p>
        </div>
        
        <div class="bg-bg-muted p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">4. Rodéate de gente que te sube</h3>
          <p class="text-stone/70 text-sm">Hay personas que te hacen sentir bien contigo y otras que no. Elige con quién pasas tu tiempo.</p>
        </div>
      </div>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Quieres trabajar en tu relación contigo mismo?</p>
        <p class="text-stone/70 mb-4">La terapia es un espacio seguro para aprender a quererte de verdad, no solo a soportarte.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Hablamos <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
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
