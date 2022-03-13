<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="addData()">Add Data firebase</button>
    <button @click="readData()">Read Database</button>
    <h4>{{ dbData }}</h4>
  </div>
</template>

<script>
import db from "../plugins/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      dbData: "",
    };
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "OUSA"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "OUSA"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.dbData = doc.data();
      });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
