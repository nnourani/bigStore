<template>
    <v-app>

        <TopToolbar :is-logged-in="isLoggedIn" :user-info="userInfo"
                    @hover-menu="onHoverMenu" @logout="logout"/>

        <v-main>
            <v-banner single-line v-if="false">
                <v-icon
                    slot="icon"
                    color="warning"
                    size="36">
                    mdi-wifi-strength-alert-outline
                </v-icon>
                Unable to verify your Internet connection
                <template v-slot:actions>
                    <v-btn
                        color="primary"
                        text
                    >
                        Connecting Settings
                    </v-btn>
                </template>
            </v-banner>
            <v-container fluid class="grey lighten-5">
                <SubMenu v-if="showSubMenu" :menu-id="menuId"/>
                <router-view @loggedIn="change"/>
            </v-container>
        </v-main>

        <v-footer>
            <span>Big Store</span>
        </v-footer>
    </v-app>
</template>

<script>
    import SubMenu from "../components/SubMenu";
    import TopToolbar from "../components/TopToolbar";

    export default {
        name: "App",
        components: {TopToolbar, SubMenu},
        data() {
            return {
                userInfo: {
                    name: null,
                    user_type: 0
                },
                isLoggedIn: localStorage.getItem('bigStore.jwt') != null,
                showSubMenu: false,
                menuId: 0,
            }
        },
        mounted() {
            this.setDefaults();
        },
        methods: {
            setDefaults() {
                if (this.isLoggedIn) {
                    let user = JSON.parse(localStorage.getItem('bigStore.user'));
                    this.userInfo.name = user.name;
                    this.userInfo.user_type = user.is_admin;
                }
            },
            change() {
                this.isLoggedIn = localStorage.getItem('bigStore.jwt') != null;
                this.setDefaults()
            },
            logout() {
                localStorage.removeItem('bigStore.jwt');
                localStorage.removeItem('bigStore.user');
                this.change();
                this.$router.push('/');
            },
            onHoverMenu(id) {
                this.menuId = id;
                // this.showSubMenu = true;
            }
        }
    }
</script>

<style scoped>

</style>
