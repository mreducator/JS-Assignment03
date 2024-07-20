const studentsProfile = {
    name:'Krishna',
    age:35,
    grade:"A",
    updateStudentGrade:function(){
        this.grade = "B"
        console.log(this)
    }
}
console.log(studentsProfile['grade'])
studentsProfile.updateStudentGrade()