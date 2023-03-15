serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readLine())
})
ESP8266_IoT.initWIFI(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
basic.forever(function () {
    ESP8266_IoT.connectWifi("Vodafone23_2.4G", "clave")
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "B538YZN6TAKIV3Q6",
    input.temperature()
    )
    ESP8266_IoT.uploadData()
})
