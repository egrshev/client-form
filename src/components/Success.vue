<template>
  <div class="meassage">
    <p class="text-message">Новый клиент успешно создан!</p>
  </div>
</template>

<script>
export default {
  name: "Success"
}
</script>

<style>
body {
  background-color: rgba(240, 244, 245, 0.4);
  max-width: 100%;
}

.meassage{
  background-color: #F0F4F5;
  border-radius: 15px;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
  max-width: 30%;
  max-height: 30%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.text-message {
  text-align: center;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin: 15% 10%;
}
@media screen and (max-width: 800px) {
  .text-message {
    width: 100%;
    margin: 3% auto;
  }
}

</style>