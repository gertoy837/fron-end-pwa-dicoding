class SuperString extends String {
  hashCode() {
    let hash = 0;

    for (let i = 0; i < this.length; i++) {
      const char = this.charCodeAt(i);
      hash = (hash << 5) - hash + char;

      // Convert to 32-bit integer
      hash |= 0;
    }
    return hash;
  }
}
