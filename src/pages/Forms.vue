<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          v-model="userForm.email"
          label="Correo Electronico"
          type="email"
          lazy-rules
          no-error-icon
          :rules="[
          (val) => (val && val.length > 0) || 'Please type something',
          isValidEmail
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Contraseña"
          lazy-rules
          no-error-icon
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repetir Contraseña"
          lazy-rules
          no-error-icon
          :rules="[
          (val) => (val && val.length > 0) || 'Please type something',
          isSamePassword
          ]"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="Acepto los términos y condiciones"
          :style="userForm.errorInCondition
                  && !userForm.conditions
                  && 'color: red'"
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "Forms",

  setup() {
    const $q = useQuasar()

    const userForm = ref({
      email: "",
      password: "",
      password2: "",
      conditions: false,
      errorInCondition: false,
    });

    return {
      userForm,

      onSubmit: () => {
        console.log()
        if (!userForm.value.conditions) {
          userForm.value.errorInCondition = true
          $q.notify({
            message: 'Debe de aceptar las condiciones.',
            color: 'red',
            icon: 'las la-exclamation-triangle'
          })
          return
        }
        console.log(userForm.value)
      },
      onReset: () => {
        userForm.value = {
          email: "",
          password: "",
          password2: "",
          conditions: false,
          errorInCondition: false,
        }
      },
      isValidEmail( val ) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword(val){
        return (val === userForm.value.password) || 'Las contraseñas no son iguales'
      }
    };
  },
});
</script>
