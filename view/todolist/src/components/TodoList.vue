<script>
export default {
  data() {
    return {
      newItem: "",
      items: []
    };
  },
  mounted() {
    if (localStorage.getItem("items")) {
      this.items = JSON.parse(localStorage.getItem("items"));
    }
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.items.push(this.newItem);
        this.newItem = "";
        localStorage.setItem("items", JSON.stringify(this.items));
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  }
};
</script>

<template>
  <section class="TODO">
    <h1>TodoList на VUE</h1>
    <form @submit.prevent="addItem">
      <input v-model="newItem" placeholder="Add tasks">
      <button class="sbt_button" type="submit">ADD</button>
    </form>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button class="rem_button" @click="removeItem(index)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<style>
.TODO{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-self: center;
  font-size: 20px;
  padding: 10px;
  color: white;
  text-shadow: 2px 3px 4px #0384ff;
  min-height: 100vh;
}

input{
  border: 2px solid #443d3d;
  border-radius: 3px ;
  padding: 5px;
  background: #645656;
  color: white;
}

.sbt_button{
  width: max-content;
  background: #5E856D ;
  color: white;
  border: none;
  padding: 5px 9px 9px;
  border-radius: 4px;
  cursor: pointer;
  align-self: end;
  padding-top: 10px;
}

.rem_button{
  width: max-content;
  background: #a81b1b;
  color: white;
  border: none;
  padding: 5px 9px 9px;
  border-radius: 4px;
  cursor: pointer;
  align-self: end;
  padding-top: 10px;
}

li{
  margin-top: 15px;
  list-style-type: none;
  font-size: 20px;
}

span{
  margin-right: 15px;
}

</style>
