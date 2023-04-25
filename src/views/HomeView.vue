<template>
  <v-container>
    <Select :options="pills" @changeOption="test" :currantOption="currantPill"></Select>
    <v-btn @click="test2">test</v-btn>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Select from '@/components/Select.vue'

export default {
  name: 'HomeView',
  data: () => ({
    pills: [
      {id: 1, title: 'Все программы и курсы'},
      {id: 2, title: 'Программы'},
      {id: 3, title: 'Теория всемирного заговора и захвата влселенной пришельцами'},
      {id: 4, title: 'Нутрициология'},
    ],
    currantPill: 3,
  }),
  methods:{
    test(data){
      this.currantPill = data.optionId
    },
    test2(){
      new Notification('Сколько ТЫЖ программистов нужно чтобы вкрутить лампочку?',
          { body: 'Только ты!', dir: 'auto', icon: 'icon.jpg' }
      );
    }
  },
  mounted() {
    return new Promise(function(resolve, reject) {
      const permissionResult = Notification.requestPermission(function(result) {
        // Поддержка устаревшей версии с функцией обратного вызова.
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    })
        .then(function(permissionResult) {
          if (permissionResult !== 'granted') {
            throw new Error('Permission not granted.');
          }
        });
    return navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          var subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey: btoa(
                'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
            )
          };

          return registration.pushManager.subscribe(subscribeOptions);
        })
        .then(function(pushSubscription) {
          console.log('PushSubscription: ', JSON.stringify(pushSubscription));
          return pushSubscription;
        });
  },
  components: {
    Select
  },
}
</script>
