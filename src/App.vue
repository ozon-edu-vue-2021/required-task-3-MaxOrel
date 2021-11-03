<template>
    <div id="app">
        <div class="office">
            <Map @click-table="handleClickTable" @update:isUserOpenned="isUserOpenned=$event"/>
            <SideMenu :isUserOpenned="isUserOpenned" :person="selectedPeople" @update:isUserOpenned="isUserOpenned=$event" />
        </div>
    </div>
</template>

<script>
import Map from "./components/Map.vue";
import SideMenu from "./components/SideMenu.vue";
import people from "@/assets/data/people.json";

export default {
  name: "App",
  components: {
    Map,
    SideMenu,
  },
  data() {
    return {
      people: [],
      isUserOpenned: false,
      selectedPeople: null
    };
  },
  created() {
    this.loadPeople();
  },
  methods: {
    loadPeople() {
      this.people = people;
    },
    handleClickTable(tableId, groupId){
      this.isUserOpenned = true;
      this.selectedPeople = {...this.people[tableId], groupId};
    }
  }
};
</script>

<style>
@font-face {
  font-family: 'Avenir';
  src: url('~@/assets/fonts/AvenirNextCyr-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir';
  src: url('~@/assets/fonts/AvenirNextCyr-Bold.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir';
  src: url('~@/assets/fonts/AvenirNextCyr-Heavy.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background-color: #fafafa;
    padding: 24px;
    box-sizing: border-box;
}

html,
body,
#app {
    height: 100%;
}

* {
    box-sizing: border-box;
}

h3 {
    margin-top: 0px;
}

.office {
    display: grid;
    grid-template-columns: 1fr 520px;
    border-radius: 6px;
    border: 1px solid #ccd8e4;
    height: 100%;
    background: white;
    max-width: 1500px;
    margin: 0 auto;
}
</style>
