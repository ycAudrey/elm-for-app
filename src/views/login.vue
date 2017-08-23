<template>
	<div id="login">
		<!-- 头部 -->
		<mt-header title="密码登录">			
			<mt-button  slot="left" icon="back" @click.native="$router.go(-1)"></mt-button>
		</mt-header>
		<!-- 表单 -->
		<div class="field">
			<mt-field label="" placeholder="账号" v-model="username"></mt-field>
			<mt-field label="" placeholder="密码" type="password" v-model="password"></mt-field>
			<mt-field label="" placeholder="验证码" v-model="captcha">
			  <img :src="imgURL"  alt='验证码'  @click="getValification">
			</mt-field>
		</div>
		<mt-button class="myButton" @click.native="toLogin"  size="large" type="primary">登录</mt-button>
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
	name: 'login',
	data () {
		return {
			imgURL:'',
			username:'',
			password:'',
			captcha:'',
		}
	},
	methods:{
		getValification(){
			this.$http.post('http://cangdu.org:8001/v1/captchas').then(function(res){
				this.imgURL = res.body.code;
			},function(res){
				console.log('获取验证码失败！');
			});
		},
		toLogin(){
			if (this.username) {
				if (this.password) {
					if (this.captcha) {
						this.$store.commit('setUserInfo',{userName:this.username,token:true});
						this.$router.push('/location/city');
					} else{
						MessageBox({
							title: '提示',
							message: '请输入验证码',
						});
					};
				} else{
					MessageBox({
						title: '提示',
						message: '请输入密码',
					});
				}
			} else{
				MessageBox({
					title: '提示',
					message: '请输入手机号/邮箱/用户名',
				});
			}
		}
	},
	mounted(){
		this.getValification();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#login{
	background-color: #F5F5F5;	
}
#login .mint-header{
	font-size: 0.48rem;
    padding: 0.72rem 0.4rem;
}
#login .mint-button{
    font-size: 0.48rem;
    height: 1.09333rem;
    margin: 0 auto;
}
#login .myButton.mint-button{
    width: 90%;
    margin-bottom: 0.53333rem;
}
#login i.mintui{
    font-size: 0.4rem;
}
#login .field{
	margin:15px 0; 
}
#login .mint-cell-wrapper{
	font-size: 0.42666rem;
	padding-left: 0;
}
#login .mint-cell-value{
	height: 1.28rem;
	padding-left: 0.53333rem;
}
#login .mint-field-other{
	right: 0.66666rem;
}
#login .mint-cell img{
	width: 2.13333rem;
    height: 0.93333rem;
}
.mint-msgbox-title{
	font-size: 0.426666rem;
}
.mint-msgbox-message {
    line-height: 0.96rem;
}
.mint-msgbox-btns{
	height:1.0666rem;	
}
.mint-msgbox-confirm{
	font-size: 0.426666rem;
}
.mint-msgbox{
	font-size:0.426666rem;
}
</style>
