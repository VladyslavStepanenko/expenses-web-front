<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <panel title="New expense">
                <form autocomplete="off">
                    <v-text-field 
                        label="Tag" 
                        v-model="expense.tag" 
                        required 
                        :rules="[required]">
                    </v-text-field>
                    <v-text-field 
                        label="Merchant" 
                        v-model="expense.merchantName" 
                        required 
                        :rules="[required]">
                    </v-text-field>
                    <v-text-field 
                        label="Total" 
                        v-model="expense.total" 
                        required
                        :rules="[required]">
                    </v-text-field>
                    <v-select
                        :items="categories"
                        item-text="name"
                        item-value="_id"
                        label="Category"
                        required
                        :rules="[required]"
                        v-model="expense.category">
                    </v-select>
                    <v-select 
                        :items="paymentTypes" 
                        label="Payment type" 
                        required
                        :rules="[required]"
                        v-model="expense.paymentType">
                    </v-select>
                </form>
                <div class="error-message">
                    <p v-for="error in errors" :key="error.message">{{error.message}}</p>
                </div>
                <v-btn dark class="blue darken-3" @click="create">Save</v-btn>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from './Panel'
import ExpensesService from '../services/ExpensesService'
import CategoriesService from '../services/CategoriesService'

export default {
    data() {
        return {
            expense: {
                tag: null,
                merchantName: null,
                total: null,
                paymentType: null,
                //photoUrl: null,
                category: null,
                account: null
            },
            paymentTypes: [
                "Cash",
                "Credit Card"
            ],
            categories: [],
            errors: [],            
            required: (value) => !!value || 'Required.'
        }
    },
    components: {
        Panel
    },
    methods: {
        create() {
            if(this.$store.state.isUserLoggedIn) {
                this.expense.account = this.$store.state.account._id;
                let areAllFieldsFilledIn = Object.keys(this.expense).every(key => !!this.expense[key]);
                if(!areAllFieldsFilledIn) {
                    this.errors.push({
                        message: "Please fill in all the required fields."
                    });
                    return;
                }
                ExpensesService.post(this.expense)
                .then(res => {
                    this.$router.push({name: 'expenses'});
                })
                .catch(err => {
                    this.errors = err.response.data.errors;
                    console.log(err);
                });
            }
        }
    },
    mounted() {
        if(!this.$store.state.isUserLoggedIn) {
            this.$router.push({name: 'login'});
            return;
        }
        CategoriesService.index()
        .then(res => {
            this.categories = res.data.categories;
        })
        .catch(err => {
            console.log(err);
        });
    }
}
</script>

<style>
    .error-message {
        color: red;
    }
</style>
