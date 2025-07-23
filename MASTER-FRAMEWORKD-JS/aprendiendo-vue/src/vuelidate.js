import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  setup() {
    const form = reactive({
      name: '',
    });

    const rules = {
      name: { required },
    };

    const v$ = useVuelidate(rules, form);

    return { form, v$ };
  },
};