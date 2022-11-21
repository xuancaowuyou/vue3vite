<template>
    <div>
        我是home
        {{store.state.username}}
    </div>
</template>
<script>
import { sale_list } from '../api/index'
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
export default {
    setup() {
      console.log(sale_list)
      // const params = {
        // pageIndex:1,
        // pageSize:10,
        // queryConditions: [],
        // querySort: ['create_time']
      // }
      // sale_list(params).then(res=>{
        // console.log(res)
      // })
        const store = useStore();
        // console.log(store)
        return { store}
    }
}
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>