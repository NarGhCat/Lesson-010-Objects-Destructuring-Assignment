'use strict';

function fiftyThirtyTwenty(ati) {
  const obj = {};
  obj["Needs"] = ati * 0.5;
  obj["Wants"] = ati * 0.3;
  obj["Savings"] = ati * 0.2;
  console.log(obj);
}

fiftyThirtyTwenty(10000);
fiftyThirtyTwenty(50000);
fiftyThirtyTwenty(13450);
