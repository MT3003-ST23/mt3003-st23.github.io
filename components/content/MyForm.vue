<template>
<form class="w-full max-w-lg p-4 border rounded" :class="{'is-hidden': submitted}">
  <div class="flex flex-wrap -mx-3 mb-3">
    <div class="w-full px-3 mb-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs
      font-bold mb-2" for="name">
        Fullständinga Namn (som i Ladok)
      </label>
      <input 
       v-model="name"
       id="name" type="text" placeholder="Jane Doe"
       class="appearance-none block w-full bg-gray-200 text-gray-700
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:bg-white"
       :class="{'name-error': name_error}">
      <p class="text-red-500 text-xs italic" :class="{'name-error-p':
      !name_error}">Please fill out this field.</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-3">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs
      font-bold mb-2" for="username">
        Github Användarnamn
      </label>
      <input 
      v-model="username"
      class="appearance-none block w-full bg-gray-200 text-gray-700
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:bg-white"
      id="username" type="text" placeholder="gituser">
      <p class="text-red-500 text-xs italic" :class="{'username-error-p': !username_error}">Please fill out this field.</p>
    </div>
  </div>
  <button 
  @click="formSubmit()"
  class="flex-shrink-0 bg-indigo-700 hover:bg-indigo-900 border-indigo-700
  font-bold text-base
  hover:border-cyan-700 text-sm border-4 text-white py-3 px-4 mb-3 rounded" type="button">
    Skicka In
  </button>
</form>
<div 
  class="info-box"
  :class="{'is-hidden': !submitted}">
  Du har redan skickat in formuläret! Kontakta <span class="font-bold">Taariq Nazar</span> ifall något har
  blivit fel!
</div>
</template>

<script setup>
// Check if form has been submitted by cookie or something and hide it if it is
const submitted = useCookie("form-submitted",
    {
    default: () => false,
})

const name_error = useState('name_error', ()=> false)
const username_error = useState('username_error', () => false)

const name = useState('name', ()=> "")
const username = useState("username", ()=> "")

const btn_pressed= useState('btn_pressed', () => false)

async function formSubmit() {
  btn_pressed.value = true
  //Check if all fields are filled
  if (name.value.length == 0) {
    name_error.value = true
  }else {
    name_error.value = false
  }

  if (username.value.length == 0) {
    username_error.value = true
  }else{
    username_error.value = false
  }
  
  if (name_error.value && username_error.value) {
    console.log("Not everything has been filled")
    return false
  }


  let formData = new FormData();

  formData.append('name', name.value)
  formData.append('username', username.value)

  res = await $fetch('https://script.google.com/macros/s/AKfycbxsw_Z5I2VlHk7m2Zx3Ua6TR9SRh26q8Og8YjptQVbq81V9keLXUn0uOCUc9TUnJuNOaA/exec', {
      method: 'POST',
      body: formData
  });

  submitted.value = true
  console.log("Loading")
  console.log(res.value)
}
</script>

<style scoped>
.is-hidden{
}

.name-error{
  @apply border border-red-500
}

.name-error-p {
 @apply hidden
}


.username-error {
  @apply border border-red-500
}

.username-error-p {
 @apply hidden
}

.info-box {
 @apply items-start gap-2 p-4 bg-slate-100 border border-slate-200 text-slate-500 rounded;
}
</style>

