function productDatabase() {
    console.log('this.$store.state.itemList',this.$store.state.itemList)
    const itemListStr = JSON.stringify(this.$store.state.itemList);
    axios.post("https://x-home.pcpogo.com/homex/create.php?RDEBUG=andrewc",itemListStr)
     .then(res => {
           console.log(res)
         })
     .catch(error => {
       console.log('err',error);
     });
}

export { //很關鍵
    productDatabase
}