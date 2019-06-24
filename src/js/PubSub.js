/**
 * Pub-Sub pattern (Also revealing module pattern)
 */
let instanse = null;
class newsLetter {
    constructor(){
        //>> Singleton check
        if(!instanse){
            this.subscriberCounter = 1;
            this.news = "Lorem ipsum";
            this.subscribers = {
                _ids: [],
                _actions: []
            };
            this.timestamp = Date.now();
            instanse = {
                pushNewsNotification: this.onLatestNewsArrived,
                unsubscribe: this.unsubscribe,
                subscribe: this.addSubscriber,
                timestamp: this.timestamp,
                subscribers: this.subscribers
            };
        }

        return instanse;
    }

    addSubscriber(user, onPublishAction) {
        Object.defineProperty(user, "id", {
            value: this.subscriberCountererCounter++,
            writable: false,
            configurable: false
        });
        this.subscribers._ids.push(user.id);
        this.subscribers._actions.push(onPublishAction);
    }

    unsubscribe(user) {
        let index = this.subscribers._ids.indexOf(user.id);
        this.subscribers._ids.splice(index, 1);
        this.subscribers._actions.splice(index, 1);

        console.log(`${user.name} has been unsubscribed successfully.`);
    }

    notify() {
        // let self = this;
        this.subscribers._actions.forEach((action) => {
            action(this.news);
        });
    }

    onLatestNewsArrived(newsItem) {
        this.news = newsItem;
        this.notify();
    }
}

// Subscribers class
class Subscriber {
    constructor(name){
        this.name = name;
        this.id = 0;
    }
    
    subsNotification(news) {
        console.log(`${name} recieved latest news: ${news}`);
    }
}

export {Subscriber, newsLetter};