<template>
  <div class="container">
    <p>
      วันที่ : <input type="date" v-model="date" /> ชื่อ - นามสกุล :
      <input type="text" v-model="names" />
    </p>
    <p>
      ผลตรวจ ATK : <input type="radio" label="+" v-model="atk" /><label>
        + positive
      </label>
      <input type="radio" />
      <label> - nagative </label>
    </p>

    <p>
      หมายเลขโทรศัพท์ :
      <input
        type="text"
        maxlength="10"
        v-model="phone"
        placeholder="phone number "
      />
    </p>
    <p>Emai: <input type="email" v-model="email" placeholder="@email.com" /></p>
    <br />
    <button @click="add()">บันทึก</button>

    <div>
      <h2>ตารางรายชื่อผู้บันทึก Covid</h2>
      <table  v-for="(item, i) in covidList">
        <tr>
          <th>วันที่</th>
          <th>ชื่อ-นามสกุล</th>
          <th>ผลตรวจ ATK</th>
          <th>หมายเลขโทรศัพท์</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{{ item.data }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.atk }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      covidList: [
        {
          date: {},
          name: {},
          atk: {},
          phone: {},
          email: {},
        },
      ],
    };
  },
  methods: {
    add() {
      this.covidList.date.push();
      this.covidList.name.push();
      this.covidList.atk.push();
      this.covidList.phone.push();
      this.covidList.email.push();
    },
  },
};
</script>

<style>
p {
  line-height: 2;
}
</style>
