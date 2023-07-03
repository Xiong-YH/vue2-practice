<template>
  <div>
    <TypeNav/>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
export default {
  components:{
    ListContainer,
    Recommend
  }
}
</script>

<style>

</style>