<template>
    <div>
        <b-carousel
            v-model="slide"
            :interval="10000"
            controls
            indicators
            no-animation
            background="#aa2355"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">

            <b-carousel-slide>
                <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        src="https://picsum.photos/1024/480/?image=51"
                        alt="image slot"
                    >
                </template>
                <p>
                    First slide
                </p>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        src="https://picsum.photos/1024/480/?image=52"
                        alt="image slot"
                    >
                </template>
                <p>
                    Second slide
                </p>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        src="https://picsum.photos/1024/480/?image=53"
                        alt="image slot"
                    >
                </template>
                <p>
                    Third slide
                </p>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>

    .img-fluid {
        height: 200px;
    }
</style>
