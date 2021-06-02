<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Objetivo de diseño y arquitectura

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_3.png")

    .titulo-segundo
      #t_1_1.h4 1.1 Objetivos de diseño

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_1.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  1 
          .col-lg-11
            strong Descentralización
            p X-Road© está descentralizado: si las organizaciones han establecido una conexión segura, el intercambio continuo de datos depende solo de su disponibilidad y de la red entre ellas.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_2.m-top  2 
          .col-lg-11
            strong Propiedad de los dato
            p X-Road© no cambia la propiedad de los datos. El propietario de los datos (proveedor de servicios) controla quién puede acceder a determinados servicios.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_3.m-top  3 
          .col-lg-11
            strong Disponibilidad
            p La disponibilidad es una preocupación central: los protocolos están diseñados para que no haya un cuello de botella único en el sistema. Además, ningún componente debe convertirse en un único punto de falla.
        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_4.m-top  4  
          .col-lg-11
            strong Evidencia digital
            p.mb-2 Todos los mensajes procesados por X-Road© se pueden utilizar como evidencia digital. La solución técnica debe cumplir con los requisitos para sellos digitales según el DAS.
            .jumbo_1
              p [eIDAS] #[a(href="https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32014R0910&from=IT" target="_blank").link-color Reglamento de la UE nº 910/2014 del Parlamento Europeo y del Consejo de 23 de julio de 2014] sobre identificación electrónica y servicios de confianza para transacciones electrónicas en el mercado interior y por el que se deroga la Directiva 1999/93/CE.

        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_5.m-top  5  
          .col-lg-11
            strong Llamadas de servicio
            p Todas las comunicaciones se implementan como llamadas de servicio SOAP o REST. Los servicios SOAP se describen mediante el lenguaje WSDL y los servicios REST se describen mediante la especificación OPENAPI v3.

        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  6  
          .col-lg-11
            strong Servicios transfronterizos
            p Es posible que una organización invoque servicios proporcionados por una organización que pertenece a una instancia diferente de X-Road©.

        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_2.m-top  7  
          .col-lg-11
            strong Estandarización
            p X-Road© tiene como objetivo estandarizar el protocolo de comunicación entre organizaciones. Esto permite a las organizaciones conectarse a cualquier número de proveedores de servicios sin implementar protocolos adicionales. El núcleo de X-Road© no realiza conversión de datos y protocolos.

        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_3.m-top  8  
          .col-lg-11
            strong Encapsulamiento del protocolo de seguridad
            p Las medidas de seguridad y el protocolo de seguridad están encapsulados en componentes estándar. Las organizaciones no están obligadas a implementar funciones relacionadas con la seguridad para el intercambio de datos.

        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_4.m-top  9  
          .col-lg-11
            strong Sin roles predeterminados
            p Una vez que una organización se ha unido a la infraestructura de X-Road©, puede actuar como cliente y como proveedor de servicios sin tener que realizar ningún registro adicional.

        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_5.m-top  10  
          .col-lg-11
            strong Autenticación de dos niveles
            p El núcleo de X-Road® solo se ocupa del control de acceso entre organizaciones, donde el acceso se otorga a una organización en su conjunto. La organización del cliente debe asegurarse de que solo las personas adecuadas puedan utilizar el servicio, utilizando cualquier medio técnico que considere apropiado.
        hr.hr.border-3.mb-5

    .titulo-segundo
      #t_1_2.h4 1.2 Arquitectura X-Road®

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_2.svg")

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta.morada.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arquitectura X-Road®
            .col-auto
              a.boton.boton--b(:href="obtenerLink('https://x-road.global/architecture')" target="_blank")
                span Enlace Web
                i.fas.fa-link

  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
