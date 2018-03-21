export class Tamagotchi {

  constructor(name, foodLevel, playLevel, sleepLevel)
  {
    this.name = name;
    this.foodLevel = 100;
    this.playLevel = 100;
    this.sleepLevel = 100;
  }

  // tamaName()
  // {
  //   let name = name;
  //   return this.name;
  // }

  setHunger()
  {
    setInterval(() => {
      this.foodLevel--;
    }, 300000); //food level will decrement by 5 minutes
  }

  needFood(){
    if(this.foodLevel >= 90){
      return false;
    } else if (this.foodLevel <= 75) {
      return true;
    }
  }

  tamaPlay()
  {
    setInterval(() => {
      this.playLevel--;
    }, 150000); //play with with tama every 2.5 min
  }

  needPlay()
  {
    if(this.playLevel >= 60)
    {
      return false; //don't need to be played with
    } else if (this.playLevel <= 55){
      return true; //you need to play with your tama
    }
  }

  tamaSleep()
  {
    setInterval(() => {
      this.sleepLevel--;
    }, 3600000); //tama sleep level will decrease every 60
  }

  needSleep()
  {
    if(this.sleepLevel >= 75)
    {
      return false; //doesn't need sleep
    } else if (this.sleepLevel <= 70){
      return true; //tama needs sleep
    }
  }

  didTamaDieOfSleepDeprivation()
  {
    if (this.sleepLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  didTamaDieOfStarvation()
  {
    if (this.foodLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  didTamaDie(){
    if(this.foodLevel <= 0 && this.sleepLevel <= 0)
    {
      return (this.didTamaDieOfStarvation() || this.didTamaDieOfSleepDeprivation());
    }
  }
}
