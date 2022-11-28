<template>
    <div>
        <div v-font-size-or-color:[styleField]="fontSizeAndColor">我是home,自定义指令</div>
        <button @click="changeFontSize">改变字体颜色</button>
        <button @click="changeColor">改变字体颜色</button>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const styleField = ref('fontSize');
const fontSizeAndColor = ref('20px');
const changeFontSize = ()=>{
    styleField.value='fontSize';
    fontSizeAndColor.value = '40px'
}
const changeColor = ()=>{
    styleField.value='color';
    fontSizeAndColor.value='red'
}

</script>
<style>
</style>