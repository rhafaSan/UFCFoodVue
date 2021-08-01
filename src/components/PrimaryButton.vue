<template>
<div>
  <button type="{{ btnType }}">{{ placeholder }}</button>
</div>
</template>

<script>
export default {
  name: 'PrimaryButton',
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
    background-color: #04D361;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    font-weight: 700;
    transition: background-color 0.2s;
  }

  button:hover{
    cursor: pointer;
    background-color: #04BF58;
  }
</style>