<template>
  <transition name="custom-classes-transition"
              enter-active-class="animated bounceInRight"
              leave-active-class="animated tada">
    <div class="Discussion is-first  is-shadow">
      <div class="Discussion-wrapper">
        <div class="Discussion-top">
          <div class="DiscussionAuthor">
            <span class="DiscussionAuthor-name">
                <img :src="avatar" class="DiscussionAuthor-avatar" width="40" height="40"/>
                <a v-text="nombre" href="#" title="Ver perfil" target="_blank" ></a>
            </span>
          </div>
          <div class="">
            <span class="Discussion-date" v-text="fecha"></span>
          </div>
        </div>
        <div class="Discussion-text" v-text="texto"></div>
        <div class="Discussion-bottom">
          <div class="Discussion-bottomLeft">
          <span>
              <span @click="onUpVote" class="Discussion-vote Discussion-voteUp icon-plus_A "></span>
              <span @click="onDownVote" class="Discussion-vote Discussion-voteDown icon-minus_A "></span>
              <span class="Discussion-points">{{ votos }} Punto(s)</span>
          </span>
            <span v-if="nivel < 2">
              <span @click="onReply" class="icon-reply Discussion-reply">Responder</span>
              <span class="Discussion-comments">{{respuestas.length}} respuestas</span>
          </span>
          </div>
          <div class="Discussion-bottomRight">
          </div>
        </div>
      </div>
      <div class="Discussion-editor">
        <reply-form v-if="isReplying"></reply-form>
      </div>
      <div class="Discussion-children">
        <discussion-item v-for="(value, key) in respuestas"
                         :texto="value.texto"
                         :nombre="value.user.name"
                         :fecha="dateFormat(value.fecha)"
                         :votos="value.votos"
                         :avatar="value.user.avatar"
                         :nivel="value.nivel">
        </discussion-item>
      </div>

    </div>
  </transition>

</template>
<script>
  import moment from 'moment'
  import ReplyForm from './ReplyForm'
  export default {
    name: 'discussion-item',
    props: ['nombre', 'avatar', 'texto', 'fecha', 'votos', 'nivel', 'id'],
    components: {
      ReplyForm
    },
    data () {
      return {
        respuestas: [],
        isReplying: false
      }
    },
    methods: {
      onUpVote () {
       // this.votos = this.votos + 1
        this.$parent.preguntas[this.id].votos += 1
      },
      onDownVote () {
        this.votos = this.votos - 1
      },
      onReply () {
        this.isReplying = true
      },
      dateFormat (date) {
        return moment(date).fromNow()
      }
    }
  }
</script>
