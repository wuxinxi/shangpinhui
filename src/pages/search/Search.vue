<template lang="">
    <div>
        search{{queryValue}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            queryValue: ''
        }
    },
    mounted() {
        const searchValue = this.$route.query.value
        this.queryValue = searchValue
        console.log(searchValue); // 输出传递的参数值 
    }

}
</script>

<style lang="">

</style>