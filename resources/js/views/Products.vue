<template>
    <div>
        <v-row no-gutters>
            <v-col
                v-for="(product,index) in products" :key="index"
                cols="12"
                md="3"
                sm="12"
                class="p-1">
                <v-card>
                    <v-carousel
                        :continuous="false"
                        :cycle="false"
                        :show-arrows="false"
                        hide-delimiter-background
                        delimiter-icon="fa-minus"
                        height="250">
                        <v-carousel-item>
                            <v-img height="250" :src="product.image"/>
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-img height="250" :src="product.image"/>
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-img height="250" :src="product.image"/>
                        </v-carousel-item>
                    </v-carousel>

                    <router-link :to="{ path: '/product/'+product.id}">
                        <v-card-title>{{product.name}}</v-card-title>
                    </router-link>

                    <v-card-text>
                        <v-row
                            align="center"
                            class="mx-0">

                            <div class="grey--text ml-4">
                                {{product.price}}
                            </div>
                        </v-row>
                    </v-card-text>

                    <v-divider class="mx-1"/>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple lighten-2"
                            text>
                            Reserve
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Products",
        props: {categoryType: String, category: String},
        data() {
            return {
                products: []
            }
        },
        watch: {
            $route(to, from) {
                this.getProducts(to.params.categoryType, to.params.category);
            }
        },
        mounted() {

            const catType = !!this.$route.params.categoryType ? this.$route.params.categoryType : this.categoryType;
            const category = !!this.$route.params.categoryType ? this.$route.params.category : this.category;
            this.getProducts(catType, category);

        },
        methods: {
            getProducts(categoryType, category) {
                axios.get('/api/products/')
                    .then(response => this.products = response.data)
                    .catch(error => console.error(error))
            }
        }
    }
</script>

<style scoped>

</style>
