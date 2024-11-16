<template>
  <main>
    <div id="hero">
      <h3>The Best Friend Of Planners</h3>
      <h1>Introducing, <span>Q</span><span>wery</span></h1>
    </div>
    <div id="sides">
      <div class="side">
        <h2>For the <span>Individual</span></h2>
        <div class="lists">
          <p>Discover the power of Qwery to manage your personal life</p>
          <ul>
            <li>Task and deadline management</li>
            <li>Time tracking</li>
            <li>To-do list</li>
            <li>
              The world's best reminder of all time, trust us when we say, you'll never forget
              something again
            </li>
          </ul>
          <a href="#individual" class="button">View Individual plans</a>
        </div>
      </div>
      <div class="side">
        <h2>For the <span>Business</span></h2>
        <div class="lists">
          <p>Whether you're a big or small business, Qwery has solutions for all businesses</p>
          <ul>
            <li>Appointment tracking and scheduling</li>
            <li>Customer information tracker</li>
            <li>Employeem management</li>
            <li>Worried about growth? Qwery is highly scaleable and flexible</li>
          </ul>
          <a href="#business" class="button">View Business plans</a>
        </div>
      </div>
    </div>

    <div id="plans">
      <h2>Our Plans</h2>
      <div id="plan-container">
        <div class="plan" id="individual">
          <h3>Individual plans</h3>
          <p><i>Terms apply, prices subject to change. Cancel at any time.</i></p>
          <div class="tiers">
            <div class="tier">
              <h3>Basic</h3>
              <p>Only $50/month</p>
            </div>
            <div class="tier">
              <h3>Standard</h3>
              <p>Only $80/month</p>
            </div>
            <div class="tier">
              <h3>Premium</h3>
              <p>Only $120/month</p>
            </div>
          </div>
        </div>

        <div class="plan" id="business">
          <h3>Business plans</h3>
          <div class="tiers">
            <div class="tier">
              <h3>Basic</h3>
              <p>Only $50/month</p>
            </div>
            <div class="tier">
              <h3>Standard</h3>
              <p>Only $80/month</p>
            </div>
            <div class="tier">
              <h3>Premium</h3>
              <p>Only $120/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#hero {
  background: rgb(255, 0, 0);
  background: linear-gradient(164deg, var(--primary) 17%, var(--tertiary) 86%);
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2em;
  box-shadow: var(--shadow);
}

#hero h1,
#hero h2,
#hero h3 {
  color: var(--secondary);
}

#hero h1 span:first-child {
  color: red;
  text-decoration: underline;
}

#sides {
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 1%;
  height: 40vh;
  margin-top: 20px;
}

.side {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  box-shadow: var(--shadow);
  text-align: center;
}

.side h2 span {
  color: var(--primary);
  font-weight: bold;
}

.side ul {
  padding: 10px;
  margin: 10% auto;
}

#plans {
  width: 80%;
  gap: 1%;
  margin-top: 20px;
  text-align: center;
}

#plan-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.plan {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  width: 100%;
}

.tiers {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: var(--shadow);
}

.tier {
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow2);
  padding: 40px;
}
</style>
