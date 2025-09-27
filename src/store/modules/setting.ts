import { defineStore } from "pinia";
import { ref } from "vue";

const useLayoutSettingStore = defineStore("settingStore", () => {
    const fold = ref(false);

    return {
        fold,
    };
})

export default useLayoutSettingStore;