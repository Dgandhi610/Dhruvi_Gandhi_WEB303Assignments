/*
    Assignment 05
*/

$(document).ready(function(){
    // your code here

    //Dhruvi Dipenkumar Gandhi-0781089
    class ContentItem{
        id = 0;
        name = "dhruvi";
        description = "description";
        genre = "genre";


        constructor(id, name, description, genre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.genre = genre;
        }

        get id() {
        return this.id;
        }
        set id(value) {
            this.id = value;
        }
        get name() {
        return this.name;
        }
        set name(value) {
            this.name = value;
        }
        get description() {
        return this.description;
        }
        set description(value) {
            this.description = value;
        }
        get genre() {
        return this.genre;
        }
        set genre(value) {
            this.type = this.genre;
        }

        updateContentItem(name, description, genre){
            if(name != null && description != null && genre != null){
                this.name = name;
                this.description = description;
                this.genre = genre;
            }
            document.getElementById("updateContentItem").innerHTML = "name, description, genre"; // Button
            
        }
        toString(){
            return `<div id = "#content-item-list${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.genre}</div>
                    </div>`;
        }

    }

    let attendence = [
    [0, 'Dhruvi', 'dhruvi is present', 'present'],
    [1, 'Charmy', 'Charmy is present' ,'present'],
    [2, 'Riya', 'Riya is absent','absent'],
    [3, 'Suzan', 'Suzan is present', 'present'],
    [4,'Anna','Anna is absent','absent']
    ];

    attendence.forEach(attendence => {
        let attendence1 = new ContentItem(attendence[0], attendence[1], attendence[2], attendence[3]);
        $("#content-item-list").append(attendence1.toString());
        $("#content-item-wrapper").css({"border": "solid", "padding": "10px"});
    });

});
 


