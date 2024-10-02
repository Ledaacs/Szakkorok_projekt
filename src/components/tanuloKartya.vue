<template>
    <hr>
  <div class="club-box">
    <h3>{{ szakkor.name }}</h3>
    <div v-if="tanulokCsoportja.length > 0">
      <span v-for="(student, i) in tanulokCsoportja" :key="student.id">
        {{ student.name
        }}<span v-if="i < tanulokCsoportja.length - 1" class="bar"> | </span>
      </span>
    </div>
    <div v-else>
      <span>Nincs beiratkozott gyerek.</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["szakkor", "students"],
  computed: {
    tanulokCsoportja() {
      return this.students
        .filter((t) => t.szakkorId == this.szakkor.id)
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
};
</script>

<style scoped>
.club-box {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 5px;
}

.bar {
    color: var(--text-color);
    text-shadow: 0 0 10px var(--text-color),
    0 0 20px var(--text-color),
    0 0 22px var(--text-color);
}
</style>