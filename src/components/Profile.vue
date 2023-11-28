<template>
    <div class="container bg-white mt-5">
        <header class="jumbotron">
            <h3>
                <strong>{{ currentUser.username }}</strong> Profile
            </h3>
        </header>
        <p>
            <strong>Email:</strong>
            {{ currentUser.email }}
        </p>
    </div>
</template>

<script>

export default {
    name: 'Profile-comp',
    computed:{
        currentUser(){
            return JSON.parse(localStorage.getItem("user"));
        }
    },
    mounted(){
        if(!this.currentUser){
            this.$router.push('/login');
        }
    }
};
</script>