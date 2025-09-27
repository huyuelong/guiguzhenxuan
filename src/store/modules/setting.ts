import { defineStore } from "pinia";
import { ref } from "vue";

const useLayoutSettingStore = defineStore("settingStore", () => {
    const fold = ref(false);
    const refresh = ref(false);

    return {
        fold,
        refresh,
    };
})

export default useLayoutSettingStore;