class LRU_Cache_Class {
  constructor(size = 4) {
    this.capacity = size;
    this.cache = new Map();
  }

  entries() {
    return this.cache;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    if (this.capacity === this.cache.size) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.set(key,value)
      return value;
    } else {
      return -1;
    }
  }

  clear(){
    this.cache = new Map();
  }
}

export default LRU_Cache_Class;
