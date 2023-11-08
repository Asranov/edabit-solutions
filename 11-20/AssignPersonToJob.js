// You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation

const assignPersonToJob = (names, jobs) => {
  const obj = {};

  for (let i = 0; i < names.length && i < jobs.length; i++) {
    obj[names[i]] = jobs[i];
  }

  return obj;
};
