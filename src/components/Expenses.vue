<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md10>
            <panel title="Expenses">
                <v-btn                
                    slot="action"
                    :to="{ name: 'expenses-create' }"
                    @click="navigateTo({name: 'expenses-create'})"
                    class="green lighten-1"
                    medium
                    absolute
                    right
                    middle>
                    Add
                </v-btn>
                <v-data-table
                    :headers="headers"
                    :items="expenses"
                >
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.merchantName }}</td>
                        <td>{{ props.item.category }}</td>
                        <td>{{ props.item.created_at }}</td>
                        <td>{{ props.item.total }}</td>
                    </template>
                </v-data-table>
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
            expenses: [],
            headers: [
                {
                    text: 'Merchant',
                    align: 'left',
                    sortable: true,
                    value: 'merchant'
                },
                {
                    text: 'Category',
                    align: 'left',
                    sortable: true,
                    value: 'category'
                },
                {
                    text: 'Date',
                    align: 'left',
                    sortable: true,
                    value: 'date'
                },
                {
                    text: 'Total',
                    align: 'left',
                    sortable: true,
                    value: 'total'
                }
            ]
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


