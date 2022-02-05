<template>
  <h1 class="title">Форма создания клиента</h1>
  <div class="wrapper">
    <form class="client-add-form" @submit.prevent="checkForm">
      <div class="form-atr inform">
        <h2>Общие сведения: </h2>
        <div class="form-group">
          <div class="labels">
            <label for="surname">Фамилия:* </label>
          </div>
          <div class="inputs">
            <input id="surname"
                   type="text"
                   class="form-control"
                   v-model.trim="form.surname"
                   @change="getUpper(form.surname, 'surname')"
                   placeholder="Например: Иванов"
                   @blur="validator.form.surname.$touch()"
            />
          </div>
          <small v-for="error in validator.form.surname.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="name">Имя:* </label>
          </div>
          <div class="inputs">
            <input id="name"
                   type="text"
                   class="form-control"
                   v-model.trim="form.name"
                   placeholder="Например: Иван"
                   @change="getUpper(form.name, 'name')"
                   @blur="validator.form.name.$touch()"
            />
          </div>
          <small v-for="error in validator.form.name.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="middle-name">Отчество: </label>
          </div>
          <div class="inputs">
            <input id="middle-name"
                   type="text"
                   class="form-control"
                   @change="getUpper(form.middleName, 'middleName')"
                   v-model.trim="form.middleName"
                   placeholder="Например: Иванович"
                   @blur="validator.form.middleName.$touch()"
            />
          </div>
          <small v-for="error in validator.form.middleName.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="birth-date">Дата рождения:* </label>
          </div>
          <div class="inputs">
            <input id="birth-date"
                   type="date"
                   class="form-control"
                   v-model.trim="form.birthDate"
                   @blur="validator.form.birthDate.$touch()"
            />
          </div>
          <small v-for="error in validator.form.birthDate.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="phone-number">Номер телефона:* </label>
          </div>
          <div class="inputs">
            <input id="phone-number"
                   type="tel"
                   class="form-control"
                   placeholder="7(099)099-09-09"
                   minlength="11"
                   maxlength="11"
                   pattern="\7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                   v-model="form.phone"
                   @blur="validator.form.phone.$touch()"
            />
          </div>
          <small v-for="error in validator.form.phone.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="state">Выберите пол: </label>
          </div>
          <div class="inputs">
            <select id="state"
                    name="state"
                    class="form-control select"
                    v-model="form.state">
              <option v-for="state in form.states"
                      :key="state"
                      :value="state.value">
                {{ state.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="doctor">Лечащий врач: </label>
          </div>
          <div class="inputs">
            <select id="doctor"
                    class="form-control select"
                    v-model="form.doctor">
              <option v-for="doctor in form.doctors"
                      :key="doctor"
                      :value="doctor.value">
                {{ doctor.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="group">Группа клиентов:* </label>
          </div>
          <div class="inputs">
            <select id="group"
                    ref="focus"
                    class="form-control field_select"
                    v-model="form.clientGroup"
                    multiple
                    @blur="validator.form.clientGroup.$touch()">
              <option v-for="clientGroup in form.clientGroups"
                      id="group-item"
                      @mouseover="selectFocus"
                      :key="clientGroup"
                      :value="clientGroup.value"
                      @mousedown.stop.prevent
                      @click="select(clientGroup.value)">
                {{ clientGroup.label }}
              </option>
            </select>
          </div>
          <small v-for="error in validator.form.clientGroup.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="message">Не отправлять СМС </label>
          </div>
          <div class="inputs">
            <input type="checkbox"
                   class="form-control-checkbox"
                   id="message"
                   v-model="form.sandingMessages"
            />
          </div>
        </div>
      </div>
      <div class="form-atr client-adress">
        <h2>Адрес: </h2>
        <div class="form-group">
          <div class="labels">
            <label for="idx">Индекс: </label>
          </div>
          <div class="inputs">
            <input id="idx"
                   type="text"
                   class="form-control"
                   v-model.trim="form.index"
                   placeholder="Например: 446460"
                   @blur="validator.form.index.$touch()"
            />
            <small v-for="error in validator.form.index.$errors" :key="error">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="country">Страна: </label>
          </div>
          <div class="inputs">
            <input id="country"
                   type="text"
                   class="form-control"
                   @change="getUpper(form.country, 'country')"
                   v-model.trim="form.country"
                   placeholder="Например: Россия"
                   @blur="validator.form.country.$touch()"
            />
            <small v-for="error in validator.form.country.$errors" :key="error">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="reg">Область: </label>
          </div>
          <div class="inputs">
            <input id="reg"
                   type="text"
                   class="form-control"
                   @change="getUpper(form.region, 'region')"
                   v-model.trim="form.region"
                   placeholder="Например: Ростовская обл."
                   @blur="validator.form.region.$touch()"
            />
            <small v-for="error in validator.form.region.$errors" :key="error">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="city">Город*: </label>
          </div>
          <div class="inputs">
            <input id="city"
                   type="text"
                   class="form-control"
                   v-model.trim="form.city"
                   placeholder="Например: Ростов-на-Дону"
                   @change="getUpper(form.city, 'city')"
                   @blur="validator.form.city.$touch()"
                   :class="validator.form.name.$error ? 'is-invalid' : ''"
            />
          </div>
          <small v-for="error in validator.form.city.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="st">Улица: </label>
          </div>
          <div class="inputs">
            <input id="st"
                   type="text"
                   class="form-control"
                   v-model.trim="form.street"
                   @change="getUpper(form.street, 'street')"
                   placeholder="Например: Красноармейская"
                   @blur="validator.form.street.$touch()"
            />
            <small v-for="error in validator.form.street.$errors" :key="error">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="build">Дом: </label>
          </div>
          <div class="inputs">
            <input id="build"
                   type="text"
                   class="form-control"
                   v-model.trim="form.building"
                   placeholder="Например: д.14 кв.34"
            />
          </div>
        </div>
      </div>
      <div class="form-atr client-document">
        <h2>Документ удостоверяющий личность: </h2>
        <div class="form-group">
          <div class="labels">
            <label for="doctype">Тип*: </label>
          </div>
          <div class="inputs">
            <select id="doctype"
                    class="form-control select"
                    v-model="form.documentType"
                    @blur="validator.form.documentType.$touch()">
              <option v-for="documentType in form.documentTypes"
                      :key="documentType"
                      :value="documentType.value">
                {{ documentType.label }}
              </option>
            </select>
          </div>
          <small v-for="error in validator.form.documentType.$errors" :key="error">{{ error.$message }}</small>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="seriya">Серия: </label>
          </div>
          <div class="inputs">
            <input id="seriya"
                   type="text"
                   class="form-control"
                   v-model.trim="form.seriya"
                   placeholder="Например: 1232"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="number">Номер: </label>
          </div>
          <div class="inputs">
            <input id="number"
                   type="text"
                   class="form-control"
                   v-model.trim="form.pasNumber"
                   placeholder="Например: 123123"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="org">Кем выдан: </label>
          </div>
          <div class="inputs">
            <input id="org"
                   type="text"
                   class="form-control"
                   v-model.trim="form.issued"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="labels">
            <label for="doc-date">Дата выдачи:* </label>
          </div>
          <div class="inputs">
            <input id="doc-date"
                   type="date"
                   class="form-control"
                   v-model.trim="form.docData"
                   @blur="validator.form.docData.$touch()"
            />
          </div>
          <small v-for="error in validator.form.docData.$errors" :key="error">{{ error.$message }}</small>
        </div>
      </div>
      <button class="submit-dtn" type="submit">
        Сохранить
      </button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, alpha, numeric, minLength, maxLength, helpers, requiredIf} from '@vuelidate/validators'

export default {
  name: 'Form',
  setup() {

    return {validator: useVuelidate()}
  },

  data() {
    return {
      form: {
        name: '',
        surname: '',
        middleName: '',
        birthDate: '',
        clientGroup: [],
        selectedValues: [],
        clientGroups: [
          {
            label: 'VIP',
            value: 'VIP'
          },
          {
            label: 'Проблемные',
            value: 'problems'
          },
          {
            label: 'ОМС',
            value: 'oms'
          }
        ],
        state: 'null',
        states: [
          {
            label: 'Не выбрано',
            value: 'null'
          },
          {
            label: 'Мужской',
            value: 'male'
          },
          {
            label: 'Женский',
            value: 'female'
          }
        ],
        doctor: 'null',
        doctors: [
          {
            label: 'Не выбрано',
            value: 'null'
          },
          {
            label: 'Иванов',
            value: 'Ivanov'
          },
          {
            label: 'Захаров',
            value: 'Zaharov'
          },
          {
            label: 'Черышева',
            value: 'Cherysheva'
          }
        ],
        sandingMessages: false,
        phone: '',
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        building: '',
        documentType: null,
        documentTypes: [
          {
            label: 'Не выбрано',
            value: null
          },
          {
            label: 'Паспорт',
            value: 'Passport'
          },
          {
            label: 'Свидетельство о рождении',
            value: 'Birth certificate'
          },
          {
            label: 'Водительское удостоверение',
            value: 'Driver license'
          }
        ],
        seriya: '',
        pasNumber: '',
        issued: '',
        docData: ''
      }
    }
  },
  validations: {
    form: {
      surname: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        alpha: helpers.withMessage('Недопустимый формат фамилии', val => /^[а-яё]*$/i.test(val)),
      },
      name: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        alpha: helpers.withMessage('Недопустимый формат имени', val => /^[а-яё]*$/i.test(val)),
      },
      middleName: {
        alpha: helpers.withMessage('Недопустимый формат фамилии', val => /^[а-яё]*$/i.test(val)),
      },
      birthDate: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
      },
      phone: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        numeric: helpers.withMessage('Неверный формат номера', val => /[7]\d{10}/i.test(val)),
        minLength: helpers.withMessage('Неверный формат номера', minLength(11)),
        maxLength: helpers.withMessage('Неверный формат номера', maxLength(11))
      },
      clientGroup: {
        required: helpers.withMessage('Выберите группу', required),
      },
      documentType: {
        required: helpers.withMessage('Выберите тип документа', required)
      },
      docData: {
        required: helpers.withMessage('Поле обязательно для заполнения', required)
      },
      city: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        alpha: helpers.withMessage('Недопустимый формат', val => /^[а-яё]*$/i.test(val)),
      },
      index: {
        numeric: helpers.withMessage('Поле должно содержать только цыфры', numeric),
        minLength: helpers.withMessage('Неверный формат', minLength(6)),
        maxLength: helpers.withMessage('Неверный формат', maxLength(6))
      },
      street: {
        alpha: helpers.withMessage('Недопустимый формат', val => /^[а-яё]*$/i.test(val)),
      },
      region: {
        alpha: helpers.withMessage('Недопустимый формат', val => /^[а-яё]*$/i.test(val)),
      },
      country: {
        alpha: helpers.withMessage('Недопустимый формат', val => /^[а-яё]*$/i.test(val)),
      }
    }
  },
  methods: {
    select(value) {
      let index = this.form.clientGroup.indexOf(value)
      index !== -1 ? this.form.clientGroup.splice(index, 1) :
          this.form.clientGroup.push(value)

    },
    getUpper(value, path) {
      this.form[path] = this.form[path][0].toUpperCase() + this.form[path].slice(1);
    },
    selectFocus: function () {
      this.$refs.focus.focus()
    },
    checkForm() {
      if (this.validator.form.$invalid) {
        this.validator.form.$touch()
        return
      } else {
        this.$router.push('success')
      }

    }
  }
}
</script>

