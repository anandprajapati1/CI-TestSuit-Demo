import {Person} from './js/Person';
import { Subscriber, newsLetter } from "./js/PubSub";
import { RevealingModule } from "./js/revealingModule";

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

    newspaper.subscribe(Ram);
    newspaper.subscribe(Lucky);


    newspaper.pushNewsNotification("Pakistan all out at 0!!");
    newspaper.pushNewsNotification("India won!!");

    //>> Revealing module example
    var _revealingObject = new RevealingModule();
    // _revealingObject.setName('Anand');
    // console.log(_revealingObject.getName());

    return tom.fullName;
};

global.app();