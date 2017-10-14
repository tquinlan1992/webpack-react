import * as moment from 'moment';

function greet(): string {
    var day = moment().format('dddd');
    return 'Have the best ' + day + '!';
}

export default greet;
