<template>
    <div>
        <Banner/>
        <div class="container mt-2">
            <b-row>
                <b-col md="4" sm="12" class="p-2" v-for="(product,index) in products" :key="index">
                    <router-link :to="{ path: '/products/'+product.id}">
                        <b-carousel
                            controls
                            no-animation
                            :interval="100000"
                            style="text-shadow: 1px 1px 2px #333;">
                            <b-carousel-slide>
                                <template #img>
                                    <img
                                        class="d-block img-fluid w-100"
                                        :src="product.image"
                                        :alt="product.name"
                                    >
                                </template>
                            </b-carousel-slide>
                        </b-carousel>
                        <div>
                            <h5>
                                <span v-html="product.name"></span>
                                <span class="small-text text-muted float-right">$ {{product.price}}</span>
                            </h5>
                            <button class="col-md-4 btn btn-sm btn-primary float-right">Buy Now</button>
                        </div>
                    </router-link>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Banner from "../components/admin/Banner";

    export default {
        components: {Banner},
        data() {
            return {
                products: []
            }
        },
        mounted() {
            axios.get('api/products/')
                .then(response => this.products = response.data)
                .catch(error => console.error(error))
        }
    }
</script>

<style scoped>
    .small-text {
        font-size: 14px;
    }

    .product-box {
        border: 1px solid #cccccc;
        padding: 10px 15px;
    }

    .hero-section {
        height: 30vh;
        background: #ababab;
        align-items: center;
        margin-bottom: 20px;
        margin-top: -20px;
    }

    .title {
        font-size: 60px;
        color: #ffffff;
    }

    .img-fluid {
        height: 300px;
    }
</style>
