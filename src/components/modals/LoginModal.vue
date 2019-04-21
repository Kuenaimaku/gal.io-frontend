<template>
  <div>
    <div class="modal-content">
      <section class="modal-card-body">
        <b-tabs btype="is-toggle" expanded>
					<b-tab-item label="Login">
            <form action v-on:submit.prevent>
            <div class="modal-card" style="width: auto">
                <section class="modal-card-body">
                  <div class="columns">
                    <div class="column">
                        <b-field  label="username">
                            <b-input placeholder="" required icon="account-circle" type="text" v-model="login.username"></b-input>
                        </b-field>
                        <b-field  label="Password">
                            <b-input placeholder="" required icon="lock" type="password" password-reveal v-model="login.password"></b-input>
                        </b-field>
                        <b-checkbox v-model="login.remember">Remember me</b-checkbox>
                    </div>
                  </div>
                </section>
                <footer>
                  <b-message
										type="is-danger"
										has-icon
										:active="errorMessage !== ''"
									>Failed to login. {{errorMessage}}</b-message>
                    <button class="button is-primary is-fullwidth" @click="login">
                      <span class="icon">
                        <b-icon icon="check-circle-outline"/>
                      </span>
                      <span>Validate</span>
                    </button>
                </footer>
            </div>
            </form>
					</b-tab-item>
          <b-tab-item label="Sign Up">
            <form action>
            <div class="modal-card" style="width: auto">
                <section class="modal-card-body">
                  <div class="columns">
                    <div class="column">
                        <b-field  label="Email">
                            <b-input placeholder="" required icon="email" type="email" v-model="registerForm.email"></b-input>
                        </b-field>
                        <b-field  label="username">
                            <b-input placeholder="" required icon="account-circle" type="text" v-model="registerForm.username"></b-input>
                        </b-field>
                        <b-field  label="Password">
                            <b-input placeholder="" required icon="lock" type="password" password-reveal v-model="registerForm.password"></b-input>
                        </b-field>
                        <b-field  label="Confirm Password">
                            <b-input placeholder="" required icon="lock" type="password" password-reveal v-model="registerForm.confirm"></b-input>
                        </b-field>
                    </div>
                  </div>
                </section>
                <footer>
                    <button class="button is-primary is-fullwidth" @click="register">
                      <span class="icon">
                        <b-icon icon="check-circle-outline"/>
                      </span>
                      <span>Sign Up</span>
                    </button>
                </footer>
            </div>
            </form>
					</b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>
<script>

import * as aTypes from "@/store/action-types";

export default {
  name: 'LoginModal',
  data () {
    return {
      loginForm:{
        username:null,
        password:null,
        remember:false
      },
      registerForm:{
        email:null,
        username:null,
        password:null,
        confirm:null
      },
      loading: false,
      errorMessage: ""
    }
  },
  methods: {
    async login() {
			this.errorMessage = "";
			try {
				await this.$store.dispatch(aTypes.LOG_IN, [
					this.loginForm.username,
					this.loginForm.password,
					this.loginForm.confirm
				]);
				this.$parent.close();
			} catch (err) {
				switch (err.status) {
					case 403:
						this.errorMessage = "Invalid username or password";
						break;
					default:
						this.errorMessage = "Unknown error has occured";
						break;
				}
			}
		},
		async register() {
			this.errorMessage = "";
		}
	}
}
</script>
