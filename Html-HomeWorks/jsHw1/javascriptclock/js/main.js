let firstName = prompt("İsminiz :")

let myName = document.querySelector("#myName")

myName.innerHTML = firstName

function dateClock(){ // setInterval methodu için bütün bu işlemi bir fonksiyon içerine aldık bunun nedeni sn olarak yenilenme yapabilmek.
    let nowDate = new Date() // yeni bir date formatı oluşturduk.
    let hours = nowDate.getHours() // tarihleri formatlamak için saat, dakika, saniye ve gün değişkenlerini oluşturarak date formatındaki karşılıklarını bu değişkenlere atadık.
    let munite = nowDate.getMinutes()
    let second = nowDate.getSeconds()
    let days = nowDate.getDay()
    let gunler = ["Pazar","Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"] //burada yaptığımız işlem türkçe isimli günleri gunler değişkenine array olarak atamak.

    let myClock = document.querySelector("#myClock") // html dosyamızda bulunan myClock elemenına document ile eriştik.
    myClock.innerHTML = `${hours} : ${munite} : ${second} ${gunler[days]} ` // myClock elemanının innerHTML'ine backtick kullanarak date formatı için oluşturduğumuz değişkenlerimizi yazdırdık.  
    // days değikenine atadığımız getDate() metodu günlerin sayısal değerlerini verir 
    // biz bu sayıyı alarak gunler arrayinin indisi olarak kullandığımız için o günü ekrana yazdırmış olduk.
    // NOT : getDay() 0'ıncı indisi Pazar gününden başlamaktadır.
     
}


    setInterval(dateClock,1000) // setInterval methodu kullanarak saatimizin 1sn'de bir yenilenmesini sağladık.
    //Not : 1000 = 1sn