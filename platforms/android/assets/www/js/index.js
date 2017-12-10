/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var random = 0
var randomOrder = []
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        document.getElementById("tamany").addEventListener("click", modTamany, false)
        document.getElementById("color").addEventListener("click", modColor, false)

        document.getElementById("changeText").addEventListener("click", changeText, false)
        document.getElementById("changeClass").addEventListener("click", changeClass, false)
        document.getElementById("crearRemove").addEventListener("click", addAfter, false)
        //document.getElementById("aumentarSegons").addEventListener("click", efectSeconds, false)
        $("#aumentarSegons").click(function(){
            $("#aumentarSegons").animate({ height: '+=10px'},2000);
        });

        document.getElementById("start").addEventListener("click", startGame, false)
        /*document.getElementById("1").addEventListener("click", check(1), false)
        document.getElementById("2").addEventListener("click", check(2), false)
        document.getElementById("3").addEventListener("click", check(3), false)*/

        $("#1").click(check(1));
        $("#2").click(check(2));
        $("#3").click(check(3));
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        /* var parentElement = document.getElementById(id);
         var listeningElement = parentElement.querySelector('.listening');
         var receivedElement = parentElement.querySelector('.received');

         listeningElement.setAttribute('style', 'display:none;');
         receivedElement.setAttribute('style', 'display:block;');

         console.log('Received Event: ' + id);*/
    }
};

function modTamany() {
    $("#divModificat").height($("#alto").val() + "px")
    $("#divModificat").width($("#ancho").val() + "px")
}

function modColor() {
    $("#divModificat").css("background-color", $("#colorselector").val())
}

function changeText() {
    if ($("#changeText").text() == "Change text") {
        $("#changeText").text("NOU TEXT")
    } else {
        $("#changeText").text("Change text")
    }
}

function changeClass() {

    console.log($("#changeClass").attr("class"))

    if($("#changeClass").attr("class") == "btn btn-alert"){
        $("#changeClass").attr("class","btn btn-warning")
    }else{
        $("#changeClass").attr("class","btn btn-alert")
    }
}

function addAfter() {
    var buttonDelete = "<div class='btn btn-danger remove' onclick='remove()'>remove me</div>"

    $("#crearRemove").after(buttonDelete)
}
function remove() {
   $(".remove").remove()
}

function startGame() {
    $("img").fadeOut(0);

    random = Math.floor((Math.random() * 3) + 1);

    if(random == 1){
        $("#1").children().fadeIn('fast').delay(500).fadeOut('fast');
    }
    if(random == 2){
        $("#2").children().fadeIn('fast').delay(500).fadeOut('fast');
    }
    if(random == 3){
        $("#3").children().fadeIn('fast').delay(500).fadeOut('fast');
    }

    $("img").fadeIn(2000);
    $("#start").fadeOut();

}

function check(who){
    if(random == who){
        if(randomOrder[0] == null){
            randomOrder[0] = random
        }else{
            randomOrder[randomOrder.length] = random
        }

        $("img").fadeOut();
        document.getElementById(who).fadeIn


    }else {
        $("#start").fadeIn();
    }
}


app.initialize();