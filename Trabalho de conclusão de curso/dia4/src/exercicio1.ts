export class LinkedListNode {
    constructor(public value: number){}
    private next: LinkedListNode | null = null
    getNext(){
        return this.next
    }
    setNext(input: LinkedListNode){
        this.next = input
    }
}

export class LinkedList {
    constructor(public start?: LinkedListNode) {}
  
    public appendToTail(value: number) {
      if (!this.start) {
        this.start = new LinkedListNode(value);
      } else {
        let node: LinkedListNode = this.start;
        while (node && node.getNext() !== undefined) {
          node = node.getNext()!;
        }
        node.setNext(new LinkedListNode(value));
      }
    }
  
    public print(): void {
      let node: LinkedListNode | undefined = this.start;
      let i = 1;
      while (node !== undefined) {
        console.log(`Elemento ${i}: `, node!.getNext());
        node = node!.getNext();
        i++;
      }
    }
  }