<template>
  <main>
    <div id="login_container">
      <div id="selector">
        <div
          class="select_tab"
          :class="{ active: selected_tab === 'individual' }"
          @click="select_tab('individual')"
        >
          Individual
        </div>

        <div
          class="select_tab"
          :class="{ active: selected_tab === 'business' }"
          @click="select_tab('business')"
        >
          Business
        </div>
      </div>

      <div class="tab" v-if="selected_tab === 'individual'">
        <div v-if="individualMode === 'login'">
          <h1>Individual Login</h1>
          <form @submit.prevent="handleLogin('individual')">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?
            <a href="#" @click.prevent="individualMode = 'signup'">Sign up</a>
          </p>
        </div>
        <div v-if="individualMode === 'signup'">
          <h1>Individual Sign Up</h1>
          <form @submit.prevent="handleSignup('individual')">
            <input type="text" v-model="firstName" placeholder="Username" />
            <div class="duo">
              <input type="text" v-model="firstName" placeholder="First Name" />
              <input type="text" v-model="lastName" placeholder="Last Name" />
            </div>
            <input type="email" v-model="email" placeholder="Email" />
            <input type="text" v-model="phone" placeholder="Phone Number" />
            <div class="duo">
              <input type="password" v-model="password" placeholder="Password" />
              <input type="password" v-model="passwordConfirm" placeholder="Confirm Password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?
            <a href="#" @click.prevent="individualMode = 'login'">Login</a>
          </p>
        </div>
      </div>

      <div class="tab" v-if="selected_tab === 'business'">
        <h1>Business Login</h1>
        <form @submit.prevent="handleLogin('business')">
          <input type="text" v-model="businessId" placeholder="Business ID" />
          <button type="submit">Go To Business Page</button>
        </form>
        <p>
          New business? Set up a
          <router-link to="/businessSetUp">Business Account</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      selected_tab: 'individual',
      individualMode: 'login',
      email: '',
      password: '',
      username: '',
      passwordConfirm: '',
      businessId: '',
    }
  },
  methods: {
    select_tab(tab) {
      this.selected_tab = tab
    },
    handleLogin(type) {
      if (type === 'individual') {
        console.log('Individual login with:', this.email, this.password)
      } else if (type === 'business') {
        console.log('Business login with:', this.businessId, this.username, this.password)
      }
    },
    handleSignup(type) {
      if (type === 'individual') {
        console.log('Individual signup with:', this.email, this.password, this.passwordConfirm)
      }
    },
  },
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

#login_container {
  width: 50%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  border-radius: 20px;
}

#selector {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  gap: 10px;
}

.select_tab {
  cursor: pointer;
  padding: 10px;
  text-align: center;
  width: 100%;

  background-color: var(--secondary);
  color: var(--primary);
  box-shadow: var(--shadow2);
  transition: background-color 0.5s ease;
  border-radius: 10px;
}

.select_tab:hover {
  background-color: var(--tertiary);
  color: var(--secondary);
}

.select_tab.active {
  background-color: var(--primary);
  color: var(--secondary);
}

.tab {
  width: 80%;
  padding: 20px;
  text-align: center;
}

.tab a,
.tab a:visited {
  color: var(--primary);
  transition: 0.3s ease;
  position: relative;
}

.tab a:hover {
  color: var(--primaryh);
}

.tab a::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.tab a:hover::before {
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input[type='text'],
input[type='password'],
input[type='email'] {
  padding: 5px;
  transition: outline 0.5s ease;
  outline: 1px solid white;
  border: 1px solid var(--tertiary);
  box-shadow: var(--shadow);
  border-radius: 10px;
  text-align: center;
}

input[type='text']:focus,
input[type='password']:focus,
input[type='email']:focus {
  outline: 1px solid var(--primary);
}

form button {
  border: none;
  outline: none;
  padding: 5px;
  box-shadow: var(--shadow2);
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: 10px;
  transition: 0.3s all ease;
  margin-bottom: 1em;
}

form button:hover {
  background-color: var(--primary);
  color: var(--secondary);
  box-shadow: var(--shadow);
  cursor: pointer;
}

.duo {
  display: flex;
  gap: 10px;
  width: 100%;
}

.duo input {
  width: 100%;
}
</style>
