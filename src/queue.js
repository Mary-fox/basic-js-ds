const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  } 

  enqueue(value) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = new ListNode(value);
    if (this.head) {
      this.tail.next = node;
      this.tail = node; 
    } else {
      this.head = node;
      this.tail = node; 
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const toRemove = this.head;
    this.head = this.head.next;
    return toRemove.value;
  }
}

module.exports = {
  Queue
};



/* Каждый экземпляр очереди должен иметь 3 метода: * enqueue(value)— помещает valueв конец очереди * deque— извлекает значение из головы очереди и удаляет его * getUnderlyingList— возвращает базовый связанный список */