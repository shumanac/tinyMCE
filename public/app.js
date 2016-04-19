var tempGroups = ['Group1', 'Group2', 'Group3', 'Group4'];

var temp = [{
    group: 'Group1',
    title: 'Title1',
    content: '<p>Content1</p>',

 }, {
    group: 'Group1',
    title: 'Title1-1',
    content: '<p>Content11</p>',

 }, {
    group: 'Group2',
    title: 'Title2',
    content: '<p>Content2</p>'

 }, {
    group: 'Group2',
    title: 'Title2-1',
    content: '<p>Content22</p>'
 }, {
    group: 'Group3',
    title: 'Title3-1',
    content: '<p>Content33</p>'
 }, {
    group: 'Group4',
    title: 'Title4',
    content: '<p>Content4</p>'
 }, {
    group: 'Group4',
    title: 'Title4-1',
    content: '<p>Content44</p>'
 }];

var tempGroupName;
var menuItems = [];

function createTempMenu(editor) {
    for (i = 0; i < tempGroups.length; i++) {
        var tempArray = [];
        tempArray[i] = [];
        tempGroupName = tempGroups[i];
        for (j = 0; j < temp.length; j++) {
            if (temp[j].group == tempGroupName) {

                tempArray[i].push({

                    text: temp[j].title,
                    content: temp[j].content,
                    //  type: 'checkbox',

                    onclick: function () {
                        alert(this.settings.content);
                    }
                });

            }
        }
        menuItems[i] = {

            text: tempGroupName,
            menu: tempArray[i],


        };
    }
    return menuItems;
}


/*tinymce.init({
    selector: "textarea",
    toolbar1: "UseTemplates ",
    setup: function (editor) {
        editor.addButton('UseTemplates', {
            type: 'menubutton',
            text: 'Customers',
            icon: false,
            menu: createTempMenu(editor),
            body: [

//or perhaps do a for loop to check each of these are checked and if they are retrieve a value?
                {
                    type: 'checkbox'

                        }
                            ]









        });
    }
});*/
//tinyInit();






tinymce.init({
    selector: "textarea",
    setup: function (editor) {
        editor.addButton('button', {
            type: 'menubutton',
            text: 'button',
            icon: false,
            plugins: "advlist lists visualblocks",

            menu: [
                {
                    text: 'Customer List',
                    onclick: function () {

                        editor.windowManager.open({
                            title: 'Customer Name',
                            width: 200,
                            height: 100,

                            items: [
                                {
                                    type: 'listbox',
                                    value: 0,
                                    label: 'Section: ',
                                    values: createTempMenu(editor),
                                    body: [
                                        {
                                            type: 'checkbox',
                                            label: 'Section: ',
                                            // text: "new",
                                            values: createTempMenu(editor),


                                                        }],

                                    onsubmit: function (e) {
                                        editor.insertContent('Letter: ' + e.data.letter);
                                        editor.insertContent('Custom: ' + e.data.custom);
                                    }
                                                }]
                        });
                    }
                            }]

        });
    },
    toolbar: " button "
});


//tinyInit();



/*
tinymce.init({
    selector: "textarea",
    setup: function (editor) {
        editor.addButton('button', {

            text: 'Customers',
            onclick: function () {
                editor.windowManager.open({

                    title: 'title',
                    body: {
                        type: 'checkbox',
                        items: [
                            {
                                type: 'listbox',
                                name: 'categorybox',
                                text: 'pick one',
                                value: 0,
                                label: 'Section: ',
                                values: createTempMenu(editor)

          }]

                    }

                })
            }
        })

        toolbar: " button ";
    }
});


tinyInit();*/




/*var myAppModule = angular.module('myApp', ['ui.tinymce']);

myAppModule.controller('TinyMceController', function ($scope) {
    $scope.tinymceModel = '';
    $scope.customerList = [];
    $scope.getContent = function () {
        console.log('Editor content:', $scope.tinymceModel);
    };

    $scope.setContent = function () {
        // $scope.tinymceModel = 'Time: ' + (new Date());
        console.log($scope.customerList)
    };


    $scope.tinymceOptions = {

        formats: {
            customDrpdwn: {
                inline: 'span',
                styles: {
                    'color': 'gray',
                    'text-decoration': 'underline'
                },
                attributes: {
                    class: 'note'
                }
            }
        },

        toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code | customDrpdwn",
        setup: function (editor) {

            editor.addButton('customDrpdwn', {
                
   
                text: 'Customers List',
                type: 'menubutton',
                icon: false,
                menu: [{
                        text: "Select Customer",
                        onclick: function () {
                            editor.windowManager.open({
                                title: 'Customers',
                                width: 270,
                                height: 70,
                                body: [
                                    {
                                        type: 'checkbox',
                                        text: "Customer 1",
                                        value: 'Customer 1',
                                        onclick: function (value) {
                                            $scope.customerList.push('Customer 1');
                                            editor.insertContent('Customer 1');
                                        },

                                        onselect: function (e) {
                                            alert(e)

                                            editor.insertContent('Customer 1');
                                        }
                          },
                                    {
                                        type: 'checkbox',
                                        text: "Customer 2",
                                        onclick: function () {
                                            $scope.customerList.push('Customer 2');
                                            editor.insertContent('Customer 2');
                                        },
                                        onselect: function (e) {

                                        }
                          }
                        ]
                            });
                        }
                    },
                ]

            });
        },
    };
});*/