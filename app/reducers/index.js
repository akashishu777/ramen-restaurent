
function sort_by_key_value(arr, key) {
  var to_s = Object.prototype.toString;
  var valid_arr = to_s.call(arr) === '[object Array]';
  var valid_key = typeof key === 'string';

  if (!valid_arr || !valid_key) {
    return;
  }

  arr = arr.slice();

  return arr.sort(function(a, b) {
    var a_key = String(a[key]);
    var b_key = String(b[key]);
    var n = a_key - b_key;
    return !isNaN(n) ? n : a_key.localeCompare(b_key);
  });
}

export default function fetchData(state = {data: null, error: ''}, action) {
  switch (action.type) {
    case 'FETCH_SUCCEEDED':
      const data = sort_by_key_value(action.data, 'Top Ten')
      return Object.assign({}, state, {data: data})

    case 'FETCH_FAILED':
      return Object.assign({}, state, {error: action.error})

    default:
      return state
  }
}
