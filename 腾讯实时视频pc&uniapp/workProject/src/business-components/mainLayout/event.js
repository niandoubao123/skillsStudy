export const life = {
  async mounted() {
    await this.methods('checkIphoneX');
  },
  onPageScroll(e){
    console.log(e);
  }
};
export const event = {
  stopPropagation(e) {
    console.log('子滚动:', e);
    e.stopPropagation();
  },
  prevent(e){
    console.log('main滚动:', e);
    e.preventDefault();
  }
};
export const watch = {};
