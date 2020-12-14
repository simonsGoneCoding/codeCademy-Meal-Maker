//In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  //getter mehtods:
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  //setter methods:
  set appetizers(item) {
    this._courses.appetizers = item;
  },
  set mains(item) {
    this._courses.mains = item;
  },
  set desserts(item) {
    this._courses.desserts = item;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
};

console.log(menu.courses);
