<template>
    <div>
        <v-navigation-drawer
            app
            fixed
            temporary
            v-model="showMenu"
            v-if="isMobile"
            right>
            <v-list dense>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>fa-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>fa-help</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Help</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            v-if="!isMobile"
            fixed
            hide-on-scroll
            dark
            color="indigo">

            <v-toolbar-title>
                <router-link :to="{name: 'home'}" class="nav-link white--text">Big Store</router-link>
            </v-toolbar-title>

            <router-link :to="{ name: 'products', params: {categoryType: 'men', category: 1} }"
                         class="nav-link white--text" @mouseover.native="onHoverMenu(1)"
                         @mouseleave.native="showSubMenu=false">Men's
            </router-link>
            <router-link :to="{ name: 'products', params: {categoryType: 'women'} }" class="nav-link white--text"
                         @mouseover.native="onHoverMenu(2)" @mouseleave.native="showSubMenu=false">Women's
            </router-link>

            <v-spacer/>

            <router-link :to="{ name: 'login' }"
                         class="nav-link white--text" v-if="!isLoggedIn">Login
            </router-link>

            <router-link :to="{ name: 'register' }"
                         class="nav-link white--text" v-if="!isLoggedIn">Register
            </router-link>

            <span v-if="isLoggedIn">
                <router-link :to="{ name: 'userboard' }" class="nav-link white--text"
                             v-if="userInfo.user_type === 0"> Hi, {{userInfo.name}}</router-link>
                <router-link :to="{ name: 'admin' }" class="nav-link white--text"
                             v-if="userInfo.user_type === 1"> Hi, {{userInfo.name}}</router-link>
            </span>
            <v-btn icon v-if="isLoggedIn" @click="logout" :title="$vuetify.lang.t('$vuetify.signOut')">
                <v-icon>fa-sign-out-alt</v-icon>
            </v-btn>

        </v-app-bar>

        <v-bottom-navigation
            app
            v-if="isMobile"
            fix
        grow>

            <v-btn text @click.stop="toggleMenu">
                <span>{{$vuetify.lang.t('$vuetify.menu')}}</span>
                <v-icon>fa-bars</v-icon>
            </v-btn>

            <v-btn
                color="indigo accent-4"
                text
                :to="{name: 'home'}"
                route
                class="nav-link white--text">
                <span>{{$vuetify.lang.t('$vuetify.home')}}</span>
                <v-icon>fa-home</v-icon>
            </v-btn>

            <v-btn
                color="indigo accent-4"
                text>
                <span>{{$vuetify.lang.t('$vuetify.shoppingCart')}}</span>
                <v-badge
                    color="red"
                    content="6">
                    <v-icon>fa-shopping-cart</v-icon>
                </v-badge>

            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
    export default {
        name: "TopToolbar",
        props: {isLoggedIn: Boolean, userInfo: Object},
        data() {
            return {
                showMenu: false
            }
        },
        computed: {
            isMobile() {
                return this.$vuetify.breakpoint.mobile;
            }
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },

            onHoverMenu(id) {
                this.$emit('hover-menu', id)
            },

            logout() {
                this.$emit('logout')
            }
        }
    }
</script>

<style scoped>

</style>
