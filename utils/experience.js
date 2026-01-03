const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years,
        months,
        label: `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`,
    };
};

module.exports = calculateExperience;
