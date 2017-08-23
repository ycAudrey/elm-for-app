<template>
	<div id="index">
	    <keep-alive>
		    <router-view></router-view>
		</keep-alive>
        <bottom-menu></bottom-menu>
	</div>
</template>

<script>
import bottomMenu from '@/components/bottomMenu'
export default{
	name:'index',
	data(){
		return {

		}
	},
	methods:{
		
	},
	components:{
		bottomMenu
	}
}
</script>

<style scoped>

</style>