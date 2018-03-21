import {Tamagotchi} from './../src/tamagotchi.js'

describe ('tamagotchi', function() {
  let testTamagotchi = new Tamagotchi();

  beforeEach(function() {
      jasmine.clock().install();
      testTamagotchi.sleepLevel = 100;
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

  it('should have food, play, and sleep levels of 100 at instantiation', function(){
    expect(testTamagotchi.foodLevel).toEqual(100);
    expect(testTamagotchi.playLevel).toEqual(100);
    expect(testTamagotchi.sleepLevel).toEqual(100);
  });

  it('should have hunger decrement every 5 minutes', function(){
    testTamagotchi.setHunger();
    jasmine.clock().tick(300000);
    expect(testTamagotchi.foodLevel).toEqual(99);
  });

  it('should1 have play decrement every 2.5 minutes', function(){
    testTamagotchi.tamaPlay();
    jasmine.clock().tick(150000);
    expect(testTamagotchi.playLevel).toEqual(99);
  });

  it('should have sleep decrement every 15 minutes', function(){
    testTamagotchi.tamaSleep();
    jasmine.clock().tick(900000);
    expect(testTamagotchi.sleepLevel).toEqual(99);
  });


//FAILING TEST
  it('should die of sleep deprivation if sleep level reaches zero', function(){
    testTamagotchi.tamaSleep();
    console.log(testTamagotchi.sleepLevel);
    jasmine.clock().tick(10001);
    console.log(testTamagotchi.sleepLevel);
    expect(testTamagotchi.didTamaDieOfSleepDeprivation()).toEqual(true);
  });
});
