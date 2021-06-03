<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2 
      .h3 Servidor de seguridad

    img.img-a(src="@/assets/curso/tema_2/img_1.svg")

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.tarjeta.color_tar.p-4
          .row.justify-content-around.align-items-center  
            .col-auto
              img.img-a(src="@/assets/curso/tema_2/img_2.png")
            .col-sm.mb-3.mb-sm-0
              strong Servidor de seguridad
              p.mb-3 El servidor de seguridad es el punto de entrada a X-Road© y es necesario tanto para producir como para consumir servicios a través de X-Road©.

              ol.lista-ol
                li 
                  span.text-bold 1. 
                  | La función principal de un servidor de seguridad es mediar en las solicitudes de manera que se preserve su valor probatorio.

                li
                  span.text-bold 2. 
                  | En el contexto del Marco de Interoperabilidad para el Estado Colombiano, cada una de las Entidades que hagan parte del ecosistema X-Road®, debe instalar y configurar su propio servidor de seguridad.

    .titulo-segundo
      #t_2_1.h4 2.1 Funciones

    p.mb-5 El #[strong servidor de seguridad] encapsula los aspectos de seguridad de la infraestructura de X-Road©.

    .row.mb-5
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_2/img_3.svg' alt='AvatarTop')
          .tarjeta.tarj_ava.p-4
            p.text-center Administrar claves para #[strong firma] y #[strong autenticación].

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_2/img_4.svg' alt='AvatarTop')
          .tarjeta.tarj_ava.p-4
            p.text-center #[strong Enviar mensajes] a través de un canal seguro.

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_2/img_5.svg' alt='AvatarTop')
          .tarjeta.tarj_ava.p-4
            p.text-center Crear el #[strong valor de prueba] para los mensajes con firmas digitales.

    .titulo-segundo
      #t_2_2.h4 2.2 Monitoreo de datos

    p.mb-5 Los servidores de seguridad también proveen monitoreo de datos, en dos componentes:

    .row.justify.content-center.align-items-center
      .col-lg-3
        img.img-a(src="@/assets/curso/tema_2/img_6.png")
      .col-lg-8
        hr.border-2
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h2.span.list_1.m-top  1 
          .col-lg-10
            h6.mb-3 Monitoreo del entorno (Environmental monitoring)
            p.mb-3 Se encarga de obtener información acerca de la plataforma de los #[strong servidores de seguridad]:
            
            ol.lista-ol.mr
              li 
                span 1.
                | Procesos que se están ejecutando.
              li 
                span 2.
                | Paquetes que están instalados.
              li 
                span 3.
                | Espacio en disco.

        hr.border-2

        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h2.span.list_1.m-top  2 
          .col-lg-10
            h6.mb-3 Monitoreo operacional (Operational monitoring)
            p.mb-3 Está centrado en los #[strong servicios] y permite obtener información relacionada:
            
            ol.lista-ol.mr
              li 
                span 1.
                | Qué servicios han sido llamados.
              li 
                span 2.
                | Cuántas veces han sido llamados los servicios.
              li 
                span 3.
                | Tiempos de respuesta.

        hr.border-2

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
