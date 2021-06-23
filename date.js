// providing access for other files to use our functions
    // don't make it getDate() with parentheses—this will call the method
// module.exports(getDate) - single method

exports.getDate = getDate;

function getDate() {

    const today = new Date();

    const options = {
        year: "numeric",
        month: "numeric"
    };

    const day = today.toLocaleDateString("en-US", options);
    return day;
}

// function expression

var ohYeah = function(){
    return "ohYeah"
}

// even shorter!

module.exports.moreYeah = function (){
    return "moreYeah";
}

module.exports.sup = sup;

function sup(){
    return "sup";
}