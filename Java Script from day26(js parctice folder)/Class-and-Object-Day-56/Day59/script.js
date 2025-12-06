function call(weakUp){
    console.log("just call");
    weakUp(function (getReady) {
        console.log("getting ready");
        getReady(function (finshSchoolTime) {
            console.log("finsh School Time");
            finshSchoolTime(function () {
                console.log("sleep");
                
            })
        })
    })
}
call(function(freshUp){
    console.log("freshup");
    freshUp(function (run) {
        console.log("run");
        run(function (backHome) {
            console.log("back home ");
            backHome()
        })
    })
})