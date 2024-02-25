// import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('height',{
  state(){
    return{
      height:0,
      width:0,
      token:null
    }
  },
  getters:{

  },
  actions:{
    setheight(height){ 
      this.height = height
    },
    setwidth(width){
      this.width = width
    },
    setToken(token){
      this.token = token
    }
  }
})