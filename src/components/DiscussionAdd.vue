<template>
<form @submit.prevent="agregarPregunta" class="DiscussionReplyForm">
    <textarea @keyup.enter="agregarPregunta" v-model="texto" name="description" autofocus placeholder="Escribe tu pregunta" class="DiscussionReplyForm-area"></textarea>
    <input type="submit" value="Enviar" class="DiscussionReplyForm-submit">
  </form>
</template>
<script>
  export default {
    name: 'discussion-add',
    data () {
      return {
        texto: ''
      }
    },
    methods: {
      agregarPregunta () {
        let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
        let pregunta = {
          id: id,
          completado: false,
          user: this.$parent.user,
          fecha: new Date(),
          texto: this.texto,
          votos: 1,
          nivel: 1
        }
        this.$parent.preguntas.push(pregunta)
      }
    }
  }
</script>
