const Hubby = function({ name, description } = {}) {
  if (!name) {
    console.error("Hobby must have a name");
  }
  if (!description) {
    console.log("Hobby should have a description");
  }
  return Object.freeze({
    getName: () => name,
    getDescription: () => description
  });
};

export default Hubby;
