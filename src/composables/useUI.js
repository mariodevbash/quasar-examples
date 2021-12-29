import { computed } from 'vue'
import { useStore } from 'vuex'

const useUI = () => {

  const store = useStore()

  return {
    sideMenuOpen: computed({
      get() {
        return store.getters['ui/isSideMenuOpen']
      },
      set(value){
        store.commit('ui/toggleSideMenu')
      }
    }),
    toggleSideMenu: () => {
      store.commit('ui/toggleSideMenu')
    }
  }
}

export default useUI
