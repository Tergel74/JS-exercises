let names = [
    "Энхсайхан",
    "Дөлгөөн",
    "Тулга",
    "Ариунболор",
    "Энх-Учрал",
    "Анурад",
    "Номинзул",
    "Учралт",
    "Төрмөнх",
    "Тэргэл",
    "Чингүн",
    "Эрхэс",
    "Хэрлэн",
    "Саруул",
    "Бямбадорж",
    "Эмүжин"
];

let players = [{name: "Todoo", score : 1000}, {name: "Tergel", score: 5000}]



function switchName(arr, name) {
    const first = arr[0];

    let exist_or_not

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == name) {
            exist_or_not = true
            break
        } else {
            exist_or_not = false
        }
    }

    if (exist_or_not == true) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == name) {
                arr[i] = first;
            }
            arr[0] = name;
        }
    } else {
        arr[0] = name;
        arr.push(first)
    }
    console.log(arr)
}


switchName(names, "Тэргэл")