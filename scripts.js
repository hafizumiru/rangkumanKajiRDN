let digit;
let randomNumber;
let arrayNumber;
let satuan;
let puluhan;
let ratusan;
let ribuan;
let puluhRibuan;
let ratusRibuan;
let jawaban;
let arrayLetter = [];

function getDigitValue() {
    digit = document.querySelector('input[name="jumlahDigit"]:checked');

    if (digit.value == "puluhan") {
        randomNumber = Math.floor(Math.random() * (99 - 11 + 1)) + 11;

    } else if (digit.value == "ratusan") {
        randomNumber = Math.floor(Math.random() * (999 - 101 + 1)) + 101;

    } else if (digit.value == "ribuan") {
        randomNumber = Math.floor(Math.random() * (9999 - 1001 + 1)) + 1001;

    } else if (digit.value == "puluhanRibu") {
        randomNumber = Math.floor(Math.random() * (99999 - 10001 + 1)) + 10001;

    } else if (digit.value == "ratusanRibu") {
        randomNumber = Math.floor(Math.random() * (999999 - 100001 + 1)) + 100001;

    }

    document.getElementById('angkaRandom').innerHTML = randomNumber;
    cekNihongo();

}

function cekNihongo() {
    arrayLetter.length = 0;
    arrayNumber = String(randomNumber).split('').map(Number).reverse();
    satuan = arrayNumber[0];
    puluhan = arrayNumber[1];
    ratusan = arrayNumber[2];
    ribuan = arrayNumber[3];
    puluhRibuan = arrayNumber[4];
    ratusRibuan = arrayNumber[5];

    if (satuan !== 0) {
        cekSatuan()

    } else {
        arrayLetter.push("");

    }

    if (puluhan !== 0) {
        cekPuluhan()

    } else {
        arrayLetter.push("");

    }
    jawaban = arrayLetter[1] + "juu " + arrayLetter[0]
    document.getElementById('jawaban').innerHTML = jawaban;

}

function cekSatuan() {
    if (satuan == 1) {
        satuan = "ichi";
    } else if (satuan == 2) {
        satuan = "ni"
    } else if (satuan == 3) {
        satuan = "san"
    } else if (satuan == 4) {
        satuan = "yon"
    } else if (satuan == 5) {
        satuan = "go"
    } else if (satuan == 6) {
        satuan = "roku"
    } else if (satuan == 7) {
        satuan = "nana"
    } else if (satuan == 8) {
        satuan = "hachi"
    } else if (satuan == 9) {
        satuan = "kyuu"
    }
    arrayLetter.push(satuan);
}

function cekPuluhan() {
    if (puluhan == 1) {
        puluhan = "";
    } else if (puluhan == 2) {
        puluhan = "ni "
    } else if (puluhan == 3) {
        puluhan = "san "
    } else if (puluhan == 4) {
        puluhan = "yon "
    } else if (puluhan == 5) {
        puluhan = "go "
    } else if (puluhan == 6) {
        puluhan = "roku "
    } else if (puluhan == 7) {
        puluhan = "nana "
    } else if (puluhan == 8) {
        puluhan = "hachi "
    } else if (puluhan == 9) {
        puluhan = "kyuu "
    }
    arrayLetter.push(puluhan);
}