import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate, {
  inject: false,
  dictionary: {
    ru: {
      messages: {
        // _default: field => `Значение поля недопустимо.`,
        after: (field, [target, inclusion]) =>
          `В поле должна быть дата после ${inclusion ? "или равная " : ""}${target}.`,
        // alpha: field => `Поле может содержать только буквы.`,
        // alpha_dash: field => `Поле может содержать только буквы, цифры и дефис.`,
        // alpha_num: field => `Поле может содержать только буквы и цифры.`,
        // alpha_spaces: field => `Поле может содержать только буквы и пробелы.`,
        // before: (field, [target, inclusion]) =>
        //   `В поле должна быть дата до ${inclusion ? "или равная " : ""}${target}.`,
        between: (field, [min, max]) => `Поле должно быть между ${min} и ${max}.`,
        confirmed: (field, [confirmedField]) => `Поле не совпадает с ${confirmedField}.`,
        // credit_card: field => `Поле должно быть действительным номером карты`,
        // date_between: (field, [min, max]) => `Поле должно быть между ${min} и ${max}.`,
        date_format: (field, [format]) => `Поле должно быть в формате ${format}.`,
        decimal: (field, [decimals = "*"] = []) =>
          `Поле должно быть числовым и может содержать${
            decimals === "*" ? " десятичные числа" : " " + decimals + " десятичных чисел"
          }.`,
        digits: (field, [length]) => `Поле должно быть числовым и точно содержать ${length} цифры.`,
        dimensions: (field, [width, height]) => `Поле должно быть ${width} пикселей на ${height} пикселей.`,
        // email: field => `Поле должно быть действительным электронным адресом.`,
        // excluded: field => `Поле должно быть допустимым значением.`,
        ext: (field, [...args]) => `Поле должно быть действительным файлом. (${args})`,
        // image: field => `Поле должно быть изображением.`,
        // included: field => `Поле должно быть допустимым значением.`,
        // integer: field => `Поле должно быть целым числом.`,
        // ip: field => `Поле должно быть действительным IP-адресом.`,
        length: (field, [length, max]) => {
          if (max) {
            return `Длина поля должна быть между ${length} и ${max}.`;
          }

          return `Длина поля должна быть ${length}.`;
        },
        max: (field, [length]) => `Поле не может быть более ${length} символов.`,
        max_value: (field, [max]) => `Поле должно быть не больше, чем ${max}.`,
        mimes: (field, [...args]) => `Поле должно иметь допустимый тип файла. (${args})`,
        min: (field, [length]) => `Поле должно быть не менее ${length} символов.`,
        min_value: (field, [min]) => `Поле должно быть ${min} или больше.`,
        // numeric: field => `Поле должно быть числом.`,
        // regex: field => `Поле имеет ошибочный формат.`,
        // required: field => `Поле обязательно для заполнения.`,
        size: (formatFileSize, [size]) => `Поле должно быть меньше, чем ${formatFileSize(size)}.`
        // url: field => `Поле имеет ошибочный формат URL.`
      }
    }
  },
  locale: "ru"
});
