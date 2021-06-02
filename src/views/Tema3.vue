<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3 
      .h3 Infraestructura Central

    img.img-a(src="@/assets/curso/tema_3/img_1.svg")

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.tarjeta.color_tar.p-4
          .row.justify-content-around.align-items-center  
            .col-auto
              img.img-a(src="@/assets/curso/tema_3/img_2.png")
            .col-sm.mb-3.mb-sm-0
              p.mb-3 El #[strong servidor central] administra la base de datos de los #[strong miembros] de X-Road© y los #[strong servidores de seguridad.]

              p.mb-3 Además, el servidor central contiene la #[strong política de seguridad] de la instancia de X-Road©.


              ol.lista-ol
                li 
                  span.text-bold 1. 
                  | El servidor central lleva registro sobre toda esta información y la distribuye en una estructura de datos llamada Configuración global.

                li
                  span.text-bold 2. 
                  | El servidor central es administrado y gestionado por el articulador de los SCD (Servicios Ciudadanos Digitales), es decir, por la Agencia Nacional Digital - AND

    .titulo-segundo
      #t_3_1.h4 3.1 Política de seguridad

    p.mb-5 La política de seguridad consta de los siguientes elementos:

    .row.mb-5
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_3/img_3.svg' alt='AvatarTop')
          .tarjeta.tarj_ava.p-4
            p.text-center Lista de #[strong autoridades de certificación de confianza].

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_3/img_4.svg' alt='AvatarTop')
          .tarjeta.tarj_ava.p-4
            p.text-center Lista de #[strong autoridades confiables de sellado de tiempo].

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_3/img_5.svg' alt='AvatarTop')
          .tarjeta.tarj_ava.p-4
            p.text-center Parámetros ajustables, como la vida útil máxima permitida de una respuesta #[strong OCSP].

    .titulo-segundo
      #t_3_2.h4 3.2 Configuración global

    .row.justify.content-center.align-items-center
      .col-lg-3
        img.img-a(src="@/assets/curso/tema_3/img_6.png")
      .col-lg-8
        hr.border-2
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  1 
          .col-lg-10
            h6.mb-3 Base de datos de miembros
            p.mb-3 Tanto la #[strong base de datos de miembros] como la #[strong política de seguridad] están disponibles para los servidores de seguridad a través del #[strong protocolo HTTP]. Este conjunto distribuido de datos forma la #[strong configuración global].

        hr.border-2

        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  2 
          .col-lg-10
            h6.mb-3 Configuración global
            p.mb-3 La #[strong configuración global] está disponible para descargar desde el #[strong servidor central], los #[strong servidores de seguridad] usan esa información para conocer dónde están los servicios y otros servidores de seguridad.

        hr.border-2

    .titulo-segundo.mb-5
      #t_3_3.h4 3.3 Autoridad de Certificación

    .row
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_7.svg' alt='AvatarTop')
          .tarjeta.tarjeta.tarj_ava
            .p-4
              .h4 Autoridad de certificación
              p Es la entidad de confianza que administra todos los certificados para los servidores de seguridad.
              p Si estos no cuentan con certificaciones válidas entonces ellos no confían y no se pueden comunicar con otros servidores de seguridad.

    .row
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_8.svg' alt='AvatarTop')
          .tarjeta.tarjeta.tarj_ava
            .p-4
              .h4 OCSP (Online Certificate Status Protocol)
              p El protocolo OCSP es utilizado por los servidores de seguridad para consultar la información de validez sobre los certificados de firma y autenticación.
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | El protocolo OCSP es un protocolo síncrono que ofrece la autoridad de certificación.
                li 
                  i.lista-ul__vineta
                  | Debido a que las respuestas OCSP se utilizan en el proceso de validación de certificados, la falla del servicio OCSP deshabilita efectivamente el intercambio de mensajes X-Road©.
                li 
                  i.lista-ul__vineta
                  | Cuando las respuestas OCSP almacenadas en caché no se pueden actualizar, los servidores de seguridad no pueden comunicarse.
                li 
                  i.lista-ul__vineta
                  | La vida útil de las respuestas OCSP determina la cantidad máxima de tiempo que el servicio OCSP puede no estar disponible.

    .tarjeta.tarjeta--azul.color_tarjeta_1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema_3/img_9.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Revisar la siguiente infografía informativa acerca del programa Familias en Acción.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .tarjeta.slider_borde.p-4.mb-5
      SlyderA
        .row
          img.img-a.mb-5(src="@/assets/curso/tema_3/img_10.svg")
          p Los #[strong servidores de seguridad] almacenan en caché las respuestas OCSP para reducir la carga en el #[strong servicio OCSP] y aumentar la disponibilidad. La carga del #[strong servicio OCSP] depende de la cantidad de certificados emitidos.
          

        .row
          img.img-a.mb-5(src="@/assets/curso/tema_3/img_11.svg")
          p La identidad de cada organización (#[strong proveedor] de servicios de X-Road o #[strong consumidor] de servicios) y punto de entrada técnica (#[strong servidor de seguridad]) se verifica mediante certificados emitidos por una #[strong autoridad de certificación] (CA) de confianza cuando una organización se une a un ecosistema X-Road.  

    .titulo-segundo.mb-5
      #t_3_4.h4 3.4 Autoridad de sellado de tiempo

    img.img-a(src="@/assets/curso/tema_3/img_12.png")

    .tarjeta.tarjeta--azul.color_tarjeta_1.p-3.mb-5
      p.text-center Es la característica que sirve para probar si todos los mensajes han sido realmente transmitidos.
      p.text-center.mb-3 Así, todos los que pasan a través de los servidores de seguridad son finalmente estampados en el tiempo por esta “autoridad”.
      .color_tarjeta_2.p-2
        p.text-center.txt_c El sello de tiempo y la firma digital juntos garantizan el #[strong.txt_c no repudio] de los datos enviados a través de X-Road©.

    .titulo-segundo.mb-5
      #t_3_5.h4 3.5 Proxy de configuración

    .row.justify.content-center.align-items-center
      .col-lg-3
        img.img-a(src="@/assets/curso/tema_3/img_13.png")
      .col-lg-8
        hr.border-2
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  1 
          .col-lg-10
            h6.mb-3 ¿Qué es?
            p.mb-3 El #[strong proxy de configuración] descarga la configuración, la almacena y la pone a disposición para su descarga. Por lo tanto, se puede utilizar para aumentar la #[strong disponibilidad] del sistema mediante la creación de una fuente de #[strong configuración adicional] y reducir así la carga en el servidor central.

        hr.border-2

        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  2 
          .col-lg-10
            h6.mb-3 ¿Qué implementa?
            p.mb-3 El #[strong proxy de configuración] implementa tanto la parte del cliente como la parte del servidor del protocolo de distribución de la configuración. Es una clase de componente auxiliar que se puede utilizar cuando #[strong Trust Federation] se encuentre activo. #[strong Es opcional su implementación].

        hr.border-2

        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  3 
          .col-lg-10
            h6.mb-3 Ecosistemas X-Road©
            p.mb-3 Dos #[strong ecosistemas X-Road]© se pueden comunicar (#[strong federar]). La federación es una relación uno a uno entre dos ecosistemas. Los miembros de los ecosistemas federados pueden #[strong publicar y consumir] servicios entre ellos como si fueran miembros del mismo ecosistema.
        hr.border-2

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
