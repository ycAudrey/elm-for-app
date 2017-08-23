<template>
	<div id="bottomMenu" @click.prevent="changePage">
		<mt-tabbar fixed v-model="selected">
		  <mt-tab-item  id="/index/home">
		    <!-- 运输 icon by Icons8 -->
		    <img slot="icon" class="icon icons8-运输" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACp0lEQVRoQ+2Z4VFVMRCFDxWIFSgdSAVqBUIFaAViBUoFagVKBUoFYAXQAVIBUIHOJ8lMiLnZvTfJMI+5+4f35iWbPbtnd5NlSxsuWxtuv1YADx3BNQJrBBo98Ggp9FzSZ0kvJPG5RX5LupD0QRKfu0opAhh8Lmm760nSjaTd3iBKAH5KetPZ+KjuRNJeT90lANcDvB9thkI7owH8MQ64kvRF0lngNsvJlVeSDiU9M/Z3LRwlZTUAJCLG1wQQFIApeTAAJCDVpCR4n6QnfxC+ny6gChR7F6Lr2u6NgOV5qhY0AsB+ONmKxJSBs6qVBwCcr/WC1NBjSW8Ty/ColRMlIOTXa08IPABq3oc2l4E+tyEKabNaGgVst6L+D58HQI373yUdBE8dSfqUeQ1aQa+SlM6mQLwPi11U8gCYqhppotZoNlXVSnqJKIUi0s6kUgsAOuqPxLVUDyKSyxwA7M31VqnkAVCjEAn7rQJiLoWiqvQ6U6WSB4CVTDkIqgehR2pJXGtoUIli8CTomaSSB4Dn/hJB5GWUCjVVgq2O7KKSB4C3pJHU0fOW9z0lPl9TpJIXAMpquZAflntvicGlPXmEXX0gVQSnvxrWUMetC18LoHtOnxOBeCg5gYG/suv0y5C0rU9QC1wzAOuA0b+vAEZ72NK/RsDy0OjfH38E6HjxDjLam3P182i6N3CbO9iiE9LMEHpBfMzMNSRf79Xr6sQ0Ih4VpSg81d2IEMETDMF6iEdv6ck6+S8mQOBh7vPpo9xz0BJAll48jz3/jXWsKy3GpI8LXly8DxCGV3ECsWTm2UWvB4BnSJU+YrwR6KLXAwCDmDZ8nLCsNI3wgmjW6wWAQXF4y1+Ex0sc8noNLq1r0jsHQIuRw/auAIa51ql4jYDTUcOWbXwE/gLy95sxOhSSuQAAAABJRU5ErkJggg==">
		    <div class="fontSize">外卖</div>
		  </mt-tab-item>
		  <mt-tab-item id="/index/search" >
		    <!-- 罗盘 icon by Icons8 -->
		    <img slot="icon" class="icon icons8-罗盘" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEj0lEQVRoQ8WagXHUMBBFNxUAFZBUAFQAVABUAFQAVABUQFIBUAFQAaQCkgqACoAKYJ5HP7NWJEuyZJ9mbu6SO0v79/9d7co+snHj2Mzum9nd8LoZ3v0KP82M10V4nYe/u6046pwB45+a2TMz4/OaAbAPZvaxB9RaIBj9OgCQ8X/N7FvwNO9/wud/4Qes9SB85h3meL/h0APo7RpArUCQy7sIAJ78HF4pRpARA8NT47GZ8YJZDQC9Cs6oYrkFCIu9NzPA4P3T8MLzIwbzvgxMMx/zPl9w0GzNWiCwwCIMApSYQNtbDGQLIyQOBg6DncVRAoKXPgUtwwJgWGSPgbNQAAPpwk6W/SUggPgatA0IAlN63wMIaxBXJA4SAms/zIFZAgIIjL8MwbiVlEpOAQwquBOYeZK6IAcEXb4IQc1EhwIhmz0zZy5erzClgEibh5JTjiHAfA9fwgpxkwVCXPwIKZbg2iuwvU3YgBpSO72cTNCf+HiJGcFwNqYvIS5K+h39vd+r2OHfJBYg+EnNAAXYNDwQ8jdsIKm94wIWSLUAYWAD9qTSrezkd7Ayxa8HIjZynhjtfc3nWdD/rsVAtLhsvWJFQDzKWy01Tge6mAVNVSNrrv0dLphYERC0SDU7012HkaVLUyyUJBXPKVYoX04FhNiAlRKlJQNL3+dYqJWUnx9nUD4RIycA8UHOQluNHAstkoptIxlQvkxAlJtrtLkGZImFVkl5G9gUH1FQAkTlyBbZqsTCGkl5IIrtM4Bog6Gy5POIUcNCj6R0LUUtxe05QKhf2ABHAiEItbktOWZp46txqIBcAMQfDtRcXPqNssmvIFu6y9wYkSUn+z0Q/qZ5uVeydOF7X3SKYd/p+Ut7k4uUNM0ZA6GJyp121OCTpOKeIQbTKyk5nWbrGpBS/14C4iWFM+KCj35fMhshKdlzJS3kBLKeYE9JygMnKKlu2Xx7JRXPS9a6HJV+c5ICIDWcjpIAgcxGnYXN0m/vhpiTlGeBmADArD0tabXi+9mG2FOipCS1NQse36xEUdEI3fQiLSOW1B4sePvoSXDcVDQyKIVvN5bxXlIA4MBgq1hIOdevf7y2sfKSotjkwAJmt4qFFJBkY9Xa6kpSyFE9zOiMtCTxbKvLRbWHD6JUC+3JgtbMHj7wAx/01FupY1IvKa7ZkwWBKB4HeVboS9jp46G8fQgWZIsO17MHdPwQj8MEfXDqyJQaCmmxiY7anVvSvT+Xnh3gpQpFHwNIbO97IjlgTYfYmkRlC15HYocGAwgkhWKqbysIjHp5QCCzQ4EBBJUz79nKuXTrDTCU+IdixjNB00cFkYzNUjMFlRRmusO65z0T31UW03wJSBwz/A1LANrqdhzZCCnpKYlkTMQZoRYI15HN2FH1yAV7CouMSsPxUxVNe1ULEO0zZLT4cQvkB/2poft+udMZjjxx0tXdp3BXgEq62kmtQHyZACMeEIv6h2r4LU9J+HMzxZp/qMYfnLNbM2+zbNcC8YDwJt6jn1kzdJAHq80AtGAvEG84QSpPkzb5OwZHCtXjT+xLMLjaeL/4f6ozSH0rBNcxAAAAAElFTkSuQmCC">
		    <div class="fontSize">搜索</div>
		  </mt-tab-item>
		  <mt-tab-item id="/index/order" >
		    <!-- 店 icon by Icons8 -->
		    <!-- Bill icon by Icons8 -->
		    <img slot="icon" class="icon icons8-Bill" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAwklEQVRIS+2W0Q3CMAxEXyeADYANYANGgclgFEYoEwAbsAHIEhZHFcCNxRfJT6vGvtdcT6o7nmsN7IC5PMvcnoEtcDCRTpRsY5ZRLvSa5mIIuj0KFZ7hvuip6H+ApsAJsOun1QOrQcEo6wxgIt9CcgSWGVALgzow6hv93LpI2jxpWqvpC50okjZPmtZq+kKgjGXeGwI160pWN+uqAxiyrlpdGhuo2sW31l2BSbVsufHic6JOQTZA7gO/7ei7GGTjA+QdmuFSG1XMtCcAAAAASUVORK5CYII=">
		    <div class="fontSize">订单</div>
		  </mt-tab-item>
		  <mt-tab-item id="/index/person" >
		    <!-- 性别中性用户 icon by Icons8 -->
		    <img slot="icon" class="icon icons8-性别中性用户" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADyElEQVR4Xu2agdEMQRCF3x8BIkAEiAARIAJEgAgQASJABIgAESACRIAIqE/tVLWu2budnp51VbtddVX/3r870/3m9Zue3jvTxu1s4/FrB2BnwMYR2FNg4wTYRXBPgT0F1kXgqqRbkm5IOi+Ja+yzpJ+SPkh6N12v4tlaKXBb0jNJlxZG9U3SI0lvF94fvm00AAT8clrxiJMw4r4kABliIwGA3u8nqvc4T2rcHJUWowAg+E8zUb+ecp2854NxPx+04e7Mc9dGgDACAGhP8IicNcTt4QI68/zzSSzt8zABEFLTYQQA0J6VtIagEVSLARbCaQ1NIB3SLBsA1P5NQvBliBoIdzJ3h2wAvrqtDtoDSo+xFVI7FCMFLvcMaJ/NBKAmfDjam7NoAsBaSxPETACeSHpsvETt7yWt1Cu3OzyVxHzdlgkAAnXdeEQBg+MZBpAUVMU+dhRX//iTCQBbX6ntmSSNptO4tq6gfmD8bssE4LfzJnNshh4yfqaTQxw0oA4ZPxMAKrVzxuGRKfAr4Yzx19VMADYvgpS6D1baBl9M54qTEsHNF0KsBlXfRbMslLHU7j3G2cKW098bOktH583UACbzBQvfRU6CxfHaYSizwEoVweK0F0O+JxDytsXQE3+ETqsAiyPZDGBctAAQ7JbI96QDbDh2OOLwQx/AnyLZ+ugzlC5SC5iz944AgMlqfYHiBOcDAPriWmJXpgDnDlCpfYCRDChjAwLBeia0rhwrz1iAlm6jGFAchbKouO8PLg2E6pKVHxI8TowCgIARMcQvGnwBCRAQQ0SUv1NtBAC9qz4XIOLJFpjKhmwA6Agd6tTQI2Q3IBhW074XgCnsAOS77QF6QBifjlCKZQJAx6am4FRuOE3gSykMGADBc7aytDsJbOi2LABqwaPe5C6fpYH7gAACHeHjdxN2mG4QMgDwzVCCyC5a5oqr7uZoLwC1gocCByGMrvocrWEDAkjBZK2rQOoBAIdoVNp3/qw819nBl4CZEwG16cA13afQnD0AeOpn036OCbV0CKdCFIDa25qwEwEpr+nOhQgLogB4B9jqWJkQDQMAkArUEHaLDPUdogD4l6CpTYqFgPjmS+ilaQSAWu8vRL+FgR7aFX64fza34iMA+DZVxivwKBb+1XlzGkQA8JP+D/oXwHwaNC9GBADf8+MnK6kntAY6UHDxk5xizT3DCADknT3jN+ddQ4DHbvV61CyEEQCGvKQ8FumB/3f5EwGgw9fTe3QH4PTWZF2Pdgasi/fpzbYz4PTWZF2Pdgasi/fpzbZ5BvwBUzK6QdnCQacAAAAASUVORK5CYII=">
		    <div class="fontSize">我的</div>
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
export default{
	name: 'bottomMenu',
	data(){
		return {
			selected: this.$route.path
		}
	},
	methods:{
		changePage:function(){
			this.$router.push(this.selected);
			console.log("selected: ",this.selected);
			console.log("$route.path: ",this.$route.path);
		}
	},
	watch:{
		'$route.path':function(){
			this.selected = this.$route.path;	
			console.log("selected: ",this.selected);
			console.log("$route.path: ",this.$route.path);
		}
	}
}
</script>
<style >
#bottomMenu{
	overflow: hidden;
}
#bottomMenu .mint-tab-item-icon{
    width: 0.42666rem !important;
    height: 0.42666rem !important;
}
#bottomMenu .fontSize{
	font-size: 0.2666666rem !important;
}
</style>