<template>
  <div class="container">
    <div class="students-table">
      <h1>Tanulók táblázata</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Osztály</th>
            <th>Szakkör</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="student.szakkorId"
              >
                <option
                  v-for="(szakkor, i) in szakkorok"
                  :key="i"
                  :value="szakkor.id"
                >
                  {{ szakkor.name }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="club-visualization">
      <h1>Szakkörök diákjai</h1>
      <tanuloKartya
        v-for="szakkor in szakkorok"
        :key="szakkor.id"
        :szakkor="szakkor"
        :students="students"
      />
    </div>
  </div>
</template>
  
<script>
import tanuloKartya from "../components/tanuloKartya.vue";
export default {
  components: {
    tanuloKartya,
  },
  data() {
    return {
      students: [
        { id: 1, name: "Nagy Péter", class: "10.A", szakkorId: 1 },
        { id: 2, name: "Kovács Anna", class: "9.B", szakkorId: 1 },
        { id: 3, name: "Szabó Márk", class: "11.C", szakkorId: 1 },
        { id: 4, name: "Tóth János", class: "10.B", szakkorId: 1 },
        { id: 5, name: "Németh Zsuzsa", class: "9.A", szakkorId: 1 },
        { id: 6, name: "Kiss Tamás", class: "12.C", szakkorId: 1 },
        { id: 7, name: "Varga Béla", class: "11.A", szakkorId: 1 },
        { id: 8, name: "Horváth Gergő", class: "10.C", szakkorId: 1 },
        { id: 9, name: "Molnár István", class: "9.C", szakkorId: 1 },
        { id: 10, name: "Farkas Enikő", class: "12.A", szakkorId: 1 },
        { id: 11, name: "Lukács Ádám", class: "11.B", szakkorId: 1 },
        { id: 12, name: "Veres Kata", class: "10.A", szakkorId: 1 },
        { id: 13, name: "Szőke Eszter", class: "9.B", szakkorId: 1 },
        { id: 14, name: "Balogh Attila", class: "12.B", szakkorId: 1 },
        { id: 15, name: "Barta Noémi", class: "11.C", szakkorId: 1 },
      ],
      szakkorok: [
        { id: 1, name: "Nincs szakkör" },
        { id: 2, name: "Football" },
        { id: 3, name: "Kosárlabda" },
        { id: 4, name: "Számítástechnika" },
        { id: 5, name: "Színjátszás" },
        { id: 6, name: "Kézműves" },
      ],
    };
  },
};
</script>
  
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.students-table {
  width: 45%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  padding: 10px;
  border: 1px solid black;
}
th {
  background-color: rgba(22, 22, 22, 0.2);
}
select {
  padding: 5px;
}

.club-visualization {
  width: 45%;
  border: 1px solid rgba(22, 22, 22, 0.2);
  padding: 20px;
  border-radius: 5px;
}
</style>
  