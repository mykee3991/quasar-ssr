<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center">
      <div class="col-md-8 col-sm-12 col-xs-12">
        <q-card>
          <q-list separator bordered>
            <q-item-label header>People</q-item-label>
            <q-separator />
            <q-item v-for="(task, index) in people" :key="`task-${index}`">
              <q-item-section>
                <q-item-label>{{ task.name }}</q-item-label>
                <q-item-label caption>{{ task.email }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed } from "@vue/composition-api";
import { State, Method } from "components/models";
export default defineComponent({
  name: "PageIndex",
  async preFetch({ store }: any) {
    const { data } = await store.$axios.get("users");
    return store.commit("general/setPageData", { people: data });
  },
  setup(_, { root }:any) {
    const methods: Method = {};
    const people = ref<any>(computed(() => root.$store.getters['pageData']));

    return { people, methods };
  }
});
</script>