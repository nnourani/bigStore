<template>
    <div>
        <Banner/>
        <v-spacer/>
        <Products/>
    </div>
</template>

<script>
    import Banner from "../components/Banner";
    import Products from "./Products";

    export default {
        components: {Products, Banner},
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
