<template>
  <div>
    <TypeNav/>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Rank'
export default {
  components:{
    ListContainer,
    Recommend,
    Rank
  }
}
</script>

<style>

</style>