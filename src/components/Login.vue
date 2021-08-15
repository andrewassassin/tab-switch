<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="py-3">
        <div class="container">
            <div class="row">
                <form id="LoginForm" class="container col-md-6 py-3">
                    <div class="form-group">
                        <label for="userName">會員帳號</label>
                        <input type="text" placeholder="請輸入帳號" id="userName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="userPwd">會員密碼</label>
                        <input type="password" placeholder="請輸入密碼" id="userPwd" class="form-control"  required>
                    </div>
                    <div class="form-group my-4">
                        <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> 註冊</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    name: 'Register',
    data () {
        return {
        msg: '會員登入'
        }
    }, 
    mounted(){
        $("#LoginForm").unbind('submit').bind('submit',function(e){
            console.log('submit')
            e.preventDefault();
            const data = {
            username: $("#userName").val(),
            password:$("#userPwd").val()
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
        })     
    }
}
</script>