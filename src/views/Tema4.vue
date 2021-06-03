<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 4 
      .h3 Sistemas de información

    img.img-a(src="@/assets/curso/tema_4/img_1.svg")

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.tarjeta.color_tar.p-4
          .row.justify-content-around.align-items-center  
            .col-auto
              img.img-a(src="@/assets/curso/tema_4/img_2.png")
            .col-sm.mb-3.mb-sm-0
              p.mb-3 El sistema de información (SI) utiliza y/o proporciona servicios a través de X-Road. 

    .titulo-segundo
      #t_4_1.h4 4.1 Interacciones con X-Road©

    p.mb-5 El sistema de información (SI) utiliza y/o proporciona servicios a través de X-Road©.

    .row.mb-5
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.im_ava(src='@/assets/curso/tema_4/img_3.svg' alt='AvatarTop')
          .tarjeta.tarj_ava2.p-4
            .h6.text-center Para el cliente
            p.text-center Para el cliente, el #[strong servidor de seguridad] actúa como un punto de entrada a todos los servicios de X-Road©.

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.im_ava(src='@/assets/curso/tema_4/img_4.svg' alt='AvatarTop')
          .tarjeta.tarj_ava2.p-4
            .h6.text-center SI del cliente
            p.text-center El SI del cliente es responsable de implementar un mecanismo de #[strong control de acceso y autenticación] de usuario que cumpla con los requisitos de la instancia particular de #[strong X-Road]©.

    .row.mb-5
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.im_ava(src='@/assets/curso/tema_4/img_5.svg' alt='AvatarTop')
          .tarjeta.tarj_ava2.p-4
            .h6.text-center Identidad usuario
            p.text-center La identidad del usuario final se pone a disposición del #[strong proveedor] de servicios incluyéndose en la solicitud de servicio.

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.im_ava(src='@/assets/curso/tema_4/img_6.svg' alt='AvatarTop')
          .tarjeta.tarj_ava2.p-4
            .h6.text-center Miembros
            p.text-center El cliente puede #[strong descubrir] los miembros de X-Road© y los servicios disponibles utilizando el #[strong protocolo de metadatos de X-Road]©.

      

    .titulo-segundo
      #t_4_2.h4 4.2 Características

    .row.justify.content-center.align-items-center
      .col-lg-3
        img.img-a(src="@/assets/curso/tema_4/img_7.png")
      .col-lg-8
        hr.border-2
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h2.span.list_1.m-top  1 
          .col-lg-10
            h6.mb-3 Servicios Web
            p.mb-3 El #[strong sistema de información] implementa un servicio web #[strong SOAP] o REST y lo pone a disposición sobre #[strong X-Road]©.

        hr.border-2

        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            ol.lista-ol
              li 
                span.h2.span.list_1.m-top  2 
          .col-lg-10
            h6.mb-3 REST / SOAP
            p.mb-3 Un servicio #[strong SOAP] debe ir acompañado de una descripción del servicio #[strong WSDL], y un servicio #[strong REST] puede ir acompañado de una especificación OpenAPI v3.

            p El servicio debe ajustarse al protocolo de mensajes #[strong X-Road]© para #[strong SOAP] o al protocolo de mensajes para #[strong REST].

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