<style>

input, select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
}

h1 {
  text-align: center;
  font-family: sans-serif;
  font-weight: 700;
}

.wrapper {
  background-color: #F0F4F5;
  border-radius: 15px;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.form-group {
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
}

.labels {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.inputs {
  float: right;
  width: 70%;
  margin-top: 6px;
  box-sizing: border-box;
}

.form-group:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 800px) {
  .labels, .inputs {
    width: 100%;
    margin-top: 0;
  }
}

body {
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 244, 245, 0.4);
  max-width: 100%;
}

small {
  color: red;
  float: right;
}

.submit-dtn {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  position: fixed;
  bottom: 5%;
  right: 5%;
}

.submit-dtn:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  color: #3498db;
}

.form-control {
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 600;
  color: #444;
  line-height: 1.3;
  width: 100%;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  height: 35px;
}

.select {
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 600;
  color: #444;
  line-height: 1.3;
  padding: .1em 0 .1em .8em;
  width: 100%;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .50em auto, 100%;
  height: 35px;
}

.select::-ms-expand {
  display: none;
}

.select:hover {
  border-color: #888;
}

.select:focus, .form-control:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.field_select {
  display: inline;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 600;
  color: #444;
  line-height: 1.3;
  padding: .5em 0 .0em .8em;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  height: 35px;
}

.field_select[multiple] {
  overflow-y: auto;
}

.field_select option {
  display: inline;
  cursor: pointer;
  margin: 0 10%;
}

.field_select option:checked {
  background-color: #eceff3;
}

.field_select:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.form-control-checkbox {
  display: inline;
  cursor: pointer;
  height: 20px;
  width: 20px;
  line-height: 1.3;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  margin-top: 8px;
}
</style>

