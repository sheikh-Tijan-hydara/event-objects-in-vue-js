const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
    };
  },
  watch:{
    counter(value){
      const that = this;
      
      if(value > 50){
        setTimeout(function(){
          that.counter = 0;
        }, 2000)
      }
    }
  },
  computed: {
    fullName(){
      if(this.name === '' || this.lastname === ''){
          return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
      this.lastname = '';
    }
  }
});

app.mount('#events');
