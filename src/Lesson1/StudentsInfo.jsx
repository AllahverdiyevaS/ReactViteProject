const StudentsInfo = () => {
  const name = "Ali Aliyev";
  const firstSemestr = 91;
  const secondSemstr = 71;
  const averageGradeForTheYear = (firstSemestr * secondSemstr) / 2;
  return (
    <div>
      <h2>Students Info</h2>
      <h3>Student name:{name}</h3>
      students score:{averageGradeForTheYear}
      <h2>Language</h2>
      <ul>
        <li>Azerbaijani</li>
        <li>Germany</li>
        <li>English</li>
        <li>Russians</li>
        <li>Turkish</li>
      </ul>
    </div>
  );
};

export default StudentsInfo;
