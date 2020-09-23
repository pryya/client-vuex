<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-item><li @click="logout"><i class="fa fa-lock" />LOGOUT</li></b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import axios from 'axios'
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'


export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      // state LoggedIn with LocalStorage
      loggedIn: localStorage.getItem('loggedIn'),
      //state token
      token: localStorage.getItem('token'),
      //state user logged In
      user: [],

      itemsCount: 42 }
  },

   methods: {
      logout() {
        axios.get('http://localhost:8000/api/logout')
        .then(() => {
          //remove localStorage
          localStorage.removeItem('loggedIn')

          //redirect
          return this.$router.push({name: 'Login' })
        })
      }
    },

    //check user logged in or not
    mounted() {
      if(!this.loggedIn) {
        return this.$router.push({name: 'Login' })
      }
    }
}
</script>
