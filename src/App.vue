<template>
  <div class="bg-primary">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="/">Веломаркет</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/home" class="nav-link text-white">Домашняя страница</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/catalog" class="nav-link text-white">Каталог</router-link>
                    </li>
                    <li v-if="showAdminBoard" class="nav-item">
                        <router-link to="/admin" class="nav-link text-white">Admin Board</router-link>
                    </li>
                    <li v-if="showModeratorBoard" class="nav-item">
                        <router-link to="/mod" class="nav-link text-white">Moderator Board</router-link>
                    </li>
                </ul>
                <div v-if="!currentUser">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link text-white">Регистрация</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link text-white">Вход</router-link>
                        </li>
                    </ul>
                </div>
                <div v-if="currentUser">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/profile" class="nav-link text-white">{{ currentUser.username }}</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" @click.prevent="logOut">Выход</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class="container">
        <router-view class="rounded" />
    </div>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
  computed:{
    currentUser(){
            return this.$store.state.user;
        }
  },
  methods:{
    logOut(){
        this.$store.dispatch('logout');
        this.$router.push('/login');
    }
  }
}
</script>

