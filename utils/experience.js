const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const decimal = Number(
    (years + months / 12).toFixed(1)
  );

  const label = `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;

  return {
    years,
    months,
    label,      
    decimal,   
  };
};

const applyExperienceToText = (text, experienceLabel) => {
  if (!text) return text;
  return text.replace("{{experience}}", experienceLabel);
};

module.exports = {
  calculateExperience,
  applyExperienceToText,
};
