const app = new Vue({

    el: '#root',

    data: {
        emailList: [],
        email: '',
    },

    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })


        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })


        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })


        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })


        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.email = (response.data.response)
                this.emailList.push(this.email)
            })




    },





})