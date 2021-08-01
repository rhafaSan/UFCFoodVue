<template>
<div>
  <button type="{{ btnType }}">{{ placeholder }}</button>
</div>
</template>

<script>
export default {
  name: 'SecundaryButton',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      required: true
    }
  },
  // emits: ['action']
}
</script>

<style>
  button{
    border: none;
    background-color: #d4e916;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    font-weight: 700;
    transition: background-color 0.2s;
  }

  button:hover{
    cursor: pointer;
    background-color: #a2b30b;
  }
</style>