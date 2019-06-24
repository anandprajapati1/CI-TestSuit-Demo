import {Person} from './js/Person';
import { Subscriber, newsLetter } from "./js/PubSub";

global.app = function () {
    //>> Usage of module pattern
    const tom = new Person('Tom', 'Roper');
    console.log(tom.fullName);

    const newspaper = new newsLetter();
    // console.log(newspaper.timestamp);
    // const newspaper1 = new newsLetter();
    // console.log(newspaper1.timestamp);
    
    //>> Usage of pubsub design pattern
    const Ram = new Subscriber("Ramkumar");
    const Lucky = new Subscriber("Lakshman");

    newspaper.subscribe(Ram, Ram.subsNotification);
    newspaper.subscribe(Lucky, Lucky.subsNotification);


    // newspaper.pushNewsNotification("Pakistan all out at 0!!");
    // newspaper.pushNewsNotification("India won!!");

    return tom.fullName;
};

global.app();