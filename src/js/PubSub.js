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
            this.subscribers = [];
            // {
            //     _ids: [],
            //     _actions: []
            // };
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

    addSubscriber(user) {
        Object.defineProperty(user, "id", {
            value: this.subscriberCountererCounter++,
            writable: false,
            configurable: false
        });
        this.subscribers.push(user);
        // this.subscribers._ids.push(user.id);
        // this.subscribers._actions.push({onPublishAction, scope});
    }

    unsubscribe(user) {
        let index = 0;
        this.subscribers.filter((x, i) => {
            if(x.id == user.id){
                index = i;
                return x;
            }
        });
        this.subscribers.splice(index, 1);
        // this.subscribers._ids.splice(index, 1);
        // this.subscribers._actions.splice(index, 1);

        console.log(`${user.name} has been unsubscribed successfully.`);
    }


    onLatestNewsArrived(newsItem) {
        this.news = newsItem;
        this.subscribers.forEach((user) => {
            user.subsNotification(this.news);
        });
    }
}

// Subscribers class
class Subscriber {
    constructor(name){
        this.name = name;
        this.id = 0;
    }
    
    subsNotification(news) {
        console.log(`${this.name} recieved latest news: ${news}`);
    }
}

export {Subscriber, newsLetter};