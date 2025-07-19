const students = [
    { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
    { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
    { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
    { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
    { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
  ];
  

  console.log("1. Tên và tuổi của từng học sinh:");
  students.forEach(student => {
    console.log(`${student.name} - ${student.age} tuổi`);
  });
  

  const studentsWithAvg = students.map(student => {
    const avg = student.scores.reduce((sum, s) => sum + s, 0) / student.scores.length;
    return { name: student.name, avgScore: avg };
  });
  console.log("\n2. Tên học sinh và điểm trung bình:");
  console.log(studentsWithAvg);
  

  const highScorers = studentsWithAvg.filter(student => student.avgScore >= 8);
  console.log("\n3. Học sinh có điểm trung bình >= 8:");
  console.log(highScorers);
  

  const firstOver17 = students.find(student => student.age >= 17);
  console.log("\n4. Học sinh đầu tiên có tuổi >= 17:");
  console.log(firstOver17);
  

  const hasLowScore = students.some(student => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return avg < 5;
  });
  console.log("\n5. Có học sinh nào có điểm TB < 5 không?");
  console.log(hasLowScore); 
  

  const allOver15 = students.every(student => student.age >= 15);
  console.log("\n6. Tất cả học sinh có tuổi >= 15?");
  console.log(allOver15); 
 
  const classAvg = students.reduce((sum, student) => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return sum + avg;
  }, 0) / students.length;
  console.log("\n7. Điểm trung bình toàn lớp:");
  console.log(classAvg.toFixed(2));
  