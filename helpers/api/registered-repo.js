import registered from "../../data/registered.json";

const fs = require("fs");

export const registeredRepo = {
  getAll: () => registered,
  getById: (id) => registered.find((x) => x.id.toString() === id.toString()),
  find: (x) => registered.find(x),
  create,
  update,
  delete: _delete,
};

function create(newRegister) {
  newRegister.id = registered.length
    ? Math.max(...registered.map((x) => x.id)) + 1
    : 1;

  registered.push(newRegister);
  saveData();
}

function update(id, params) {
  const user = registered.find((x) => x.id.toString() === id.toString());

  // set date updated
  user.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(user, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  registered = registered.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

function saveData() {
  fs.writeFileSync("data/registered.json", JSON.stringify(registered, null, 4));
}
