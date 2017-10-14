import * as moment from 'moment';

function greet() {
    var day = moment().format('dddd');
    console.log('Have the best ' + day + '!');
}

export default greet;
