const i18n = {
  currentLang: 'es',
  translations: {
    es: {
      /* Navbar */
      'nav.inicio': 'Inicio',
      'nav.proyectos': 'Proyectos',
      'nav.perfil': 'Perfil',
      'nav.contacto': 'Contacto',
      'nav.casos': 'Casos de estudio',
      'nav.aria': 'Navegación principal',
      'nav.abrir': 'Abrir menú',
      'skip': 'Saltar al contenido',

      /* Footer */
      'footer.text': '© 2026 Daniela Serrano. Product Designer.',
      'footer.linkedin': 'LinkedIn',

      /* Labels */
      'label.nombre': 'Nombre',
      'label.email': 'Email',
      'label.mensaje': 'Mensaje',
      'placeholder.nombre': 'Tu nombre',
      'placeholder.email': 'tu@email.com',
      'placeholder.mensaje': 'Cuéntame sobre tu proyecto...',
      'form.success': 'Mensaje enviado correctamente. Te contactaré pronto.',
      'form.error': 'Error al enviar. Intenta de nuevo.',
      'btn.enviar': 'Enviar mensaje',
      'btn.descargar': 'Descargar CV',
      'btn.ver': 'Ver proyectos',
      'btn.ver-todos': 'Ver todos',
      'btn.contactame': 'Contáctame',
      'btn.volver': 'Volver',
      'lang.es': 'Español',
      'lang.en': 'English',
      'btn.enlace': 'Enlace relacionado →',

      /* Hero */
      'hero.name': 'Daniela Serrano',
      'hero.title': 'Diseñadora de productos digitales',
      'hero.subtitle': 'Articulando soluciones digitales complejas con un enfoque humano y estratégico.',

      /* Index */
      'proyectos.titulo': 'Proyectos',
      'proyectos.desc': 'Una selección de casos donde el diseño estratégico generó impacto medible en negocio y usuarios.',
      'index.about.titulo': 'Enfoque sistémico',
      'index.about.texto': 'Más de 7 años diseñando productos digitales que conectan negocio, usuarios y tecnología. Creo en el diseño como herramienta estratégica para generar valor sostenible.',
      'hablemos.titulo': 'Hablemos',
      'hablemos.desc': '¿Buscas una Product Designer que entienda la complejidad de tu producto? Me encantaría conocer tu proyecto.',
      'index.salud.tag': 'UX Lead',
      'index.atencion.tag': 'Product Designer',
      'index.espacio.tag': 'Product Designer',
      'badge.proximamente': 'Próximamente',

      /* Proyectos page */
      'proyectos.h1': 'Proyectos',
      'proyectos.subtitle': 'Una selección de casos donde el diseño estratégico generó impacto medible en negocio y usuarios.',
      'cat.digital': 'Diseño de productos digitales',
      'cat.branding': 'Branding y editorial',
      'cat.exposiciones': 'Diseño de exposiciones',

      /* Perfil page */
      'perfil.h1': 'Perfil',
      'perfil.subtitle': 'Product Designer con más de 7 años de experiencia creando productos digitales.',
      'perfil.nombre': 'Daniela Serrano',
      'perfil.desc': 'Product Designer enfocada en pensamiento sistémico y producto end-to-end. Creo en el diseño como herramienta estratégica para conectar negocio, usuarios y tecnología.',
      'perfil.especialidades': 'Especialidades',
      'perfil.habilidades': 'Habilidades',
      'perfil.experiencia': 'Experiencia',
      'perfil.descargar': 'Descargar CV',

      /* Contacto page */
      'contacto.h1': 'Contacto',
      'contacto.subtitle': '¿Buscas una Product Designer para tu proyecto? Me encantaría conocerlo.',
      'contacto.desc': '¿Tienes un proyecto en mente? ¿Necesitas ayuda definiendo la estrategia de producto? Escríbeme y platiquemos.',

      /* Detail pages */
      'detail.caso': 'Caso de estudio',
      'detail.en-pagina': 'En esta página',
      'detail.desc': 'Descripción',
      'detail.desafio': 'Desafío',
      'detail.proceso': 'Proceso',
      'detail.resultado': 'Resultado',
      'detail.resultados': 'Resultados',
      'detail.habilidades': 'Habilidades',
      'detail.galeria': 'Galería',
      'detail.rol': 'Rol',
      'detail.duracion': 'Duración',
      'detail.equipo': 'Equipo',
      'detail.impacto': 'Impacto',
      'detail.desc-breve': 'Descripción breve',

      /* Casos page */
      'casos.h1': 'Casos de estudio',
      'casos.subtitle': 'Una selección de casos donde el diseño estratégico generó impacto medible en negocio y usuarios.',

      /* Skills tags - shared */
      'skill.pensamiento': 'Pensamiento Sistémico',
      'skill.arq-info': 'Arquitectura de la Información',
      'skill.jtbd': 'Jobs to Be Done (JTBD)',
      'skill.prototipado': 'Prototipado Multiplataforma (iOS, Android, Web)',
      'skill.stakeholders': 'Alineación de Stakeholders y Equipos Internacionales',
      'skill.design-systems': 'Design Systems',
      'skill.ux-mgmt': 'UX Management',
      'skill.ux-research': 'UX Research',
      'skill.product-thinking': 'Product Thinking',
      'skill.service-design': 'Service Design',
      'skill.prototyping': 'Prototyping',
      'skill.web-design': 'Web Design',
      'skill.brand-strategy': 'Brand Strategy',
      'skill.branding': 'Branding & Brand Strategy',
      'skill.arq-visual': 'Arquitectura de Identidad Visual',
      'skill.employee-xp': 'Employee Experience (EX)',
      'skill.change-mgmt': 'Gestión del Cambio (Change Management)',
      'skill.discovery': 'Discovery continuo',
      'skill.ux-product': 'UX/Product Design',
      'skill.usability': 'Usability Testing',
      'skill.info-arch': 'Information Architecture',
      'skill.interaction': 'Interaction Design',
      'skill.facilitation': 'Facilitation',
      'skill.strategic': 'Strategic Thinking',
      'skill.accesibilidad': 'Accesibilidad (WCAG)',
      'skill.id-visual': 'Diseño de Identidad Visual',
      'skill.grafica-sala': 'Gráfica de Sala',
      'skill.espacios': 'Diseño de Espacios Expositivos',
      'skill.com-visual': 'Comunicación Visual',
      'skill.gestion-cultural': 'Gestión de Proyectos Culturales',
      'skill.montaje': 'Montaje y Sembrado Museográfico',
      'skill.prod-grafica': 'Producción Gráfica de Gran Formato',
      'skill.foto': 'Edición de fotografía',
      'skill.coordinacion': 'Coordinación Operativa',
      'skill.end-to-end': 'Product Design End-to-End',
      'skill.conversational-ux': 'Conversational UX',
      'skill.conversation-design': 'Conversation Design',
      'skill.arch-conversacional': 'Arquitectura conversacional',
      'skill.ux-writing': 'UX Writing',
      'skill.decision-trees': 'Diseño de árboles de decisión',
      'skill.hybrid-flows': 'Diseño de flujos híbridos (chatbot + chat en vivo)',
      'skill.figma-prototyping': 'Prototipado en Figma',
      'skill.dialogflow': 'Dialogflow',
      'skill.metrics-def': 'Definición de métricas',
      'skill.functional-qa': 'QA funcional',
      'skill.stakeholder-mgmt': 'Gestión de stakeholders',
      'skill.multidisciplinary': 'Colaboración multidisciplinaria',

      /* Atención sub-headings */
      'atencion.sub.discovery': 'Discovery',
      'atencion.sub.definicion': 'Definición',
      'atencion.sub.diseno': 'Diseño',
      'atencion.sub.usuario': 'Para el usuario',
      'atencion.sub.negocio': 'Para el negocio',
      'atencion.sub.aprendizaje': 'Aprendizaje clave',
      'atencion.duracion': '8 meses',

      /* Slot detail */
      'slot.rol': 'Brand & Visual Designer Lead',

      /* yo.contenido detail */
      'yoc.rol': 'Diseñador de exposiciones',

      /* Nacimiento detail */
      'nac.rol': 'Diseñador de exposiciones',

      /* Salud detail */
      'salud.rol': 'UX Lead',
      'salud.desc-sub': 'Estrategia para la unificación del ecosistema digital para pólizas integrales de salud',
      'salud.desc': 'Rediseño estratégico de la experiencia móvil y web para una aseguradora francesa multiramo. El proyecto transformó un ecosistema digital fragmentado y diseñado desde la lógica interna de la empresa en una solución omnicanal unificada. Centralizando los servicios bajo las intenciones reales del asegurado (Entender, Actuar y Dar seguimiento), logramos habilitar el autoservicio y mejorar significativamente la experiencia de los productos de Salud Integral.',
      'salud.desafio': 'El ecosistema digital original reflejaba la complejidad de los sistemas internos del negocio, lo que provocaba una baja comprensión de las pólizas, fricciones en tareas y una alta dependencia del contact center. La propuesta inicial consistía en lanzar una app independiente, lo que habría aumentado la fragmentación operativa. El reto de diseño consistió en reencuadrar el problema desde una perspectiva sistémica: evitar la creación de un nuevo canal aislado, unificar las plataformas bajo una arquitectura coherente y mitigar la falta de analítica estructurada para orientar la toma de decisiones basada en necesidades de usuario.',
      'salud.proceso.intro': 'Como Product Designer a cargo del extremo a extremo, implementé un enfoque iterativo dividido en tres etapas clave:',
      'salud.proceso.p1': '<strong>Discovery:</strong> Realicé investigación cualitativa, análisis heurístico y de arquitectura de la información. Validé escenarios no contemplados mediante sesiones con usuarios, agentes y equipos internos, complementado con un benchmark exploratorio de mercado.',
      'salud.proceso.p2': '<strong>Definición:</strong> Sinteticé los hallazgos para alinear los objetivos del negocio con los del asegurado. Construí un Modelo de Intenciones enfocado en tres momentos del ciclo de uso (Entender, Actuar y Dar seguimiento) y traduje los insights a oportunidades de diseño utilizando el framework Jobs to Be Done (JTBD).',
      'salud.proceso.p3': '<strong>Diseño:</strong> Definí los principios de diseño del ecosistema y reestructuré la arquitectura de información general. Creé wireframes y prototipos multiplataforma (iOS, Android y Web) para validar 11 flujos principales, colaborando estrechamente con desarrollo y alineándome al sistema de diseño global de la compañía.',
      'salud.resultado.p1': '<strong>Para el Usuario:</strong> Mayor claridad en el entendimiento de su seguro con términos accionables, reducción de fricciones y una experiencia continua y autónoma entre diferentes dispositivos.',
      'salud.resultado.p2': '<strong>Para el Negocio:</strong> Ofreció una estructura clara para que tecnología, operaciones y negocio prioricen futuras iniciativas.',
      'salud.resultado.p3': '<strong>Aprendizaje clave:</strong> Las fricciones críticas de experiencia no estaban en features aislados, sino en la estructura del sistema; diseñar desde las intenciones reales del usuario permite resolver escenarios con distintos niveles de urgencia.',

      /* Slot detail content */
      'slot.desc-sub': 'Branding para estudio de arquitectura',
      'slot.desc': 'Rediseño de identidad visual para un estudio de arquitectura de 50 colaboradores. El proyecto evolucionó de un requerimiento gráfico puntual a una reestructuración de la plataforma de marca (propósito, posicionamiento y narrativa). El enfoque aseguró la alineación entre la nueva identidad visual, la cultura organizacional y la experiencia del empleado, garantizando una transición coherente para el estudio de arquitectura.',
      'slot.desafio': 'La firma buscaba diversificar su portafolio y posicionarse en nuevos mercados, pero su identidad y materiales comerciales no reflejaban su ambición ni evolución real. Identifiqué que el problema no era puramente gráfico, sino estratégico: la ausencia de una plataforma de marca definida generaba riesgos de desalineación entre la estrategia de negocio y su ejecución operativa. El reto consistió en coordinar una redefinición conceptual y visual profunda, gestionar el cambio cultural interno y supervisar la ejecución de los nuevos lineamientos de marca.',
      'slot.proceso.intro': 'Mi intervención se basó en una visión sistémica, articulando la estrategia con la implementación creativa:',
      'slot.proceso.p1': '<strong>Diagnóstico Estratégico:</strong> Analicé el portafolio y materiales previos, detectando inconsistencias entre la narrativa comercial y la expresión visual.',
      'slot.proceso.p2': '<strong>Alineación y Asesoría:</strong> Argumenté ante la dirección la necesidad de una plataforma de marca sólida y propuse la incorporación de un especialista para liderar la redefinición conceptual, optimizando así el uso del capital humano.',
      'slot.proceso.p3': '<strong>Gestión de Implementación:</strong> Lideré el desarrollo del sistema visual (arquitectura de marca, sistema tipográfico, lenguaje visual) y la creación de nuevos materiales comerciales (presentaciones de concursos, portafolio institucional, web).',
      'slot.proceso.p4': '<strong>Gestión del Cambio (Employee Experience):</strong> Apoyé en la implementación de procesos de adopción interna para los 35 colaboradores, asegurando que la cultura organizacional y la nueva identidad caminaran en paralelo, minimizando la resistencia al cambio y retrabajos.',
      'slot.proceso.p5': '<strong>Liderazgo de Talento:</strong> Gestioné a un diseñador Junior, garantizando la calidad, coherencia y ejecución técnica del nuevo sistema.',
      'slot.resultado.p1': '<strong>Alineación Organizacional:</strong> Se logró una consistencia total entre posicionamiento, comunicación y cultura, fortaleciendo el capital institucional.',
      'slot.resultado.p2': '<strong>Eficiencia Operativa:</strong> La gestión del cambio facilitó una adopción fluida en los 35 colaboradores, reduciendo fricciones y garantizando la correcta implementación de los lineamientos en todos los niveles.',
      'slot.resultado.p3': '<strong>Evolución de Rol:</strong> El proyecto consolidó mi perfil hacia la dirección creativa demostrando capacidad para articular estrategia, cultura y expresión visual de forma unificada.',

      /* Nacimiento detail content */
      'nac.desc-sub': 'Proyecto curatorial',
      'nac.desc': 'Participé en el montaje y producción visual de la exposición Nacimiento, momentos en la memoria, presentada en el Museo Nacional de Culturas Populares. La exposición mostró el "Nacimiento Amparo Espinosa Rugarcía", una colección histórica de 1,100 piezas de barro policromado del artesano Felipe Nieva, integrando una propuesta museográfica contemporánea con una pieza de arte sonoro envolvente.',
      'nac.desafio': 'El reto central consistió en la gestión espacial y visual de una colección masiva de 1,100 piezas de formato pequeño, asegurando que la instalación museográfica no solo fuera funcional para una exposición de esta escala, sino que también lograra una lectura contemporánea y coherente. Fue necesario armonizar el valor histórico de la colección con elementos gráficos modernos y una experiencia sensorial (arte sonoro).',
      'nac.proceso.intro': 'Mi labor se centró en la ejecución técnica y la coordinación operativa para garantizar la integridad visual del proyecto:',
      'nac.proceso.p1': '<strong>Sembrado y Montaje:</strong> Colaboré activamente en el sembrado museográfico, definiendo la disposición espacial de las figuras para optimizar el recorrido y la visibilidad de la colección.',
      'nac.proceso.p2': '<strong>Producción Visual:</strong> Participé en la implementación de la gráfica de sala y la producción de materiales visuales de soporte que guiaron la narrativa del recorrido.',
      'nac.proceso.p3': '<strong>Gestión Operativa:</strong> Coordiné tareas de producción gráfica y preparación técnica de imágenes, asegurando que cada elemento cumpliera con la calidad e identidad visual establecida.',
      'nac.proceso.p4': '<strong>Colaboración Interdisciplinaria:</strong> Trabajé en estrecha colaboración con el equipo de curaduría y el personal del museo para asegurar la cohesión entre el discurso curatorial, los elementos sonoros y la implementación espacial dentro del recinto.',
      'nac.resultado.p1': '<strong>Ejecución Técnica:</strong> Se logró la instalación exitosa de 1,100 piezas de barro policromado, garantizando su preservación y correcta apreciación estética.',
      'nac.resultado.p2': '<strong>Coherencia Espacial:</strong> La implementación de la gráfica de sala y los materiales de soporte resultó en un recorrido fluido que facilitó una lectura contemporánea de una colección del siglo XX.',

      /* yo.contenido detail content */
      'yoc.desc-sub': 'Proyecto curatorial',
      'yoc.desc': 'Responsable de la identidad visual para la exposición colectiva yo.contenido, presentada en el marco del Festival Entijuanarte en Tijuana. El proyecto integró el trabajo de 33 artistas nacionales bajo una narrativa curatorial sobre la relación del individuo con su entorno en el contexto actual de México. La labor abarcó desde el desarrollo del sistema gráfico hasta la supervisión técnica de la instalación en sala.',
      'yoc.desafio': 'Articular una identidad visual coherente y una experiencia museográfica que lograra unificar la diversidad de obra de 33 artistas diferentes. El reto radicó en trasladar un concepto curatorial complejo —el "yo" frente al entorno— a un lenguaje visual claro y funcional, garantizando que tanto la señalética, los textos curatoriales como los materiales de difusión comunicaran eficazmente la propuesta temática dentro de la dinámica de un festival masivo.',
      'yoc.proceso.p1': '<strong>Desarrollo de Identidad:</strong> Creación del sistema visual y materiales editoriales que dieron cohesión a la exposición, incluyendo gráfica de sala, cédulas y materiales de difusión digital e impresa.',
      'yoc.proceso.p2': '<strong>Diseño Museográfico:</strong> Colaboración directa con el equipo de curaduría para el sembrado de obra y la implementación visual dentro del recinto, asegurando que la narrativa gráfica guiara al visitante.',
      'yoc.proceso.p3': '<strong>Comunicación Interna y Difusión:</strong> Desarrollo de activos institucionales (papelería, banners, postales) para fortalecer la imagen profesional del proyecto.',
      'yoc.proceso.p4': '<strong>Supervisión de Instalación:</strong> Coordinación técnica en el recinto para la correcta ejecución de los elementos visuales en el espacio expositivo.',
      'yoc.resultado.p1': '<strong>Ejecución impecable:</strong> Se completó el desarrollo e implementación visual dentro de los tiempos establecidos, cumpliendo con la exigencia logística del festival.',
      'yoc.resultado.p2': '<strong>Satisfacción del Cliente/Stakeholders:</strong> La propuesta visual y la museografía fueron recibidas con alto nivel de satisfacción por parte del equipo organizador del Festival Entijuanarte, validando la calidad del diseño y la capacidad de gestión del proyecto.',
      'yoc.resultado.p3': '<strong>Cohesión Narrativa:</strong> Se logró una unificación visual exitosa para los 33 artistas participantes, permitiendo que la narrativa curatorial fuera legible y atractiva.',

      /* Atención detail content */
      'atencion.desc-sub': 'Diseño de un sistema conversacional para habilitar el autoservicio mediante chatbot y chat en vivo',
      'atencion.desc': 'Diseño de una estrategia de atención híbrida para una aseguradora francesa multiramo, orientada a disminuir la carga operativa del Contact Center mediante la incorporación de un chatbot integrado con el servicio de chat en vivo existente. El proyecto transformó un modelo de atención centrado en canales humanos hacia un sistema conversacional escalable, capaz de resolver consultas frecuentes mediante autoservicio y transferir de forma contextualizada aquellos casos que requerían intervención de un asesor.',
      'atencion.desafio.p1': 'Los canales digitales de atención habían evolucionado de forma independiente durante más de una década, sin una estrategia omnicanal ni lineamientos comunes de experiencia. Como consecuencia, los asegurados encontraban inconsistencias entre canales, poca confianza en las herramientas digitales y frecuentes interrupciones en sus recorridos, lo que incrementaba la dependencia del Contact Center incluso para consultas que podían resolverse mediante autoservicio.',
      'atencion.desafio.p2': 'La iniciativa inicial consistía en implementar un chatbot para reducir la carga operativa del Contact Center. Sin embargo, el reto de diseño consistió en definir una estrategia de atención híbrida que integrara automatización y atención humana como un único servicio, estableciendo criterios claros para resolver consultas mediante el chatbot o transferirlas oportunamente al chat en vivo, considerando además las restricciones de seguridad que impedían el uso de datos personales dentro del canal automatizado.',
      'atencion.proceso.p1': 'Como Product Designer, inicié el proyecto analizando las principales causas de contacto del Contact Center mediante la revisión de los temas con mayor volumen de consultas. Entre ellos se encontraban la descarga de pólizas, consulta de coberturas, obtención de documentos para iniciar trámites y seguimiento de solicitudes.',
      'atencion.proceso.p2': 'Posteriormente documenté cómo los asesores resolvían cada uno de estos casos para comprender la lógica operativa detrás de las conversaciones y transformarla en flujos conversacionales.',
      'atencion.proceso.p3': 'Como complemento, realizamos una recopilación de expresiones utilizadas por los asegurados en distintas regiones del país para identificar variaciones del lenguaje natural que pudieran afectar el reconocimiento de intenciones. Este ejercicio permitió ampliar considerablemente las formas en que una misma solicitud podía interpretarse dentro del chatbot.',
      'atencion.proceso.p4': 'Sinteticé los hallazgos para construir la arquitectura conversacional del servicio, definiendo alrededor de 100 intents organizados a partir de los principales motivos de contacto del usuario.',
      'atencion.proceso.p5': 'Transformé el conocimiento operativo del Contact Center en árboles de decisión adaptados al canal conversacional, estableciendo las respuestas, rutas de navegación y criterios de escalamiento hacia un asesor cuando la consulta excedía las capacidades del chatbot.',
      'atencion.proceso.p6': 'Uno de los principales retos fue determinar el momento adecuado para transferir la conversación al chat en vivo. Para evitar que el usuario quedara atrapado en ciclos de conversación, diseñé estrategias de recuperación cuando el chatbot no lograba identificar correctamente la intención del usuario, ofreciendo la transferencia automática después de múltiples intentos fallidos.',
      'atencion.proceso.p7': 'Asimismo, definimos un modelo de medición para evaluar el desempeño del servicio mediante indicadores como reconocimiento de intents, abandono de conversaciones, frecuencia de temas consultados, funnels conversacionales y encuesta de satisfacción del chatbot.',
      'atencion.proceso.p8': 'Diseñé la experiencia conversacional utilizando los componentes disponibles en Dialogflow, complementados con elementos visuales alineados al sistema de diseño corporativo de AXA.',
      'atencion.proceso.p9': 'La solución combinó distintos patrones de interacción según el contexto de cada consulta: lenguaje natural mediante texto libre, navegación guiada mediante quick replies, tarjetas con información estructurada, y árboles de decisión para consultas complejas.',
      'atencion.proceso.p10': 'Además de diseñar los flujos principales, desarrollé los mensajes conversacionales del asistente virtual, manteniendo el tono institucional de la marca sin construir una personalidad propia para el chatbot.',
      'atencion.proceso.p11': 'También diseñé los estados de recuperación, mensajes de confirmación, continuidad entre canales, transferencia al asesor, espera durante la conexión y cierre de conversación, buscando que la transición hacia el chat en vivo fuera clara y continua para el usuario.',
      'atencion.proceso.p12': 'Tras la implementación participé activamente en la evolución del producto durante aproximadamente un año y medio, gestionando nuevos requerimientos del Contact Center, actualizaciones de contenido y validando junto con el proveedor la correcta implementación de cada mejora antes de su liberación.',
      'atencion.resultado.p1': '<strong>Para el usuario</strong> Los asegurados obtuvieron un nuevo canal de autoservicio para resolver consultas frecuentes mediante lenguaje natural y navegación guiada, con una transición fluida hacia un asesor cuando la automatización no era suficiente.',
      'atencion.resultado.p2': 'La incorporación de mensajes de recuperación y continuidad permitió reducir la sensación de bloqueo cuando el chatbot no comprendía una solicitud, mientras que la transferencia contextualizada evitó que el usuario tuviera que reiniciar completamente su conversación.',
      'atencion.resultado.p3': '<strong>Para el negocio</strong> La estrategia permitió reducir aproximadamente un 10% la demanda de atención en el chat en vivo mediante la automatización de consultas recurrentes.',
      'atencion.resultado.p4': 'También mejoró el enrutamiento de solicitudes, diferenciando de forma más precisa los casos correspondientes a clientes, agentes, proveedores y soporte técnico, canalizando cada conversación hacia el equipo adecuado y reduciendo la carga operativa derivada de solicitudes mal clasificadas.',
      'atencion.resultado.p5': 'Adicionalmente, el proyecto estableció por primera vez un modelo de métricas para monitorear el desempeño del chatbot y evidenció las limitaciones de operar chatbot y chat en vivo sobre plataformas independientes, fortaleciendo el caso de negocio para evolucionar hacia una estrategia omnicanal.',
      'atencion.resultado.p6': '<strong>Aprendizaje clave</strong> Un chatbot no resuelve problemas únicamente por automatizar respuestas; su valor depende de la estrategia conversacional que conecta las necesidades del usuario con la operación del negocio.',
      'atencion.resultado.p7': 'Este proyecto demostró que diseñar un sistema híbrido implica definir cuidadosamente cuándo automatizar, cuándo escalar a un asesor y cómo mantener la continuidad de la conversación entre ambos canales. También confirmó que las limitaciones tecnológicas y de seguridad pueden condicionar la experiencia, por lo que el diseño debe adaptarse a ellas sin perder claridad ni eficiencia para el usuario.',

      /* Espacio detail content (placeholder) */
      'espacio.desc-sub': 'Herramienta de trazabilidad para Contact Center',
      'espacio.desc': 'Descripción general del proyecto. Incluye información sobre la empresa, el producto, y el problema de negocio que se buscaba resolver.',
      'espacio.desafio': 'Descripción del desafío específico que enfrentaban los usuarios y/o el negocio. Incluye datos sobre usuarios objetivo, sus frustraciones, y las barreras existentes.',
      'espacio.proceso': 'Descripción del proceso de diseño. Incluye las actividades de research, definición de la solución, y el proceso iterativo de diseño.',
      'espacio.resultado': 'Descripción de la solución diseñada y los resultados obtenidos. Incluye métricas de éxito y aprendizajes clave.',

      /* Riev detail content (placeholder) */
      'riev.desc-sub': 'Página y branding para agencia educativa',
      'riev.desc': 'Descripción general del proyecto. Incluye información sobre la empresa, el producto, y el problema de negocio que se buscaba resolver.',
      'riev.desafio': 'Descripción del desafío específico que enfrentaban los usuarios y/o el negocio. Incluye datos sobre usuarios objetivo, sus frustraciones, y las barreras existentes.',
      'riev.proceso': 'Descripción del proceso de diseño. Incluye las actividades de research, definición de la solución, y el proceso iterativo de diseño.',
      'riev.resultado': 'Descripción de la solución diseñada y los resultados obtenidos. Incluye métricas de éxito y aprendizajes clave.',

      /* Kanji detail content (placeholder) */
      'kanji.desc-sub': 'Página para agencia de investigación de mercado',
      'kanji.desc': 'Descripción general del proyecto. Incluye información sobre la empresa, el producto, y el problema de negocio que se buscaba resolver.',
      'kanji.desafio': 'Descripción del desafío específico que enfrentaban los usuarios y/o el negocio. Incluye datos sobre usuarios objetivo, sus frustraciones, y las barreras existentes.',
      'kanji.proceso': 'Descripción del proceso de diseño. Incluye las actividades de research, definición de la solución, y el proceso iterativo de diseño.',
      'kanji.resultado': 'Descripción de la solución diseñada y los resultados obtenidos. Incluye métricas de éxito y aprendizajes clave.',

      /* Project titles */
      'title.salud': 'Experiencia Unificada Gastos Médicos',
      'title.atencion': 'Estrategia de Atención Híbrida',
      'title.espacio': 'Administrador de Interacciones',
      'title.slot': 'Slot',
      'title.kanji': 'Kanji',
      'title.riev': 'Riev',
      'title.yoc': 'yo.contenido',
      'title.nac': 'Nacimiento',
    },
    en: {
      /* Navbar */
      'nav.inicio': 'Home',
      'nav.proyectos': 'Projects',
      'nav.perfil': 'About',
      'nav.contacto': 'Contact',
      'nav.casos': 'Case Studies',
      'nav.aria': 'Main navigation',
      'nav.abrir': 'Open menu',
      'skip': 'Skip to content',

      /* Footer */
      'footer.text': '© 2026 Daniela Serrano. Product Designer.',
      'footer.linkedin': 'LinkedIn',

      /* Labels */
      'label.nombre': 'Name',
      'label.email': 'Email',
      'label.mensaje': 'Message',
      'placeholder.nombre': 'Your name',
      'placeholder.email': 'you@email.com',
      'placeholder.mensaje': 'Tell me about your project...',
      'form.success': 'Message sent successfully. I\'ll get back to you soon.',
      'form.error': 'Error sending message. Please try again.',
      'btn.enviar': 'Send message',
      'btn.descargar': 'Download CV',
      'btn.ver': 'View projects',
      'btn.ver-todos': 'View all',
      'btn.contactame': 'Get in touch',
      'btn.volver': 'Back',
      'lang.es': 'Spanish',
      'lang.en': 'English',
      'btn.enlace': 'Related link →',

      /* Hero */
      'hero.name': 'Daniela Serrano',
      'hero.title': 'Product Designer',
      'hero.subtitle': 'Articulating complex digital solutions with a human-centered and strategic approach.',

      /* Index */
      'proyectos.titulo': 'Projects',
      'proyectos.desc': 'A selection of cases where strategic design generated measurable impact on business and users.',
      'index.about.titulo': 'Systems thinking',
      'index.about.texto': 'Over 7 years designing digital products that connect business, users and technology. I believe in design as a strategic tool to generate sustainable value.',
      'hablemos.titulo': 'Let\'s talk',
      'hablemos.desc': 'Looking for a Product Designer who understands the complexity of your product? I\'d love to hear about your project.',
      'index.salud.tag': 'UX Lead',
      'index.atencion.tag': 'Product Designer',
      'index.espacio.tag': 'Product Designer',
      'badge.proximamente': 'Coming soon',

      /* Proyectos page */
      'proyectos.h1': 'Projects',
      'proyectos.subtitle': 'A selection of cases where strategic design generated measurable impact on business and users.',
      'cat.digital': 'Digital Product Design',
      'cat.branding': 'Branding & Editorial',
      'cat.exposiciones': 'Exhibition Design',

      /* Perfil page */
      'perfil.h1': 'About',
      'perfil.subtitle': 'Product Designer with over 7 years of experience creating digital products.',
      'perfil.nombre': 'Daniela Serrano',
      'perfil.desc': 'Product Designer focused on systems thinking and end-to-end product design. I believe in design as a strategic tool to connect business, users and technology.',
      'perfil.especialidades': 'Specialties',
      'perfil.habilidades': 'Skills',
      'perfil.experiencia': 'Experience',
      'perfil.descargar': 'Download CV',

      /* Contacto page */
      'contacto.h1': 'Contact',
      'contacto.subtitle': 'Looking for a Product Designer for your project? I\'d love to hear about it.',
      'contacto.desc': 'Have a project in mind? Need help defining your product strategy? Write to me and let\'s talk.',

      /* Detail pages */
      'detail.caso': 'Case Study',
      'detail.en-pagina': 'On this page',
      'detail.desc': 'Description',
      'detail.desafio': 'Challenge',
      'detail.proceso': 'Process',
      'detail.resultado': 'Result',
      'detail.resultados': 'Results',
      'detail.habilidades': 'Skills',
      'detail.galeria': 'Gallery',
      'detail.rol': 'Role',
      'detail.duracion': 'Duration',
      'detail.equipo': 'Team',
      'detail.impacto': 'Impact',
      'detail.desc-breve': 'Brief description',

      /* Casos page */
      'casos.h1': 'Case Studies',
      'casos.subtitle': 'A selection of cases where strategic design generated measurable impact on business and users.',

      /* Skills tags - shared */
      'skill.pensamiento': 'Systems Thinking',
      'skill.arq-info': 'Information Architecture',
      'skill.jtbd': 'Jobs to Be Done (JTBD)',
      'skill.prototipado': 'Cross-platform Prototyping (iOS, Android, Web)',
      'skill.stakeholders': 'Stakeholder & International Team Alignment',
      'skill.design-systems': 'Design Systems',
      'skill.ux-mgmt': 'UX Management',
      'skill.ux-research': 'UX Research',
      'skill.product-thinking': 'Product Thinking',
      'skill.service-design': 'Service Design',
      'skill.prototyping': 'Prototyping',
      'skill.web-design': 'Web Design',
      'skill.brand-strategy': 'Brand Strategy',
      'skill.branding': 'Branding & Brand Strategy',
      'skill.arq-visual': 'Visual Identity Architecture',
      'skill.employee-xp': 'Employee Experience (EX)',
      'skill.change-mgmt': 'Change Management',
      'skill.discovery': 'Continuous Discovery',
      'skill.ux-product': 'UX/Product Design',
      'skill.usability': 'Usability Testing',
      'skill.info-arch': 'Information Architecture',
      'skill.interaction': 'Interaction Design',
      'skill.facilitation': 'Facilitation',
      'skill.strategic': 'Strategic Thinking',
      'skill.accesibilidad': 'Accessibility (WCAG)',
      'skill.id-visual': 'Visual Identity Design',
      'skill.grafica-sala': 'Room Graphics',
      'skill.espacios': 'Exhibition Space Design',
      'skill.com-visual': 'Visual Communication',
      'skill.gestion-cultural': 'Cultural Project Management',
      'skill.montaje': 'Museum Mounting & Layout',
      'skill.prod-grafica': 'Large Format Graphic Production',
      'skill.foto': 'Photography Editing',
      'skill.coordinacion': 'Operational Coordination',
      'skill.end-to-end': 'End-to-End Product Design',
      'skill.conversational-ux': 'Conversational UX',
      'skill.conversation-design': 'Conversation Design',
      'skill.arch-conversacional': 'Conversational Architecture',
      'skill.ux-writing': 'UX Writing',
      'skill.decision-trees': 'Decision Tree Design',
      'skill.hybrid-flows': 'Hybrid Flow Design (chatbot + live chat)',
      'skill.figma-prototyping': 'Figma Prototyping',
      'skill.dialogflow': 'Dialogflow',
      'skill.metrics-def': 'Metrics Definition',
      'skill.functional-qa': 'Functional QA',
      'skill.stakeholder-mgmt': 'Stakeholder Management',
      'skill.multidisciplinary': 'Multidisciplinary Collaboration',

      /* Atención sub-headings */
      'atencion.sub.discovery': 'Discovery',
      'atencion.sub.definicion': 'Definition',
      'atencion.sub.diseno': 'Design',
      'atencion.sub.usuario': 'For the user',
      'atencion.sub.negocio': 'For the business',
      'atencion.sub.aprendizaje': 'Key learning',
      'atencion.duracion': '8 months',

      /* Slot detail */
      'slot.rol': 'Brand & Visual Designer Lead',

      /* yo.contenido detail */
      'yoc.rol': 'Exhibition Designer',

      /* Nacimiento detail */
      'nac.rol': 'Exhibition Designer',

      /* Salud detail */
      'salud.rol': 'UX Lead',
      'salud.desc-sub': 'Strategy for unifying the digital ecosystem for comprehensive health insurance policies',
      'salud.desc': 'Strategic redesign of the mobile and web experience for a multi-line French insurance company. The project transformed a fragmented digital ecosystem designed from the business\'s internal logic into a unified omnichannel solution. By centralizing services around the policyholder\'s real intentions (Understand, Act, and Follow up), we enabled self-service and significantly improved the experience of the Integral Health products.',
      'salud.desafio': 'The original digital ecosystem reflected the complexity of the business\'s internal systems, resulting in low policy comprehension, friction in tasks, and high dependency on the contact center. The initial proposal consisted of launching a standalone app, which would have increased operational fragmentation. The design challenge was to reframe the problem from a systemic perspective: avoid creating a new isolated channel, unify platforms under a coherent architecture, and mitigate the lack of structured analytics to guide decision-making based on user needs.',
      'salud.proceso.intro': 'As the end-to-end Product Designer, I implemented an iterative approach divided into three key stages:',
      'salud.proceso.p1': '<strong>Discovery:</strong> I conducted qualitative research, heuristic analysis, and information architecture evaluation. I validated unforeseen scenarios through sessions with users, agents, and internal teams, complemented by an exploratory market benchmark.',
      'salud.proceso.p2': '<strong>Definition:</strong> I synthesized findings to align business goals with policyholder needs. I built an Intentions Model focused on three moments of the usage cycle (Understand, Act, and Follow up) and translated insights into design opportunities using the Jobs to Be Done (JTBD) framework.',
      'salud.proceso.p3': '<strong>Design:</strong> I defined the ecosystem\'s design principles and restructured the overall information architecture. I created wireframes and cross-platform prototypes (iOS, Android, and Web) to validate 11 main flows, collaborating closely with development and aligning with the company\'s global design system.',
      'salud.resultado.p1': '<strong>For the User:</strong> Greater clarity in understanding their insurance with actionable terms, reduced friction, and a continuous, autonomous experience across different devices.',
      'salud.resultado.p2': '<strong>For the Business:</strong> Provided a clear structure for technology, operations, and business to prioritize future initiatives.',
      'salud.resultado.p3': '<strong>Key Learning:</strong> Critical experience frictions were not in isolated features, but in the system structure; designing from real user intentions allows solving scenarios with different levels of urgency.',

      /* Slot detail content */
      'slot.desc-sub': 'Branding for an architecture firm',
      'slot.desc': 'Visual identity redesign for a 50-person architecture firm. The project evolved from a specific graphic request to a full brand platform restructuring (purpose, positioning, and narrative). The approach ensured alignment between the new visual identity, organizational culture, and employee experience, guaranteeing a coherent transition for the firm.',
      'slot.desafio': 'The firm sought to diversify its portfolio and position itself in new markets, but its identity and commercial materials did not reflect its ambition or actual evolution. I identified that the problem was not purely graphic but strategic: the absence of a defined brand platform created risks of misalignment between business strategy and its operational execution. The challenge was to coordinate a deep conceptual and visual redefinition, manage internal cultural change, and oversee the execution of new brand guidelines.',
      'slot.proceso.intro': 'My intervention was based on a systemic vision, articulating strategy with creative implementation:',
      'slot.proceso.p1': '<strong>Strategic Diagnosis:</strong> I analyzed the portfolio and previous materials, detecting inconsistencies between the commercial narrative and visual expression.',
      'slot.proceso.p2': '<strong>Alignment & Advisory:</strong> I argued to management the need for a solid brand platform and proposed bringing in a specialist to lead the conceptual redefinition, optimizing human capital use.',
      'slot.proceso.p3': '<strong>Implementation Management:</strong> I led the visual system development (brand architecture, typographic system, visual language) and the creation of new commercial materials (competition presentations, institutional portfolio, website).',
      'slot.proceso.p4': '<strong>Change Management (Employee Experience):</strong> I supported the implementation of internal adoption processes for the 35 employees, ensuring organizational culture and the new identity progressed in parallel, minimizing resistance to change and rework.',
      'slot.proceso.p5': '<strong>Talent Leadership:</strong> I managed a Junior designer, ensuring quality, coherence, and technical execution of the new system.',
      'slot.resultado.p1': '<strong>Organizational Alignment:</strong> Total consistency was achieved between positioning, communication, and culture, strengthening institutional capital.',
      'slot.resultado.p2': '<strong>Operational Efficiency:</strong> Change management facilitated a smooth adoption across 35 employees, reducing friction and ensuring correct implementation of guidelines at all levels.',
      'slot.resultado.p3': '<strong>Role Evolution:</strong> The project consolidated my profile towards creative direction, demonstrating the ability to articulate strategy, culture, and visual expression in a unified way.',

      /* Nacimiento detail content */
      'nac.desc-sub': 'Curatorial project',
      'nac.desc': 'I participated in the assembly and visual production of the exhibition "Nacimiento, momentos en la memoria", presented at the Museo Nacional de Culturas Populares. The exhibition showcased the "Nacimiento Amparo Espinosa Rugarcía", a historical collection of 1,100 polychrome clay pieces by artisan Felipe Nieva, integrating a contemporary museographic proposal with an immersive sound art piece.',
      'nac.desafio': 'The central challenge was the spatial and visual management of a massive collection of 1,100 small-format pieces, ensuring the museographic installation was not only functional for an exhibition of this scale but also achieved a contemporary and coherent reading. It was necessary to harmonize the collection\'s historical value with modern graphic elements and a sensory experience (sound art).',
      'nac.proceso.intro': 'My work focused on technical execution and operational coordination to ensure the visual integrity of the project:',
      'nac.proceso.p1': '<strong>Layout & Assembly:</strong> I actively collaborated on the museographic layout, defining the spatial arrangement of the figures to optimize the visitor flow and collection visibility.',
      'nac.proceso.p2': '<strong>Visual Production:</strong> I participated in the implementation of room graphics and the production of supporting visual materials that guided the tour narrative.',
      'nac.proceso.p3': '<strong>Operational Management:</strong> I coordinated graphic production tasks and technical image preparation, ensuring each element met the established quality and visual identity.',
      'nac.proceso.p4': '<strong>Interdisciplinary Collaboration:</strong> I worked closely with the curatorial team and museum staff to ensure cohesion between the curatorial discourse, sound elements, and spatial implementation within the venue.',
      'nac.resultado.p1': '<strong>Technical Execution:</strong> Successful installation of 1,100 polychrome clay pieces was achieved, ensuring their preservation and correct aesthetic appreciation.',
      'nac.resultado.p2': '<strong>Spatial Coherence:</strong> The implementation of room graphics and supporting materials resulted in a fluid visitor journey that facilitated a contemporary reading of a 20th-century collection.',

      /* yo.contenido detail content */
      'yoc.desc-sub': 'Curatorial project',
      'yoc.desc': 'Responsible for the visual identity of the collective exhibition "yo.contenido", presented as part of the Entijuanarte Festival in Tijuana. The project integrated the work of 33 national artists under a curatorial narrative about the individual\'s relationship with their environment in the current Mexican context. The work ranged from developing the graphic system to technical supervision of the on-site installation.',
      'yoc.desafio': 'Articulating a coherent visual identity and museographic experience that unified the diverse work of 33 different artists. The challenge lay in translating a complex curatorial concept —the "self" versus the environment— into a clear and functional visual language, ensuring that signage, curatorial texts, and promotional materials effectively communicated the thematic proposal within the dynamics of a massive festival.',
      'yoc.proceso.p1': '<strong>Identity Development:</strong> Creation of the visual system and editorial materials that gave cohesion to the exhibition, including room graphics, labels, and digital and print promotional materials.',
      'yoc.proceso.p2': '<strong>Museographic Design:</strong> Direct collaboration with the curatorial team for artwork layout and visual implementation within the venue, ensuring the graphic narrative guided visitors.',
      'yoc.proceso.p3': '<strong>Internal Communication & Promotion:</strong> Development of institutional assets (stationery, banners, postcards) to strengthen the project\'s professional image.',
      'yoc.proceso.p4': '<strong>Installation Supervision:</strong> Technical coordination at the venue for the correct execution of visual elements in the exhibition space.',
      'yoc.resultado.p1': '<strong>Flawless Execution:</strong> Visual development and implementation were completed within the established timeline, meeting the festival\'s logistical demands.',
      'yoc.resultado.p2': '<strong>Client/Stakeholder Satisfaction:</strong> The visual proposal and museography were received with a high level of satisfaction by the Entijuanarte Festival organizing team, validating the quality of design and project management capability.',
      'yoc.resultado.p3': '<strong>Narrative Cohesion:</strong> Successful visual unification was achieved for the 33 participating artists, allowing the curatorial narrative to be legible and engaging.',

      /* Atención detail content */
      'atencion.desc-sub': 'Design of a conversational system to enable self-service through chatbot and live chat',
      'atencion.desc': 'Design of a hybrid care strategy for a multi-line French insurance company, aimed at reducing the Contact Center\'s operational load by incorporating a chatbot integrated with the existing live chat service. The project transformed a human-centric care model into a scalable conversational system, capable of resolving frequent inquiries through self-service and contextually transferring cases that required advisor intervention.',
      'atencion.desafio.p1': 'The digital care channels had evolved independently for over a decade, without an omnichannel strategy or common experience guidelines. As a result, policyholders encountered inconsistencies across channels, low trust in digital tools, and frequent interruptions in their journeys, increasing dependence on the Contact Center even for inquiries that could be resolved through self-service.',
      'atencion.desafio.p2': 'The initial initiative consisted of implementing a chatbot to reduce the Contact Center\'s operational load. However, the design challenge was to define a hybrid care strategy that integrated automation and human support as a single service, establishing clear criteria for resolving inquiries via the chatbot or transferring them in a timely manner to live chat, while also considering security restrictions that prevented the use of personal data within the automated channel.',
      'atencion.proceso.p1': 'As Product Designer, I started the project by analyzing the main reasons for Contact Center contact, reviewing the topics with the highest volume of inquiries. These included policy downloads, coverage inquiries, obtaining documents to start procedures, and request follow-ups.',
      'atencion.proceso.p2': 'I then documented how advisors resolved each of these cases to understand the operational logic behind the conversations and transform it into conversational flows.',
      'atencion.proceso.p3': 'As a complement, we collected expressions used by policyholders across different regions of the country to identify natural language variations that could affect intent recognition. This exercise significantly expanded the ways in which the same request could be interpreted within the chatbot.',
      'atencion.proceso.p4': 'I synthesized the findings to build the service\'s conversational architecture, defining around 100 intents organized around the user\'s main reasons for contact.',
      'atencion.proceso.p5': 'I transformed the Contact Center\'s operational knowledge into decision trees adapted to the conversational channel, establishing responses, navigation paths, and escalation criteria to an advisor when the inquiry exceeded the chatbot\'s capabilities.',
      'atencion.proceso.p6': 'One of the main challenges was determining the right moment to transfer the conversation to live chat. To prevent users from getting trapped in conversation loops, I designed recovery strategies when the chatbot failed to correctly identify the user\'s intent, offering automatic transfer after multiple failed attempts.',
      'atencion.proceso.p7': 'We also defined a measurement model to evaluate service performance through indicators such as intent recognition, conversation abandonment, frequency of topics consulted, conversational funnels, and chatbot satisfaction surveys.',
      'atencion.proceso.p8': 'I designed the conversational experience using the components available in Dialogflow, complemented with visual elements aligned with AXA\'s corporate design system.',
      'atencion.proceso.p9': 'The solution combined different interaction patterns depending on the context of each inquiry: natural language through free text, guided navigation through quick replies, cards with structured information, and decision trees for complex queries.',
      'atencion.proceso.p10': 'In addition to designing the main flows, I developed the conversational messages for the virtual assistant, maintaining the brand\'s institutional tone without building a distinct personality for the chatbot.',
      'atencion.proceso.p11': 'I also designed recovery states, confirmation messages, cross-channel continuity, transfer to advisor, waiting during connection, and conversation closure, ensuring the transition to live chat was clear and seamless for the user.',
      'atencion.proceso.p12': 'After implementation, I actively participated in the product\'s evolution for approximately a year and a half, managing new Contact Center requirements, content updates, and validating with the provider the correct implementation of each improvement before release.',
      'atencion.resultado.p1': '<strong>For the user</strong> Policyholders gained a new self-service channel to resolve frequent inquiries through natural language and guided navigation, with a smooth transition to an advisor when automation was insufficient.',
      'atencion.resultado.p2': 'The incorporation of recovery and continuity messages helped reduce the feeling of being stuck when the chatbot did not understand a request, while contextualized transfer prevented the user from having to restart their entire conversation.',
      'atencion.resultado.p3': '<strong>For the business</strong> The strategy reduced live chat demand by approximately 10% through automation of recurring inquiries.',
      'atencion.resultado.p4': 'It also improved request routing, more accurately differentiating cases corresponding to clients, agents, suppliers, and technical support, channeling each conversation to the appropriate team and reducing the operational load from misclassified requests.',
      'atencion.resultado.p5': 'Additionally, the project established for the first time a metrics model to monitor chatbot performance and highlighted the limitations of operating chatbot and live chat on independent platforms, strengthening the business case for evolving toward an omnichannel strategy.',
      'atencion.resultado.p6': '<strong>Key learning</strong> A chatbot does not solve problems simply by automating answers; its value depends on the conversational strategy that connects user needs with business operations.',
      'atencion.resultado.p7': 'This project demonstrated that designing a hybrid system requires carefully defining when to automate, when to escalate to an advisor, and how to maintain conversation continuity between both channels. It also confirmed that technological and security constraints can condition the experience, so design must adapt to them without losing clarity or efficiency for the user.',

      /* Espacio detail content (placeholder) */
      'espacio.desc-sub': 'Traceability tool for Contact Center',
      'espacio.desc': 'General project description. Includes information about the company, the product, and the business problem to be solved.',
      'espacio.desafio': 'Description of the specific challenge users and/or the business faced. Includes data on target users, their frustrations, and existing barriers.',
      'espacio.proceso': 'Description of the design process. Includes research activities, solution definition, and the iterative design process.',
      'espacio.resultado': 'Description of the designed solution and the results obtained. Includes success metrics and key learnings.',

      /* Riev detail content (placeholder) */
      'riev.desc-sub': 'Website and branding for an educational agency',
      'riev.desc': 'General project description. Includes information about the company, the product, and the business problem to be solved.',
      'riev.desafio': 'Description of the specific challenge users and/or the business faced. Includes data on target users, their frustrations, and existing barriers.',
      'riev.proceso': 'Description of the design process. Includes research activities, solution definition, and the iterative design process.',
      'riev.resultado': 'Description of the designed solution and the results obtained. Includes success metrics and key learnings.',

      /* Kanji detail content (placeholder) */
      'kanji.desc-sub': 'Website for a market research agency',
      'kanji.desc': 'General project description. Includes information about the company, the product, and the business problem to be solved.',
      'kanji.desafio': 'Description of the specific challenge users and/or the business faced. Includes data on target users, their frustrations, and existing barriers.',
      'kanji.proceso': 'Description of the design process. Includes research activities, solution definition, and the iterative design process.',
      'kanji.resultado': 'Description of the designed solution and the results obtained. Includes success metrics and key learnings.',

      /* Project titles */
      'title.salud': 'Unified Health Insurance Experience',
      'title.atencion': 'Hybrid Care Strategy',
      'title.espacio': 'Interaction Manager',
      'title.slot': 'Slot',
      'title.kanji': 'Kanji',
      'title.riev': 'Riev',
      'title.yoc': 'yo.contenido',
      'title.nac': 'Nacimiento',
    }
  },

  init() {
    const saved = localStorage.getItem('lang');
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && urlLang === 'en') {
      this.currentLang = 'en';
      localStorage.setItem('lang', 'en');
    } else if (saved === 'en') {
      this.currentLang = 'en';
    } else {
      this.currentLang = 'es';
    }
    this.apply();
    this.addSwitcherListeners();
  },

  t(key) {
    return this.translations[this.currentLang][key] || this.translations['es'][key] || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const altText = this.t(key);
      if (altText !== key) el.alt = altText;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.t(key);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      const key = el.getAttribute('data-i18n-value');
      el.value = this.t(key);
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      el.setAttribute('aria-label', this.t(key));
    });

    const switcher = document.querySelector('.lang-switcher');
    if (switcher) {
      const esBtn = switcher.querySelector('.lang-es');
      const enBtn = switcher.querySelector('.lang-en');
      if (esBtn && enBtn) {
        esBtn.classList.toggle('active', this.currentLang === 'es');
        enBtn.classList.toggle('active', this.currentLang === 'en');
      }
    }
    document.documentElement.lang = this.currentLang === 'en' ? 'en' : 'es';
  },

  switch(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    const url = new URL(window.location);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url);
    this.apply();
  },

  addSwitcherListeners() {
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.switch(lang);
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});
