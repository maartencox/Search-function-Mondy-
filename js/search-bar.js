var FromTo = [
    {
        From: 'Amsterdam-Airport',
        Destination: ['City-centre', 'Amsterdam-Oost', 'Amsterdam-West']
    }, {
        From: 'Amsterdam-Centrum',
        Destination: ['Schiphol', 'Amsterdam-Oost', 'Amsterdam-West']
    }, {
        From: 'Amsterdam-Centraal station',
        Destination: ['Schiphol', 'Amsterdam-Oost', 'Amsterdam-West']
    }, {
        From: '',
        Destination: ['', '', '']
      }
];

var destinationDiv = document.getElementById("destination");

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "selectDestination";
selectList.setAttribute("onChange", "destination(value)");
destinationDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i <= FromTo.length; i++) {
    var option = document.createElement("option");
    if (i === 0) {
        option.value = '';
        option.text = 'Destination';
    } else {
        option.value = FromTo[i - 1].Destination;
        option.text = (FromTo[i - 1].Destination).replace(/-/g," ");
    }
    selectList.appendChild(option);
}

var fromDiv = document.getElementById("from");

var selectToList = document.createElement("select");
selectToList.id = 'selectFrom';
selectToList.setAttribute("onChange", "from(value)");
fromDiv.appendChild(selectToList);

var optionTo = document.createElement("option");
optionTo.value = '';
optionTo.text = 'From';
selectToList.appendChild(optionTo);

function destination(location) {

    //remove all options from TO
    removeOptions(document.getElementById("selectFrom"));
    document.getElementById("hiddenDestination").innerHTML = location;

    //Create and append the options
    for (var j = 0; j < FromTo.length; j++) {
        if (FromTo[j].Destination === location) {
            for (var k in FromTo[j].From) {
                var option2 = document.createElement("option");
                option2.value = FromTo[j].From[k];
                option2.text = (FromTo[j].From[k]).replace(/-/g," ");
                selectToList.appendChild(option2);
            }
        }
    }
}

function from(location) {
    document.getElementById("hiddenFrom").innerHTML = location;
}

function search() {
    var from = document.getElementById("hiddenFrom").innerHTML;
    var destination = document.getElementById("hiddenDestination").innerHTML;

    var url = '';
         url = from + '-to-' + destination;
    }

    if (from && destination) {
       window.location.href = '/2017/11/21/' + url ;
    }

}

function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i > 0 ; i--)
    {
        selectbox.remove(i);
    }
}
