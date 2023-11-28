<template>
    <div class="bg-primary container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top">
        <div class="col mb-3 text-center">
          <img src="../assets/png-transparent-rideride-cycle-workshop-bicycle-shop-logo-brand-bicycle-repair-text-service-bicycle.png" class="img-fluid" />
          <p class="text-white">© 2023</p>
        </div>
        <div class="col mb-3">
          <h5 class="text-white">Главная</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/home" class="nav-link p-0 text-white">Домашняя страница</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/catalog" class="nav-link p-0 text-white">Каталог</router-link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
</template>

<script>
    export default{
        name: "Footer_"
    }
</script>