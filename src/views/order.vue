<template>
	<div id="order">
		<!-- 头部 -->
		<mt-header title="订单列表">
			<span slot="left">
			    <mt-button icon="back"  @click.native="$router.go(-1)"></mt-button>
			</span>
	    </mt-header>
	</div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
     
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#order .mint-header{
    font-size: 0.48rem;
    padding: 0.72rem 0.4rem;
}
#order .mint-button{
    overflow: visible;
}
#order i.mintui{
    font-size: 0.4rem;
}
</style>
