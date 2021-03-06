import { LinkedList } from './exercicio1'

export class Queue {
    public nodes: LinkedList = new LinkedList()
    isEmpty(): boolean {
        return this.nodes.start === undefined;
    }

    enqueue(value: number): void {
        this.nodes.appendToTail(value);
    }

    dequeue(): any {
        if (this.nodes.start) {
            const nodeToDequeue = this.nodes.start;
            this.nodes.start = this.nodes.start.getNext();
            return nodeToDequeue
        }
    }

    print(): void {
        this.nodes.print();
    }
}