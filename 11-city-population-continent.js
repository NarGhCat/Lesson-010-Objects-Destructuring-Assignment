'use strict';

function cityFacts({name, population, continent}) {
  return `${name} has a population of ${population} and is situated in ${continent}`;
}

cityFacts({
name: "Paris",
population: "2,140,526",
continent: "Europe",
});

cityFacts({
name: "Tokyo",
population: "13,929,286",
continent: "Asia",
});