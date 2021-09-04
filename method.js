const student = {
    id: 1010,
    name: 'RJ Kibria',
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subject: ['engish', 'economic', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics',
    },
    takeExam: function () {
        console.log(this.bestFriend.name, 'Taking Exam');
    },
    treadDey: function (expense, bokshish) {
        this.money = this.money - expense - bokshish;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treadDey(900);
const remaining2 = student.treadDey(500, 200);
console.log(remaining2);
