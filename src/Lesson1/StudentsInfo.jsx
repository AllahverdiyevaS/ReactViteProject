const StudentsInfo = () => {
  const languages = [
    "Azerbaijani",
    "Germany",
    "English",
    "Russians",
    "Azerbaijani",
    "Turkish",
  ];
  const name = "Ali Aliyev";
  const firstSemestr = 91;
  const secondSemstr = 71;
  const averageGradeForTheYear = (firstSemestr + secondSemstr) / 2;
  return (
    <div>
      <h2>Students Info</h2>
      <h3>Student name:{name}</h3>
      <h3>students score: {averageGradeForTheYear}</h3>
      <h2>Language</h2>
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsInfo;
