export default {
  global: {
    componenteFormativo: 'Arquitectura de X-Road',
    descripcionCurso:
      'Este componente se centra en la creación de una solución de software que involucre un escenario común de interoperabilidad, mediante el uso de la plataforma X-Road en nivel medio, identificando los diferentes componentes que conforman la arquitectura del ecosistema X-Road.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Objetivo de diseño y arquitectura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos de diseño',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Arquitectura X-Road®',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servidor de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Funciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Monitoreo de datos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Infraestructura Central',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Política de seguridad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Configuración global',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Autoridad de Certificación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Autoridad de sellado de tiempo',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Proxy de configuración',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Interacciones con X-Road©',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Daniel Fernando Portilla Arciniegas',
          'José Ricardo Aponte Oviedo',
        ],
        cargo: 'Expertos temáticos',
        centro: 'MINTIC',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Vilma Lucia Perilla M',
        cargo: 'Revisora y evaluadora metodológica',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: ['Eulises Orduz Amezquita', 'Luis Gabriel Urueta Alvarez'],
        cargo: 'Diseño Web y Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Ricardo Alonso González Vargas',
        cargo: 'Desarrollo front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bass. L., P. Clements. P., y  Kazman. R. Software Architecture in Practice, 3rd ed. 2013.',
    },
    {
      referencia:
        'Decreto 620 de 2020. [Ministerio de Tecnologías de la Información y las Comunicaciones]. “Por el cual se subroga el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, para reglamentarse parcialmente los artículos 53, 54, 60, 61 y 64 de la Ley 1437 de 2011, los literales e), j) y literal a) del parágrafo 2 del artículo 45 de la Ley 1753 de 2015, el numeral 3 del artículo 147 de la Ley 1955 de 2019, y el artículo 9o del Decreto 2106 de 2019, estableciendo los lineamientos generales en el uso y operación de los servicios ciudadanos digitales.” 2 de mayo de 2020. Diario Oficial No. 51.302.',
    },
    {
      referencia:
        'Decreto 1008 de2018. [presidente de la República]. Por el cual se establecen los lineamientos generales de la política de Gobierno Digital y se subroga el Capítulo 1 del Título 9 de la Parte 2 del Libro 2 del Decreto número 1078 de 2015, Decreto Único Reglamentario del sector de Tecnologías de la Información y las Comunicaciones. Junio 14 de 2018.',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (MinTIC), “Manual para la implementación de la Estrategia de Gobierno Digital,” D. Of., vol. 2019, pp. 1–89, 2019.',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (MinTIC), “Marco de interoperabilidad para Gobierno Digital,” p. 95, 2019. ',
      link:
        'http://lenguaje.mintic.gov.co/sites/default/files/archivos/marco_de_interoperabilidad_para_gobierno_digital.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (MinTIC), (s.f). Manual de Gobierno Digital.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/channels-594_manual_gd.pdf',
    },
    {
      referencia:
        'Rozanski. N.,y E. Woods, Software Systems Architecture, 2nd ed. 2011.',
    },
    {
      referencia:
        'Taylor. R., Medvidovic, N y Dashofy. E. Software Architecture - Foundations, Theory, and Practice. 2010.',
    },
    {
      referencia:
        '“X-Road - The free and open source data exchange layer software,” 2020. [Online]. Available: ',
      link: 'https://x-road.global/.',
    },
  ],
  glosario: [
    {
      termino: 'Servicios ciudadanos digitales',
      significado:
        'es el conjunto de soluciones y procesos transversales que brindan al Estado capacidades y eficiencias para su transformación digital, para lograr una adecuada interacción del ciudadano con el Estado, garantizando el derecho a la utilización de medios electrónicos ante la administración pública.',
    },
    {
      termino: 'Servicios ciudadanos digitales base',
      significado:
        'son los considerados como servicios de interoperabilidad, autenticación digital y carpeta ciudadana digital.',
    },
    {
      termino: 'Servicios ciudadanos digitales especiales',
      significado:
        'son aquellos que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la integración a los servicios ciudadanos digitales base, esto bajo un esquema coordinado por el articulador.',
    },
    {
      termino: 'Servicio de intercambio de información',
      significado:
        'recurso tecnológico que mediante el uso de un conjunto de protocolos y estándares permite el intercambio de información. “Es una representación lógica de una actividad de negocio repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos del clima, consolidar informes de perforación) y que tiene las siguientes características: Autocontenido, puede estar compuesto por otros servicios y es una “caja negra” para los consumidores del servicio”.',
    },
    {
      termino: 'Trámite',
      significado:
        'conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley. El trámite se inicia cuando ese particular activa el aparato público a través de una petición o solicitud expresa y termina (como trámite) cuando la administración pública se pronuncia sobre este, aceptando o denegando la solicitud.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
