const btn = document.getElementById("btn");

            btn.addEventListener('click', run);

            // console.log(name, age)

            function checkAge() {
                const age = document.getElementById('age').value;
                const name = document.getElementById('name').value;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (age >= 18) {
                            resolve("Welcome "+ name +" You can vote")
                        }
                        else {
                            reject("Sorry "+ name +" You can not vote");
                        }
                    }, 4000);

                })


            }

           function run(){
                 checkAge().then((res) => {
                alert(res);
            })
                .catch((err) => {
                    alert(err);
                });
            }
