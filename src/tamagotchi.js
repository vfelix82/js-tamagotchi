export class Pet {

  constructor(name, food, play, sleep)
  {
    this.name = name;
    this.foodLevel = 100;
    this.playLevel = 100;
    this.sleepLevel = 100;
  }

  tamaName()
  {
    let name = name;
    return this.name;
  }

  setHunger()
  {
    setInterval(() => {
      this.foodLevel--;
    }, 300); //food level will decrement by 1 every 5 minutes
  }

  needFood()
  {
      if(this.foodLevel >= 90){
        return false; //don't need to be fed
      } else if (this.foodLevel <= 75){
        return true; //tama needs to be fed
      } else
  }
  tamaPlay()
  {
    setInterval(() => {
      this.foodLevel--;
    }, 7200); //play with with tama every 2 hours
  }

  needPlay()
  {
    if(this.playLevel >= 60) {
      return false; //don't need to be played with
    } else if (this.playLevel <= 55){
      return true; //you need to play with your tama
    }
  }

  tamaSleep()
  {
    setInterval(() => {
      this.sleepLevel--;
    }, 28800); //tama sleep level will decrease every 2 hours
  }

  needSleep()
  {
    if(this.sleepLevel >= 75) {
      return false; //doesn't need sleep
    } else if (this.sleepLevel <= 70){
      return true; //tama needs sleep
    }
  }

  didTamaDieOfSleepDeprivation() {
    if (this.sleepLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  didTamaDieOfDtarvation() {
    if (this.foodLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  
}
