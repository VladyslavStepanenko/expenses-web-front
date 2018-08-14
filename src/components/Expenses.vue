<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <panel title="Expenses">
                <v-btn                
                    slot="action"
                    @click="navigateTo({name: 'expenses-create'})"
                    class="green lighten-1"
                    medium
                    absolute
                    right
                    middle>
                    Add
                </v-btn>
                <div v-for="expense in expenses" :key="expense.tag">
                    {{expense.tag}}
                    {{expense.total}}
                    {{expense.created_at}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from './Panel'
import ExpensesService from '../services/ExpensesService'

export default {
    data() {
        return {
            expenses: []
        }
    },
    components: {
        Panel
    },
    mounted() {
        if(!this.$store.state.isUserLoggedIn) {
            this.$router.push({name: 'login'});
            return;
        }
        ExpensesService.index(this.$store.state.token)
        .then(res => {
            this.expenses = res.data.expenses;
            this.expenses.map(exp => {
                let created_at = new Date(exp.created_at);
                exp.created_at = created_at.toLocaleDateString();
            });
        });
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>
</style>


