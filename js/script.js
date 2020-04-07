const initialize = () => {
  setInner("#counter", getCount());
};

/**
 * The day of the year counter code was copied from the included Stackoverflow answer.
 * https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
 * 
 * @param {number} offset Number of days to offset from the count.
 */
function getCount(offset) {
  if (offset == null) {
    offset = 0;
  }
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) + offset;
}

//#region Helper functions

/**
 * Depending on the result of the document.querySelectorAll, the function will either return a single element or an array of elements.
 *
 * @param {string} query A CSS element selector.
 */
function _(query) {
  let result = document.querySelectorAll(query);
  if (result.length == 1) {
    result = result[0];
  }
  return result;
}

function setInner(query, text) {
  _(query).innerHTML = text;
}

//#endregion

//#region Service worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceworker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
//#endregion
