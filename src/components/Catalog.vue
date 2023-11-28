<template>
    <div>
        <div class="bg-white rounded p-5 mt-5 shadow">
            <p class="text-center fs-1">Каталог велосипедов</p>

        <div class="text-center mt-5">
            <div class="row row-cols-3 gx-5 gy-4">
                <div v-for="bike in bike_pag" :key="bike.name" class="col">
                    <img src="../assets/загружено_img1.jpeg" class="img-fluid rounded">
                    <div class="card-body">
                        <h5 class="card-title">{{ bike.name }}</h5>
                        <p class="card-text">{{ bike.desc }}</p>
                    </div>
                </div>
            </div>
        </div>

        <paginate 
            :page-count="2"
            :page-range="3"
            :margin-pages="2"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :clickHandler="clickHandlerBikes"
            class="mt-5 justify-content-center"
        >
        </paginate>
        </div>
        
        <div class="bg-white rounded p-5 mt-5 shadow">
            <p class="text-center fs-1">Каталог запасных частей</p>

        <div class="text-center mt-5">
            <div class="row row-cols-3 gx-5 gy-4">
                <div v-for="item in stuff_pag" :key="item.name" class="col">
                    <img src="../assets/11730138.jpg" class="rounded img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>

        <paginate 
            :page-count="2"
            :page-range="3"
            :margin-pages="2"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :clickHandler="clickHandlerStuff"
            class="mt-5 justify-content-center"
        >
        </paginate>
        </div>
    </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
    name: "Catalog-comp",
    components:{
        paginate: Paginate
    },
    data(){
        return{
            bikes:[
                {name: "Bike 1", desc: "Description about bike 1"},
                {name: "Bike 2", desc: "Description about bike 2"},
                {name: "Bike 3", desc: "Description about bike 3"},
                {name: "Bike 4", desc: "Description about bike 4"},
                {name: "Bike 5", desc: "Description about bike 5"},
                {name: "Bike 6", desc: "Description about bike 6"},
                {name: "Bike 7", desc: "Description about bike 7"},
                {name: "Bike 8", desc: "Description about bike 8"},
                {name: "Bike 9", desc: "Description about bike 9"},
                {name: "Bike 10", desc: "Description about bike 10"},
                {name: "Bike 11", desc: "Description about bike 11"},
                {name: "Bike 12", desc: "Description about bike 12"}
            ],
            bike_pag:[],
            stuff:[
                {name: "Item 1", desc: "Description about item 1"},
                {name: "Item 2", desc: "Description about item 2"},
                {name: "Item 3", desc: "Description about item 3"},
                {name: "Item 4", desc: "Description about item 4"},
                {name: "Item 5", desc: "Description about item 5"},
                {name: "Item 6", desc: "Description about item 6"},
                {name: "Item 7", desc: "Description about item 7"},
                {name: "Item 8", desc: "Description about item 8"},
                {name: "Item 9", desc: "Description about item 9"},
                {name: "Item 10", desc: "Description about item 10"},
                {name: "Item 11", desc: "Description about item 11"},
                {name: "Item 12", desc: "Description about item 12"}
            ],
            stuff_pag:[]
        }
    },
    methods:{
        clickHandlerBikes(pageNum){
            if(pageNum == 1){
                this.bike_pag = this.bikes.slice(0, 6);
            }
            else{
                this.bike_pag = this.bikes.slice(6, 12);
            }
        },
        clickHandlerStuff(pageNum){
            if(pageNum == 1){
                this.stuff_pag = this.stuff.slice(0, 6);
            }
            else{
                this.stuff_pag = this.stuff.slice(6, 12);
            }
        }
    },
    mounted(){
        this.bike_pag = this.bikes.slice(0, 6);
        this.stuff_pag = this.stuff.slice(0, 6);
    }
}
</script>