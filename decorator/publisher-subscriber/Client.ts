import { Proxy } from "./Proxy";
import { Publish } from "./Publish";
import { Subscriber } from "./Subscribe";


const p = new Proxy()
const pub = new Publish(p)
const sub1 = new Subscriber(p, 1)
const sub2 = new Subscriber(p, 2)
const sub3 = new Subscriber(p, 3)

sub1.subscribe('action')
sub2.subscribe('love')
sub3.subscribe('action')

console.log(p.map)

sub2.unsubscribe('love')
pub.publish('love', 'LOVELOVELOVE')
pub.publish('action', 'ACTIONACTION')
