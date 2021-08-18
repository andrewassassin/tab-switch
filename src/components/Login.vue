<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="py-3">
        <div class="container">
            <div class="row">
                <form id="LoginForm" v-on:submit.prevent="loginForm($event)" class="container col-md-6 py-3">
                    <div class="form-group">
                        <label for="userName">會員帳號</label>
                        <input type="text" v-model="user.username" placeholder="請輸入帳號" id="userName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="userPwd">會員密碼</label>
                        <input type="password" v-model="user.password" placeholder="請輸入密碼" id="userPwd" class="form-control"  required>
                    </div>
                    <div class="form-group my-4">
                        <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> 登入</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',
    data () {
        return {
        msg: '會員登入',
        user:{
                username:'',
                password:'',
                name:''
            }
        }
    }, 
    methods:{
        loginForm (event) {
            console.log('submit')
            const data = {
                username: this.user.username,
                password: this.user.password,
            }
            const config = {
              responseType: 'text'
            };
            axios.post("http://localhost/Amitproject/login.php#/", data, config)
                .then(response => {
                    console.log('res  ', response);
                })
                .catch(error => {
                    console.log('err',error);
                });
        }
    }
}
</script>