<template>
  <form @submit.prevent="onSubmit" class="DiscussionReplyForm">
    <textarea @keyup.enter="onSubmit" v-model="texto" name="description" autoFocus="true" placeholder="Responder" class="DiscussionReplyForm-area"></textarea>
    <input type="submit" value="Enviar" class="DiscussionReplyForm-submit"/>
  </form>
</template>
<script>
  export default {
    name: 'reply-form',
    data () {
      return {
        texto: ''
      }
    },
    methods: {
      onSubmit () {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
        let respuesta = {
          id: id,
          completado: false,
          user: this.$parent.$parent.user,
          fecha: Date(),
          texto: this.texto,
          votos: 1,
          nivel: this.$parent.nivel + 1
        }
        this.$parent.respuestas.push(respuesta)
        this.$parent.isReplying = false
      }
    }
  }
</script>
