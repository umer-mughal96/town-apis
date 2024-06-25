const calculateDueDate = () => {
  const currentDate = new Date();
  let dueDate = new Date(currentDate);
  let daysAdded = 0;

  while (daysAdded < 2) {
    dueDate.setDate(dueDate.getDate() + 1);
    const dayOfWeek = dueDate.getDay();
    if (dayOfWeek !== 5) {
      // 5 is Friday
      daysAdded++;
    }
  }

  return dueDate;
};

module.exports = { calculateDueDate };
