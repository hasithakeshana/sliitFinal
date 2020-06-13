const axios = require('axios').default;
export const Login = async (user) => {

    try {

      const {email,password} = user;
      const correctData = {email,password}
    //  console.log('api',correctData);

     // console.log(correctData);
        const response = await axios.request({
            method: 'POST',
            url: `http://localhost:4000/student/login`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(correctData),

        });

//console.log(response);
        const resData = await response;
        return resData;


    } catch (e) {
        console.log(e);
    }


}


export const RegisterUser = async (user) => {

    try {

      const {email,password} = user;
      const correctData = {email,password}
    //  console.log('api',correctData);

     // console.log(correctData);
        const response = await axios.request({
            method: 'POST',
            url: `http://localhost:4000/student/signup`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(correctData),

        });

//console.log(response);
        const resData = await response;
        return resData;


    } catch (e) {
        console.log(e);
    }


}