<template>
    <v-container fluid>
        <h1>Sub menu {{menuId}}</h1>
    </v-container>
</template>

<script>
    export default {
        name: "SubMenu",
        props: {menuId: Number}
    }
</script>

<style scoped>

</style>
