<template>
    <div>
       <p>我是about</p> 
        <input type="text" v-focus/><button>搜索</button>
         <div v-font-size-color="{fontSize,color}">我是home,自定义指令</div>
        <button @click="changeFontSizeColor">改变字体大小和颜色</button>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const fontSize =ref('20px');
const color = ref('red');
const changeFontSizeColor=()=>{
    fontSize.value='40px';
    color.value = 'green'
}


</script>
