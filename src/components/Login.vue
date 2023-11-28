<template>
    <div class="container bg-white mt-5 p-5 shadow mb-5">
        <p class="text-center fs-1">Вход</p>
        <Form @submit="handleLogin" :validation-schema="schema">
            <div class="mt-3">
                <label for="username" class="form-label">Username</label>
                <input name="username" type="text" class="form-control" />
                <label name="username" class="error-feedback" />
            </div>
            <div class="mt-3">
                <label for="password" class="form-label">Password</label>
                <input name="password" type="password" class="form-control" />
                <label name="password" class="error-feedback" />
            </div>

            <div class="mt-3">
                <button class="btn btn-primary btn-block" :disabled="loading">
                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                    <span>Login</span>
                </button>
            </div>

            <div class="mt-3">
                <div v-if="message" role="alert" class="alert alert-danger">
                    {{ message }}
                </div>
            </div>
        </Form>
    </div>
</template>

<script>
import * as yup from 'yup';

export default {
    name: 'Login-comp',
    data(){
        const schema = yup.object().shape({
            username: yup.string().required("Username is required!"),
            password: yup.string().required("Password is required!"),
        });
        return{
            loading: false,
            message: "",
            schema,
            user: {
                username: "",
                password: ""
            }
        };
    },
    computed:{
        loggedIn(){
            return this.$store.state.status.loggedIn;
        }
    },
    created(){
        if(this.loggedIn){
            this.$router.push('/profile');
        }
    },
    methods:{
        handleLogin() {
            this.loading = true;

            if (this.user.username && this.user.password) {
          this.$store.dispatch('login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }

    }
}
}
</script>