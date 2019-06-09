/*
 * action types
 */

const SET_CENTER = "SET_CENTER";

/*
 * action creators
 */

const setCenterAction = coord => ({
  type: SET_CENTER,
  coord
});

module.exports = {
  SET_CENTER,
  setCenterAction
};
