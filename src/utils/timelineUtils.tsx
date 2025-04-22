export const generateMarks = (): { value: number; label: string }[] => {
    const marks = [];
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
  
    for (let year = currentYear - 10; year <= currentYear; year++) {
      for (let month = 0; month < 12; month++) {
        if (year === currentYear && month > currentMonth) break;
        const date = new Date(year, month);
        marks.push({
          value: date.getTime(),
          label: month === 0 ? `${year}` : '',
        });
      }
    }
    return marks;
};