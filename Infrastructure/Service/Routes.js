

class Routes{
    constructor(userType,nextPage){
        this.nextpage=nextPage
        this.userType=userType

    }
    goToNextPage(){
        window.location.href="endpoint"
    }
}