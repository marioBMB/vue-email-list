
const app = new Vue ({


    el: "#app",
    data: {

        email_list: [],
    },
    methods: {

        generateRandomMailAddress: function(){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                console.log(response.data.response);
                this.email_list.push(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        generateMailsAddress: function(itemsNumber){

            for (let i = 0; i < itemsNumber; i++ ){

                this.generateRandomMailAddress();
            };
        },
    },
    created: function(){
        
        this.generateMailsAddress(10);
    },



});