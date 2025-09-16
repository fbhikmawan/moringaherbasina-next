class Queue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  async enqueue(task) {
    this.queue.push(task);
    if (!this.isProcessing) {
      this.isProcessing = true;
      await this.processQueue();
    }
  }

  async processQueue() {
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      await task();
    }
    this.isProcessing = false;
  }
}

export const fetchQueue = new Queue();
