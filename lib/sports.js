/**
 *
 * @namespace faker.sports
 */
var sports = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * sports
   *
   * @method faker.sports.sport
   */
  self.sports = function () {
    return faker.random.arrayElement(faker.definitions.sports);
  };

  self.sports.schema = {
    "description": "Generates a random sports.",
    "sampleResults": ["Polo", "tennis", "yoga"]
      };

  /**
   * physical
   *
   * @method faker.sports.physical
   */
  self.physical = function () {
    return faker.random.arrayElement(faker.definitions.sports.physical);
  };

  self.physical.schema = {
    "description": "Generates a physical game.",
    "sampleResults": ["athletics", "swimming", "cycling"]
  };


  /**
   * mind
   *
   * @method faker.sports.mind
   */
  self.mind = function () {
    return faker.random.arrayElement(faker.definitions.sports.mind);
  };

  self.mind.schema = {
    "description": "Generates a mind sports.",
    "sampleResults": ["Poker", "Mahjong", "Card game"]
  };

  /**
   * motorsport
   *
   * @method faker.sports.motorsport
   */
  self.motorsport = function () {
    return faker.random.arrayElement(faker.definitions.sports.motorsport);
  };

  self.motorsport.schema = {
    "description": "Generates a sports motorsport.",
    "sampleResults": ["Slot car racing", "Snowmobile racing", "Truck racing"]
  };

  /**
   * coordination
   *
   * @method faker.sports.coordination
   */
  self.coordination = function () {
    return faker.random.arrayElement(faker.definitions.sports.coordination);
  };

  self.coordination.schema = {
    "description": "Generates a coordination sports.",
    "sampleResults": ["Badminton", "Boxing", "Shooting"]
  };
};

module["exports"] = sports;
