<script lang="ts" setup >
    /**
     * param 
     */
    interface Props {
        text :string,
        bgColor :string,
        borderColor:string
    }

    const props=defineProps<Props>()
</script>

<template>
<button class="full-rounded" :style="'background:'+props.bgColor+';border-color:'+props.borderColor">
<span>{{ props.text }}</span>
<div class="border full-rounded"></div></button>
</template>

<style>
button {
 font-size: 16px;
 position: relative;
 margin: auto;
 padding: 1em 2.5em 1em 2.5em;
 border: none;
 background: #fff;
 transition: all 0.1s linear;
 box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
 
}

button:active {
 transform: scale(0.95);
}

button span {
 color: #464646;
}

button .border {
 position: absolute;
 border: 0.15em solid #fff;
 transition: all 0.3s 0.08s linear;
 top: 50%;
 left: 50%;
 width: 9em;
 height: 3em;
 transform: translate(-50%, -50%);
}

button:hover .border {
 display: block;
 width: 9.9em;
 height: 3.7em;
}

.full-rounded {
 border-radius: 2em;
}
</style>