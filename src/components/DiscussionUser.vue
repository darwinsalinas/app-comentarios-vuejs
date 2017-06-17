<template>
  <div>
    <form v-if="showForm" class="DiscussionUser">
      <label class="label_A">Como te llamas</label>
      <input v-model="user.name" class="input_A" type="text" name="name" placeholder="Escribe tu nombre">
      <label class="label_A">Pega una URL para tu avata</label>
      <input v-model="user.avatar" class="input_A" type="text" name="avatar" placeholder="ejemplo : https://pbs.twimg.com/profile_images/480073396072742912/h6VGOhH6.jpeg">
      <input @click="entrar" class="btn-Red btn--big" type="submot" value="Entrar">
    </form>

    <div v-if="showDiscussionBody" class="DiscussionBody">
      <discussion-add></discussion-add>

      <div class="Discussion-list">
        <discussion-item v-for="(value, key) in preguntas"
                         :texto="value.texto"
                         :nombre="value.user.name"
                         :fecha="dateFormat(value.fecha)"
                         :votos="value.votos"
                         :avatar="value.user.avatar"
                         :nivel="value.nivel"
                        :id="value.id">
        </discussion-item>
      </div>

      <discussion-footer></discussion-footer>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DiscussionAdd from './DiscussionAdd'
import DiscussionFooter from './DiscussionFooter'
import DiscussionItem from './DiscussionItem'
export default {
  name: 'discussion-user',
  components: {
    DiscussionAdd,
    DiscussionFooter,
    DiscussionItem
  },
  data () {
    return {
      user: {
        name: '',
        avatar: ''
      },
      preguntas: [],
      showForm: true,
      showDiscussionBody: false
    }
  },
  methods: {
    entrar () {
      if (this.user.avatar === '') {
        this.user.avatar = 'https://github.com/apple-touch-icon-144x144.png'
      }
      if (this.user.name === '') {
        this.user.name = 'Invitado'
      }
      this.showForm = false
      this.showDiscussionBody = true
    },
    dateFormat (date) {
      return moment(date).fromNow()
    }
  }
}
</script>
