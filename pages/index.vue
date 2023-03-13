<template>
  <v-card
    class="mx-auto"
    width="480"
    color="white"
    elevation="1"
  >
    <v-card-item class="pa-10 pb-2">
      <v-row no-gutters class="mb-3">
        <v-col class="d-flex align-center">
          <h4 class="text-primary text-h5">Tarefas</h4>
        </v-col>
      </v-row>
      <v-row no-gutters class="mb-4">
        <v-col class="d-flex align-center">
          <v-text-field
            v-model="newTask"
            color="grey"
            class="text-caption"
            density="compact"
            placeholder="Adicionar tarefas"
            type="text"
            hide-details
            variant="outlined"
          />
          <v-btn
            icon
            class="ml-3"
            variant="tonal"
            color="secondary"
            size="x-small"
            @click="addTask(newTask)"
          >
            <v-icon
              size="18"
              icon="mdi-plus"
            />
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        v-for="({ name, done }, index) in tasks"
        :key="index"
        no-gutters
      >
        <v-card
          class="d-flex align-center pr-2 pl-4 py-2 bg-grey-lighten-5 mb-1"
          elevation="0"
          width="100%"
        >
          <span
            :class="done && 'text-decoration-line-through'"
            class="ml-1 text-grey-darken-1 text-body-1"
          >
            {{ name }}
          </span>
          <v-spacer />
          <v-btn
            v-if="!done"
            icon
            class="ml-3"
            variant="text"
            color="green-lighten-2"
            size="x-small"
            @click="doneTask(index)"
          >
            <v-icon
              size="18"
              icon="mdi-check-outline"
            />
          </v-btn>
          <v-btn
            icon
            variant="text"
            color="red-lighten-2"
            size="x-small"
            @click="deleteTask(index)"
          >
            <v-icon
              size="18"
              icon="mdi-trash-can-outline"
            />
          </v-btn>
        </v-card>
      </v-row>
    </v-card-item>
    <v-card-actions class="pa-10 pt-0 d-flex justify-end">
      <v-row no-gutters>
        <v-col class="d-flex align-center">
          <span class="text-body-2 text-grey">
            {{ pendingTasks.length }} tarefas pendentes
          </span>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn
            variant="outlined"
            color="green-darken-1"
            class="px-5"
            @click="doneAllTasks"
          >
            <span>Completar todas</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
interface Task {
  name: string,
  done: boolean
};

const newTask = ref('');

const tasks = ref<Task[]>([{
  name: 'Tarefa 1',
  done: true
},{
  name: 'Tarefa 2',
  done: true
},{
  name: 'Tarefa 3',
  done: false
},{
  name: 'Tarefa 4',
  done: false
},{
  name: 'Tarefa 5',
  done: false
}]);

const pendingTasks = computed(() => tasks.value.filter(x => !x.done))

function addTask(name: string) {
  if (!name)
    return;
  tasks.value.push({ name, done: false });
}
function deleteTask(index: number) {
  tasks.value.splice(index, 1);
}
function doneTask(index: number) {
  tasks.value[index].done = true;
}
function doneAllTasks() {
  tasks.value.map(x => x.done = true);
}
</script>
<style lang="scss">
@use './settings';
</style>