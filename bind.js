const kibria = {
    id: 100,
    name: 'RJ Bikria',
    money: 100,
    treadDey: function (expense) {
        this.money = this.money - expense;
        console.log('Here', this);
        return this.money;
    }
}
const herobalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

kibria.treadDey(100);
const heroTreadDey = kibria.treadDey.bind(herobalam);
heroTreadDey(500);
heroTreadDey(500);
kibria.treadDey(500)
