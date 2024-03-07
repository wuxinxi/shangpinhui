<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <Rank />
        <Like />
        <Floor />
        <Brand />

    </div>
</template>

<script>
import ListContainer from '@/pages/home/listcontainer/ListContainer'
import TodayRecommend from '@/pages/home/todayrecommend/TodayRecommend'
import Rank from '@/pages/home/rank/Rank'
import Like from '@/pages/home/like/Like'
import Floor from '@/pages/home/floor/Floor'
import Brand from '@/pages/home/brand/Brand'

export default {
    components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    }

}
</script>

<style lang="">

</style>